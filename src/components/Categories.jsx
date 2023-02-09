import React from 'react';
import "../assets/css/Categories.css";


import { useNavigate } from "react-router-dom";



const Categories = () => {

    const navigate = useNavigate();
    const subcategories = () => { navigate("/subcategories") }


    return (

        <div className="scroll cd-quick-view is-visible animate-width add-content" style={{ width: '90%', margin: 'auto', paddingTop: '10px', paddingRight: '20px' }}>

            <div >
                <img src="../public/Images/grayimage.jpg" className="topbox" style={{ margin: 'auto', opacity: '50%' }} />
                <div className="centered">
                    <ul className="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><a href="/categories">Drinkware</a></li>
                        <li><a href="#">Hot &amp; cold vacuum flask</a></li>
                    </ul>
                </div>
            </div>

            <div className="categoriescontainer" style={{ marginTop: '0px' }}>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
            </div>

            <div className="categoriescontainer">
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
            </div>

            <div className="categoriescontainer">
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
            </div>

            <div className="categoriescontainer">
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
            </div>

            <div className="categoriescontainer">
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
                <div onClick={subcategories} className="flexdiv">
                    <img src="../public/Images/img.jpg" className="imgscale" />
                    <h6 style={{ marginTop: '-5px', textAlign: 'center', cursor: 'pointer' }}>1st categories</h6>
                </div>
            </div>
        </div>


    )
}

export default Categories