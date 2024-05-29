
const Counter = () => {
    const counters = [
        { image: 'img/icons/ci-1.png', number: 845, title: 'Completed Projects',  },
        { image: 'img/icons/ci-2.png', number: 5, title: 'Total clients' },
        { image: 'img/icons/youtube.png', number: 8, title: 'Youtube Channels' },
        { image: 'img/icons/employee.png', number: 35, title: 'Employees' },
    ];

    return (
        <section  className="bg-cover bg-no-repeat bg-center p-4 mx-4 md:mx-24 mt-20 mb-20" >
            {/* style={{ backgroundImage: `url("img/team-bg.jpg")` }} */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {counters.map((counter, index) => (
                        <div  key={index} className=" cursor-pointer border transition-all duration-700 hover:scale-110 bg-gradient-to-r from-[#0D061F] to-[#251E35]  shadow-lg rounded-lg ">
                            <div className="flex flex-col items-center text-center p-4" data-aos="zoom-in" >

                            <img  src={counter.image} alt="" className="mb-4" />
                            <h2 className="text-3xl font-bold text-white mb-2">{counter.number}</h2>
                            <p className="text-lg text-white font-semibold mb-1">{counter.title}</p>
                            {/* <p className="text-slate-100">{counter.subtitle}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Counter;



// const Counter = () => {
//     return (
//         <section className="counter">
//             <div className="container mx-auto px-4">
//                 <div className="counter__content grid grid-cols-4 gap-4">
//                     <div className="counter__item col-span-1">
//                         <div className="counter__item__text">
//                             <img src="img/icons/ci-1.png" alt="" />
//                             <h2 className="counter_num">845</h2>
//                             <p>Completed Projects</p>
//                             <p>and Counting</p>
//                         </div>
//                     </div>
//                     <div className="counter__item col-span-1">
//                         <div className="counter__item__text">
//                             <img src="img/icons/ci-2.png" alt="" />
//                             <h2 className="counter_num">5</h2>
//                             <p>Total clients</p>
//                         </div>
//                     </div>
//                     <div className="counter__item col-span-1">
//                         <div className="counter__item__text">
//                             <img src="img/icons/youtube.png" alt="" />
//                             <h2 className="counter_num">8</h2>
//                             <p>Youtube Channels</p>
//                         </div>
//                     </div>
//                     <div className="counter__item col-span-1">
//                         <div className="counter__item__text">
//                             <img src="img/icons/employee.png" alt="" />
//                             <h2 className="counter_num">35</h2>
//                             <p>Employees</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Counter;
