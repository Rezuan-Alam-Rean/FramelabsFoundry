
import { Link } from "react-router-dom";


const CallTo = () => {
    return (
        <section className="bg-cover opacity-90 md:mx-28 mx-6 bg-center mt-12 mb-8 p-12" style={{ backgroundImage: `url("https://i.ibb.co/4JVsWN8/1677134787011.png")` }}>
            <div className="container py-8  md:px-16">
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className=" py-5  text-white">
                    <h2 className="text-3xl  mt-3 mb-3 font-bold">Fresh People, Fresh Ideas <br /> Giving Wings to <br /> your Stories.</h2>
                    <p className="mt-6 mb-3">FrameLabs Foundry, Best place to work</p>
                    <Link to="Services" >
                        
                    <button className="w-44 mt-4 h-14 px-4 border-2 border-sky-300 text-white font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-500 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>Start your Career</button>
                        </Link>
                </div>
            </div>
        </section>
    );
}

export default CallTo;



// const CallTo = () => {
//     return (
//         <section className="callto spad bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co/4JVsWN8/1677134787011.png)` }}>
//             <div className="container mx-auto px-4">
//                 <div className="row grid grid-cols-2 gap-4">
//                     <div className="col-lg-8 col-span-2">
//                         <div className="callto__text">
//                             <h2>Fresh People, Fresh Ideas <br /> Giving Wings to <br /> your Stories.</h2>
//                             <p>FrameLabs Foundry, Best place to work</p>
//                             <a href="pages.html" className="primary-btn">Start your Career</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
// export default CallTo;
