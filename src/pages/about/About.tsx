import CommonBanner from "../../components/commonComponents/banner/CommonBanner"
import img from '../../assets/HomePage_banner1.jpg'
import img1 from '../../assets/parallax_img.jpg'
import Parallax from "../../components/commonComponents/parallax/Parallax"
import NearByPlaces from "../../components/aboutpage_component/nearbyplaces/NearByPlaces"

const About = () => {
    return (
        <section>
            <div>
                <CommonBanner image={img} PageName={'About Us'} />
            </div>
            <div className=" tracking-wide py-20 px-8 lg:px-32 flex flex-col gap-8 text-justify">
                {/* title  */}
                <div>
                    <span className="text-4xl font-medium">
                        How it feels at Lonavala stays
                    </span>
                </div>
                {/* description  */}
                <div className="text-base font-thin flex flex-col gap-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-8 max-w-7xl mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center md:text-left">
                        Welcome to Cloudnine Hotels
                    </h2>
                    <p className="text-gray-700 text-justify">
                        Where comfort meets elegance across a diverse range of accommodations, from budget-friendly stays to upscale luxury. Each of our hotels boasts a unique character, offering a personalized experience while maintaining our commitment to exceptional hospitality.
                    </p>

                    <p className="text-gray-700 text-justify">
                        At Cloudnine Hotels, we prioritize guest satisfaction by continuously enhancing our services and actively seeking feedback to refine every stay. Whether you are traveling for leisure or business, our properties provide modern amenities, including air-conditioned rooms, Wi-Fi connectivity, swimming pools, in-house restaurants, ample parking, and 24/7 security with CCTV surveillance.
                    </p>

                    <p className="text-gray-700 text-justify">
                        Strategically located near popular tourist attractions, vibrant city markets, and business hubs, our hotels ensure convenience and accessibility. We believe in creating a refreshing atmosphere with lush greenery, ample natural light, and a strong emphasis on cleanliness and safety.
                    </p>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-6">
                        Getting to Our Hotels
                    </h3>

                    <h4 className="text-md sm:text-lg font-medium text-gray-700 mt-4">
                        By Ferry/Boat
                    </h4>
                    <p className="text-gray-700 text-justify">
                        The fastest way to reach Alibaug is by boat from the <strong>Gateway of India</strong> in South Mumbai to <strong>Mandwa Jetty</strong>. A ferry ride takes about an hour, while a speedboat covers the distance in just 20 minutes. From Mandwa Jetty, a short bus or auto-rickshaw ride (30-45 minutes) brings you to Alibaug. The ferry service operates year-round, except during the monsoon season (June to September), resuming in late August based on weather conditions.
                    </p>

                    <h4 className="text-md sm:text-lg font-medium text-gray-700 mt-4">
                        By Road
                    </h4>
                    <p className="text-gray-700 text-justify">
                        Alibaug is a perfect weekend getaway, easily accessible by road from Mumbai, Navi Mumbai, and Pune.
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>
                            <strong>From Mumbai:</strong> Travel via the <strong>Mumbai-Goa Highway (NH-17)</strong>, taking approximately 3-4 hours, depending on traffic.
                        </li>
                        <li>
                            <strong>From Pune:</strong> Covering a distance of around 135 km, the journey takes about 3.5 hours.
                        </li>
                        <li>
                            <strong>From Navi Mumbai:</strong> A quick 1 hour and 45-minute drive.
                        </li>
                    </ul>

                    <p className="text-gray-700 text-justify">
                        For a seamless journey, travelers can also opt for the <strong>ATAL SETU BRIDGE</strong>, reducing travel time and enhancing connectivity.
                    </p>

                    <p className="font-medium text-gray-800 text-center md:text-left mt-6">
                        At Cloudnine Hotels, we don’t just offer a stay—we create experiences. Whether you're looking for a relaxing retreat or a business-friendly atmosphere, we ensure a memorable and comfortable visit.
                    </p>

                    <p className="text-lg sm:text-xl font-semibold text-gray-900 text-center md:text-left">
                        Experience hospitality at its finest with Cloudnine Hotels.
                    </p>
                </div>
            </div>
            {/* Parallax  */}
            <div>
                <Parallax image={img1} title={'Experience Luxury Across Three Stunning Properties'} description={'When you think of taking a holiday - what comes to mind? You taken far away, from the daily hustle and bustle of life! Close your eyes and imagine what that would be like. At Samudra Darshan we offer you a patch of holiday heaven right here on earth. Located just off the coast and within two minutes walk of Akshi Beach come experience the class, the luxury and the scenic beauty of Akshi beach.'} />
            </div>
            {/* Near by places  */}
            <div>
                <NearByPlaces />
            </div>
        </section>
    )
}

export default About