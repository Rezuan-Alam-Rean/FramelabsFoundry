import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SliderCards = () => {
    // Card data array
    const services = [
        { image: 'img/icons/webdev1.svg', title: 'Web Development', description: 'Let it be a rough sketch or a complete vision for your business website, relax! No need to worry about the technical side. We\'ll design and build your website, from concept to reality, hassle-free.' },
        { image: 'img/icons/si-2.png', title: 'Video Solution', description: 'From crafting your video scripts to bringing them to life, we\'ve got you covered every step of the way. Whether it\'s TikTok, YouTube, or any platform you prefer, we\'ll guide you from start to finish, making your content shine.' },
        { image: 'img/icons/si-3.png', title: 'Business Solution', description: 'Whether it\'s an initial idea or a fully-fledged plan for your business solutions, rest assured! Leave the technical aspects to us. We\'ll craft and implement your tailored strategies seamlessly, taking your business from concept to achievement, hassle-free.' },
        { image: 'img/icons/si-4.png', title: 'Creative Solution', description: 'Innovation is our backbone, redefining how businesses flourish. Our team pioneers inventive strategies, crafts imaginative problem-solving, and designs captivating marketing. With a commitment to tailoring creativity to your needs, we infuse your business with inventive approaches. Let\'s collaborate, unlocking your enterprise\'s full potential, driving growth through our creative expertise.' },
    ];
      

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        
    autoplay: true,
   
    autoplaySpeed: 2000,
    
    
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className=" mx-auto   px-2 md:px-4   ">
            <div className='  '>
            <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-center  mb-8">
                    <h2 className="text-3xl text-white font-bold">Our Services</h2>
                   
                    <div
                      className="md:flex justify-center  md:space-x-4 mt-3 md:mt-2">
                        {services.map((service, index) => (
                            <Link key={index} to={`Services`} className="text-white hover:text-blue-700">
                                <p>
                                {service.title}

                                </p>
                                </Link>
                        ))}
                    </div>
                </div>
                <Slider  {...settings}>
                {services.map((service, index) => (
                        <div key={index} className=" border bg-gradient-to-r from-[#0D061F] to-[#251E35] shadow-lg md:h-80  justify-center rounded-lg p-4 flex flex-col  items-center text-center">
                            <img src={service.image} alt="" className="mb-4 mt-4 flex justify-center text-center mx-auto" />
                            <h4 className="text-3xl font-semibold text-white mt-6">{service.title}</h4>
                            <p className="text-white mt-6">{service.description}</p>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default SliderCards;
