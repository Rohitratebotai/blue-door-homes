import logo from "../src/assets/iIra_images/iira_stay.jpg";

// import img1 from './assets/HomePage_banner1.jpg'
// import img2 from './assets/HomePage_banner1.jpg'
// import img3 from './assets/HomePage_banner1.jpg'

// property images for shaunnie 
import shaunniebanner from './assets/shaunnie/img_6.jpeg'
import simg1 from './assets/shaunnie/img_12.jpeg';
import simg2 from './assets/shaunnie/img_15.jpeg';
import simg3 from './assets/shaunnie/img_7.jpeg';
import simg4 from './assets/shaunnie/img_3.jpeg';
import simg5 from './assets/shaunnie/img_9.jpeg';
import simg6 from './assets/shaunnie/img_14.jpeg';
import simg7 from './assets/shaunnie/img_1.jpeg';
import simg8 from './assets/shaunnie/img_11.jpeg';
import simg9 from './assets/shaunnie/img_5.jpeg';
import simg10 from './assets/shaunnie/img_16.jpeg';

// property images for Mojo
import MojoBanner from './assets/mojo/img_9.jpeg'
import Mimg1 from './assets/mojo/img_1.jpeg';
import Mimg2 from './assets/mojo/img_2.jpeg';
import Mimg3 from './assets/mojo/img_3.jpeg';
import Mimg4 from './assets/mojo/img_4.jpeg';
import Mimg5 from './assets/mojo/img_5.jpeg';
import Mimg6 from './assets/mojo/img_6.jpeg';
import Mimg7 from './assets/mojo/img_7.jpeg';
import Mimg8 from './assets/mojo/img_8.jpeg';
import Mimg9 from './assets/mojo/img_10.jpeg';

// property images of Loki 
import LokiBanner from './assets/loki/img_8.jpeg';
import Limg1 from './assets/loki/img_18.jpeg';
import Limg2 from './assets/loki/img_3.jpeg';
import Limg3 from './assets/loki/img_22.jpeg';
import Limg4 from './assets/loki/img_7.jpeg';
import Limg5 from './assets/loki/img_14.jpeg';
import Limg6 from './assets/loki/img_25.jpeg';
import Limg7 from './assets/loki/img_2.jpeg';
import Limg8 from './assets/loki/img_11.jpeg';
import Limg9 from './assets/loki/img_20.jpeg';
import Limg10 from './assets/loki/img_9.jpeg';
import Limg11 from './assets/loki/img_5.jpeg';
import Limg12 from './assets/loki/img_16.jpeg';
import Limg13 from './assets/loki/img_23.jpeg';
import Limg14 from './assets/loki/img_8.jpeg';
import Limg15 from './assets/loki/img_1.jpeg';


// All Properties Data
export const propertyData = [
    {
        id: 1,
        property_name: "Shaunnie - Blue Door Homes",
        property_description: "Step into a bright, stylish apartment where comfort meets design. The inviting living area, adorned with lush indoor plants, cozy seating, and warm lighting, opens to a private balcony with sweeping city views. The serene bedroom features a plush double bed dressed in soft linens and bathed in natural light. Vibrant rugs and earthy wooden accents bring charm and character to the modern living room, creating a space that’s both relaxing and inspiring. Ideal for couples or solo travelers, this urban retreat offers a refreshing blend of style and tranquility.",
        property_location: "Mitra Samuh Apts, Morave Road, Sector 3, Ulwe",
        property_img: [shaunniebanner, simg1, simg2, simg3, simg4, simg5, simg6, simg7, simg8, simg9, simg10],
        // property_brandId: "194",
        property_amenities: [
            {
                amenities_type: "Rooms",
                amenities_count: 4,
                amenities_icon: "bed", // Changed to string identifier instead of React element
            },
            {
                amenities_type: "Parking",
                amenities_availablity: 'Available',
                amenities_icon: "car",
            },
            {
                amenities_type: "Pools",
                amenities_availablity: 'Unavailable',
                amenities_icon: "pool",
            },
            {
                amenities_type: "Internet",
                amenities_availablity: 'available',
                amenities_icon: "wifi",
            },
            {
                amenities_type: "Washrooms",
                amenities_availablity: 'Private',
                amenities_count: 4,
                amenities_icon: "shower",
            },
            {
                amenities_type: "Air condition",
                amenities_availablity: 'available',
                amenities_icon: "ac",
            }
        ],
        property_nearplaces: [
            "Lohagad Fort",
            "Visapur Fort",
            "Karla Caves",
            "Bhaja Caves",
            "Ekvira Devi Temple",
            "Pawna Lake",
            "Lion’s Point",
            "Tiger Point",
            "Lonavala Lake",
            "Khandala Viewpoints",
            "Bhushi Dam",
            "Wax Museum Lonavala",
            "Wet’nJoy Water Park & Amusement Park"
        ],
        property_mapSrc:
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d309.32487521499!2d73.48817029248998!3d18.747525455358236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ0JzUyLjEiTiA3M8KwMjknMTYuNiJF!5e0!3m2!1sen!2sin!4v1756966472924!5m2!1sen!2sin"
    },
    {
        id: 2,
        property_name: "Mojo - Blue Door Homes",
        property_description:
            "Modern comfort with a touch of warmth — this inviting 2-bedroom stay combines stylish elegance with cozy charm. One bedroom embraces soft, calming neutrals, while the other bursts with vibrant, modern energy. Spend your mornings basking in the sunlit living room, enjoy a quiet moment in the snug reading nook, or unwind under the quilts in the boho-inspired bedrooms. A perfect blend of relaxation and style awaits.",
        property_location: "Mitra Samuh Apts, Morave Road, Sector 3, Ulwe",
        property_img: [MojoBanner, Mimg1, Mimg2, Mimg3, Mimg4, Mimg5, Mimg6, Mimg7, Mimg8, Mimg9],
        property_amenities: [
            { amenities_icon: "bed" },
            { amenities_icon: "shower" },
            { amenities_icon: "pool" },
            { amenities_icon: "car" },
            { amenities_icon: "wifi" },
            { amenities_icon: "ac" },
            { amenities_icon: "Laundry Service" },
            { amenities_icon: "card payment" },
            { amenities_icon: "breakfast" },
            { amenities_icon: "newspaper" },
            { amenities_icon: "cleaning" },
            { amenities_icon: "luggage" },
            { amenities_icon: "tv" },
            { amenities_icon: "security" },
            { amenities_icon: "lift" },
            { amenities_icon: "power backup" },
            { amenities_icon: "parking" },
            { amenities_icon: "outdoor games" },
            { amenities_icon: "indoor games" },
            { amenities_icon: "24-Hour Front Desk" },
            { amenities_icon: "Toilet Paper" },
            { amenities_icon: "Fire Exit" },
            { amenities_icon: "Fire Extinguishers" },
            { amenities_icon: "DTH Channels" },
            { amenities_icon: "Omutside Food Allowed" }
        ],
        property_nearplaces: [
            "Lohagad Fort",
            "Visapur Fort",
            "Karla Caves",
            "Bhaja Caves",
            "Ekvira Devi Temple",
            "Pawna Lake",
            "Lion’s Point",
            "Tiger Point",
            "Lonavala Lake",
            "Khandala Viewpoints",
            "Bhushi Dam",
            "Wax Museum Lonavala",
            "Wet’nJoy Water Park & Amusement Park"
        ],
        property_mapSrc:
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d309.32487521499!2d73.48817029248998!3d18.747525455358236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ0JzUyLjEiTiA3M8KwMjknMTYuNiJF!5e0!3m2!1sen!2sin!4v1756966472924!5m2!1sen!2sin"
    },
    {
        id: 3,
        property_name: "Loki - Blue Door Homes",
        property_description:
            "Shrirang Villa is a luxurious 4BHK private retreat nestled in the serene hills of Malavli, near Lonavala. Perfect for families, friends, and group getaways, the villa offers spacious bedrooms, modern amenities, and a private swimming pool surrounded by lush greenery. Guests can relax in the cozy living spaces, enjoy outdoor games, or simply soak in the breathtaking views of the Sahyadri ranges. With its blend of comfort and elegance, Shrirang Villa promises a memorable escape just a short drive from Mumbai and Pune.",
        property_location: "Plot No 28, Sai Agro Resort Rd, near Gera Heights",
        property_img: [LokiBanner, Limg1, Limg2, Limg3, Limg4, Limg5, Limg6, Limg7, Limg8, Limg9, Limg10, Limg11, Limg12, Limg13, Limg14, Limg15],
        property_amenities: [
            { amenities_icon: "bed" },
            { amenities_icon: "shower" },
            { amenities_icon: "pool" },
            { amenities_icon: "car" },
            { amenities_icon: "wifi" },
            { amenities_icon: "ac" },
            { amenities_icon: "Laundry Service" },
            { amenities_icon: "card payment" },
            { amenities_icon: "breakfast" },
            { amenities_icon: "newspaper" },
            { amenities_icon: "cleaning" },
            { amenities_icon: "luggage" },
            { amenities_icon: "tv" },
            { amenities_icon: "security" },
            { amenities_icon: "lift" },
            { amenities_icon: "power backup" },
            { amenities_icon: "parking" },
            { amenities_icon: "outdoor games" },
            { amenities_icon: "indoor games" },
            { amenities_icon: "24-Hour Front Desk" },
            { amenities_icon: "Toilet Paper" },
            { amenities_icon: "Fire Exit" },
            { amenities_icon: "Fire Extinguishers" },
            { amenities_icon: "DTH Channels" },
            { amenities_icon: "Outside Food Allowed" }
        ],
        property_nearplaces: [
            "Lohagad Fort",
            "Visapur Fort",
            "Karla Caves",
            "Bhaja Caves",
            "Ekvira Devi Temple",
            "Pawna Lake",
            "Lion’s Point",
            "Tiger Point",
            "Lonavala Lake",
            "Khandala Viewpoints",
            "Bhushi Dam",
            "Wax Museum Lonavala",
            "Wet’nJoy Water Park & Amusement Park"
        ],
        property_mapSrc:
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d309.32487521499!2d73.48817029248998!3d18.747525455358236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ0JzUyLjEiTiA3M8KwMjknMTYuNiJF!5e0!3m2!1sen!2sin!4v1756966472924!5m2!1sen!2sin"
    },
];

export const navbarData = {
    details: [
        {
            id: 1,
            icon: 'IoIosMail',
            data: 'SSGRANDSIRCILLA@gmail.com'
        },
        {
            id: 2,
            icon: 'IoIosCall',
            data: '9394607407'
        },
    ],
    logo: [
        {
            id: 1,
            image: logo, // Replace with the actual logo image path
            alt: "Company Logo"
        }
    ],
    navmenu: [
        {
            id: 1,
            title: "Home",
            link: "/",
            submenu: []
        },
        {
            id: 2,
            title: "About",
            link: "/about",
            submenu: []
        },
        {
            id: 3,
            title: "Villas",
            link: "/",
            // submenu: [propertyData[0].property_name, propertyData[1].property_name, propertyData[2].property_name, propertyData[3].property_name, propertyData[4].property_name]   // Add the property names here
        },
        {
            id: 4,
            title: "Contact",
            link: "/contact",
            submenu: []
        },

    ],
    button: [
        {
            id: 1,
            type: "primary",
            text: "Login"
        }

    ]
};

import {
    FaFacebook, FaTwitter, FaInstagram, FaYoutube
} from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { IoIosMail, IoIosCall, IoIosArrowForward } from 'react-icons/io';
// import ExclusiveService_Card from "./components/homepage_components/homepage_exclusiveservice/ExclusiveService_Card";

// Define icon keys as a union type
export type IconKey =
    | 'FaFacebook'
    | 'FaTwitter'
    | 'FaInstagram'
    | 'FaYoutube'
    | 'ImGithub'
    | 'IoIosMail'
    | 'IoIosCall'
    | 'IoIosArrowForward';

// Icon mapping interface
export interface IconMapping {
    [key: string]: React.ComponentType<{ className?: string }>;
}

// Social Links Interface
export interface SocialLink {
    icon: IconKey;
    link: string;
}

// Contact Info Interface
export interface ContactInfo {
    icon: IconKey;
    text: string;
}

// Villa Links Interface
export interface VillaLink {
    icon: IconKey;
    text: string;
    link: string;
}

// Footer Data Interface
export interface FooterDataInterface {
    socialLinks: SocialLink[];
    contactInfo: ContactInfo[];
    villaLinks: VillaLink[];
    mapSrc: string;
}

// Icon Mapping
export const iconMap: IconMapping = {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    ImGithub,
    IoIosMail,
    IoIosCall,
    IoIosArrowForward
};

export const footerData: FooterDataInterface = {
    socialLinks: [
        { icon: 'FaFacebook', link: 'https://facebook.com' },
        // { icon: 'FaTwitter', link: 'https://twitter.com' },
        { icon: 'FaInstagram', link: 'https://instagram.com' },
        { icon: 'FaYoutube', link: 'https://youtube.com' },
    ],
    contactInfo: [
        { icon: 'IoIosMail', text: 'bluedoorhomesforyou@gmail.com' },
        { icon: 'IoIosCall', text: '+91 9820546707' },
    ],
    villaLinks: [
        { icon: 'IoIosArrowForward', text: '', link: '/' },
        // { icon: 'IoIosArrowForward', text: 'Casa 3 bhk', link: '/' },
        // { icon: 'IoIosArrowForward', text: 'Hotel Lotus', link: '/' },
        // { icon: 'IoIosArrowForward', text: 'Panchvati Resort', link: '/' },
    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.2149418410195!2d73.6652573!3d17.9687342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc265bb6c691e8f%3A0x4955b76185a57255!2sBlue%20Door%20Homes%20Mahabaleshwar%20Loki!5e0!3m2!1sen!2sin!4v1757073718313!5m2!1sen!2sin'
};