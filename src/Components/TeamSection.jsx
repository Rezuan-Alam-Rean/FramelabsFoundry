import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";


const TeamSection = () => {
    const teamMembers = [
        { iconFB: <FaFacebookSquare />, iconin: <AiFillInstagram />, iconln: <FaLinkedin />, name: 'S. M. Muhosin', role: 'Founder & CEO', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0iHvSE1i0sQlSKtYRk_YHb8eYtINiSwZrpwGfAutrlwehrEmOheKRE1zevQ4mTZRhNM&usqp=CAU', socials: ['FaFacebookSquare', 'FaFacebookSquare', 'FaFacebookSquare'] },
        { iconFB: <FaFacebookSquare />, iconin: <AiFillInstagram />, iconln: <FaLinkedin />, name: 'Provab M. Khyang', role: 'Head HR & Admin Department', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0iHvSE1i0sQlSKtYRk_YHb8eYtINiSwZrpwGfAutrlwehrEmOheKRE1zevQ4mTZRhNM&usqp=CAU', socials: ['FaFacebookSquare'] },
        {iconFB: <FaFacebookSquare />, iconin: <AiFillInstagram />, iconln: <FaLinkedin />, name: 'Ahmed Shazon', role: 'Project Manager \n Video - Creative Department', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0iHvSE1i0sQlSKtYRk_YHb8eYtINiSwZrpwGfAutrlwehrEmOheKRE1zevQ4mTZRhNM&usqp=CAU', socials: ['facebook', 'twitter', 'FaFacebookSquare'] },
        {iconFB: <FaFacebookSquare />, iconin: <AiFillInstagram />, iconln: <FaLinkedin />, name: 'A. Shahriar Shazan', role: 'Project Manager \n Video - Creative Department', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0iHvSE1i0sQlSKtYRk_YHb8eYtINiSwZrpwGfAutrlwehrEmOheKRE1zevQ4mTZRhNM&usqp=CAU', socials: ['facebook', 'twitter', 'FaFacebookSquare'] },
    ];

    return (
        <section className="bg-cover bg-no-repeat bg-center mt-20 mx-4 md:mx-24" >
            {/* style={{ backgroundImage: `url("img/team-bg.jpg")` }} */}
            <div className="container mx-auto mb-4 px-4">
                <div data-aos="flip-left" className="text-center mb-8">
                    <span className="text-xl text-white font-semibold block">Get Familiar With the faces</span>
                    <h2 className="text-3xl text-white font-bold mt-2">Meet Our Team</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div  key={index} className=" cursor-pointer border transition-all duration-700 hover:scale-105 bg-gradient-to-r from-[#0D061F] to-[#251E35]  shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
                            <div data-aos="zoom-in" className="">

                            <img src={member.image} alt="" className="mb-4 w-full h-64 object-cover rounded-t-lg" />
                            <h4 className="text-lg font-semibold text-white mt-4">{member.name}</h4>
                            <p className="text-white">{member.role}</p>
                            <div className="flex justify-center mt-4">
                               
                                    <a  href="/" className="text-white hover:text-blue-500 mx-2">
                                        {member.iconFB}
                                    </a>
                                    <a  href="/" className="text-white hover:text-blue-500 mx-2">
                                        {member.iconin}
                                    </a>
                                    <a  href="/" className="text-white hover:text-blue-500 mx-2">
                                        {member.iconln}
                                    </a>
                               
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;



// const TeamSection = () => {
//     const teamMembers = [
//         { name: 'S. M. Muhosin', role: 'Founder & CEO', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0iHvSE1i0sQlSKtYRk_YHb8eYtINiSwZrpwGfAutrlwehrEmOheKRE1zevQ4mTZRhNM&usqp=CAU', socials: ['facebook', 'FaFacebookSquare', 'instagram'] },
//         { name: 'Provab M. Khyang', role: 'Head HR & Admin Department', image: 'img/testimonial-bg.jpg', socials: ['linkedin'] },
//         { name: 'Ahmed Shazon', role: 'Project Manager \n Video - Creative Department', image: 'img/testimonial-bg.jpg', socials: ['facebook', 'twitter', 'instagram'] },
//         { name: 'A. Shahriar Shazan', role: 'Project Manager \n Video - Creative Department', image: 'img/testimonial-bg.jpg', socials: ['facebook', 'twitter', 'instagram'] },
//     ];

//     return (
//         <section className="team spad bg-cover bg-no-repeat bg-center p-12" style={{ backgroundImage: `url("img/team-bg.jpg")` }}>
//             <div className="container mx-auto">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="section-title team__title">
//                             <span className="text-xl text-gray-700 font-semibold">Get Familiar With the faces</span>
//                             <h2 className="text-3xl text-white font-bold mt-2">Meet Our Team</h2>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {teamMembers.map((member, index) => (
//                         <div key={index} className="">
//                             <div className="team__item bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${member.image})` }}>
//                                 <div className="team__item__text">
//                                     <h4 className="text-lg font-semibold text-white">{member.name}</h4>
//                                     <p className="text-gray-700">{member.role}</p>
//                                     <div className="team__item__social">
//                                         {member.socials.map((social, i) => (
//                                             <a key={i} href="pages.html" className="text-gray-500 hover:text-blue-500 mr-4">
//                                                 <i className={`fa fa-${social}`}>{social}</i>
//                                             </a>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default TeamSection;
