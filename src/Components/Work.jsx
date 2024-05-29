import { useState } from 'react';
import { FaPlay } from "react-icons/fa";

const Work = () => {

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
  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  // State for video modal

  return (
    <div  className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-8 px-4 md:px-28">
      {/* Category Selection */}
      <div data-aos="zoom-in-right" className=" ">
        <div>
          {/* <span className="block mb-2 text-xs font-semibold uppercase tracking-wide">PORTFOLIO</span> */}
          <h2 className="text-xl mb-4 mt-2 text-slate-100 font-extrabold tracking-tight md:text-2xl">Filter our  works by <br /> category </h2>
        </div>
        <select
          className="select bg-slate-950 text-white  select-bordered w-full"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option className=' text-white ' value="All">All Categories</option>
          {categories.map((category) => (
            <option className='  text-white ' key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

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
  );
};

export default Work;

// import  { useState } from 'react';

// const Work = () => {
//   const workItems = [
//     {
//       id: 1,
//       title: 'Project A',
//       videoLink: 'https://drive.google.com/file/d/1tJ1H_xkyxzAS-Te8gPnZD6QQEnGn_1yx/preview',
//
// thumbnail: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png',       category: 'Long Form',
//     },
//     {
//       id: 2,
//       title: 'Project B',
//       videoLink: 'https://drive.google.com/file/d/1GzCK9AvcpDeHfaYmO6tV_ROab5N4_YN6/preview',
//
// thumbnail: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png',       category: 'Short Form',
//     },
//     {
//       id: 3,
//       title: 'Project C',
//       videoLink: 'https://drive.google.com/file/d/13ifFjDhgnAinXyHeOBm8eIEfFXTFo3vc/preview',
//
// thumbnail: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png',       category: 'Crime Niche',
//     },
//     {
//       id: 4,
//       title: 'Project D',
//       videoLink: 'https://drive.google.com/file/d/1OprIUTRm0ED0SorRwtawVNvYjBZ5LeNM/preview',
//
// thumbnail: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png',       category: 'Documentary Style',
//     },
//     // Add more items as needed
//   ];

//   // State to track the selected video and category filter
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const openModal = (videoLink) => {
//     setSelectedVideo(videoLink);
//   };

//   const closeModal = () => {
//     setSelectedVideo(null);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredWorkItems = selectedCategory === 'All'
//     ? workItems
//     : workItems.filter(item => item.category === selectedCategory);

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       <div className="col-span-3">
//         <select
//           className="w-full p-2 border rounded-md"
//           value={selectedCategory}
//           onChange={(e) => handleCategoryChange(e.target.value)}
//         >
//           <option value="All">All Categories</option>
//           <option value="Long Form">Long Form</option>
//           <option value="Short Form">Short Form</option>
//           <option value="Crime Niche">Crime Niche</option>
//           <option value="Documentary Style">Documentary Style</option>
//           {/* Add other category options here */}
//         </select>
//       </div>
//       {filteredWorkItems.map((item) => (
//         <div key={item.id} className="p-4 border rounded-lg">
//           <h3 className="text-lg font-semibold">{item.title}</h3>
//           <button
//             onClick={() => openModal(item.videoLink)}
//             className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Play
//           </button>
//         </div>
//       ))}

//       {/* Video Modal */}
//       {selectedVideo && (
//         <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-lg">
//             <iframe
//               src={selectedVideo}
//               width="640"
//               height="360"
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//             <button
//               onClick={closeModal}
//               className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-md"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Work;


// import  { useState } from 'react';

// const Work = () => {
//   const workItems = [
//     {
//       id: 1,
//       title: 'Project A',
//       videoLink: 'https://drive.google.com/file/d/1tJ1H_xkyxzAS-Te8gPnZD6QQEnGn_1yx/preview',
//
// thumbnail: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png',       category: 'Long Form',
//     },
//     {
//       id: 2,
//       title: 'Project B',
//       videoLink: 'https://drive.google.com/file/d/1GzCK9AvcpDeHfaYmO6tV_ROab5N4_YN6/preview',
//
// thumbnail: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png',       category: 'Short Form',
//     },
//     {
//       id: 3,
//       title: 'Project C',
//       videoLink: 'https://drive.google.com/file/d/13ifFjDhgnAinXyHeOBm8eIEfFXTFo3vc/preview',
//
// thumbnail: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png',       category: 'Crime Niche',
//     },
//     {
//       id: 4,
//       title: 'Project D',
//       videoLink: 'https://drive.google.com/file/d/1OprIUTRm0ED0SorRwtawVNvYjBZ5LeNM/preview',
//
// thumbnail: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png',       category: 'Documentary Style',
//     },
//     // Add more items as needed
//   ];
  
//   // You can continue adding more projects to the array following the same pattern.
  

//   // State to track the selected video
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const openModal = (videoLink) => {
//     setSelectedVideo(videoLink);
//   };

//   const closeModal = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {workItems.map((item) => (
//         <div key={item.id} className="p-4 border rounded-lg">
//           <h3 className="text-lg font-semibold">{item.title}</h3>
//           <button
//             onClick={() => openModal(item.videoLink)}
//             className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Play
//           </button>
//         </div>
//       ))}

//       {/* Video Modal */}
//       {selectedVideo && (
//         <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-lg">
//             <iframe
//               src={selectedVideo}
//               width="640"
//               height="360"
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//             <button
//               onClick={closeModal}
//               className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-md"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Work;


// // Work.js

// import  { useState } from 'react';

// const Work = () => {
  // const workItems = [
  //   {
  //     id: 1,
  //     title: 'Project A',
  //     videoLink: 'https://drive.google.com/file/d/1JBKFYgmgshXceHCxdH_IHTNRJDrfWP8t/preview',
  //   },
  //   {
  //     id: 2,
  //     title: 'Project b',
  //     videoLink: 'https://drive.google.com/file/d/1ZzwH8chI7Uuy_xos8wCevWJZh58QCAcq/preview',
  //   },
  //   {
  //     id: 3,
  //     title: 'Project c',
  //     videoLink: 'https://drive.google.com/file/d/1JBKFYgmgshXceHCxdH_IHTNRJDrfWP8t/preview',
  //   },
  //   {
  //     id: 4,
  //     title: 'Project d',
  //     videoLink: 'https://drive.google.com/file/d/1JBKFYgmgshXceHCxdH_IHTNRJDrfWP8t/preview',
  //   },
  //   // Add more work items as needed
  // ];

//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const openModal = (videoLink) => {
//     setSelectedVideo(videoLink);
//   };

//   const closeModal = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {workItems.map((item) => (
//         <div key={item.id} className="p-4 border rounded-lg">
//           <h3 className="text-lg font-semibold">{item.title}</h3>
//           <button
//             onClick={() => openModal(item.videoLink)}
//             className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Play
//           </button>
//         </div>
//       ))}

//       {/* Video Modal */}
//       {selectedVideo && (
//         <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-lg">
//             <iframe
//               src={selectedVideo}
//               width="640"
//               height="360"
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//             <button
//               onClick={closeModal}
//               className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-md"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Work;


// import { useState } from 'react';
// import { FaPlay } from "react-icons/fa";

// const Work = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [videoId, setVideoId] = useState('');

//   const openModal = (id, itemId) => { // Pass itemId as additional argument
//     setIsModalOpen(true);
//     setVideoId(id); // Update videoId based on clicked item ID

//     // Optionally, preload the video based on itemId (consider user preference)
//     const videoIframe = document.getElementById(`video-${itemId}`);
//     if (videoIframe) {
//       videoIframe.setAttribute('preload', 'auto');
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setVideoId(''); // Reset video ID on close
//   };

//   const handleHover = (itemId, isEntering) => {
//     if (isEntering) {
//       // Preload video when hovering
//       const videoIframe = document.getElementById(`video-${itemId}`);
//       if (videoIframe) {
//         videoIframe.setAttribute('preload', 'auto');
//       }
//     }
//   };

//   const workItems = [
//     { id: 'tmjYf0I0gsg', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Top 10 Best Fighter Jets in the World', source: 'Youtube', channel: 'Future Discovery' },
//     { id: 'LXb3EKWsInQ', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Example', source: 'Youtube', channel: 'Future Discovery' },
//     { id: '8CFtF0I0gsg', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Elon Musk: "US Navy Just Created Something"', source: 'Youtube', channel: 'Voyager' },
//     { id: 'CjXmnOz_y5U', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Stomach Churning Things Nazis Did To Female Spies', source: 'Youtube', channel: 'Discoverize' },
//     { id: 'TT9107GwdBg', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Man Finds Ship in Jungle', source: 'Youtube', channel: 'Undercover' },
//     { id: '91afPxd0Qx8', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Why You Should Prioritize BEING ALONE', source: 'Youtube', channel: 'Noche Spiritualiy' },
//     { id: 'JjdQcjIz9JU', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Married With Children Scenes We Simply Cant Forget', source: 'Youtube', channel: 'Top Discovery' },
//   ];

//   return (
//     <section className="flex flex-wrap justify-center items-center  p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
//         {workItems.map((item) => (
//           <div
//             key={item.id}
//             className={`relative group bg-gradient-to-r from-[#0D061F] to-[#251E35] md:w-[400px] hover:opacity-110 transition duration-300 ease-in-out`}
//             onMouseEnter={() => handleHover(item.id, true)}
//             onMouseLeave={() => handleHover(item.id, false)}
            
//           >
//             <img src={item.image} alt="Work item"  className="w-full h-52 object-cover" />
//             <div className=" py-6 ">
//               <div className="p-4">
//                 <h4 className="text-white text-xl font-bold mt-3 mb-3">{item.title}</h4>
//                 <ul className="text-gray-300 mt-2">
//                   <li>{item.source}</li>
//                   <li>{item.channel}</li>
//                 </ul>
//               </div>
//             </div>
//             <button className="absolute z-10 inset-0 my-auto mx-auto btn btn-circle flex items-center justify-center" onMouseEnter={() => openModal(item.id, item.id)}>
//               <FaPlay />
//             </button>
//           </div>
//         ))}
//       </div>
//       {isModalOpen && (
//         <dialog id="my_modal_3" className="fixed inset-0 z-10 overflow-y-auto" open>
//           <div className="flex items-center justify-center ">
//             <div className="bg-white p-4 rounded shadow-lg relative">
//               <button className="absolute top-0 right-0 text-white bg-slate-800   btn btn-circle hover:text-gray-700 font-extrabold text-lg" onClick={closeModal}>✕</button>
//               <iframe
//                 id={`video-${videoId}`} // Assuming unique ID based on videoId
//                 className="h-96 w-full md:w-[650px]"
//                 src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} // Add autoplay query param (won't work on hover, but preloads)
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 onLoad={() => {
//                   const videoIframe = document.getElementById(`video-${videoId}`);
//                   if (videoIframe) {
//                     videoIframe.contentWindow.document.querySelector('video').muted = true;
//                   }
//                 }}
//               ></iframe>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </section>
//   );
// };

// export default Work;


// import  { useState } from 'react';
// import { FaPlay } from "react-icons/fa";

// const Work = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [videoId, setVideoId] = useState('');

//     const openModal = (id) => {
//         setIsModalOpen(true);
//         setVideoId(id);
//     }

//     const closeModal = () => {
//         setIsModalOpen(false);
//     }

//     const workItems = [
//         { id: 'tmjYf0I0gsg', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Top 10 Best Fighter Jets in the World', source: 'Youtube', channel: 'Future Discovery' },
//         { id: 'LXb3EKWsInQ', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Example', source: 'Youtube', channel: 'Future Discovery' },
//         { id: '8CFtF0I0gsg', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Elon Musk: "US Navy Just Created Something"', source: 'Youtube', channel: 'Voyager' },
//         { id: 'CjXmnOz_y5U', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Stomach Churning Things Nazis Did To Female Spies', source: 'Youtube', channel: 'Discoverize' },
//         { id: 'TT9107GwdBg', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Man Finds Ship in Jungle', source: 'Youtube', channel: 'Undercover' },
//         { id: '91afPxd0Qx8', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Why You Should Prioritize BEING ALONE', source: 'Youtube', channel: 'Noche Spiritualiy' },
//         { id: 'JjdQcjIz9JU', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Married With Children Scenes We Simply Cant Forget', source: 'Youtube', channel: 'Top Discovery' },
//     ];

//     return (
//         <section className="flex flex-wrap justify-center  items-center p-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {workItems.map((item) => (
//                     <div key={item.id} className="relative group h-80 w-96 ">
//                         <img src={item.image} alt="Work item" className="w-full h-80 object-cover"/>
//                         <button className="absolute z-10 inset-0 my-auto mx-auto btn btn-circle flex items-center justify-center " onClick={() => openModal(item.id)}>
//                         <FaPlay />

//                         </button>
//                         <div className="absolute inset-0  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
//                             <div className="p-4">
//                                 <h4 className="text-white text-xl font-bold mt-3 mb-3">{item.title}</h4>
//                                 <ul className="text-gray-300 mt-2">
//                                     <li>{item.source}</li>
//                                     <li>{item.channel}</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {isModalOpen && (
//                 <dialog id="my_modal_3" className="fixed inset-0 z-10 overflow-y-auto" open>
//                     <div className="flex items-center justify-center ">
//                         <div className="bg-white p-4 rounded shadow-lg relative">
//                             <button className="absolute top-0 right-0 text-white btn btn-circle  hover:text-gray-700 font-extrabold  text-lg " onClick={closeModal}>✕</button>
//                             <iframe  className='h-96 w-full md:w-[650px]' src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//                         </div>
//                     </div>
//                 </dialog>
//             )}



//         </section>
//     );
// }

// export default Work;

// import  { useState } from 'react';
// import { FaPlay } from "react-icons/fa";

// const Work = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [videoId, setVideoId] = useState('');

//     const openModal = (id) => {
//         setIsModalOpen(true);
//         setVideoId(id);
//     }

//     const closeModal = () => {
//         setIsModalOpen(false);
//     }

//     const workItems = [
//         { id: 'tmjYf0I0gsg', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Top 10 Best Fighter Jets in the World', source: 'Youtube', channel: 'Future Discovery' },
//         { id: 'LXb3EKWsInQ', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Example', source: 'Youtube', channel: 'Future Discovery' },
//         { id: '8CFtF0I0gsg', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Elon Musk: "US Navy Just Created Something"', source: 'Youtube', channel: 'Voyager' },
//         { id: 'CjXmnOz_y5U', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Stomach Churning Things Nazis Did To Female Spies', source: 'Youtube', channel: 'Discoverize' },
//         { id: 'TT9107GwdBg', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Man Finds Ship in Jungle', source: 'Youtube', channel: 'Undercover' },
//         { id: '91afPxd0Qx8', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Why You Should Prioritize BEING ALONE', source: 'Youtube', channel: 'Noche Spiritualiy' },
//         { id: 'JjdQcjIz9JU', image: 'https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png', title: 'Married With Children Scenes We Simply Cant Forget', source: 'Youtube', channel: 'Top Discovery' },
//     ];

//     return (
//         <section className="flex flex-wrap justify-center  items-center p-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {workItems.map((item) => (
//                     <div key={item.id} className="relative group bg-gradient-to-r from-[#0D061F] to-[#251E35]  w-96 ">
//                         <img src={item.image} alt="Work item" className="w-full h-52 object-cover"/>
//                         <div className="">
//                             <div className="p-4">
//                                 <h4 className="text-white text-xl font-bold mt-3 mb-3">{item.title}</h4>
//                                 <ul className="text-gray-300 mt-2">
//                                     <li>{item.source}</li>
//                                     <li>{item.channel}</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <button className="absolute z-10 inset-0 my-auto mx-auto btn btn-circle flex items-center justify-center " onClick={() => openModal(item.id)}>
//                         <FaPlay />

//                         </button>
                        
//                     </div>
//                 ))}
//             </div>
//             {isModalOpen && (
//                 <dialog id="my_modal_3" className="fixed inset-0 z-10 overflow-y-auto" open>
//                     <div className="flex items-center justify-center ">
//                         <div className="bg-white p-4 rounded shadow-lg relative">
//                             <button className="absolute top-0 right-0 text-white btn btn-circle  hover:text-gray-700 font-extrabold  text-lg " onClick={closeModal}>✕</button>
//                             <iframe  className='h-96 w-full md:w-[650px]' src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//                         </div>
//                     </div>
//                 </dialog>
//             )}



//         </section>
//     );
// }

// export default Work;


