import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Cart from '../assets/Cart.png';
import Search from '../assets/Search.png';
import MainImg from '../assets/MainImg.png';


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
        className="h-64 w-64 md:hidden rounded-xl relative overflow-hidden mx-auto "
        style={{ backgroundImage: `url(${MainImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
          <h2 className="text-xl font-bold">Título Incrível</h2>
          
          <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-md">
            Clique Aqui
          </button>
        </div>
      </div>
      <div
        className="hidden md:block rounded-xl relative overflow-hidden  h-[650px] w-[1800px] mx-auto "
        style={{ backgroundImage: `url(${MainImg})`, backgroundSize: 'cover', backgroundPosition: 'center top 15%' }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-50 text-white">
          <h2 className="text-3xl font-bold">Título para Desktop</h2>
          <p className="text-base mt-4">Uma descrição mais longa para telas maiores.</p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md">
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
    </div>
    
  )

}

export default Home;