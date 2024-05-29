import CallTo from "../../Components/CallTo";
import Counter from "../../Components/Counter";

import HeroSlider from "../../Components/Hero/HeroSlider";
import MyComponent from "../../Components/MyComponent";
import Services from "../../Components/Services";
import TeamSection from "../../Components/TeamSection";
import Testimonial from "../../Components/Testimonial";
import Work from "../../Components/Work";


const Home = () => {
    return (
        <div>
           
            <HeroSlider/>
            <Services/>
            <Counter/>
            <Work/>
            <CallTo/>
           <TeamSection/>
            <Testimonial/>
            

            

        </div>
    );
};

export default Home;