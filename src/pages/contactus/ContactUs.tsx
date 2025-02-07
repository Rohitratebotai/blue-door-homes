import CommonBanner from "../../components/commonComponents/banner/CommonBanner"
import img from '../../assets/HomePage_banner3.jpg'
import Homepage_Properties from "../../components/homepage_components/homepage_Properties/Homepage_Properties";

const contactInfo = [
    {
        icon: "📍",
        text: "Aashiyaanaa Villas, House No 118, opposite ZP school, Aapti Dhamandara, Lonavala, Maharashtra - 410106",
    },
    { icon: "📞", text: "+91-7065890277" },
    { icon: "✉️", text: "info@hotelscloudnine.com" },
];

const ContactUs = () => {
    return (
        <section className=''>
            {/* Banner  */}
            <div>
                <CommonBanner image={img} PageName={'Contact Us'} />
            </div>
            {/* Contact Info Section  */}
            <div className="flex flex-col md:flex-row gap-8 px-4 lg:px-20 py-8">
                {/* Left Section */}
                <div className="md:w-1/2 text-gray-600 text-lg leading-relaxed">
                    <span>
                        Discover the epitome of comfort and elegance with CloudNine, a collection of three exquisite properties: Shikar Resort, Samundra Darshan, and Casa 3 BHK. Whether you're seeking a serene retreat in nature, breathtaking ocean views, or a luxurious private stay, we have the perfect destination for you.

                        Enjoy top-tier amenities, including ample parking, scenic views, well-furnished accommodations, high-speed WiFi, 24/7 security, and personalized services to make your stay truly unforgettable. Book now and experience the best in hospitality with CloudNine!
                    </span>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 text-gray-800 text-lg leading-relaxed space-y-4">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-orange-500 mr-4">{info.icon}</span>
                            <span>{info.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Homepage Property section  */}
            <div>
                <Homepage_Properties />
            </div>
        </section>
    )
}

export default ContactUs