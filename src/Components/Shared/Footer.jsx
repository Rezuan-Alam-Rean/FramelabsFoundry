
const Footer = () => {
    return (
      <footer className="bg-slate-950 pb-4  text-white">
        <div className=" md:px-24 px-6  py-8">
          <div className="flex  flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="index.html">
                <img src="img/logo.png" alt="Logo" className='h-20' />
              </a>
            </div>
            <div className="flex gap-x-4">
              <a href="https://www.facebook.com/framelabs.foundry" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/framelabs-foundry" target="_blank" rel="noreferrer">
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20" height="20">
                  <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
                </svg>
              </a>
            </div>
          </div>
          <hr className='mt-8 mb-8' />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 mt-8">
            <div>
              <h5 className=" text-sky-400 text-xl font-semibold mb-2">About us</h5>
              <p>Formed in 2021 initially with a group of friends, our goal was to ensure proper completion of our clients' Video Solution Needs.</p>
              <p>We now have a team of over 50 people specializing in multiple fields of IT and Business Solutions, always keeping quality in mind.</p>
            </div>
            <div>
              <h5 className=" text-sky-400 text-xl font-semibold mb-2">Who we are</h5>
              <ul>
                <li><a href="/">Team</a></li>
                <li><a href="Services">Careers</a></li>
                <li><a href="Contact">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h5 className=" text-sky-400 text-xl font-semibold mb-2">Our work</h5>
              <ul>
                <li><a href="/">Latest</a></li>
                <li><a href="Services">Browse Archive</a></li>
                <li><a href="Services">Video for web</a></li>
              </ul>
            </div>
            <div>
              <h5 className=" text-sky-400 text-xl font-semibold mb-2">Credits</h5>
              <ul>
                <li><a href="Services">Data & Assets</a></li>
                <li><a href="Services">Video & Images</a></li>
                <li><a href="Services">Website</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer footer-center p-4  text-white">
    <aside>
      <p>Copyright © 2024 - All right reserved by FrameLabs Foundry</p>
    </aside>
  </div>
      </footer>
    );
  };
  
  export default Footer


// const Footer = () => {
//     const footerOptions = [
//         { title: 'About us', description: 'Formed in 2021 initially with a group of friends, our goal was ensure proper completion of our clients Video Solution Needs. We now have a team of over 50 people specializing in multiple fields of IT and Business Solutions with keeping only quality in mind.' },
//         { title: 'Who we are', links: ['Team', 'Careers', 'Contact us'] },
//         { title: 'Our work', links: ['Latest', 'Browse Archive', 'Video for web'] },
//         { title: 'Credits', links: ['Data & Assets', 'Video & Images', 'Website'] },
//     ];

//     return (
//         <footer className="bg-cover bg-center pb-12 mt-10 bg-slate-950 text-white p-8  md:mx-20" >
//             <div className="container mx-auto px-4">
//                 <div className="flex justify-between items-center mb-8">
//                     <a href="index.html"><img src="img/logo.png" alt="" className="h-24" /></a>
//                     <div className="flex space-x-4">
//                         <a href="https://www.facebook.com/framelabs.foundry" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
//                         </a>
//                         <a href="https://www.linkedin.com/company/framelabs-foundry" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white">
//                             <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20" height="20"><path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" /></svg>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                     {footerOptions.map((option, index) => (
//                         <div key={index} className="mb-4 md:mb-0">
//                             <h5 className="text-xl   text-sky-400 text-xl font-semibold text-white mb-2">{option.title}</h5>
//                             {option.description ? (
//                                 <p className="text-white">{option.description}</p>
//                             ) : (
//                                 <ul className="space-y-1">
//                                     {option.links.map((link, i) => (
//                                         <li key={i}><a href="Services" className="text-slate-300 hover:text-blue-700">{link}</a></li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;



// const Footer = () => {
//     return (
//         <footer className="footer bg-cover bg-center" >
//             <div className="container  mx-auto px-4">
//                 <div className="flex justify-between w-full pt-8">
//                     <div className="">
//                         <div className="">
//                             <a href="index.html"><img src="img/logo.png" alt="" height="100" /></a>
//                         </div>
//                     </div>
//                     <div className="">
//                         <div className="flex gap-x-2 text-white">
//                             <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">

//                         <a  href="https://www.facebook.com/framelabs.foundry" target="_blank" rel="noreferrer">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
//                             </a>
//                             </div>

//                             <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center" >
//                             <a href="https://www.linkedin.com/company/framelabs-foundry" target="_blank" rel="noreferrer">
//                                 <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20" height="20">    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" /></svg>
//                             </a>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="footer__option grid grid-cols-1 md:grid-cols-4 mx-auto gap-4">
//                     <div className="col-lg-4 col-md-6 col-sm-6 col-span-1">
//                         <div className="footer__option__item">
//                             <h5>About us</h5>
//                             <p>Formed in 2021 initially with a group of friends, our goal was ensure proper completion
//                                 of our clients Video Solution Needs </p>
//                             <p> We now have a team of over 50 people specializing in multiple firleds of IT and Business
//                                 Solutions with keeping only quality in mind
//                             </p>
//                         </div>
//                     </div>
//                     <div className="col-lg-2 col-md-3 col-sm-3 col-span-1">
//                         <div className="footer__option__item">
//                             <h5>Who we are</h5>
//                             <ul>
//                                 <li><a href="pages.html">Team</a></li>
//                                 <li><a href="pages.html">Careers</a></li>
//                                 <li><a href="pages.html">Contact us</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-lg-2 col-md-3 col-sm-3 col-span-1">
//                         <div className="footer__option__item">
//                             <h5>Our work</h5>
//                             <ul>
//                                 <li><a href="pages.html">Latest</a></li>
//                                 <li><a href="pages.html">Browse Archive</a></li>
//                                 <li><a href="pages.html">Video for web</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-lg-2 col-md-3 col-sm-3 col-span-1">
//                         <div className="footer__option__item">
//                             <h5>Credits</h5>
//                             <ul>
//                                 <li><a href="pages.html">Data & Assets</a></li>
//                                 <li><a href="pages.html">Video & Images</a></li>
//                                 <li><a href="pages.html">Website</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

