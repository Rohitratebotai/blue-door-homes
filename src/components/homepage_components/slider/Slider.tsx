import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import '../../../App.css';
import img1 from '../../../assets/loki/img_8.jpeg';
import img2 from '../../../assets/mojo/img_4.jpeg';
import img3 from '../../../assets/loki/img_7.jpeg'
// import Homepage_form from '../homepage_form/Homepage_form';
import img from '../../../assets/shaunnie/img_13.jpeg';

const Slider = () => {

    const images = [
        { id: 1, src: img1, alt: 'Image 1' },
        { id: 2, src: img2, alt: 'Image 2' },
        { id: 3, src: img3, alt: 'Image 3' },
    ];

    return (
        <>
            <section className='md:hidden w-full flex justify-center items-center '>
                <div className='p-5 w-full h-[70vh]'>
                    <img src={img} className='w-full h-full object-cover' alt="Banner image " />
                </div>
            </section>

            <section className="hidden  relative text-black w-full md:flex justify-center items-center">
                <div className='h-[50vh] md:h-[100vh] w-full'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={10}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                    >
                        {images.map((image) => (
                            <SwiperSlide key={image.id}>
                                <div className="h-[70vh] md:h-[100vh] w-full">
                                    <img src={image.src} alt={image.alt} className="object-contain md:object-cover -mt-2  md:mt-0 object-center w-[100%]  md:w-full h-[100%] md:h-full" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Slider;