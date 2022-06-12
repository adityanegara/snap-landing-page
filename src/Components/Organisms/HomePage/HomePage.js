import MobileNavbar from "../../Molecules/MobileNavbar/Navbar";
import DesktopNavbar from "../../Molecules/DesktopNavbar/DesktopNavbar";
import MobileHero from "../../Molecules/MobileHero/MobileHero";
import DesktopHero from "../../Molecules/DesktopHero/DesktopHero";
import useMediaQuery from "../../../Hooks/useMediaQuery";

const HomePage = () =>{
    const isDesktop = useMediaQuery('(min-width: 800px)');

    const renderNavbar = (isDesktop)=>{
        return (isDesktop) ? <DesktopNavbar/> : <MobileNavbar/>
    }

    const renderHero = (isDesktop)=>{
        return(isDesktop) ? <DesktopHero/> : <MobileHero/>
    }

    return(
        <>
            {renderNavbar(isDesktop)}
            {renderHero(isDesktop)}
        </>
    )
}

export default HomePage;