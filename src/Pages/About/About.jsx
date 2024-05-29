import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="bg-cover bg-center md:mx-28 mx-6 mb-8 min-h-screen md:pt-12">
             {/* style={{ backgroundImage: `url("img/breadcrumb-bg.jpg")` }} */}
            <div className=" pt-20 my-auto ">
                <div className="text-center mb-8">
                    <h2 className="text-3xl text-white font-bold">About us</h2>
                  
                </div>
                <div className="md:grid   md:grid-cols-2 md:h-[500px] pb-8  gap-x-20 ">
                    <div data-aos="zoom-in" className="grid    min-h-56 mb-4 grid-cols-2 gap-4">
                        <div className="bg-black bg-cover bg-center" style={{ backgroundImage: `url("https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg")` }}></div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-black bg-cover bg-center" style={{ backgroundImage: `url("https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg")` }}></div>
                            <div className="bg-black bg-cover bg-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1614963326505-843868e1d83a")` }}></div>
                        </div>
                    </div>
                    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="space-y-4 my-auto ">
                        <div className="">
                            <span className="text-3xl text-white font-bold block">About videograph</span>
                            <h2 className="text-xl text-white font-bold mt-2">Who we are?</h2>
                        </div>
                        <div className="text-white  space-y-4">
                            <p>Formed in 2021 initially by S. M. Muhosin with a group of online friends, we started out with the goal to ensure proper completion of our clients Video Solution Needs with an affordable range for their beloved YouTube channels that was mostly focused on gaming content and entertainment content.</p>
                            <p>We now have a team of over 50 people specializing in multiple fields of IT and Business Solutions with keeping only quality in mind but never straying away from our initial venture of Quality and Affordable Video Quality Solution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;


// const About = () => {
//     return (
//         <div>
//             <div className="breadcrumb-option spad bg-cover bg-center" style={{ backgroundImage: `url(img/breadcrumb-bg.jpg)` }}>
//                 <div className="container mx-auto px-4">
//                     <div className="row grid grid-cols-1 gap-4">
//                         <div className="col-lg-12 text-center col-span-1">
//                             <div className="breadcrumb__text">
//                                 <h2>About us</h2>
//                                 <div className="breadcrumb__links">
//                                     <a href="#.html">Home</a>
//                                     <span>About</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <section className="about spad">
//                 <div className="container mx-auto px-4">
//                     <div className="row grid grid-cols-2 gap-4">
//                         <div className="col-lg-6 col-span-1">
//                             <div className="about__pic">
//                                 <div className="row grid grid-cols-2 gap-4">
//                                     <div className="col-lg-6 col-md-6 col-sm-6 col-span-1 bg-black bg-cover bg-center" style={{ backgroundImage: `url(img/about/about-1.jpg)` }}></div>
//                                     <div className="col-lg-6 col-md-6 col-sm-6 col-span-1  ">
//                                         <div className="row grid grid-cols-1 gap-4">
//                                             <div className="col-lg-12 col-span-1 bg-cover bg-black bg-center" style={{ backgroundImage: `url(img/about/about-2.jpg)` }}></div>
//                                             <div className="col-lg-12 col-span-1 bg-black bg-cover bg-center" style={{ backgroundImage: `url(img/about/about-3.jpg)` }}></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 col-span-1">
//                             <div className="about__text">
//                                 <div className="section-title">
//                                     <span>About videograph</span>
//                                     <h2>Who we are?</h2>
//                                 </div>
//                                 <div className="about__text__desc">
//                                     <p>Formed in 2021 initially by S. M. Muhosin with a group of online friends, we started out with
//                                         the goal to ensure proper completion of our clients Video Solution Needs with an afforable
//                                         range for there beloved youtube channels that was mostly focused on gaming content and entertainment content.</p>
//                                     <br />
//                                     <p>We now have a team of over 50 people specializing in multiple fields of IT and
//                                         Business Solutions with keeping only quality in mind but never straying away from our initial venture of Quality and Afforable Video Quality Solution.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default About;

