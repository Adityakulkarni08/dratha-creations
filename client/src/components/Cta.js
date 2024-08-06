import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
        title: "New Born",
        color: "text-pink-600",
        items: [
            {
                heading: "Photography",
                subitems: ["Traditional Photography", "Candid Photography"],
            },
            {
                heading: "Food",
                subitems: [],
            },
        ],
    },
    {
        title: "Baby Shower",
        color: "text-pink-600",
        items: [
            {
                heading: "Decorations",
                subitems: ["Decorations", "Garlands"],
            },
            {
                heading: "Photography",
                subitems: ["Traditional Photography", "Candid Photography"],
            },
            {
                heading: "Makeup",
                subitems: ["Traditional Makeup", "HD Makeup"],
            },
            {
                heading: "Mehndi",
                subitems: ["Traditional Designs", "Rajasthani Designs", "Other Designs"],
            },
            {
                heading: "Entertainment",
                subitems: [],
            },
            {
                heading: "Return Gifts",
                subitems: ["Traditional Gifts", "Fancy Gifts"],
            },
            {
                heading: "Food",
                subitems: [],
            },
        ],
    },
    {
        title: "Birthday",
        color: "text-pink-600",
        items: [
            {
                heading: "Decorations",
                subitems: ["Balloon Decorations", "Theme Decoration"],
            },
            {
                heading: "Photography",
                subitems: ["Traditional Photography", "Candid Photography"],
            },
            {
                heading: "Cakes",
                subitems: ["Theme Birthday Cakes", "Assorted Birthday Cakes"],
            },
            {
                heading: "Entertainment",
                subitems: ["Indoor", "Outdoor", "Baby Entry"],
            },
            {
                heading: "Return Gifts",
                subitems: ["Traditional Gifts", "Fancy Gifts"],
            },
            {
                heading: "Food",
                subitems: ["Vegetarian", "Non-Vegetarian"],
            },
        ],
    },
    {
        title: "House Warming",
        color: "text-pink-600",
        items: [
            {
                heading: "Decorations",
                subitems: ["Decorations", "Garlands"],
            },
            {
                heading: "Photography",
                subitems: ["Traditional Photography", "Candid Photography"],
            },
            {
                heading: "Entertainment",
                subitems: [],
            },
            {
                heading: "Return Gifts",
                subitems: ["Traditional Gifts", "Fancy Gifts"],
            },
            {
                heading: "Food",
                subitems: ["Vegetarian", "Non-Vegetarian"],
            },
        ],
    },
    {
        title: "Engagement",
        color: "text-pink-600",
        items: [
            {
                heading: "Decorations",
                subitems: ["Decorations", "Garlands"],
            },
            {
                heading: "Photography",
                subitems: ["Traditional Photography", "Candid Photography"],
            },
            {
                heading: "Makeup",
                subitems: ["Traditional Makeup", "HD Makeup"],
            },
            {
                heading: "Entertainment",
                subitems: ["Indoor", "Outdoor"],
            },
            {
                heading: "Return Gifts",
                subitems: ["Traditional Gifts", "Fancy Gifts"],
            },
            {
                heading: "Food",
                subitems: [],
            },
        ],
    },
    {
        title: "Wedding",
        color: "text-pink-600",
        items: [
            {
                heading: "Decorations",
                subitems: ["Decorations", "Garlands"],
            },
            {
                heading: "Photography",
                subitems: ["Traditional Photography", "Candid Photography"],
            },
            {
                heading: "Cakes",
                subitems: ["Wedding Cakes"],
            },
            {
                heading: "Makeup",
                subitems: ["Traditional Makeup", "HD Makeup"],
            },
            {
                heading: "Mehndi",
                subitems: ["Bridal Mehndi", "Traditional Designs", "Rajasthani Designs"],
            },
            {
                heading: "Entertainment",
                subitems: ["Indoor", "Outdoor"],
            },
            {
                heading: "Return Gifts",
                subitems: ["Traditional Gifts", "Fancy Gifts"],
            },
            {
                heading: "Food",
                subitems: [],
            },
        ],
    },
    {
        title: "Puberty",
        color: "text-pink-600",
        items: [
            {
                heading: "Decorations",
                subitems: ["Decorations", "Garlands"],
            },
            {
                heading: "Photography",
                subitems: ["Traditional Photography", "Candid Photography"],
            },
            {
                heading: "Makeup",
                subitems: ["Traditional Makeup", "HD Makeup"],
            },
            {
                heading: "Mehndi",
                subitems: ["Traditional Designs", "Rajasthani Designs", "Other Designs"],
            },
            {
                heading: "Entertainment",
                subitems: ["Indoor", "Outdoor"],
            },
            {
                heading: "Return Gifts",
                subitems: ["Traditional Gifts", "Fancy Gifts"],
            },
            {
                heading: "Food",
                subitems: [],
            },
        ],
    },
    {
        title: "Surprise Party",
        color: "text-pink-600",
        items: [
            {
                heading: "Decorations",
                subitems: ["Balloon Decorations"],
            },
            {
                heading: "Food",
                subitems: [],
            },
        ],
    },
];

const Cta = () => {
    return (
        <div className="w-full text-black bg-white py-16">
            <div className="mx-8 w-full">
                <div className="flex items-center mb-8">
                    <p className='text-2xl md:text-4xl font-bold text-teal-500'>More From The Drata</p>
                    <div className="flex-grow border-t border-teal-500 ml-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="text-left">
                            <h3 className={`text-xl font-bold mb-2 ${category.color}`}>{category.title}</h3>
                            {category.items.map((item, idx) => (
                                <div key={idx} className="mb-4">
                                    <h4 className="font-bold">{item.heading}</h4>
                                    <ul className="pl-4 list-disc">
                                        {item.subitems.map((subitem, subIdx) => (
                                            <li key={subIdx} className="ml-2">
                                                <Link to={`/${subitem.replace(/\s+/g, '-').toLowerCase()}`} className="text-black hover:underline">
                                                    {subitem}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cta;
