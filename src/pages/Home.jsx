import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Cart from '../assets/Cart.png';
import Search from '../assets/Search.png';
import MainImg from '../assets/MainImg.png';
import Flower from '../assets/Flower.png';
import OurOutfits from '../assets/OurOutfits.png';
import IMG1 from '../assets/IMG1.png';
import IMG2 from '../assets/IMG2.png';
import IMG3 from '../assets/IMG3.png';
import IMG4 from '../assets/IMG4.png';
import IMG5 from '../assets/IMG5.png';
import IMG6 from '../assets/IMG6.png';
import ic_instagram from '../assets/ic_instagram.png';
import ic_facebook from '../assets/ic_facebook.png';
import ic_twitter from '../assets/ic_twitter.png';
import ic_tiktok from '../assets/ic_tiktok.png';

import productImage from '../assets/productImage.png'


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
        <div className='flex-col justify-center items-center mt-9'>
          <div>
            <img src = {OurOutfits} alt ="our outfits" className="ml-7 w-[85%] md:w-[63%] md: mt-9 md:ml-[350px]"/>
          </div>
          <div className='flex gap-5 justify-center mt-4 md:mt-16 md:gap-20'>
            <img src = {IMG1} alt ="IMG1" className="w-[25%] md:w-[18%] "/>
            <img src = {IMG2} alt ="IMG2" className="w-[25%] md:w-[18%]"/>
            <img src = {IMG3} alt ="IMG3" className="w-[25%] md:w-[18%]"/>
          </div>
          <div className='flex justify-center gap-4 mt-2 md:mt-8 md:gap-32'>
            
              
              <button className="mt-6 mb-16 ml-8 px-6 py-2 font-bold bg-orange-600 text-black font-unbounded rounded-2xl md:h-[70px] md:w-[300px] ">
            BUY NOW
              </button>
            
            
             
              <button className="mt-6 mb-16 px-6 py-2 font-bold bg-orange-600 text-black font-unbounded rounded-2xl md:h-[70px] md:w-[300px]">
            BUY NOW
          </button>
            
            
              <button className="mt-6 mb-16  px-6 mr-8 py-2 font-bold bg-orange-600 text-black font-unbounded rounded-2xl md:h-[70px] md:w-[300px]">
            BUY NOW
          </button>
            
          </div>
          
              <button className=" mb-16  px-28  py-2 font-bold bg-[#212B47] text-white font-unbounded rounded-2xl md:h-[70px] md:w-[1160px]">
            CHECK ALL
          </button>
          
        </div>

       <div className="flex flex-col md:flex-row items-start md:items-stretch bg-white shadow-xl rounded-2xl overflow-hidden max-w-sm sm:max-w-xl md:max-w-6xl mx-auto my-10 border border-gray-200">
      
      <div className="relative w-full md:w-1/2 min-h-[250px] md:min-h-[400px]">
        <img
          src={productImage}
          alt="Modelo de Produto"
          className="w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl md:rounded-bl-none md:rounded-tr-2xl" // Ajuste nos rounded corners para responsividade
         
        />
        
        <div className="absolute top-4 left-4 bg-orange-600 text-white font-bold text-sm px-4 py-2 rounded-full transform rotate-[-8deg] shadow-lg">
          30% OFF
        </div>
      </div>

      
      <div className="flex flex-col justify-between p-4 md:p-8 w-full md:w-1/2">
       
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="flex-grow border-t-2 border-black mr-4"></div>
          
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">SALE!</h2>
          </div>
          <p className="font-semibold text-xl sm:text-2xl md:text-3xl text-gray-800 leading-tight">
            Nunc vulputate libero et velit <br />interdum, ac aliquet
          </p>
        </div>

        
        <div className="mb-6">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Gorem ipsum dolor sit amet, consectetur <br />adipiscing elit, consectetur
            interdum, ac aliquet odio mattis.
          </p>
        </div>

      
        <div className="flex items-baseline mb-8">
          <p className=" sm:text-4xl md:text-[80px] font-extrabold text-gray-900 mr-4">$99,90</p>
          <p className="text-base md:text-[40px] text-gray-500 line-through">$99,90</p>
        </div>

        
        <div className="flex gap-2 sm:gap-4">
          <button className="flex-1 bg-orange-600 text-white font-bold py-2 px-4 md:py-4 md:px-8 rounded-xl shadow-md hover:bg-orange-700 transition-colors text-sm md:text-base">
            BUY NOW
          </button>
          <button className="flex-1 bg-[#212B47] text-white font-bold py-2 px-4 md:py-4 md:px-8 rounded-xl shadow-md hover:bg-[#344160] transition-colors text-sm md:text-base">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center bg-[#212B47] py-16 px-4 sm:px-6 md:px-8 text-white">
    
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-center">
        Get it before anyone else!
      </h2>

     
      <div className="flex flex-col sm:flex-row w-full max-w-lg rounded-xl overflow-hidden shadow-lg">
        
        <input
          type="email"
          placeholder="Your e-mail address"
          className="flex-1 p-4 text-gray-800 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-orange-600 rounded-tl-xl sm:rounded-bl-xl sm:rounded-tr-none rounded-tr-xl"
        />
       
        <button
          className="bg-orange-600 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-br-xl sm:rounded-tr-xl sm:rounded-bl-none hover:bg-orange-700 transition-colors duration-300"
        >
          Subscribe
        </button>
      </div>
    </div>
    <div className="flex flex-col items-center py-16 px-4 bg-white">
     
      <div className="flex items-center mb-10 w-full max-w-xl md:max-w-5xl">
        <div className="flex-grow border-t-2 border-gray-300 mr-4"></div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 text-center">
          Categories
        </h2>
        <div className="flex-grow border-t-2 border-gray-300 ml-4"></div>
      </div>

     
      <div className="flex flex-row flex-wrap justify-center w-full gap-2 sm:gap-4 md:gap-12 lg:gap-20">
      
        <div className="flex flex-col items-center text-center flex-shrink-0">
          <img
            src={IMG4}
            alt="Shoes"
            className="w-28 h-36 sm:w-40 sm:h-52 md:w-80 md:h-[24rem] object-cover rounded-2xl shadow-md mb-2 sm:mb-4"
          />
         
          <span className="font-bold text-sm sm:text-base md:text-2xl lg:text-3xl text-gray-900">SHOES</span>
        </div>

   
        <div className="flex flex-col items-center text-center flex-shrink-0">
          <img
            src={IMG5}
            alt="Shirts"
            className="w-28 h-36 sm:w-40 sm:h-52 md:w-80 md:h-[24rem]  object-cover rounded-2xl shadow-md mb-2 sm:mb-4"
          />
         
          <span className="font-bold text-sm sm:text-base md:text-2xl lg:text-3xl text-gray-900">SHIRTS</span>
        </div>

        
        <div className="flex flex-col items-center text-center flex-shrink-0">
          <img
            src={IMG6}
            alt="Pants"
            className="w-28 h-36 sm:w-40 sm:h-52 md:w-80 md:h-[24rem]  object-cover rounded-2xl shadow-md mb-2 sm:mb-4"
          />
    
          <span className="font-bold text-sm sm:text-base md:text-2xl lg:text-3xl text-gray-900">PANTS</span>
        </div>
      </div>
    </div>
      <footer className="bg-[#2b3a55] text-[#f0c9b7] py-8 rounded-t-3xl">
      <div className="container mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between px-4">
      
        <div className="grid grid-cols-2 gap-4 text-xl md:flex">
          <img src={ic_instagram} alt="instagram"/>
          <img src={ic_tiktok} alt="tiktok"/>
          <img src={ic_twitter} alt="twitter" className='w-11 h-11 mt-1'/>
          <img src={ic_facebook} alt="facebook"/>
        </div>
        
      
        <ul className="flex flex-col items-center gap-2 md:flex-row md:space-x-8 md:gap-0">
          <li><a href="/about-us" className="hover:underline">About us</a></li>
          <li><a href="/services" className="hover:underline">Services</a></li>
          <li><a href="/help" className="hover:underline">Help</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </footer>
    </div>
    
    
  )

}

export default Home;