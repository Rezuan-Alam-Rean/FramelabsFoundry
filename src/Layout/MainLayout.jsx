import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { useEffect, useState } from "react";
import Loader from "../Components/Shared/Loader";

const MainLayout = () => {

    const [isLoading, setIsLoading] = useState(true); // Initially loading

    useEffect(() => {
        // Simulate some loading time (replace with your actual loading logic)
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust timeout as needed
    }, []);
  
    return (
        <div className="bg-slate-950" >
             {isLoading ? <Loader /> : (
                // Your main application content here
                <div>

                    <Navbar/>
                    <Outlet></Outlet>
                    <Footer/>
                </div>
            )}
        </div>
    );
};

export default MainLayout;