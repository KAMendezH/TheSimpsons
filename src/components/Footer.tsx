// CSS
import './css/Footer.css'
// ICONS
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";


function Footer(){
    function handleNavigation(url:string):void{
        window.open(url, "_blank");
    }
    return(
        <footer className='Footer__container'>
            <div className='Footer__icons'>
                <FaGithub onClick={()=> handleNavigation("https://github.com/KAMendezH")} className='Footer__icon'/>
                <FaFacebook onClick={()=> handleNavigation("https://www.facebook.com/asahel.mendez.huerta.2025")} className='Footer__icon'/>
                <IoLogoWhatsapp onClick={()=> handleNavigation("https://wa.me/525561369256")} className='Footer__icon'/>
                <FaInstagramSquare onClick={()=> handleNavigation("https://www.instagram.com/ki_infinity?igsh=aTE0Z2h1bGh5cmt3")} className='Footer__icon'/>
                <FaFacebook onClick={()=> handleNavigation("https://www.facebook.com/kAsahelMendez")} className='Footer__icon'/>
            </div>
            <p className='Footer__p'>Desarrollado por KAMendezH - 28/10/2025</p>
        </footer>
    );
};

export default Footer;