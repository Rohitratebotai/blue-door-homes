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
         <footer className="bg-black text-gray-400 py-8 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
                
                {/* Top Section - Info */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 pb-6 border-b border-gray-800">
                    
                    {/* Tagline */}
                    <div className="text-center lg:text-left">
                        <p className="text-white text-base lg:text-lg font-light leading-relaxed">
                            Premium Homes<br className="lg:hidden" />
                            <span className="hidden lg:inline"> · </span>
                            vacations · workacations · getaways
                        </p>
                    </div>

                    {/* Contact */}
                    <address className="not-italic text-center lg:text-right flex flex-col gap-1.5 text-sm">
                        <a href="mailto:bluedoorhomesforyou@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                            bluedoorhomesforyou@gmail.com
                        </a>
                        <a href="tel:+919198205467077" className="text-white hover:text-blue-400 transition-colors">
                            (91)98205 46707
                        </a>
                    </address>
                </div>

                {/* Middle - Brand */}
                <div className="text-center py-6">
                    <h2 className="text-white text-3xl lg:text-4xl font-bold">Blue Door Homes</h2>
                </div>

                {/* Bottom - Social & Copyright */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 pt-4 border-t border-gray-800">
                    
                    {/* Copyright */}
                    <div className="text-center lg:text-left text-xs text-gray-500">
                        <p>© {new Date().getFullYear()} The Blue Door Homes. 
                        <span className="hidden lg:inline"> · </span>
                        <span className="block lg:inline">Designed By <a href='https://ratebotai.com/' className="text-blue-400">RateBotAi</a></span>
                        </p>
                    </div>

                    {/* Social */}
                    <nav aria-label="Social media links" className="flex justify-center gap-4 text-lg">
                        {footerData.socialLinks.map(({ icon, link }, index) => {
                            const IconComponent = iconMap[icon];
                            return (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={icon.replace(/^Fa|^Im|^IoIos/, '')}
                                    className="text-pink-500 hover:text-pink-700 transition-all"
                                >
                                    <IconComponent />
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;