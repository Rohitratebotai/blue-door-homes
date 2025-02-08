import img1 from '../../../assets/about_images/alibaug_beach.jpeg'
import img2 from '../../../assets/about_images/mandwa_beach.jpeg'
import img3 from '../../../assets/about_images/murud_ganjria.jpeg'
import img4 from '../../../assets/about_images/revdanda-beach-fort.jpg'

interface Room {
    title: string,
    thumbnail: string,
    // description: string,
}

const NearByPlaces = () => {

    const data: Room[] = [
        {
            title: "alibaug beach",
            thumbnail: img1,
            // description: "A cozy room designed for comfort, featuring a double bed and a peaceful ambiance."
        },
        {
            title: "Mandwa beach",
            thumbnail: img2,
            // description: "Spacious room ideal for families or groups, with three comfortable beds and modern amenities."
        },
        {
            title: "Murud-Janjira Fort",
            thumbnail: img3,
            // description: "A luxurious room with elegant decor, featuring a large double bed and a relaxing environment."
        },
        {
            title: "Revdanda fort",
            thumbnail: img4,
            // description: "An extravagant room offering a superior stay with top-of-the-line furnishings and extra space."
        },
    ];

    return (
        <section className='py-10 md:py-20'>
            <div className='h-full w-full py-10'>
                <div className='capitalize flex justify-center pb-16 px-4 sm:px-6 lg:px-10'>
                    <p className='slide-title border-b-2 border-primary text-center w-max py-2 text-2xl sm:text-3xl md:text-4xl text-primary'>
                        Near By Places
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-9'>
                    {data?.map((item) => {
                        return (
                            <div key={item.title} className='relative h-[50vh] md:h-[60vh] w-full mb-3 border border-gray-300 rounded-lg overflow-hidden'>
                                <img className='object-cover h-4/5 w-full' src={item.thumbnail} alt="BackgroundImage" />
                                <div className='h-1/5 flex flex-col justify-center gap-4 items-start  text-start px-5 py-4'>
                                    <p className='text-xl capitalize lg:text-2xl font-medium'>{item.title}</p>
                                    {/* <p className='text-xs lg:text-sm'>{item.description}</p> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default NearByPlaces;
