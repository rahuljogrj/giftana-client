import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";



// import reactLogo from './assets/react.svg'
import './App.css'
import Circle from './components/Circle';
import Collage from './components/Collage';
import FirstBanner from './components/FirstBanner';
import Footer from './components/Footer';
import Categories from './components/Categories';
import ImageText from './components/ImageText';
import NavbarSlider from './components/NavbarSlider';
import Reviews from './components/Reviews';
import SecondBanner from './components/SecondBanner';
import ThirdBanner from './components/ThirdBanner';
import SubCategories from './components/SubCategories';
import ProductInfo from './components/ProductInfo';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      {/* 
        <NavbarSlider />
        <FirstBanner />
        <Circle />
        <Collage />
        <SecondBanner />
        <ImageText />
        <ThirdBanner />
        <Reviews />
        <Footer />

        <Categories />
        <SubCategories />
 */}


      <BrowserRouter>

        <Routes>
          <Route path="/" element={<>
            <NavbarSlider />
            <FirstBanner />
            <Circle />
            <Collage />
            <SecondBanner />
            <ImageText />
            <ThirdBanner />
            <Reviews />
            <Footer />

          </>}>

          </Route>


          <Route path="/categories" element={<><NavbarSlider />
            <Categories /></>}> </Route>

          <Route path="/subcategories" element={<><NavbarSlider />
            <SubCategories /></>}> </Route>
            
          <Route path="/productinfo" element={<><ProductInfo /></>}> </Route>

        </Routes>

      </BrowserRouter>


    </div>
  )
}

export default App
