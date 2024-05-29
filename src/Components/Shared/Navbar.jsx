import { AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {




    const items = (

        <>
            <NavLink
                to="/"
                className={({ isActive, }) =>
                    isActive ? " md:border-b-2 text-sky-400  " : "hover:text-sky-400 hover:border-b-2"
                }

            >
                HOME</NavLink>

            <NavLink
                to="Aboutus"
                className={({ isActive, }) =>
                    isActive ? " md:border-b-2  text-sky-400 " : "hover:text-sky-400 hover:border-b-2"
                }

            >ABOUT</NavLink>
            <NavLink

                to="Portfolio"
                className={({ isActive, }) =>
                    isActive ? " md:border-b-2  text-sky-400 " : "hover:text-sky-400 hover:border-b-2"
                }

            >
                PORTFOLIO
            </NavLink>
            <NavLink
                to="Services"
                className={({ isActive, }) =>
                    isActive ? "md:border-b-2 text-sky-400 " : "hover:text-sky-400 hover:border-b-2"
                }

            >SERVICES
            </NavLink>
            <NavLink
                to="Contact"
                className={({ isActive, }) =>
                    isActive ? "md:border-b-2 text-sky-400 " : "hover:text-sky-400 hover:border-b-2"
                }

            >
                CONTACT
            </NavLink>

        </>
    );



    return (
        <div>
            <div className="navbar px-4 fixed w-full z-30  backdrop-filter backdrop-blur-md border-b-green-100 border-b md:px-20 md:py-4 ">
                <div className="navbar-start">
                    <div className="dropdown  mr-4">
                        <div tabIndex={0} role="button" className=" lg:hidden">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                            <div

                                className='p-2 md:py-2 md:px-3 border-[1px] text-white border-neutral-200 flex flex-row items-center gap-3 rounded-md cursor-pointer hover:shadow-md transition'
                            >

                                <AiOutlineMenu />


                            </div>
                        </div>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-[#0D061F] to-[#251E35] rounded-box w-52 text-center gap-y-2 py-4 text-white ">


                            {items}

                        </ul>
                    </div>


                    <Link to="/">
                        <img className="w-36 md:w-48" src="img/logo.png" alt="FrameLabs Foundry" />

                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-x-10 text-white font-semibold    ">
                        {items}
                    </ul>
                </div>
                <div className="navbar-end   ">
                    <div className="  border-l-2   ">
                        <div className="flex gap-x-2 md:ml-10 ml-2  text-white">
                            <a href="https://www.facebook.com/framelabs.foundry" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/framelabs-foundry" target="_blank" rel="noreferrer">
                                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20" height="20">    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" /></svg>
                            </a>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;