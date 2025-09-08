import { useNavigate } from "react-router-dom";
import { propertyData } from "../../../data";
// import Heading from "../../commonComponents/heading/Heading";
import PropertyModal from "../propertymodal/PropertyModal";
import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";

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

    const handleModal = (property: any) => () => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    return (
        <>
            <section className="px-4 lg:px-20 py-10 bg-gradient-to-b from-gray-50 to-white">
                <section className="px-6 lg:px-20 pb-16 md:py-16">
                    {/* Main wrapper */}
                    <div className="w-full flex flex-col gap-10 md:gap-10 mx-auto ">
                        {/* Left - Heading */}
                        <div className="text-4xl  w-full ld:w-1/2 mr-auto  sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight font-[Inter]">
                            Radian builds future-facing spaces for highly creative, considerate humans.
                        </div>

                        {/* Right - Description */}
                        <div className="text-gray-700 ml-auto lg:w-1/2 text-sm sm:text-base leading-relaxed font-[Inter] md:text-right">
                            We take a ‘waste not, want not’ approach to developing structures that acknowledge
                            and embrace our Earth’s shifting conditions. Our practice has been recognized for
                            its optimistic innovation.
                        </div>
                    </div>

                </section>

                {/* cards  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                    {propertyData.map((property: any) => (
                        <div
                            key={property.id}
                            className="bg-white transition-shadow duration-300 overflow-hidden"
                        >
                            {/* Image Container */}
                            <div className="h-56 relative w-full overflow-hidden">
                                <img
                                    src={property.property_img[0]}
                                    alt={property.property_name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                                    onClick={() => handleNavigate(property.id)}
                                />

                                {/* Eye Icon */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // prevent parent click
                                        handleModal(property);
                                    }}
                                    className="absolute top-4 right-4 z-30 text-gray-800 border rounded-full bg-white p-1 text-3xl opacity-80 hover:opacity-100"
                                >
                                    <BsFillEyeFill />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col gap-3">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {property.property_name}
                                </h2>
                                <p className="text-sm text-gray-500">{property.property_location}</p>
                                <div className="mt-2">
                                    <button
                                        onClick={() => handleNavigate(property.id)}
                                        className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition-all duration-300"
                                    >
                                        Read More
                                    </button>
                                </div>
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
