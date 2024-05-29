import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx";
import Errorpage from "../Pages/Errorpage.jsx";
import Home from "../Pages/Home/Home.jsx";
import About from "../Pages/About/About.jsx";
import Portfolio from "../Pages/Portfolio/Portfolio.jsx";
import ServicesPage from "../Pages/Services/ServicesPage.jsx";
import Contact from "../Pages/Contact/Contact.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "Aboutus",
            element: <About/>,
          },
          {
            path: "Portfolio",
            element: <Portfolio/>,
          },
          {
            path: "Services",
            element: <ServicesPage/>,
          },
          {
            path: "Contact",
            element: <Contact/>,
          },
          
        ],
      },
]);