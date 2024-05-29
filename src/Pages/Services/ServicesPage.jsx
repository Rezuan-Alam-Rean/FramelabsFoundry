
const ServicesPage = () => {
    const services = [
        { id: 'videoSolution', title: 'Video Solution', items: [
            { image: 'img/icons/si-2.png', title: 'Scriptwriting and editing', description: 'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.' },
            { image: 'img/icons/si-1.png', title: 'Motion graphics', description: 'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.' },
            { image: 'img/icons/si-3.png', title: 'Video distribution', description: 'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.' },
            { image: 'img/icons/si-4.png', title: 'Video hosting', description: 'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.' },
            { image: 'img/icons/si-2.png', title: 'Scriptwriting and editing', description: 'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.' },
            { image: 'img/icons/si-2.png', title: 'Scriptwriting and editing', description: 'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.' },
        ]},
        { id: 'webDev', title: 'Web Development', items: [
            { image: 'img/icons/si-3.png', title: 'Web Design & Development', description: 'We create custom, responsive websites and robust web applications with user-friendly CMS, focusing on UX/UI, e-commerce, and ongoing maintenance.' },
            { image: 'img/icons/si-4.png', title: 'Website SEO and Marketing', description: 'Boost your online visibility with SEO, content marketing, social media management, PPC advertising, email campaigns, and detailed analytics.' },
            { image: 'img/icons/si-4.png', title: '', description: 'Efficient content strategy, creation, CMS implementation, regular updates, content migration, training, and performance monitoring for a professional online presence.' },
        ]},
        { id: 'businessSolution', title: 'Business Solution', items: [
            { image: 'img/icons/si-3.png', title: 'Human Resource Service', description: 'From recruitment to employee management, our HR services optimize your workforce with tailored solutions and compliance expertise for seamless operations.' },
            { image: 'img/icons/si-4.png', title: 'Business Administration Service', description: 'Streamline operations with our administrative support, covering tasks like documentation, scheduling, and process optimization for efficient business functioning.' },
            { image: 'img/icons/si-4.png', title: 'Marketing Services', description: 'Elevate your brand with our marketing strategies encompassing digital campaigns, branding, market research, and analytics for targeted audience engagement and business growth.' },
        ]},
        { id: 'creativeSolution', title: 'Creative Solution', items: [
            { image: 'img/icons/si-3.png', title: 'Graphic Design', description: 'Eye-catching visuals for branding, marketing collateral, and digital platforms, crafted with creativity and precision to enhance brand identity.' },
            { image: 'img/icons/si-4.png', title: 'Content Creation', description: 'Compelling content across platforms: blogs, articles, videos, and social media. Engage your audience with impactful storytelling and informative resources.' },
            { image: 'img/icons/si-4.png', title: 'Video hosting', description: 'Crafting cohesive brand identities with logos, color schemes, and brand guidelines that resonate with your audience and set you apart.' },
        ]},
    ];

    return (
        <div className="bg-cover bg-center pt-12 md:px-24" >
            {/* style={{ backgroundImage: `url("img/breadcrumb-bg.jpg")` }} */}
            <div className="container mx-auto px-4">
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-center pt-20 mb-8">
                    <h2 className="text-3xl text-white font-bold">Our Services</h2>
                   
                    <div   className="md:flex justify-center md:space-x-4 mt-2">
                        {services.map((service, index) => (
                            <a key={index} href={`#${service.id}`} className="text-white hover:text-blue-700">
                              <div>

                                {service.title}
                              </div>
                                
                        </a>
                        ))}
                    </div>
                </div>
                {services.map((service, index) => (
                    <section key={index} className="mb-12 pt-16 md:pt-24" id={service.id}>
                        <div className="text-center mb-8">
                            <h2 className="text-3xl text-white font-bold">{service.title}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.items.map((item, i) => (
                                <div  key={i} className=" cursor-pointer border transition-all duration-700 hover:scale-110 bg-gradient-to-r from-[#0D061F] to-[#251E35] shadow-lg rounded-lg p-4 ">
                                    <div className="flex flex-col items-center text-center" data-aos="zoom-in" >

                                    <img src={item.image} alt="" className="mb-4" />
                                    <h4 className="text-lg font-semibold text-white mt-4">{item.title}</h4>
                                    <p className="text-white">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;





// const ServicesPage = () => {
//     return (
//         <div>
//             <div className="breadcrumb-option spad bg-cover bg-center" style={{ backgroundImage: `url(img/breadcrumb-bg.jpg)` }}>
//                 <div className="container mx-auto px-4">
//                     <div className="row grid grid-cols-2 gap-4">
//                         <div className="col-lg-12 text-center col-span-2">
//                             <div className="breadcrumb__text">
//                                 <h2>Our Services</h2>
//                                 <div className="breadcrumb__links">
//                                     <a href="index.html">Home</a>
//                                     <span>Services</span>
//                                 </div>
//                                 <br />
//                                 <div className="breadcrumb__links">
//                                     <a href="">‎ </a>
//                                     <a href="#.htmlvideoSolution">Video Solution</a>
//                                     <a href="#.htmlwebDev">Web Development</a>
//                                     <a href="#.htmlbusinessSolution">Business Solution</a>
//                                     <a href="#.htmlcreativeSolution">Creative Solution</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <section className="services-page spad">
//                 <div className="container mx-auto px-4" id="videoSolution">
//                     <div className="col-lg-12">
//                         <div className="section-title center-title">
//                             <h2>Video Solution</h2>
//                         </div>
//                     </div>
//                     <div className="row grid grid-cols-3 gap-4">
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-2.png" alt="" />
//                                 </div>
//                                 <h4>Scriptwriting and editing</h4>
//                                 <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
//                                     production services can put the finishing touches.</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-1.png" alt="" />
//                                 </div>
//                                 <h4>Motion graphics</h4>
//                                 <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
//                                     production services can put the finishing touches.</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-3.png" alt="" />
//                                 </div>
//                                 <h4>Video distribution</h4>
//                                 <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
//                                     production services can put the finishing touches.</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-4.png" alt="" />
//                                 </div>
//                                 <h4>Video hosting</h4>
//                                 <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
//                                     production services can put the finishing touches.</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-2.png" alt="" />
//                                 </div>
//                                 <h4>Scriptwriting and editing</h4>
//                                 <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
//                                     production services can put the finishing touches.</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-2.png" alt="" />
//                                 </div>
//                                 <h4>Scriptwriting and editing</h4>
//                                 <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
//                                     production services can put the finishing touches.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container mx-auto px-4" id="webDev">
//                     <div className="col-lg-12">
//                         <div className="section-title center-title">
//                             <h2>Web Development</h2>
//                         </div>
//                         <br />
//                     </div>
//                     <div className="row grid grid-cols-3 gap-4">
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-3.png" alt="" />
//                                 </div>
//                                 <h4>Web Design & Development</h4>
//                                 <p>We create custom, responsive websites and robust web applications with user-friendly CMS,
//                                     focusing on UX/UI, e-commerce, and ongoing maintenance.</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-4.png" alt="" />
//                                 </div>
//                                 <h4>Website SEO and Marketing</h4>
//                                 <p>Boost your online visibility with SEO, content marketing, social media management, PPC
//                                     advertising, email campaigns, and detailed analytics.</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-4.png" alt="" />
//                                 </div>
//                                 <h4></h4>
//                                 <p>Efficient content strategy, creation, CMS implementation, regular updates, content migration,
//                                     training, and performance monitoring for a professional online presence.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container mx-auto px-4" id="businessSolution">
//                     <div className="col-lg-12">
//                         <div className="section-title center-title">
//                             <h2>Business Solution</h2>
//                         </div>
//                         <br />
//                     </div>
//                     <div className="row grid grid-cols-3 gap-4">
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-3.png" alt="" />
//                                 </div>
//                                 <h4>Human Resource Service</h4>
//                                 <p>From recruitment to employee management, our HR services optimize your workforce with tailored solutions and compliance expertise for seamless operations.</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-4.png" alt="" />
//                                 </div>
//                                 <h4>Business Administration Service</h4>
//                                 <p>Streamline operations with our administrative support, covering tasks like documentation, scheduling, and process optimization for efficient business functioning.</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-4.png" alt="" />
//                                 </div>
//                                 <h4>Marketing Services</h4>
//                                 <p>Elevate your brand with our marketing strategies encompassing digital campaigns, branding, market research, and analytics for targeted audience engagement and business growth.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container mx-auto px-4" id="creativeSolution">
//                     <div className="col-lg-12">
//                         <div className="section-title center-title">
//                             <h2>Creative Solution</h2>
//                         </div>
//                         <br />
//                     </div>
//                     <div className="row grid grid-cols-3 gap-4">
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-3.png" alt="" />
//                                 </div>
//                                 <h4>Graphic Design</h4>
//                                 <p>Eye-catching visuals for branding, marketing collateral, and digital platforms, crafted with creativity and precision to enhance brand identity.</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-4.png" alt="" />
//                                 </div>
//                                 <h4>Content Creation</h4>
//                                 <p>Compelling content across platforms: blogs, articles, videos, and social media. Engage your audience with impactful storytelling and informative resources.</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                             <div className="services__item">
//                                 <div className="services__item__icon">
//                                     <img src="img/icons/si-4.png" alt="" />
//                                 </div>
//                                 <h4>Video hosting</h4>
//                                 <p>Crafting cohesive brand identities with logos, color schemes, and brand guidelines that resonate with your audience and set you apart.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default ServicesPage;

