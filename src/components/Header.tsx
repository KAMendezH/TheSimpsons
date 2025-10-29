// CSS
import './css/Header.css'

// IMG
import logo from '../assets/logo.png'



function Header(){

    function handleNavigate(url:string):void{
        window.open(url, "_blank")
    }

    return( 
        <header className='Header__container'>
            <div>
                <img onClick={()=> handleNavigate("https://github.com/KAMendezH")} className='Header__img' src={logo} alt="" />
            </div>
            <div><h1 onClick={()=> handleNavigate("https://thesimpsonsapi.com")} className='Header__title'>The Simpsons API</h1></div>
        </header>
    )
};

export default Header;