import { Link } from "react-router-dom";
import SliderCards from "./Hero/SliderCards";


const Services = () => {

     

    return (
        <section  className="bg-cover bg-center bg-slate-950 p-4 mt-8  md:px-24" id="Services" >
            <div className=" mx-auto px-4  w-full">
                <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="     text-slate-50  mb-8">
                    <span className="block mb-2 text-xs font-semibold uppercase tracking-wide">Our services</span>
                    <h2 className="text-2xl text-slate-100 font-extrabold tracking-tight sm:text-3xl">What We do?</h2>
                    <p className="mt-3  sm:mt-5  sm:mx-auto md:mt-5 text-slate-100 lg:mx-0">At Framelabs Foundry, we're more than a sum of our services. We're your strategic ally, offering tailored solutions for every business need. From tackling operational hurdles to crafting compelling digital content and beyond, we're here to empower your success story. Our expertise isn't limited to a checklist – it's a comprehensive approach designed to support and propel your business toward its goals. Partner with us, and let's redefine your success together.</p>


                    <Link to="Services" >
                    <button className="w-44 mt-5 h-14 px-4 border-2 border-sky-300 text-white font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-500 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span> View all services</button>
                                
                       </Link>
                </div>
                <div>
                <SliderCards/>

                </div>
             
                
            </div>
        </section>
    );
}

export default Services;




// import { Link } from "react-router-dom";


// const Services = () => {
//     const services = [
//         { image: 'img/icons/webdev1.svg', title: 'Web Development', description: 'Let it be a rough sketch or a complete vision for your business website, relax! No need to worry about the technical side. We\'ll design and build your website, from concept to reality, hassle-free.' },
//         { image: 'img/icons/si-2.png', title: 'Video Solution', description: 'From crafting your video scripts to bringing them to life, we\'ve got you covered every step of the way. Whether it\'s TikTok, YouTube, or any platform you prefer, we\'ll guide you from start to finish, making your content shine.' },
//         { image: 'img/icons/si-3.png', title: 'Business Solution', description: 'Whether it\'s an initial idea or a fully-fledged plan for your business solutions, rest assured! Leave the technical aspects to us. We\'ll craft and implement your tailored strategies seamlessly, taking your business from concept to achievement, hassle-free.' },
//         { image: 'img/icons/si-4.png', title: 'Creative Solution', description: 'Innovation is our backbone, redefining how businesses flourish. Our team pioneers inventive strategies, crafts imaginative problem-solving, and designs captivating marketing. With a commitment to tailoring creativity to your needs, we infuse your business with inventive approaches. Let\'s collaborate, unlocking your enterprise\'s full potential, driving growth through our creative expertise.' },
//     ];

//     return (
//         <section className="bg-cover bg-center bg-slate-950 p-12" id="Services" >
//             <div className=" mx-auto px-4 md:flex">
//                 <div className=" md:w-1/4 md:px-6 text-slate-50  mb-8">
//                     <span className="block mb-2 text-xs font-semibold uppercase tracking-wide">Our services</span>
//                     <h2 className="text-2xl text-slate-100 font-extrabold tracking-tight sm:text-3xl">What We do?</h2>
//                     <p className="mt-3  sm:mt-5  sm:mx-auto md:mt-5 text-slate-100 lg:mx-0">At Framelabs Foundry, we're more than a sum of our services. We're your strategic ally, offering tailored solutions for every business need. From tackling operational hurdles to crafting compelling digital content and beyond, we're here to empower your success story. Our expertise isn't limited to a checklist – it's a comprehensive approach designed to support and propel your business toward its goals. Partner with us, and let's redefine your success together.</p>
//                     <Link to="Services" className="mt-8 btn btn-outline btn-info text-white ">View all services</Link>
//                 </div>
//                 <div className="grid md:px-20 md:w-3/4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//                     {services.map((service, index) => (
//                         <div key={index} className="bg-gradient-to-r from-[#0D061F] to-[#251E35] shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
//                             <img src={service.image} alt="" className="mb-4" />
//                             <h4 className="text-lg font-semibold text-white mt-4">{service.title}</h4>
//                             <p className="text-white">{service.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Services;



// const Services = () => {
//     return (
//         <section className="services spad" id="Services">
//             <div className="container mx-auto px-4">
//                 <div className="flex flex-wrap -mx-4">
//                     <div className="w-full lg:w-1/3 px-4">
//                         <div className="services__title">
//                             <div className="section-title">
//                                 <span className="block mb-2 text-xs font-semibold  uppercase tracking-wide">Our services</span>
//                                 <h2 className="text-2xl font-extrabold tracking-tight  sm:text-3xl">What We do?</h2>
//                             </div>
//                             <p className="mt-3 text-base  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">At Framelabs Foundry, we're more than a sum of our services. We're your strategic ally,
//                                 offering tailored solutions for every business need. From tackling operational hurdles to
//                                 crafting compelling digital content and beyond, we're here to empower your success story.
//                                 Our expertise isn't limited to a checklist – it's a comprehensive approach designed to
//                                 support and propel your business toward its goals. Partner with us, and let's redefine your
//                                 success together.</p>
//                             <Link to="Services" className="primary-btn">View all services</Link>
//                         </div>
//                     </div>
//                     <div className="w-full lg:w-2/3 px-4">
//                         <div className="flex flex-wrap -mx-4">
//                             <div className="w-full md:w-1/2 px-4">
//                                 <div className="services__item">
//                                     <div className="services__item__icon">
//                                         <img src="img/icons/webdev1.svg" alt="" />
//                                     </div>
//                                     <h4 className="mt-2 text-xl leading-7 font-semibold ">Web Development</h4>
//                                     <p className="mt-3 text-base leading-6 ">Let it be a rough sketch or a complete vision for your business website,
//                                         relax! No need to worry about the technical side. We'll design and build your
//                                         website, from concept to reality, hassle-free.</p>
//                                 </div>
//                             </div>
//                             <div className="w-full md:w-1/2 px-4">
//                                 <div className="services__item">
//                                     <div className="services__item__icon  ">
//                                         <img src="img/icons/si-2.png" alt="" />
//                                     </div>
//                                     <h4 className="mt-2 text-xl leading-7 font-semibold ">Video Solution</h4>
//                                     <p className="mt-3 text-base leading-6 ">From crafting your video scripts to bringing them to life, we've got you covered
//                                         every step of the way. Whether it's TikTok, YouTube, or any platform you prefer,
//                                         we'll guide you from start to finish, making your content shine.</p>
//                                 </div>
//                             </div>
//                             <div className="w-full md:w-1/2 px-4">
//                                 <div className="services__item">
//                                     <div className="services__item__icon">
//                                         <img src="img/icons/si-3.png" alt="" />
//                                     </div>
//                                     <h4 className="mt-2 text-xl leading-7 font-semibold ">Business Solution</h4>
//                                     <p className="mt-3 text-base leading-6 ">Whether it's an initial idea or a fully-fledged plan for your
//                                         business solutions, rest assured! Leave the technical aspects to us. We'll craft and
//                                         implement your tailored strategies seamlessly, taking your business from concept to
//                                         achievement, hassle-free.</p>
//                                 </div>
//                             </div>
//                             <div className="w-full md:w-1/2 px-4">
//                                 <div className="services__item">
//                                     <div className="services__item__icon">
//                                         <img src="img/icons/si-4.png" alt="" />
//                                     </div>
//                                     <h4 className="mt-2 text-xl leading-7 font-semibold ">Creative Solution</h4>
//                                     <p className="mt-3 text-base leading-6 ">Innovation is our backbone, redefining how businesses flourish.
//                                         Our team pioneers inventive strategies, crafts imaginative problem-solving, and
//                                         designs captivating marketing. With a commitment to tailoring creativity to your
//                                         needs, we infuse your business with inventive approaches. Let's collaborate,
//                                         unlocking your enterprise's full potential, driving growth through our creative
//                                         expertise.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </section>
//     );
// }

// export default Services;
