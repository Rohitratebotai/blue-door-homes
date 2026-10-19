import { useNavigate } from "react-router-dom";
import { propertyData } from "../../../data";
// import Heading from "../../commonComponents/heading/Heading";
import PropertyModal from "../propertymodal/PropertyModal";
import { useState } from "react";
// import { BsFillEyeFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
const Homepage_Properties = () => {
    const navigate = useNavigate();

    const [selectedProperty, setSelectedProperty] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    const handleNavigate = (id: any) => {
        navigate(`/property_details/${id}`);
    };

    // const handleModal = (property: any) => () => {
    //     setSelectedProperty(property);
    //     setIsModalOpen(true);
    // };

    return (
        <>
            <section className="px-2 lg:px-20 pb-10 bg-gradient-to-b from-gray-50 to-white">
                <section className="px-6 lg:px-20 pb-16 md:py-16">
                    {/* Main wrapper */}
                    <div className="w-full flex flex-col gap-10 md:gap-10 mx-auto ">
                        {/* Left - Heading */}
                        <div className="text-4xl  w-full ld:w-3/5 mr-auto  sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight font-[Inter]">
                            Curated spaces for mindful stays
                        </div>

                        {/* Right - Description */}
                        <div className="text-gray-700 ml-auto text-justify lg:w-2/5 text-sm sm:text-base leading-relaxed font-[Inter] md:text-right">
                            Welcome to Blue Door Homes - handcrafted sancturias across navi mumbai and mahabaleshwar, designed for peaceful getaways, creative workcations and memorable moments
                        </div>
                    </div>
                </section>

                {/* cards  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                    {propertyData.map((property: any) => (
                        <div
                            key={property.id}
                            className="bg-white transition-shadow duration-300 overflow-hidden"
                        >
                            {/* Title + Address */}
                            <div className="py-5 flex flex-col gap-4">
                                <span className="md:hidden w-full h-[1.5px] bg-black"></span>

                                <div className="flex flex-col gap-1">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                                        {property.property_name}
                                    </h2>

                                    <p className="flex items-start gap-1 text-sm text-gray-600">
                                        <span className="pt-1 shrink-0">
                                            <IoLocation />
                                        </span>
                                        {property.property_location}
                                    </p>
                                </div>
                            </div>

                            {/* Property Image */}
                            <div className="relative overflow-hidden h-[45vh] sm:h-[35vh] md:h-[40vh] w-full">
                                <img
                                    src={property.property_img[0]}
                                    alt={property.property_name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                                    onClick={() => handleNavigate(property.id)}
                                />
                            </div>

                            {/* WhatsApp Button */}
                            <div className="pt-4">
                                <a
                                    href={`https://wa.me/919820546707?text=${encodeURIComponent(
                                        `Hello, I am interested in booking ${property.property_name} located at ${property.property_location}. Please share more details.`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center bg-primary gap-2.5 px-4 py-2.5 border border-gray-300 text-gray-800 rounded-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-primary/50"
                                >
                                    <FaWhatsapp className="text-lg text-white transition-transform duration-300 group-hover:scale-110" />

                                    <span className="text-sm text-white font-medium tracking-wide">
                                        Enquire Now
                                    </span>

                                    <span className="ml-0.5 text-white/70 transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* Modal */}
            {isModalOpen && (
                <PropertyModal
                    property={selectedProperty}
                    onClose={closeModal}
                    handleNavigate={handleNavigate}
                />
            )}
        </>
    );
};

export default Homepage_Properties;
