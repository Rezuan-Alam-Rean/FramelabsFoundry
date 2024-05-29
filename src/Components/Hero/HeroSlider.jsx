
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
    const slides = [
        { image: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6', title: 'Welcome To FrameLabs Foundry', description: 'All your business Solution\'s Made Easy' },
        { image: 'https://images.unsplash.com/photo-1614963326505-843868e1d83a', title: 'Personal or professional Video Solutions', description: 'we\'ve got everything you need !' },
        { image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg', title: 'Ideas into Reality Web Development', description: 'let us do the work while you shine online!' },
        { image: 'https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg', title: 'Easy and affordable IT Solution', description: 'Don\'t sweat the details, we got you covered!' },
        { image: 'https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg', title: 'One Family, One Roof All your Business Needs', description: 'One Roof All your Business Needs' },
    ];
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, 2500);
        return () => clearTimeout(timer);
    });

    return (
        <div className="carousel  md:max-h-[700px] h-screen w-full">
            {slides.map((slide, index) => (
                <div key={index} className={`carousel-item  opacity-95  md:max-h-[700px] w-full h-full ${index === current ? 'block' : 'hidden'}`}
                     style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="items-center pt-10 md:px-20 md:max-h-[700px] flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] space-y-8 text-white  w-full px-2 md:w-3/5 h-screen">
                        <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className="space-y-8 ml-8  transition-opacity">
                            <h2 className=" select-none font-bold transition-opacity  text-4xl md:text-5xl">{slide.title}</h2>
                            <p className=' select-none transition-opacity text-xl '>{slide.description}</p>
                            <div>
                                <Link to="Services" >
                                <button className="w-44 h-14 px-4 border-2 border-sky-300 text-white font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-500 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>Discover More</button>
                                
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <button onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)} className="btn btn-circle">❮</button>
                        <button onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)} className="btn btn-circle">❯</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HeroSlider;





// const HeroSlider = () => {
//     return (
//         <div>
//             <div className="carousel h-screen w-full">
//                 <div id="slide1" className="carousel-item  relative  w-full">
//                     <img src="https://images.unsplash.com/photo-1484807352052-23338990c6c6" className="w-full  h-screen" />
//                     <div className=" items-center md:px-20 flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] space-y-8 text-white absolute  w-full px-2 md:w-2/4 h-screen   ">

//                         <div className="space-y-8 ml-8 ">
//                             <h2 className="font-bold  text-4xl md:text-6xl">Affordable Price For Car Servicing</h2>
//                             <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
//                             <div>
//                                 <button className="btn mr-5 btn-outline btn-error">Discover More</button>
//                                 <button className="btn btn-outline btn-error"> Project</button>

//                             </div>

//                         </div>
//                     </div>
//                     <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
//                         <a href="#slide6" className="btn btn-circle">❮</a>
//                         <a href="#slide2" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide2" className="carousel-item relative  w-full">
//                     <img src="https://images.unsplash.com/photo-1614963326505-843868e1d83a" className="w-full h-screen" />
//                     <div className=" items-center  flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] space-y-8 text-white absolute  w-1/3 h-screen   ">

//                         <div className="space-y-8 ml-8 ">
//                             <h2 className="font-bold  text-4xl md:text-6xl">Affordable Price For Car Servicing</h2>
//                             <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
//                             <div>
//                                 <button className="btn mr-5 btn-outline btn-error">Discover More</button>
//                                 <button className="btn btn-outline btn-error">Latest Project</button>

//                             </div>

//                         </div>
//                     </div>
//                     <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
//                         <a href="#slide1" className="btn btn-circle">❮</a>
//                         <a href="#slide3" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide3" className="carousel-item relative  w-full">
//                     <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg" className="w-full h-screen" />
//                     <div className=" items-center  flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] space-y-8 text-white absolute  w-1/3 h-screen   ">

//                         <div className="space-y-8 ml-8 ">
//                             <h2 className="font-bold  text-4xl md:text-6xl">Affordable Price For Car Servicing</h2>
//                             <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
//                             <div>
//                                 <button className="btn mr-5 btn-outline btn-error">Discover More</button>
//                                 <button className="btn btn-outline btn-error">Latest Project</button>

//                             </div>

//                         </div>
//                     </div>
//                     <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
//                         <a href="#slide2" className="btn btn-circle">❮</a>
//                         <a href="#slide4" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide4" className="carousel-item relative  w-full">
//                     <img src="https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg" className="w-full h-screen" />
//                     <div className=" items-center  flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] space-y-8 text-white absolute  w-1/3 h-screen   ">

//                         <div className="space-y-8 ml-8 ">
//                             <h2 className="font-bold  text-4xl md:text-6xl">Affordable Price For Car Servicing</h2>
//                             <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
//                             <div>
//                                 <button className="btn mr-5 btn-outline btn-error">Discover More</button>
//                                 <button className="btn btn-outline btn-error">Latest Project</button>

//                             </div>

//                         </div>
//                     </div>
//                     <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
//                         <a href="#slide3" className="btn btn-circle">❮</a>
//                         <a href="#slide5" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide5" className="carousel-item relative  w-full">
//                     <img src="https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg" className="w-full h-screen" />
//                     <div className=" items-center  flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] space-y-8 text-white absolute  w-1/3 h-screen   ">

//                         <div className="space-y-8 ml-8 ">
//                             <h2 className="font-bold  text-4xl md:text-6xl">Affordable Price For Car Servicing</h2>
//                             <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
//                             <div>
//                                 <button className="btn mr-5 btn-outline btn-error">Discover More</button>
//                                 <button className="btn btn-outline btn-error">Latest Project</button>

//                             </div>

//                         </div>
//                     </div>
//                     <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
//                         <a href="#slide4" className="btn btn-circle">❮</a>
//                         <a href="#slide1" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
               
//             </div>
//         </div>
//     );
// };

// export default HeroSlider;


// const HeroSlider = () => {
//     const slides = [
//         { image: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6', title: 'Welcome To FrameLabs Foundry', description: 'All your business Solution\'s Made Easy' },
//         { image: 'https://images.unsplash.com/photo-1614963326505-843868e1d83a', title: 'Personal or professional Video Solutions', description: 'we\'ve got everything you need !' },
//         { image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg', title: 'Ideas into Reality Web Development', description: 'let us do the work while you shine online!' },
//         { image: 'https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg', title: 'Easy and affordable IT Solution', description: 'Don\'t sweat the details, we got you covered!' },
//         { image: 'https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg', title: 'One Family, One Roof All your Business Needs', description: 'Learn More' },
//     ];

//     return (
//         <div className="carousel h-screen w-full">
//             {slides.map((slide, index) => (
//                 <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
//                     <img src={slide.image} className="w-full h-screen" />
//                     <div className="items-center md:px-20 flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] space-y-8 text-white absolute w-full px-2 md:w-2/4 h-screen">
//                         <div className="space-y-8 ml-8">
//                             <h2 className="font-bold text-4xl md:text-6xl">{slide.title}</h2>
//                             <p>{slide.description}</p>
//                             <div>
//                                 <button className="btn mr-5 btn-outline btn-error">Discover More</button>
//                                 <button className="btn btn-outline btn-error">Project</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="absolute flex justify-end gap-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
//                         <a href={`#slide${index === 0 ? slides.length : index}`} className="btn btn-circle">❮</a>
//                         <a href={`#slide${index === slides.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default HeroSlider;


