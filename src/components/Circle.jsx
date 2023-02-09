import React from 'react';
import "../assets/css/Circles.css";


import { useNavigate } from "react-router-dom";




const Circle = () => {
    const navigate = useNavigate();
    const categories = () => {navigate("/categories")}



    return (
        <div className="circlesdiv flex justify-between ...">
            <div onClick={categories} className="circles"><img src="../public/Images/img.jpg" className="circlesimg" />
                <p className="circletext">Mobiles</p></div>

            <div onClick={categories} className="circles"><img src="../public/Images/img.jpg" className="circlesimg" />
                <p className="circletext">Mobiles</p></div>

            <div onClick={categories} className="circles"><img src="../public/Images/img.jpg" className="circlesimg" />
                <p className="circletext">Mobiles</p></div>

            <div onClick={categories} className="circles"><img src="../public/Images/img.jpg" className="circlesimg" />
                <p className="circletext">Mobiles</p></div>

            <div onClick={categories} className="circles"><img src="../public/Images/img.jpg" className="circlesimg" />
                <p className="circletext">Mobiles</p></div>

            <div onClick={categories} className="circles"><img src="../public/Images/img.jpg" className="circlesimg" />
                <p className="circletext">Mobiles</p></div>

            <div onClick={categories} className="circles"><img src="../public/Images/img.jpg" className="circlesimg" />
                <p className="circletext">Mobiles</p></div>

            <div onClick={categories} className="circles"><img src="../public/Images/img.jpg" className="circlesimg" />
                <p className="circletext">Mobiles</p></div>

        


            {/* <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div> */}
</div>

    )
}

export default Circle