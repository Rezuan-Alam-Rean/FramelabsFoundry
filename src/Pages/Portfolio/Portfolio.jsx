
import { useState } from 'react';
import { FaPlay } from "react-icons/fa";



const Portfolio = () => {

    const workItems = [
        {
          id: 1,
          title: 'Long Form Project A',
    
          videoLink: 'https://drive.google.com/file/d/1tJ1H_xkyxzAS-Te8gPnZD6QQEnGn_1yx/preview',
          thumbnail: 'https://i.ibb.co/0G3ngjv/Screenshot-2024-05-26-231945.png',
          category: 'Long Form',
        },
        {
          id: 2,
          title: 'Long Form Project B',
    
          videoLink: 'https://drive.google.com/file/d/1GzCK9AvcpDeHfaYmO6tV_ROab5N4_YN6/preview',
          thumbnail: 'https://i.ibb.co/h9x97gD/Screenshot-2024-05-26-232133.png',
          category: 'Long Form',
        },
        {
          id: 3,
          title: 'Long Form Project C',
          videoLink: 'https://drive.google.com/file/d/1avm8vVFjvk2o8hr5TZtMvrMXssA8NF_Q/preview',
          thumbnail: 'https://i.ibb.co/q0H7sqy/Screenshot-2024-05-26-232340.png',
          category: 'Long Form',
        },
        {
          id: 4,
          title: 'Long Form Project D',
          videoLink: 'https://drive.google.com/file/d/1TY9of6WoOzMXRWktuuSIz2q1QBazSFPg/preview',
          thumbnail: 'https://i.ibb.co/929Wvzj/Screenshot-2024-05-27-003730.png',
          category: 'Long Form',
        },
        {
          id: 5,
          title: 'Long Form Project E',
          videoLink: 'https://drive.google.com/file/d/1kBr3csxetbqyBjHL6Rdnq98AW7xvKdrw/preview',
          thumbnail: 'https://i.ibb.co/HrDjcks/Screenshot-2024-05-27-003747.png',
          category: 'Long Form',
        },
        {
          id: 6,
          title: 'Long Form Project F',
          videoLink: 'https://drive.google.com/file/d/1exH5LzNj9yuk_kJuTWJ1b_QMWkrEPYrw/preview',
          thumbnail: 'https://i.ibb.co/1Xt7VxT/Screenshot-2024-05-27-003759.png',
          category: 'Long Form',
        },
        {
          id: 7,
          title: 'Long Form Project G',
          videoLink: 'https://drive.google.com/file/d/1CdVT9roYkpUMz4lZjuKbSwE_NZ6a6vCA/preview',
          thumbnail: 'https://i.ibb.co/F7y53qW/Screenshot-2024-05-27-003822.png',
          category: 'Long Form',
        },
        // Short Form
        {
          id: 8,
          title: 'Short Form Project 1',
          videoLink: 'https://drive.google.com/file/d/1LJVGLqa_NMBgoVXXdObStyDG6tc7-jJe/preview', // 
          thumbnail: 'https://i.ibb.co/DbPfWLT/image.png',
          category: 'Short Form',
        },
        {
          id: 9,
          title: 'Short Form Project 2',
          videoLink: 'https://drive.google.com/file/d/1xVz5rHr7AMVb7lsviZVlrdpxmHrAwul4/preview', // 
          thumbnail: 'https://i.ibb.co/hKHMnHX/image.png',
          category: 'Short Form',
        },
        {
          id: 10,
          title: 'Short Form Project 3',
          videoLink: 'https://drive.google.com/file/d/13ifFjDhgnAinXyHeOBm8eIEfFXTFo3vc/preview', // 
          thumbnail: 'https://i.ibb.co/GW4JR0d/image.png',
          category: 'Short Form',
        },
        {
          id: 11,
          title: 'Short Form Project 4',
          videoLink: 'https://drive.google.com/file/d/1OprIUTRm0ED0SorRwtawVNvYjBZ5LeNM/preview', // 
          thumbnail: 'https://i.ibb.co/NxbG7yv/image.png',
          category: 'Short Form',
        },
        // Crime Niche
        {
          id: 12,
          title: 'Crime Niche Project 1',
          videoLink: 'https://drive.google.com/file/d/1nFxZcPtgOUB_KFABVPf8ocFwAmMxmUmV/preview', // 
          thumbnail: 'https://i.ibb.co/TTBLqCQ/image.png',
          category: 'Crime Niche',
        },
        {
          id: 13,
          title: 'Crime Niche Project 2',
          videoLink: 'https://drive.google.com/file/d/1_QSwj3MQtU_f8KvVA7QkUrdCp_Xsg0jN/preview', // 
          thumbnail: 'https://i.ibb.co/4F4DTTM/image.png',
          category: 'Crime Niche',
        },
        {
          id: 14,
          title: 'Crime Niche Project 3',
          videoLink: 'https://drive.google.com/file/d/1-j8QK6FZGjPxqaVMUoWLVO_OsimjdcS5/preview', // 
          thumbnail: 'https://i.ibb.co/hZtYbNz/image.png',
          category: 'Crime Niche',
        },
        {
          id: 15,
          title: 'Crime Niche Project 4',
          videoLink: 'https://drive.google.com/file/d/1ZpyByPIZ7W3WgbzdP8FDI5MpWAxwwpTO/preview', // 
          thumbnail: 'https://i.ibb.co/X8tLfWX/image.png',
          category: 'Crime Niche',
        },
        // Documentary Style
        {
          id: 16,
          title: 'Documentary Style Project 1',
          videoLink: 'https://drive.google.com/file/d/1mL8cA6F22Uzs97sEPT3yEDrJuX7U4wxP/preview', // 
          thumbnail: 'https://i.ibb.co/7btL9h2/image.png',
          category: 'Documentary Style',
        },
        {
          id: 17,
          title: 'Documentary Style Project 2',
          videoLink: 'https://drive.google.com/file/d/1HvZayDJeBwxEGL0IuyHvcnhOvYgyUzT1/preview', // 
          thumbnail: 'https://i.ibb.co/vxqFvvC/image.png',
          category: 'Documentary Style',
        },
        {
          id: 18,
          title: 'Documentary Style Project 3',
          videoLink: 'https://drive.google.com/file/d/1-x3JH_SM8NlcqLx66CboZAg8417pw3V9/preview', // 
          thumbnail: 'https://i.ibb.co/cv943rP/image.png',
          category: 'Documentary Style',
        },
    
        // Talking Head
        {
          id: 19,
          title: 'Talking Head Project 1',
          videoLink: 'https://drive.google.com/file/d/1lm5uFG0YXCe5uZ1ijqZj38XF1fPw_-QK/preview',
          thumbnail: 'https://i.ibb.co/WHqYWPZ/image.png',
          category: 'Talking Head',
        },
        {
          id: 20,
          title: 'Talking Head Project 2',
          videoLink: 'https://drive.google.com/file/d/1Sew7s7hpUhMlJMvhYvQufR-9L6d-smPJ/preview',
          thumbnail: 'https://i.ibb.co/Fw2PH2T/image.png',
          category: 'Talking Head',
        },
        {
          id: 21,
          title: 'Talking Head Project 3',
          videoLink: 'https://drive.google.com/file/d/1ZBxS7H2bVDw0ima2N24oYCoQWbuWV3LF/preview',
          thumbnail: 'https://i.ibb.co/DD4YBXM/image.png',
          category: 'Talking Head',
        },
        {
          id: 22,
          title: 'Talking Head Project 4',
          videoLink: 'https://drive.google.com/file/d/1ImPotDLQu7YRCNK1crVwP4tJPwHfhP5v/preview',
          thumbnail: 'https://i.ibb.co/NK7PhWB/image.png',
          category: 'Talking Head',
        },
        {
          id: 23,
          title: 'Talking Head Project 5',
          videoLink: 'https://drive.google.com/file/d/1UbLtQgCW1mlvV-Yo8BAcR1lb9SFQSGDz/preview',
          thumbnail: 'https://i.ibb.co/z7Np98D/image.png',
          category: 'Talking Head',
        },
        {
          id: 24,
          title: 'Talking Head Project 6',
          videoLink: 'https://drive.google.com/file/d/1XSY2r69j0dhhnwEO_lzTCW_ld0KAoA98/preview',
          thumbnail: 'https://i.ibb.co/Wsw8499/image.png',
          category: 'Talking Head',
        },
    
        // Cash Cow
        {
          id: 25,
          title: 'Cash Cow Project 1',
          videoLink: 'https://drive.google.com/file/d/16aPVov8U0K9dikqTImkGqOH812dVYg3G/preview',
          thumbnail: 'https://i.ibb.co/0hCLQwc/image.png',
          category: 'Cash Cow',
        },
        {
          id: 26,
          title: 'Cash Cow Project 2',
          videoLink: 'https://drive.google.com/file/d/1Zvr32CEbHWvx_JauzjQ_b1QKMQuAdtJV/preview',
          thumbnail: 'https://i.ibb.co/RgXRgkc/image.png',
          category: 'Cash Cow',
        },
        {
          id: 27,
          title: 'Cash Cow Project 3',
          videoLink: 'https://drive.google.com/file/d/1ZzwH8chI7Uuy_xos8wCevWJZh58QCAcq/preview',
          thumbnail: 'https://i.ibb.co/XbR0xXz/image.png',
          category: 'Cash Cow',
        },
        {
          id: 28,
          title: 'Cash Cow Project 4',
          videoLink: 'https://drive.google.com/file/d/1JBKFYgmgshXceHCxdH_IHTNRJDrfWP8t/preview',
          thumbnail: 'https://i.ibb.co/LxGvDpK/image.png',
          category: 'Cash Cow',
        },
    
      ];
      // All unique categories
      const categories = [...new Set(workItems.map((item) => item.category))];
    
      // State to track selected category and filtered items
      const [selectedCategory, setSelectedCategory] = useState('All'); // Default to show all
      const [selectedVideo, setSelectedVideo] = useState(null);
      const filteredItems = selectedCategory === 'All'
        ? workItems
        : workItems.filter((item) => item.category === selectedCategory);
    
      const openModal = (videoLink) => {
        setSelectedVideo(videoLink);
      };
    
    
      const closeModal = () => {
        setSelectedVideo(null);
      };
      const itemsPerPage = 5; // Number of items per page
      const [currentPage, setCurrentPage] = useState(1);
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
      const paginatedItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    
    

    return (
        <div className="bg-cover bg-center pt-12" >
            {/* style={{ backgroundImage: `url("img/breadcrumb-bg.jpg")` }} */}
            <div className="container mx-auto ">
                <div className="text-center pt-20 ">
                    <h2 className="text-3xl mb-8 text-white font-bold">Portfolio</h2>
                   
                </div>
                {/* Category Selection */}
      <div data-aos="zoom-in-right" className=" px-6 ">
        <div>
          {/* <span className="block mb-2 text-xs font-semibold uppercase tracking-wide">PORTFOLIO</span> */}
          <h2 className="text-xl mb-4 mt-2 text-slate-100 font-extrabold text-center tracking-tight md:text-2xl">Filter our  works by  category </h2>
        </div>
        <button
          className=" gap-x-4 mt-6 mb-6  w-full"
          value={selectedCategory}
          onClick={(e) => setSelectedCategory(e.target.value)}
        >
          <option className=' text-white mr-3 btn btn-sm  mt-3 mb-3 btn-info btn-outline ' value="All">All Categories</option>
          {categories.map((category) => (
            <option className=' btn-info btn-outline btn btn-sm gap-x-5 mt-3 mb-3 mr-3 text-white  ' key={category} value={category}>
              {category}
            </option>
          ))}
        </button>
      </div>
               
                <div  className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-8 px-4 md:px-28">
      

      {/* Work Items */}
      {paginatedItems.map((item) => (
          

        <div  key={item.id} className="group  relative mx-auto xl:min-w-[400px] max-w-[350px]  overflow-hidden bg-slate-950   text-white  shadow-lg rounded-lg  cursor-pointer border transition-all duration-700 hover:scale-110">

          <div data-aos="zoom-in" className="relative z-10 ">
            <img src={item.thumbnail} alt={item.title} className="w-full h-full xl:h-36  object-cover" />
            <button
              onClick={() => openModal(item.videoLink)}
              className="absolute z-10 inset-0 my-auto mx-auto btn btn-circle flex items-center justify-center"
            >
              <FaPlay />
            </button>
            <div className='px-6 py-6'>
              <h2 className="card-title text-white">{item.title}</h2>
              <p className="text-slate-300">{item.category}</p>

            </div>
          </div>
        </div>


      ))}

       {/* Pagination */}
       <div className="flex justify-center gap-x-5 mt-4">
  {currentPage > 1 && (
    <button
      onClick={() => handlePageChange(currentPage - 1)}
      className="w-44 mt-4 h-14 px-4 border-2 border-sky-300 text-white font-black rounded-full hover:text-white duration-300 z-0 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-500 group-hover:bg-sky-500 group-hover:duration-500 -z-10 "></span>
      Previous
    </button>
  )}
  {currentPage < Math.ceil(filteredItems.length / itemsPerPage) && (
    <button
      onClick={() => handlePageChange(currentPage + 1)}
      className="w-44 z-0 mt-4 h-14 px-4 border-2 border-sky-300 text-white font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-500 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
      Next
    </button>
  )}
</div>


      {/* Video Modal */}
      {selectedVideo && (

        <dialog id="my_modal_3" className="fixed border shadow-2xl rounded-lg inset-0 z-30 overflow-y-auto" open>
          <div className="flex items-center justify-center ">
            <div className=" bg-black   rounded shadow-lg relative">
              <button className="absolute top-0 right-1 text-black bg-slate-50 btn-md   btn btn-circle hover:text-white font-extrabold text-lg" onClick={closeModal}>✕</button>
              <iframe

                className=" h-96 md:h-[430px] p-4 pt-10 w-full md:w-[710px]"
                src={selectedVideo}
                title="video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture ; "
                allowFullScreen

              ></iframe>
            </div>
          </div>
        </dialog>

      )}
    </div>
            </div>
        </div>
    );
}

export default Portfolio;

// const Portfolio = () => {
//     return (
//         <div>
//             <div>
//             <div className="breadcrumb-option spad bg-cover bg-center" style={{ backgroundImage: `url(img/breadcrumb-bg.jpg)` }}>
//                 <div className="container mx-auto px-4">
//                     <div className="row grid grid-cols-1 gap-4">
//                         <div className="col-lg-12 text-center col-span-1">
//                             <div className="breadcrumb__text">
//                                 <h2>Portfolio</h2>
//                                 <div className="breadcrumb__links">
//                                     <a href="index.html">Home</a>
//                                     <span>Portfolio</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <section className=" w-full bg-black h-screen ">
//                 <div className="">
                    
//                                 <div className=" flex items-center h-screen w-1/2 px-20  ">
//                                     <div className=" space-y-8   text-white  ">
//                                         <span className="text-2xl" >This is a Place Holder</span>
//                                         <h2 className="text-6xl font-bold" >Sorry for the inconveience</h2>
//                                         <h4 className="text-2xl">Come back later for more content</h4>
//                                     </div>
//                                 </div>
                            
//                 </div>
//             </section>
//         </div>
//         </div>
//     );
// };

// export default Portfolio;
