

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
    const contactItems = [
        { icon: <FaMapMarkerAlt />, title: 'Address', description: 'Road- 03,Dhaka Uddan Housing, Dhaka, Bangladesh' },
        { icon: <FaPhone />, title: 'Hotline', description: 'xxxxxxxxxxx' },
        { icon: <FaEnvelope />, title: 'Email', description: 'support@framelabsfoundry.com ' },
    ];

    return (
        <div className="bg-cover bg-center pt-12 mb-8 pb-8 md:px-24" >
            {/* style={{ backgroundImage: `url("img/breadcrumb-bg.jpg")` }} */}
            <div className="container mx-auto pt-20 px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl text-white font-bold">Contact us</h2>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {contactItems.map((item, index) => (
                        <div key={index} className="cursor-pointer border transition-all duration-700 hover:scale-110 bg-gradient-to-r from-[#0D061F] to-[#251E35] shadow-lg rounded-lg ">

                            <div data-aos="zoom-in" className='p-4 flex items-center  space-x-4'>
                                <div className="text-2xl text-blue-500">{item.icon}</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                    <p className="text-slate-300  ">{item.description}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div data-aos="zoom-in" className="   ">
                    <h2 className="text-3xl text-center mt-8 mb-8 text-white font-bold"> Our location in map</h2>
                    <div className='flex justify-center'>
                        <iframe className='h-80 w-full md:w-[1000px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5514065985467!2d90.34052791204238!3d23.763371228572606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c08273623b31%3A0xe53ceed0d39fadfd!2sDhaka%20Uddan%20Housing%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710260003592!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;


// import { Link } from "react-router-dom";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
// const Contact = () => {
//     const contactItems = [
//         { icon: <FaMapMarkerAlt />, title: 'Address', description: 'Road- 03,Dhaka Uddan Housing, Dhaka, Bangladesh' },
//         { icon: <FaPhone />, title: 'Hotline', description: 'xxxxxxxxxxx' },
//         { icon: <FaEnvelope />, title: 'Email', description: 'support@framelabsfoundry.com' },
//     ];

//     return (
//         <div className="bg-cover bg-center p-12 md:p-8 sm:p-4" style={{ backgroundImage: `url("img/breadcrumb-bg.jpg")` }}>
//             <div className="container mx-auto pt-20 md:pt-16 sm:pt-12 px-4">
//                 <div className="text-center mb-8">
//                     <h2 className="text-3xl md:text-2xl sm:text-xl text-white font-bold">Contact us</h2>
//                     <div className="flex justify-center space-x-4 mt-2">
//                         <Link to="/" className="text-white hover:text-blue-700">Home</Link>
//                         <span className='text-blue-500'>Contact</span>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-4 mb-8">
//                     {contactItems.map((item, index) => (
//                         <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4">
//                             <div className="text-2xl text-blue-500">{item.icon}</div>
//                             <div>
//                                 <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
//                                 <p className="text-gray-700 ">{item.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="aspect-w-20 aspect-h-9">
//                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5514065985467!2d90.34052791204238!3d23.763371228572606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c08273623b31%3A0xe53ceed0d39fadfd!2sDhaka%20Uddan%20Housing%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710260003592!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps"></iframe>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Contact;


// const Contact = () => {
//     return (
//         <div>
//             <div className="breadcrumb-option spad bg-cover bg-center" style={{ backgroundImage: `url(img/breadcrumb-bg.jpg)` }}>
//                 <div className="container mx-auto px-4">
//                     <div className="row grid grid-cols-1 gap-4">
//                         <div className="col-lg-12 text-center col-span-1">
//                             <div className="breadcrumb__text">
//                                 <h2>Contact us</h2>
//                                 <div className="breadcrumb__links">
//                                     <a href="#.html">Home</a>
//                                     <span>Contact</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <section className="contact-widget spad">
//                 <div className="container mx-auto px-4">
//                     <div className="row grid grid-cols-3 gap-4">
//                         <div className="col-lg-4 col-md-6 col-md-6 col-md-3 col-span-1">
//                             <div className="contact__widget__item">
//                                 <div className="contact__widget__item__icon">
//                                     <i className="fa fa-map-marker"></i>
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Address</h4>
//                                     <p>Road- 03,Dhaka Uddan Housing, Dhaka, Bangladesh</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-md-6 col-md-3 col-span-1">
//                             <div className="contact__widget__item">
//                                 <div className="contact__widget__item__icon">
//                                     <i className="fa fa-phone"></i>
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Hotline</h4>
//                                     <p>xxxxxxxxxxx</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-md-6 col-md-3 col-span-1">
//                             <div className="contact__widget__item">
//                                 <div className="contact__widget__item__icon">
//                                     <i className="fa fa-map-marker"></i>
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Email</h4>
//                                     <a className="text-white" href="mailto:support@framelabsfoundry.com">support@framelabsfoundry.com</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="contact spad">
//                 <div className="container mx-auto px-4">
//                     <div className="row grid grid-cols-2 gap-4">
//                         <div className="col-lg-6 col-md-6 col-span-1">
//                             <div className="contact__map">
//                                 <iframe
//                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5514065985467!2d90.34052791204238!3d23.763371228572606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c08273623b31%3A0xe53ceed0d39fadfd!2sDhaka%20Uddan%20Housing%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710260003592!5m2!1sen!2sbd"
//                                     width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
//                                     referrerPolicy="no-referrer-when-downgrade" title="Google Maps"></iframe>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Contact;

// const Contact = () => {
//     const contactItems = [
//         { icon: 'fa fa-map-marker', title: 'Address', description: 'Road- 03,Dhaka Uddan Housing, Dhaka, Bangladesh' },
//         { icon: 'fa fa-phone', title: 'Hotline', description: 'xxxxxxxxxxx' },
//         { icon: 'fa fa-envelope', title: 'Email', description: 'support@framelabsfoundry.com' },
//     ];

//     return (
//         <div className="bg-cover bg-center p-12" style={{ backgroundImage: `url("img/breadcrumb-bg.jpg")` }}>
//             <div className="container mx-auto px-4">
//                 <div className="text-center mb-8">
//                     <h2 className="text-3xl text-gray-900 font-bold">Contact us</h2>
//                     <div className="flex justify-center space-x-4 mt-2">
//                         <a href="index.html" className="text-blue-500 hover:text-blue-700">Home</a>
//                         <span>Contact</span>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//                     {contactItems.map((item, index) => (
//                         <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4">
//                             <i className={`${item.icon} text-2xl text-blue-500`}></i>
//                             <div>
//                                 <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
//                                 <p className="text-gray-700">{item.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="aspect-w-16 aspect-h-9">
//                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5514065985467!2d90.34052791204238!3d23.763371228572606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c08273623b31%3A0xe53ceed0d39fadfd!2sDhaka%20Uddan%20Housing%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710260003592!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps"></iframe>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Contact;

