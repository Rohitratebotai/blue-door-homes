import logo from '../../../assets/iIra_images/iira_stay.jpg';
import {
    FaFacebook, FaTwitter, FaYoutube, FaInstagram
} from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import {
    IoIosMail, IoIosCall, IoIosArrowForward
} from "react-icons/io";
import { footerData } from '../../../data';

const iconMap = {
    ImGithub,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    IoIosMail,
    IoIosCall,
    IoIosArrowForward
};

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-14 px-6 lg:px-12">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Logo Section */}
                <section className="flex flex-col items-center lg:items-start gap-6">
                    <img
                        className="w-28 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        src={logo}
                        alt="The iIra Stays logo"
                    />
                    <nav aria-label="Social media links" className="flex gap-6 text-2xl">
                        {footerData.socialLinks.map(({ icon, link }, index) => {
                            const IconComponent = iconMap[icon];
                            return (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={icon.replace(/^Fa|^Im|^IoIos/, '')}
                                    className="hover:text-white hover:scale-110 transition-all duration-300"
                                >
                                    <IconComponent />
                                </a>
                            );
                        })}
                    </nav>
                </section>

                {/* Contact Information */}
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-6 relative">
                        Locate Us
                        <span className="block w-14 h-1 bg-blue-500 rounded mt-1"></span>
                    </h2>
                    <address className="not-italic flex flex-col gap-4 text-base">
                        {footerData.contactInfo.map(({ icon, text }, index) => {
                            const IconComponent = iconMap[icon];
                            return (
                                <p
                                    key={index}
                                    className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors duration-300"
                                >
                                    <IconComponent aria-hidden="true" className="text-lg text-blue-500" />
                                    <span>{text}</span>
                                </p>
                            );
                        })}
                    </address>
                </section>

                {/* Google Maps */}
                <section className="flex justify-center lg:justify-start">
                    <iframe
                        src={footerData.mapSrc}
                        loading="lazy"
                        className="w-full h-48 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                        title="Location map"
                        aria-label="Google Maps location"
                    />
                </section>
            </div>

            <hr className="border-gray-800 mt-10" />

            {/* Copyright */}
            <p className="text-center text-sm text-gray-500 mt-8 tracking-wide">
                © {new Date().getFullYear()} The Blue Door Homes. All rights reserved.
                <span className="block text-gray-600 mt-2">Designed By <a href='https://ratebotai.com/' className="text-blue-400">RateBotAi</a></span>
            </p>
        </footer>
    );
};

export default Footer;
