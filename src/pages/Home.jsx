import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Cart from '../assets/Cart.png';
import Search from '../assets/Search.png';
import MainImg from '../assets/MainImg.png';
import Flower from '../assets/Flower.png';


function Home (){
  const navigate = useNavigate();

  return(
    <div>
      <div className='flex justify-between items-center py-2  px-4 w-full'>
        <div className="hamburger text-5xl cursor-pointer">☰</div>
        <div className='logo'> 
            <img src = {Logo} alt ="logo" className="h-8"/>  
        </div>
        <div className='flex items-center'>
          <div className='search'>
              <img src = {Search} alt ="search"  className="h-6 w-6 align-middle"/>  
          </div>
          <div className='cart mt-1.5'>
              <img src = {Cart} alt ="cart" className="h-8 w-8 align-middle"/>  
          </div>
        </div>
      </div>
       <div>
    
      <div
        className="h-80 w-80 md:hidden rounded-xl relative overflow-hidden mx-auto "
        style={{ backgroundImage: `url(${MainImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute bottom-0 left-0 p-4  bg-opacity-50 text-black">
          <h2 className="ml-4 text-xl font-bold text-left font-unbounded">Where<br /> style<br /> meets the<br /> streets</h2>
          
          <button className="mt-2 ml-4 mb-6 px-4 py-2 bg-orange-600 text-black font-unbounded rounded-md">            
            SHOP NOW
          </button>
        </div>
      </div>
      <div
        className="hidden md:block rounded-3xl relative overflow-hidden w-[95%] mx-auto aspect-[16/5]
         "
        style={{ backgroundImage: `url(${MainImg})`, backgroundSize: 'cover', backgroundPosition: 'center top 15%' }}
      >
        <div className="absolute bottom-0 left-0  p-6  text-black">
          <h1 className="text-5xl ml-[250px] text-left font-unbounded font-bold ">Where style<br /> meets the<br /> streets</h1>
          <button className="mt-6 mb-16 ml-[50px] px-6 py-2 font-bold bg-orange-600 text-black font-unbounded rounded-2xl">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
     

        <div className='flex justify-center items-center px-10 mt-12 gap-8 md:gap-32'>
            
            <div className='flex-shrink-0'>
               <img src = {Flower} alt ="flower" className="h-10 w-10 md:h-16 md:w-16 "/>
            </div>
            
            <div className='text-gray-700 text-xs md:w-1/2 md:text-3xl'>
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
          
            <div className='flex-shrink-0'>
              <img src = {Flower} alt ="flower" className="h-10 w-10 md:h-16 md:w-16"/>
            </div>
        </div>
      
    </div>
    
  )

}

export default Home;