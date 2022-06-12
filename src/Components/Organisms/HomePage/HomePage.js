import MobileNavbar from "../../Molecules/MobileNavbar/Navbar";
import DesktopNavbar from "../../Molecules/DesktopNavbar/DesktopNavbar";
import MobileHero from "../../Molecules/MobileHero/MobileHero";
import useMediaQuery from "../../../Hooks/useMediaQuery";

const HomePage = () =>{
    const isDesktop = useMediaQuery('(min-width: 800px)');

    const renderNavbar = (isDesktop)=>{
        return (isDesktop) ? <DesktopNavbar/> : <MobileNavbar/>
    }

    const renderHero = (isDesktop)=>{
        return(isDesktop) ? <div>Desktop Hero</div> : <MobileHero/>
    }

    return(
        <>
            {renderNavbar(isDesktop)}
            {renderHero(isDesktop)}
        </>
    )
}

export default HomePage;