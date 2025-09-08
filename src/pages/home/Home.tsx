import Parallax from "../../components/commonComponents/parallax/Parallax"
import Amenities from "../../components/homepage_components/amenities/Amenities"
import Homepage_ExclusiveService from "../../components/homepage_components/homepage_exclusiveservice/Homepage_ExclusiveService"
import Homepage_LetUsGuide from "../../components/homepage_components/homepage_letusguide/Homepage_LetUsGuide"
import Homepage_Properties from "../../components/homepage_components/homepage_Properties/Homepage_Properties"
import Homepage_Testimonial from "../../components/homepage_components/homepage_testimonial/Homepage_Testimonial"
import Homepage_WhyChoose from "../../components/homepage_components/homepage_whychoose/Homepage_WhyChoose"
import Slider from "../../components/homepage_components/slider/Slider"
import img from '../../assets/shaunnie/img_7.jpeg'

const Home = () => {
    // Slider Images 
    return (
        <section className="relative font-roboto">
            <div className="w-full">
                <Slider />
            </div>
            <div>
                <Homepage_Properties />
            </div>
            <div>
                <Parallax image={img} title={'Gera Estate, Sai Agro Road, Mahabaleshwar, Maharashtra 412806'}
                    description={'Nestled along Sai Agro Road in Mahabaleshwar, Gera Estate offers a peaceful getaway surrounded by the natural beauty of the hills. With its spacious layout, lush greenery, and easy access to local attractions, this property is perfect for families, couples, or groups seeking a refreshing escape. Whether you’re here to relax in the cool hill-station breeze or explore nearby strawberry farms and scenic viewpoints, Gera Estate blends comfort with the charm of Mahabaleshwar living.'} />
            </div>
            {/* <div className=" px-4 lg:px-20 ">
                <Amenities />
            </div> */}
            {/* <div className="">
                <Homepage_LetUsGuide />
            </div> */}
            {/* <div className="">
                <Homepage_ExclusiveService />
            </div> */}
            <div className="">
                <Homepage_WhyChoose />
            </div>
            <div className="">
                <Homepage_Testimonial />
            </div>
        </section>
    )
}

export default Home