import MobileNavbar from "../../Molecules/MobileNavbar/Navbar";
import Hero from "../../Molecules/Hero/Hero";
import useMediaQuery from "../../../Hooks/useMediaQuery";

const HomePage = () =>{
    const isDesktop = useMediaQuery('(min-width: 600px)');

    const renderNavbar = (isDesktop)=>{
        return (isDesktop) ? <div>Desktop Navbar</div> : <MobileNavbar/>
    }

    return(
        <>
            {renderNavbar(isDesktop)}
            <Hero/>
        </>
    )
}

export default HomePage;