import logo from "../src/assets/logo.jpeg";

// import img1 from './assets/HomePage_banner1.jpg'
// import img2 from './assets/HomePage_banner1.jpg'
// import img3 from './assets/HomePage_banner1.jpg'

// Property one Images Shrikar 

import simg1 from './assets/shrikar_images/shikar_R1.jpg'
import simg2 from './assets/shrikar_images/shikar_R2.jpg'
import simg3 from './assets/shrikar_images/shikar_R3.jpg'
import simg4 from './assets/shrikar_images/shikar_R4.jpg'
import simg5 from './assets/shrikar_images/shikar_R5.jpg'
import simg6 from './assets/shrikar_images/shikar_R6.jpg'
import simg7 from './assets/shrikar_images/shikar_R7.jpg'
import simgb1 from './assets/shrikar_images/shikar_b1.jpg'
import simgb2 from './assets/shrikar_images/shikar_b2.jpg'
import simgb3 from './assets/shrikar_images/shikar_b3.jpg'
import simgb4 from './assets/shrikar_images/shikar_b4.jpg'

// Property Two Images Samundar 
import pimg1 from './assets/samundra_images/samundra_R1.jpg'
import pimg2 from './assets/samundra_images/samundra_R2.jpg'
import pimg3 from './assets/samundra_images/samundra_R3.jpg'
import pimg4 from './assets/samundra_images/samundra_R4.jpg'
import pimg5 from './assets/samundra_images/samundra_R5.jpg'
import pimg6 from './assets/samundra_images/samundra_R6.jpg'
import pimg7 from './assets/samundra_images/samundra_R7.jpg'
import pimgb1 from './assets/samundra_images/samundra_b1.jpg'
import pimgb2 from './assets/samundra_images/samundra_b2.jpg'
import pimgb3 from './assets/samundra_images/samundra_b3.jpg'

// Property Two Images Samundar 
import cimg1 from './assets/casa_images/casa_R1.jpg'
import cimg2 from './assets/casa_images/casa_R2.jpg'
import cimg3 from './assets/casa_images/casa_R3.jpg'
import cimg4 from './assets/casa_images/casa_R4.jpg'
import cimg5 from './assets/casa_images/casa_R5.jpg'
import cimg6 from './assets/casa_images/casa_R6.jpg'
import cimg7 from './assets/casa_images/casa_R7.jpg'
import cimgb1 from './assets/casa_images/casa_b1.jpg'
import cimgb2 from './assets/casa_images/casa_b2.jpg'
import cimgb3 from './assets/casa_images/casa_b3.jpg'
import cimgb4 from './assets/casa_images/casa_b4.jpg'

// All Properties Data
export const propertyData = [
    {
        id: 1,
        property_name: "Shrikar Resort",
        property_description: "Rhythm Villa is a beautiful property located in the heart of Lonavala. The property is surrounded by lush greenery and offers a serene environment for a relaxing stay. The property is equipped with modern amenities and offers a comfortable stay for guests. The property is ideal for families, couples, and groups looking for a peaceful getaway in Lonavala. The property is located close to the market area and offers easy access to popular tourist spots in Lonavala. The property is ideal for guests looking for a comfortable stay in Lonavala.",
        property_location: "Sameera Palms Nagaon Beach Road, Alibaug, Maharashtra 402204",
        property_img: [simgb4, simgb2, simgb3, simgb1, simg1, simg1, simg2, simg3, simg4, simg5, simg6, simg7,],
        property_amenities: [
            {
                amenities_type: "Bedrooms",
                amenities_count: 10,
                amenities_icon: "bed", // Changed to string identifier instead of React element
            },
            {
                amenities_type: "Washrooms",
                amenities_availablity: 'available',
                amenities_icon: "shower",
            },
            {
                amenities_type: "Parking",
                amenities_availablity: 'available',
                amenities_icon: "car",
            },
            {
                amenities_type: "Pools",
                amenities_availablity: 'available',
                amenities_icon: "pool",
            },
            {
                amenities_type: "Internet",
                amenities_availablity: 'available',
                amenities_icon: "wifi",
            },
            {
                amenities_type: "Air condition",
                amenities_availablity: 'available',
                amenities_icon: "ac",
            }
        ],
        property_services: ["Full-service laundry", "Housekeeping daily", "Mineral Water", "24/7 Check-In", "Free Parking"],
        status: "Available",
        property_details: [
            {
                type: "Bedrooms",
                value: "10"
            },
            {
                type: "Property_Size",
                value: "5000 sqft"
            },
            {
                type: "parking",
                value: "Pawna Lake, Lonavala"
            },
            {
                type: "Private_Swimming_Pool",
                value: "Available"
            }
        ],
        property_aditional_details: [
            {
                type: "smoking",
                value: "Not Allowed"
            },
            {
                type: "Drinking ",
                value: "Not Allowed"
            },
        ],
        property_address: [
            {
                type: "Place",
                value: "Lonavala"
            },
            {
                type: "City",
                value: "Pune"
            },
            {
                type: "Area",
                value: "Pawna Lake"
            },
            {
                type: "State",
                value: "Maharashtra"
            },
            {
                type: "Postal Code",
                value: "410401"
            },
            {
                type: "Country",
                value: "India"
            }
        ]
    },
    {
        id: 2,
        property_name: "Samundra Darshan",
        property_description: "When you think of taking a holiday - what comes to mind? You taken far away, from the daily hustle and bustle of life! Close your eyes and imagine what that would be like. At Samudra Darshan we offer you a patch of holiday heaven right here on earth. Located just off the coast and within two minutes walk of Akshi Beach come experience the class, the luxury and the scenic beauty of Akshi beach.",
        property_location: "Beach, near Saibaba Temple, Akshi, Maharashtra 402204",
        property_img: [pimg3, pimgb1, pimgb2, pimgb3, pimg1, pimg2, pimg3, pimg4, pimg5, pimg6, pimg7],
        property_amenities: [
            {
                amenities_type: "Bedrooms",
                amenities_count: 17,
                amenities_icon: "bed", // Changed to string identifier instead of React element
            },
            {
                amenities_type: "Washrooms",
                amenities_availablity: 'Private',
                amenities_icon: "shower",
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
                amenities_type: "Air condition",
                amenities_availablity: 'available',
                amenities_icon: "ac",
            }
        ],
        property_services: ["Full-service laundry", "Housekeeping daily", "Mineral Water", "24/7 Check-In", "Free Parking"],
        status: "Available",
        property_details: [
            {
                type: "Games room",
                value: "available"
            },
            {
                type: "Beach Access",
                value: "available"
            },
            {
                type: "Night Club",
                value: "available"
            },
            {
                type: "Casino",
                value: "available"
            },
        ],
        property_aditional_details: [
            {
                type: "smoking",
                value: "Not Allowed"
            },
            {
                type: "Pets ",
                value: "Not Allowed"
            },
        ],
        property_address: [
            {
                type: "Place",
                value: "Beach"
            },
            {
                type: "City",
                value: "Akshi"
            },
            {
                type: "Area",
                value: "near Saibaba Temple"
            },
            {
                type: "State",
                value: "Maharashtra"
            },
            {
                type: "Postal Code",
                value: "402204"
            },
            {
                type: "Country",
                value: "India"
            }
        ]

    },
    {
        id: 3,
        property_name: "Casa 3 bhk",
        property_description: "Serene Escape Villa is a luxurious villa offering the perfect escape from the hustle and bustle of city life. Surrounded by nature, it provides a peaceful and private atmosphere for guests.",
        property_location: "Malshej Ghat, Lonavala",
        property_img: [cimgb2, cimgb1, cimgb3, cimgb4, cimg1, cimg2, cimg3, cimg4, cimg5, cimg6, cimg7],
        property_amenities: [
            {
                amenities_type: "Bedrooms",
                amenities_count: 5,
                amenities_icon: "bed", // Changed to string identifier instead of React element
            },
            {
                amenities_type: "Washrooms",
                amenities_count: 5,
                amenities_icon: "shower",
            },
            {
                amenities_type: "Parking",
                amenities_count: 5,
                amenities_icon: "car",
            },
            {
                amenities_type: "Pools",
                amenities_availablity: 'available',
                amenities_icon: "pool",
            },
            {
                amenities_type: "Internet",
                amenities_availablity: 'available',
                amenities_icon: "wifi",
            },
            {
                amenities_type: "Air condition",
                amenities_availablity: 'available',
                amenities_icon: "ac",
            }
        ],
        property_services: ["Full-service laundry", "Housekeeping daily", "Mineral Water", "24/7 Check-In", "Free Parking"],
        status: "Available",
        property_details: [
            {
                type: "Bedrooms",
                value: "6"
            },
            {
                type: "Property_Size",
                value: "6000 sqft"
            },
            {
                type: "parking",
                value: "Malshej Ghat, Lonavala"
            },
            {
                type: "Private_Swimming_Pool",
                value: "Available"
            }
        ],
        property_aditional_details: [
            {
                type: "smoking",
                value: "Not Allowed"
            },
            {
                type: "Pets ",
                value: "Not Allowed"
            },
        ],
        property_address: [
            {
                type: "Place",
                value: "Lonavala"
            },
            {
                type: "City",
                value: "Pune"
            },
            {
                type: "Area",
                value: "Sunset Point"
            },
            {
                type: "State",
                value: "Maharashtra"
            },
            {
                type: "Postal Code",
                value: "410401"
            },
            {
                type: "Country",
                value: "India"
            }
        ]

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
            submenu: [propertyData[0].property_name, propertyData[1].property_name, propertyData[2].property_name]
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
        { icon: 'FaTwitter', link: 'https://twitter.com' },
        { icon: 'FaInstagram', link: 'https://instagram.com' },
        { icon: 'FaYoutube', link: 'https://youtube.com' },
    ],
    contactInfo: [
        { icon: 'IoIosMail', text: 'info@hotelscloudnine.com' },
        { icon: 'IoIosCall', text: '+91 7065890277' },
    ],
    villaLinks: [
        { icon: 'IoIosArrowForward', text: 'Shrikar Resort', link: '/' },
        { icon: 'IoIosArrowForward', text: 'Samundra Darshan', link: '/' },
        { icon: 'IoIosArrowForward', text: 'Casa 3 bhk', link: '/' },
    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3781.4087601537026!2d72.90198897519356!3d18.60067558250849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM2JzAyLjQiTiA3MsKwNTQnMTYuNCJF!5e0!3m2!1sen!2sin!4v1738924571524!5m2!1sen!2sin'
};


// const propertyData = [
//     {
//         id: 1,
//         property_name: "Rhythm Villa",
//         property_description: "Rhythm Villa is a beautiful property located in the heart of Lonavala. The property is surrounded by lush greenery and offers a serene environment for a relaxing stay. The property is equipped with modern amenities and offers a comfortable stay for guests. The property is ideal for families, couples, and groups looking for a peaceful getaway in Lonavala. The property is located close to the market area and offers easy access to popular tourist spots in Lonavala. The property is ideal for guests looking for a comfortable stay in Lonavala.",
//         property_location: "Malavali, Lonavala",
//         property_img: [img1, img2, img3],
//         property_amenities: [
//             {
//                 amenities_type: "Bedrooms",
//                 amenities_count: 6,
//                 amenities_icon: "bed", // Changed to string identifier instead of React element
//             },
//             {
//                 amenities_type: "Washrooms",
//                 amenities_count: 6,
//                 amenities_icon: "shower",
//             },
//             {
//                 amenities_type: "Pools",
//                 amenities_availablity: 'available',
//                 amenities_icon: "pool",
//             },
//             {
//                 amenities_type: "Parking",
//                 amenities_count: 5,
//                 amenities_icon: "car",
//             }
//         ],
//         property_features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
//         status: "Available",
//         property_details: [
//             {
//                 type: "Bedrooms",
//                 value: "6"
//             },
//             {
//                 type: "Property_Size",
//                 value: "5000 sqft"
//             },
//             {
//                 type: "parking",
//                 value: "Pawna Lake, Lonavala"
//             },
//             {
//                 type: "Private_Swimming_Pool",
//                 value: "Available"
//             }
//         ],
//         property_aditional_details: [
//             {
//                 type: "smoking",
//                 value: "Not Allowed"
//             },
//             {
//                 type: "Drinking ",
//                 value: "Not Allowed"
//             },
//         ],
//         property_address: [
//             {
//                 type: "Place",
//                 value: "Lonavala"
//             },
//             {
//                 type: "City",
//                 value: "Pune"
//             },
//             {
//                 type: "Area",
//                 value: "Pawna Lake"
//             },
//             {
//                 type: "State",
//                 value: "Maharashtra"
//             },
//             {
//                 type: "Postal Code",
//                 value: "410401"
//             },
//             {
//                 type: "Country",
//                 value: "India"
//             }
//         ]
//     },
//     {
//         id: 2,
//         property_name: "Anjum Villa",
//         property_description: "Anjum Villa is a luxurious property located in the scenic Lonavala. The villa offers an intimate retreat with modern amenities and a tranquil atmosphere, making it perfect for families, groups, or couples.",
//         property_location: "Jevrewadi Village, Lonavala .",
//         property_img: [img1, img2, img3],
//         property_amenities: [
//             {
//                 amenities_type: "Bedrooms",
//                 amenities_count: 5,
//                 amenities_icon: "bed", // Changed to string identifier instead of React element
//             },
//             {
//                 amenities_type: "Washrooms",
//                 amenities_count: 5,
//                 amenities_icon: "shower",
//             },
//             {
//                 amenities_type: "Pools",
//                 amenities_availablity: 'available',
//                 amenities_icon: "pool",
//             },
//             {
//                 amenities_type: "Parking",
//                 amenities_count: 5,
//                 amenities_icon: "car",
//             }
//         ],
//         property_features: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"],
//         status: "Available",
//         property_details: [
//             {
//                 type: "Bedrooms",
//                 value: "4"
//             },
//             {
//                 type: "Property_Size",
//                 value: "4500 sqft"
//             },
//             {
//                 type: "parking",
//                 value: "Near Sunset Point, Lonavala"
//             },
//             {
//                 type: "Private_Swimming_Pool",
//                 value: "Available"
//             }
//         ],
//         property_aditional_details: [
//             {
//                 type: "smoking",
//                 value: "Not Allowed"
//             },
//             {
//                 type: "Drinking ",
//                 value: "Not Allowed"
//             },
//         ],
//         property_address: [
//             {
//                 type: "Place",
//                 value: "Lonavala"
//             },
//             {
//                 type: "City",
//                 value: "Pune"
//             },
//             {
//                 type: "Area",
//                 value: "Malshej Ghat"
//             },
//             {
//                 type: "State",
//                 value: "Maharashtra"
//             },
//             {
//                 type: "Postal Code",
//                 value: "410405"
//             },
//             {
//                 type: "Country",
//                 value: "India"
//             }
//         ]

//     },
//     {
//         id: 3,
//         property_name: "Serene Escape Villa",
//         property_description: "Serene Escape Villa is a luxurious villa offering the perfect escape from the hustle and bustle of city life. Surrounded by nature, it provides a peaceful and private atmosphere for guests.",
//         property_location: "Malshej Ghat, Lonavala",
//         property_img: [img1, img2, img3],
//         property_amenities: [
//             {
//                 amenities_type: "Bedrooms",
//                 amenities_count: 5,
//                 amenities_icon: "bed", // Changed to string identifier instead of React element
//             },
//             {
//                 amenities_type: "Washrooms",
//                 amenities_count: 5,
//                 amenities_icon: "shower",
//             },
//             {
//                 amenities_type: "Pools",
//                 amenities_availablity: 'available',
//                 amenities_icon: "pool",
//             },
//             {
//                 amenities_type: "Parking",
//                 amenities_count: 5,
//                 amenities_icon: "car",
//             }
//         ],
//         property_features: ["Feature X", "Feature Y", "Feature Z", "Feature W", "Feature V"],
//         status: "Available",
//         property_details: [
//             {
//                 type: "Bedrooms",
//                 value: "6"
//             },
//             {
//                 type: "Property_Size",
//                 value: "6000 sqft"
//             },
//             {
//                 type: "parking",
//                 value: "Malshej Ghat, Lonavala"
//             },
//             {
//                 type: "Private_Swimming_Pool",
//                 value: "Available"
//             }
//         ],
//         property_aditional_details: [
//             {
//                 type: "smoking",
//                 value: "Not Allowed"
//             },
//             {
//                 type: "Drinking ",
//                 value: "Not Allowed"
//             },
//         ],
//         property_address: [
//             {
//                 type: "Place",
//                 value: "Lonavala"
//             },
//             {
//                 type: "City",
//                 value: "Pune"
//             },
//             {
//                 type: "Area",
//                 value: "Sunset Point"
//             },
//             {
//                 type: "State",
//                 value: "Maharashtra"
//             },
//             {
//                 type: "Postal Code",
//                 value: "410401"
//             },
//             {
//                 type: "Country",
//                 value: "India"
//             }
//         ]

//     },
// ];
