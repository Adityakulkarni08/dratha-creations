import React from "react";
import "../styles/dropdown.css";
import newbornImage from "../images/birthday.jpg";
import babyImage from "../images/babyshower.png";
import babyShower from "../images/bayshower.png"
import happyBirthday from "../images/happybirthday.png"
import houseWarming from "../images/housewarming.png"
import engagement from "../images/engagement.png"
import wedding from "../images/wedding.png"
import puberty from "../images/puberty.png"
import surpriseParty from "../images/surpriseparty.png"

const DropdownComponent = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">
          <img src={newbornImage} alt="New Born" />
          <span>New Born</span>
        </button>
        <div className="dropdown-content">
          <div className="dropdown-item">
            <button className="sub-dropbtn">Photography</button>
            <div className="sub-dropdown-content">
              <a href="#">New Born Photo Shoot</a>
              <div className="image-box">
                <img
                  src={babyImage}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Digital Photography</a>
              <div className="image-box">
                <img
                  src={babyImage}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album</a>
              <div className="image-box">
                <img
                  src={babyImage}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album + Video</a>
              <div className="image-box">
                <img
                  src={babyImage}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
          <div className="dropdown-item">
            <button className="sub-dropbtn">Food</button>
            <div className="sub-dropdown-content">
              <a href="#">Catering Options</a>
              <div className="image-box">
                <img
                  src={babyImage}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Custom Menu Designs</a>
              <div className="image-box">
                <img
                  src={babyImage}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Buffet Setups</a>
              <div className="image-box">
                <img
                  src={babyImage}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Full-Service Dining</a>
              <div className="image-box">
                <img
                  src={babyImage}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={newbornImage} alt="New Born" />
          <span>Baby Shower</span>
        </button>
        <div className="dropdown-content">
          <div className="dropdown-item">
            <button className="sub-dropbtn">Photography</button>
            <div className="sub-dropdown-content">
              <a href="#">New Born Photo Shoot</a>
              <div className="image-box">
                <img
                  src={babyShower}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Digital Photography</a>
              <div className="image-box">
                <img
                  src={babyShower}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album</a>
              <div className="image-box">
                <img
                  src={babyShower}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album + Video</a>
              <div className="image-box">
                <img
                  src={babyShower}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
          <div className="dropdown-item">
            <button className="sub-dropbtn">Food</button>
            <div className="sub-dropdown-content">
              <a href="#">Catering Options</a>
              <div className="image-box">
                <img
                  src={babyShower}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Custom Menu Designs</a>
              <div className="image-box">
                <img
                  src={babyShower}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Buffet Setups</a>
              <div className="image-box">
                <img
                  src={babyShower}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Full-Service Dining</a>
              <div className="image-box">
                <img
                  src={babyShower}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={newbornImage} alt="New Born" />
          <span>Birthday</span>
        </button>
        <div className="dropdown-content">
          <div className="dropdown-item">
            <button className="sub-dropbtn">Photography</button>
            <div className="sub-dropdown-content">
              <a href="#">New Born Photo Shoot</a>
              <div className="image-box">
                <img
                  src={happyBirthday}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Digital Photography</a>
              <div className="image-box">
                <img
                  src={happyBirthday}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album</a>
              <div className="image-box">
                <img
                  src={happyBirthday}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album + Video</a>
              <div className="image-box">
                <img
                  src={happyBirthday}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
          <div className="dropdown-item">
            <button className="sub-dropbtn">Food</button>
            <div className="sub-dropdown-content">
              <a href="#">Catering Options</a>
              <div className="image-box">
                <img
                  src={happyBirthday}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Custom Menu Designs</a>
              <div className="image-box">
                <img
                  src={happyBirthday}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Buffet Setups</a>
              <div className="image-box">
                <img
                  src={happyBirthday}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Full-Service Dining</a>
              <div className="image-box">
                <img
                  src={happyBirthday}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={newbornImage} alt="New Born" />
          <span>House Warming</span>
        </button>
        <div className="dropdown-content">
          <div className="dropdown-item">
            <button className="sub-dropbtn">Photography</button>
            <div className="sub-dropdown-content">
              <a href="#">New Born Photo Shoot</a>
              <div className="image-box">
                <img
                  src={houseWarming}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Digital Photography</a>
              <div className="image-box">
                <img
                  src={houseWarming}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album</a>
              <div className="image-box">
                <img
                  src={houseWarming}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album + Video</a>
              <div className="image-box">
                <img
                  src={houseWarming}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
          <div className="dropdown-item">
            <button className="sub-dropbtn">Food</button>
            <div className="sub-dropdown-content">
              <a href="#">Catering Options</a>
              <div className="image-box">
                <img
                  src={houseWarming}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Custom Menu Designs</a>
              <div className="image-box">
                <img
                  src={houseWarming}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Buffet Setups</a>
              <div className="image-box">
                <img
                  src={houseWarming}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Full-Service Dining</a>
              <div className="image-box">
                <img
                  src={houseWarming}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={newbornImage} alt="New Born" />
          <span>Engagement</span>
        </button>
        <div className="dropdown-content">
          <div className="dropdown-item">
            <button className="sub-dropbtn">Photography</button>
            <div className="sub-dropdown-content">
              <a href="#">New Born Photo Shoot</a>
              <div className="image-box">
                <img
                  src={engagement}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Digital Photography</a>
              <div className="image-box">
                <img
                  src={engagement}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album</a>
              <div className="image-box">
                <img
                  src={engagement}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album + Video</a>
              <div className="image-box">
                <img
                  src={engagement}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
          <div className="dropdown-item">
            <button className="sub-dropbtn">Food</button>
            <div className="sub-dropdown-content">
              <a href="#">Catering Options</a>
              <div className="image-box">
                <img
                  src={engagement}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Custom Menu Designs</a>
              <div className="image-box">
                <img
                  src={engagement}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Buffet Setups</a>
              <div className="image-box">
                <img
                  src={engagement}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Full-Service Dining</a>
              <div className="image-box">
                <img
                  src={engagement}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={newbornImage} alt="New Born" />
          <span>Wedding</span>
        </button>
        <div className="dropdown-content">
          <div className="dropdown-item">
            <button className="sub-dropbtn">Photography</button>
            <div className="sub-dropdown-content">
              <a href="#">New Born Photo Shoot</a>
              <div className="image-box">
                <img
                  src={wedding}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Digital Photography</a>
              <div className="image-box">
                <img
                  src={wedding}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album</a>
              <div className="image-box">
                <img
                  src={wedding}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album + Video</a>
              <div className="image-box">
                <img
                  src={wedding}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
          <div className="dropdown-item">
            <button className="sub-dropbtn">Food</button>
            <div className="sub-dropdown-content">
              <a href="#">Catering Options</a>
              <div className="image-box">
                <img
                  src={wedding}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Custom Menu Designs</a>
              <div className="image-box">
                <img
                  src={wedding}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Buffet Setups</a>
              <div className="image-box">
                <img
                  src={wedding}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Full-Service Dining</a>
              <div className="image-box">
                <img
                  src={wedding}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={newbornImage} alt="New Born" />
          <span>Puberty</span>
        </button>
        <div className="dropdown-content">
          <div className="dropdown-item">
            <button className="sub-dropbtn">Photography</button>
            <div className="sub-dropdown-content">
              <a href="#">New Born Photo Shoot</a>
              <div className="image-box">
                <img
                  src={puberty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Digital Photography</a>
              <div className="image-box">
                <img
                  src={puberty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album</a>
              <div className="image-box">
                <img
                  src={puberty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album + Video</a>
              <div className="image-box">
                <img
                  src={puberty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
          <div className="dropdown-item">
            <button className="sub-dropbtn">Food</button>
            <div className="sub-dropdown-content">
              <a href="#">Catering Options</a>
              <div className="image-box">
                <img
                  src={puberty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Custom Menu Designs</a>
              <div className="image-box">
                <img
                  src={puberty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Buffet Setups</a>
              <div className="image-box">
                <img
                  src={puberty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Full-Service Dining</a>
              <div className="image-box">
                <img
                  src={puberty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={newbornImage} alt="New Born" />
          <span>Surprise Party</span>
        </button>
        <div className="dropdown-content">
          <div className="dropdown-item">
            <button className="sub-dropbtn">Photography</button>
            <div className="sub-dropdown-content">
              <a href="#">New Born Photo Shoot</a>
              <div className="image-box">
                <img
                  src={surpriseParty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Digital Photography</a>
              <div className="image-box">
                <img
                  src={surpriseParty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album</a>
              <div className="image-box">
                <img
                  src={surpriseParty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Photo + Album + Video</a>
              <div className="image-box">
                <img
                  src={surpriseParty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
          <div className="dropdown-item">
            <button className="sub-dropbtn">Food</button>
            <div className="sub-dropdown-content">
              <a href="#">Catering Options</a>
              <div className="image-box">
                <img
                  src={surpriseParty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Custom Menu Designs</a>
              <div className="image-box">
                <img
                  src={surpriseParty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Buffet Setups</a>
              <div className="image-box">
                <img
                  src={surpriseParty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
              <a href="#">Full-Service Dining</a>
              <div className="image-box">
                <img
                  src={surpriseParty}
                  alt="New Born Photo Shoot"
                  className="small-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown right-end">
        <button className="dropbtn">
          <img src={newbornImage} alt="Packages" />
          <span>Packages</span>
        </button>
        
      </div>
    </div>  
  );
};
export default DropdownComponent;
