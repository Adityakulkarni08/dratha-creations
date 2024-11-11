terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"  # You can specify the version as needed
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"  # You can specify the version as needed
    }
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.0"  # You can specify the version as needed
    }
  }
}

# AWS provider configuration
provider "aws" {
  region = "us-east-1" # Change to your preferred AWS region
}

# Reference your existing EC2 instance by its instance ID
data "aws_instance" "existing_instance" {
  instance_id = "i-0754bdbc6b845d069" # Provide your existing EC2 instance ID
}

# Use a null_resource to run provisioning steps on the existing EC2 instance
resource "null_resource" "provision_instance" {
  depends_on = [data.aws_instance.existing_instance]

  connection {
    type        = "ssh"
    user        = "ec2-user"
    private_key = file("/home/ec2-user/ec2.pem") # Provide your private key file path
    host        = data.aws_instance.existing_instance.public_ip # Use the public IP of the EC2 instance
  }

  provisioner "remote-exec" {
    inline = [
      # Install Docker and Docker Compose
      "sudo yum install -y docker",
      "sudo systemctl start docker",
      "sudo systemctl enable docker",

      # Install Git (for cloning the repo)
      "sudo yum install -y git",

      # Install Node.js (and npm)
      "curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -",  # Set up NodeSource repo for Node.js 16.x
      "sudo yum install -y nodejs",  # Install Node.js and npm (npm is installed automatically with Node.js)

      # Clone the Git repository (replace with your Git URL)
      "git clone https://github.com/Adityakulkarni08/dratha-creations.git /home/ec2-user/dratha-creations",

      # Navigate to the application directory and run Docker Compose
      "cd /home/ec2-user/dratha-creations && sudo docker-compose up --build -d"
    ]
  }
}

# Create EKS Cluster
resource "aws_eks_cluster" "eks_cluster" {
  name     = "my-eks-cluster"
  role_arn = aws_iam_role.eks_role.arn

  vpc_config {
    subnet_ids = aws_subnet.eks_subnet[*].id
  }
}

# Create IAM Role for EKS
resource "aws_iam_role" "eks_role" {
  name = "eks-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action    = "sts:AssumeRole"
      Effect    = "Allow"
      Principal = {
        Service = "eks.amazonaws.com"
      }
    }]
  })
}

# Create subnets for EKS
resource "aws_subnet" "eks_subnet" {
  count = 2
  vpc_id     = aws_vpc.eks_vpc.id
  cidr_block = "10.0.${count.index}.0/24"
  availability_zone = "us-east-1a"  # Change to a different AZ if needed
  map_public_ip_on_launch = true
  tags = {
    Name = "eks-subnet-${count.index}"
  }
}

# Create a VPC for EKS
resource "aws_vpc" "eks_vpc" {
  cidr_block = "10.0.0.0/16"
  enable_dns_support = true
  enable_dns_hostnames = true
  tags = {
    Name = "eks-vpc"
  }
}

# Kubernetes provider configuration
provider "kubernetes" {
  host                   = aws_eks_cluster.eks_cluster.endpoint
  cluster_ca_certificate = base64decode(aws_eks_cluster.eks_cluster.certificate_authority[0].data)
  token                  = data.aws_eks_cluster_auth.eks_cluster_auth.token
}

# EKS Cluster Authentication
data "aws_eks_cluster_auth" "eks_cluster_auth" {
  name = aws_eks_cluster.eks_cluster.name
}

# Deploy an Application to Kubernetes (e.g., simple Dockerized App)
resource "kubernetes_deployment" "my_app_deployment" {
  metadata {
    name = "dratha-creations"
    labels = {
      app = "dratha-creations"
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "dratha-creations"
      }
    }

    template {
      metadata {
        labels = {
          app = "dratha-creations"
        }
      }

      spec {
        container {
          name  = "dratha-creations"
          image = "your-docker-image:latest"  # Replace with your Docker image
          port {
            container_port = 8087
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "my_app_service" {
  metadata {
    name = "my-app-service"
  }

  spec {
    selector = {
      app = "dratha-creations"
    }

    port {
      port        = 80
      target_port = 8087   # Ensure the service points to the correct container port
    }

    type = "LoadBalancer"  # Expose the service externally with a LoadBalancer
  }
}

# Helm Provider (for Jenkins installation)
provider "helm" {
  kubernetes {
    host                   = aws_eks_cluster.eks_cluster.endpoint
    cluster_ca_certificate = base64decode(aws_eks_cluster.eks_cluster.certificate_authority[0].data)
    token                  = data.aws_eks_cluster_auth.eks_cluster_auth.token
  }
}

# Install Jenkins using Helm
resource "helm_release" "jenkins" {
  name       = "jenkins"
  namespace  = "default"
  repository = "https://charts.jenkins.io"
  chart      = "jenkins"
  version    = "3.7.0"  # Use the latest stable version

  values = [
    <<-EOT
    controller:
      installPlugins:
        - "kubernetes:1.31.0"
        - "git:4.10.0"
        - "workflow-aggregator:2.6"
    EOT
  ]
}

# Output IP of the EKS Cluster
output "eks_cluster_endpoint" {
  value = aws_eks_cluster.eks_cluster.endpoint
}

output "eks_cluster_name" {
  value = aws_eks_cluster.eks_cluster.name
}

# Output EC2 instance IP
output "instance_ip" {
  value = data.aws_instance.existing_instance.public_ip # This will output the public IP of the EC2 instance
}

