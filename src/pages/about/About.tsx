import CommonBanner from "../../components/commonComponents/banner/CommonBanner"
// import img from '../../assets/HomePage_banner1.jpg'
import img1 from '../../assets/shaunnie/img_2.jpeg'
import Parallax from "../../components/commonComponents/parallax/Parallax"

const About = () => {
    return (
        <section>
            <div>
                <CommonBanner image={img1} PageName={'About Us'} />
            </div>
            <div className="tracking-wide py-20 px-8 lg:px-32 flex flex-col gap-8 text-justify">
                {/* title */}
                <div>
                    <span className="text-4xl font-medium">
                        Welcome to Blue Doors
                    </span>
                </div>

                {/* description */}
                <div className="text-base font-thin flex flex-col gap-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-8 max-w-7xl mx-auto">
                    <p className="text-lg sm:text-xl font-semibold text-gray-900 text-center md:text-left">
                        Step into Elegance at <strong>Blue Doors</strong> – Your Gateway to Comfort and Style!
                    </p>

                    <p className="text-gray-700 text-justify">
                        Tucked away in a serene setting, <strong>Blue Doors</strong> blends modern luxury with timeless charm. Designed to inspire relaxation and connection, our property offers the perfect balance between peaceful escapes and memorable gatherings, making it an ideal choice for families, friends, and couples alike.
                    </p>

                    <p className="text-gray-700 text-justify">
                        From beautifully designed interiors to warm and welcoming spaces, every corner of <strong>Blue Doors</strong> invites you to unwind and create unforgettable moments. Whether you’re lounging in comfort, exploring nearby attractions, or simply enjoying the tranquil ambiance, <strong>Blue Doors</strong> is where lasting memories begin.
                    </p>

                    <p className="font-medium text-gray-800 text-center md:text-left mt-6">
                        Book your stay at <strong>Blue Doors</strong> today and discover a perfect blend of style, comfort, and relaxation that feels like home.
                    </p>
                </div>
            </div>

            {/* Parallax  */}
            <div>
                <Parallax
                    image={img1}
                    title={'Experience Timeless Charm at Blue Doors'}
                    description={
                        'Step into a world of elegance and comfort at Blue Doors, your perfect getaway for relaxation and memorable moments. Nestled in a tranquil setting, our property combines modern luxury with warm hospitality, offering you a retreat that feels both exclusive and inviting.'
                    }
                />
            </div>
        </section>
    )
}

export default About