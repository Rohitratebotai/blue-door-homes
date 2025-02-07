import { FaBed, FaShower, FaSwimmingPool, FaCar } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

// import img1 from '../../../assets/HomePage_banner1.jpg'
// import img2 from '../../../assets/HomePage_banner1.jpg'
// import img3 from '../../../assets/HomePage_banner1.jpg'
import Heading from "../../commonComponents/heading/Heading";
import { useNavigate } from "react-router-dom";
import { propertyData } from "../../../data";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import PropertyModal from "../propertymodal/PropertyModal";
import { useState } from "react";

const Homepage_Properties = () => {
    const navigate = useNavigate();

    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to render the correct icon based on the string identifier
    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'bed':
                return <FaBed />;
            case 'shower':
                return <FaShower />;
            case 'pool':
                return <FaSwimmingPool />;
            case 'car':
                return <FaCar />;
            default:
                return null;
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    const handleNavigate = (property: any) => {
        navigate(`/property_details/${property?.id}`, { state: { property } })
    }

    const handleModal = (property: any) => () => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    }


    return (
        <>
            <section className="px-4 lg:px-20 py-8 pb-10 md:pb-20">
                <Heading title='Explore Our Villas' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10'>
                    {propertyData.map((property: any) => (
                        <div key={property.id} className="bg-white shadow-xl rounded-md overflow-hidden">
                            {/* Image Container */}
                            <div
                                className="relative h-[40vh] md:h-[50vh]"
                            >
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={0}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev'
                                    }}
                                    loop={true}
                                    className="h-full w-full group  cursor-pointer"
                                >
                                    {/* Custom navigation buttons */}
                                    <div className="swiper-button-prev !w-8 !h-8 !bg-white/50 hover:!bg-white !rounded-full !text-gray-800 after:!text-sm transition-all duration-200 "></div>
                                    <div className="swiper-button-next !w-8 !h-8 !bg-white/50 hover:!bg-white !rounded-full !text-gray-800 after:!text-sm transition-all duration-200 "></div>

                                    {property?.property_img.map((image: any, index: number) => (
                                        <SwiperSlide key={index}>
                                            <div
                                                onClick={() => handleNavigate(property)}
                                                className="h-full w-full"
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${property.property_name} - Image ${index + 1}`}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                {/* Modal view button  */}
                                <span
                                    onClick={handleModal(property)}
                                    className="absolute right-2 bottom-2 cursor-pointer z-10 text-2xl text-white h-8 w-8 bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
                                    <RxOpenInNewWindow />
                                </span>
                            </div>

                            {/* Content Container */}
                            <div
                                className="p-4 sm:p-5 flex flex-col gap-3"
                            >
                                <h2 className="text-base sm:text-lg font-medium text-gray-800">
                                    {property.property_name}
                                </h2>

                                {/* Amenities */}
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                    {property?.property_amenities.slice(0, 3).map((amenity: any, index: number) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <span className="text-lg sm:text-xl text-gray-600">
                                                {renderIcon(amenity.amenities_icon)}
                                            </span>
                                            <span className="text-sm text-gray-600">
                                                {amenity.amenities_type}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Location */}
                                <p className="text-sm text-gray-500 mt-1">
                                    {property.property_location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* Modal */}
            {isModalOpen && (
                <PropertyModal property={selectedProperty} onClose={closeModal} handleNavigate={handleNavigate} />
            )}

        </>
    );
};


export default Homepage_Properties