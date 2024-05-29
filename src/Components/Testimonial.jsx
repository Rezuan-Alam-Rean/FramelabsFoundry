
import Slider from "react-slick";



const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        
        
    autoplay: true,
   
    autoplaySpeed: 2000,
    vertical: true,
        verticalSwiping: true,
       
      };

    const testimonials = [
        { text: '“I have been working with FrameLabs Foundry for the past 6 months and I can say that the experience has been nothing but positive. Their professionalism, attention to detail, and customer service are unmatched. They are always willing to go the extra mile to ensure that all of our needs are met.”', image: 'https://rean-portfolio.vercel.app/assets/Rean%20Profile%20Pic%202-H677MLg_.jpg', name: 'Rean Bhuiyan', role: 'Web Developer (Student & Intern)-  Programming Hero' },
        { text: '“I have been working with FrameLabs Foundry for the past 6 months and I can say that the experience has been nothing but positive. Their professionalism, attention to detail, and customer service are unmatched. They are always willing to go the extra mile to ensure that all of our needs are met.”', image: 'https://member-media.topcoder.com/member/profile/nfridoy-1692447306713.png', name: 'John DoeMd Noman Faysal', role: 'Web developer- Velocity Digital' },
    ];

    return (
        <section className="bg-cover bg-center mb-6 md:p-28">
            <div className="container mx-auto px-8">
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-center mb-8">
                    <h2 className="text-3xl text-white font-bold">What our clients say?</h2>
                </div>
             
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className=" min-h-96 md:pt-20   bg-gradient-to-r from-[#0D061F] to-[#251E35] text-slate-200 shadow-lg rounded-lg p-6 flex  text-center mx-auto  ">
                            <p className=" mb-4">{testimonial.text}</p>
                            <img  src={testimonial.image} alt="" className="mb-4 flex mx-auto w-24 h-24 object-cover rounded-full" />
                            <h5 className="text-lg font-semibold ">{testimonial.name}</h5>
                            <span className="">{testimonial.role}</span>
                        </div>
                    ))}
                     </Slider>
              
            </div>
        </section>
    );
}

export default Testimonial;
