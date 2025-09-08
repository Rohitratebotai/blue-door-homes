import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { useEffect, useState, useRef } from 'react';
import { propertyData } from '../../../data';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const PropertyDetails = () => {
    const [Id, setId] = useState<any>('');
    const [data, setData] = useState<any>(null);
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);

    // Refs for sections
    const aboutRef = useRef<HTMLDivElement>(null);
    const amenitiesRef = useRef<HTMLDivElement>(null);
    const nearbyRef = useRef<HTMLDivElement>(null);
    const locationRef = useRef<HTMLDivElement>(null);

    // Function to handle smooth scroll with offset
    const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const elementTop = ref.current.offsetTop;
            const stickyHeaderHeight = 220; // Adjust this value based on your sticky header height
            const finalScrollPosition = elementTop - stickyHeaderHeight;

            window.scrollTo({
                top: finalScrollPosition,
                behavior: "smooth",
            });
        }
    };

    // Tab config
    const tabs = [
        { label: "About", ref: aboutRef },
        { label: "Amenities", ref: amenitiesRef },
        { label: "Nearby Places", ref: nearbyRef },
        { label: "Location", ref: locationRef },
    ];

    // Extract slug from URL
    useEffect(() => {
        const slug = location.pathname.split('/')[2];
        if (slug && slug !== Id) {
            setId(slug);
        }

        if (!Id || !propertyData || propertyData.length === 0) return;

        for (let i = 0; i < propertyData.length; i++) {
            if (propertyData[i].id == Id) {
                setData(propertyData[i]);
                break;
            }
        }
    }, [Id, propertyData, location.pathname]);

    if (!data) {
        return <div>Property not found</div>;
    }

    return (
        <div className="flex flex-col gap-10 w-full px-6 pt-40 pb-10 md:pt-40 sm:px-8 lg:px-32">

            {/* Title & Location */}
            <div className="flex flex-col gap-2">
                <p className="text-2xl sm:text-3xl capitalize font-medium">
                    {data.property_name}
                </p>
                <p className="capitalize text-sm flex items-center gap-3 text-blue-500 cursor-pointer">
                    <span className="text-xs">
                        <FaLocationDot />
                    </span>
                    {data.property_location}
                </p>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-5">
                <div className="w-full flex flex-col gap-6">

                    {/* Main Image */}
                    <div className="w-full h-64 md:h-96 lg:h-[450px] rounded-md overflow-hidden shadow-lg">
                        <img
                            src={data.property_img[activeIndex]}
                            alt={`Property ${activeIndex + 1}`}
                            className="h-full w-full object-cover transition-all duration-300"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="relative w-full h-20 md:h-24 lg:h-28">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            navigation={{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }}
                            loop={true}
                            breakpoints={{
                                1024: { slidesPerView: 6 },
                                768: { slidesPerView: 5 },
                                640: { slidesPerView: 4 },
                                320: { slidesPerView: 3 },
                            }}
                            spaceBetween={10}
                            className="w-full h-full rounded-md custom-swiper"
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.realIndex);
                            }}
                        >
                            {data.property_img.map((image: any, index: any) => (
                                <SwiperSlide key={index}>
                                    <div className="h-full w-full flex items-center justify-center px-2">
                                        <img
                                            onClick={() => setActiveIndex(index)}
                                            src={image}
                                            alt={`Property ${index + 1}`}
                                            className={`w-full h-[90%] object-cover rounded-md cursor-pointer transition-all duration-200 ${activeIndex === index
                                                ? "border-3 border-blue-500 shadow-lg scale-105"
                                                : "border-1 border-gray-200 hover:border-blue-300"
                                                }`}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* Custom Navigation */}
                            <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-1 md:left-2 z-20 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md border">
                                <IoIosArrowBack className="text-gray-700 text-sm md:text-base" />
                            </div>
                            <div className="custom-next absolute top-1/2 -translate-y-1/2 right-1 md:right-2 z-20 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md border">
                                <IoIosArrowForward className="text-gray-700 text-sm md:text-base" />
                            </div>
                        </Swiper>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-evenly w-full gap-6 shadow-xl border-gray-200 p-4 bg-white sticky top-[9.4rem] z-40">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className="text-sm font-medium text-gray-700 hover:text-blue-500"
                                onClick={() => handleScrollTo(tab.ref)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className='flex flex-col gap-20'>
                        {/* About / Description */}
                        <div className='scroll-mt-40' ref={aboutRef}>
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">About</h2>
                            <div className="border border-gray-200 p-6 rounded-lg text-gray-600 text-justify bg-gray-50">
                                <p className="leading-relaxed">{data.property_description}</p>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className='scroll-mt-40' ref={amenitiesRef}>
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-gray-200 p-6 rounded-lg bg-gray-50">
                                {data.property_amenities.map((amenity: any, index: any) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 text-gray-700 capitalize"
                                    >
                                        <span className="text-green-500 font-semibold">✓</span>
                                        <span className="text-sm">{amenity.amenities_icon}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Nearby Places */}
                        <div className='scroll-mt-40' ref={nearbyRef}>
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Nearby Places</h2>
                            <div className="border border-gray-200 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-50">
                                {data.property_nearplaces.map((place: any, index: any) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                        <span className="text-gray-700 text-sm">{place}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location / Map */}
                        <div className='scroll-mt-40' ref={locationRef}>
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Location</h2>
                            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    src={data.property_mapSrc}
                                    loading="lazy"
                                    className="w-full h-56 md:h-80"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Property Location"
                                ></iframe>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;