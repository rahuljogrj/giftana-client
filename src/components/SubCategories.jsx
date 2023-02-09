import React from 'react';
import "../assets/css/SubCategories.css"

import { useNavigate } from "react-router-dom";



const SubCategories = () => {
    const navigate = useNavigate();
    const productinfo = () => { navigate("/productinfo") }



    return (
        <div style={{ width: '90%', margin:'auto', marginTop:'20px'}}>

            <div className="topbox">
                <img src="../public/Images/grayimage.jpg" style={{ height: '100px', opacity: '40%' }} />
                <div className="centered">
                    <button className="vaccumbutton">Hot
                        &amp; Cold Vacuum
                        Flask</button>
                    <ul className="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><a href="/categories">Drinkware</a></li>
                        <li><a href="#">Hot &amp; cold vacuum flask</a></li>
                    </ul>
                </div>
            </div>
            <div className="scroll1" style={{ paddingTop: '30px' }}>
                <div style={{ width: '20%', height: '1200px' }}>
                    <div style={{ marginLeft: '20px', fontSize: '20px', fontWeight: 'bold', color: '#4e4c44' }}>
                        <h2 style={{ fontSize: 20, marginBottom:'-32px', fontWeight: 'bold', color: '#4e4c44' }}> FILTER BY</h2>
                        <hr />
                    </div>
                    <div style={{ marginTop: '40px', marginLeft: '20px' }}>
                        <h4 style={{ fontSize: 20, marginBottom:'-32px', fontWeight: 'bold', color: '#4e4c44' }}>PRICE</h4>
                        <hr />
                        <input type="checkbox" /> Below Rs. 345<br />
                        <input type="checkbox" /> Rs.376 - Rs.405<br />
                        <input type="checkbox" /> Rs.51 - Rs.100<br />
                        <input type="checkbox" /> Rs.151 - Rs.250<br />
                        <input type="checkbox" /> Rs.251 - Rs.350<br />
                        <input type="checkbox" /> Rs.351 - Rs.450<br />
                        <input type="checkbox" /> Rs.451 - Rs.550<br />
                        <input type="checkbox" /> Above Rs. 650<br />
                    </div>
                    <div style={{ marginTop: '40px', marginLeft: '20px' }}>
                        <h2 style={{ fontSize: 20, marginBottom:'-32px', fontWeight: 'bold', color: '#4e4c44' }}>CATEGORY</h2>
                        <hr />
                        <input type="checkbox" /> Plastic Water Bottle<br />
                        <input type="checkbox" /> Kitchen Utility<br />
                        <input type="checkbox" /> Stainless Steel Water Bottle<br />
                        <input type="checkbox" /> Hot &amp; Cold Vacuum Flask <br />
                        <input type="checkbox" /> Aluminium Water Bottle<br />
                        <input type="checkbox" /> Coffee Mugs<br />
                        <input type="checkbox" /> Coasters<br />
                    </div>
                    <div style={{ marginTop: '50px', marginLeft: '20px', fontSize: 20, fontWeight: 'bold', color: '#4e4c44' }}>
                        <h2 style={{ fontSize: 20, fontWeight: 'bold', color: '#4e4c44' }}>Availability</h2>
                        <input type="checkbox" /> In Stock Only<br />
                    </div>
                    <div>
                        <img src="../public/Images/bottol_ad.jpg" style={{ marginLeft: '10%', marginTop: '40px', width: '200px', height: '500px', boxShadow: '1pxs solid black' }} />
                    </div>
                </div>
                <div>
                    <div className="showresults">
                        <div style={{ height: 'auto', marginLeft: '-120px', fontSize: '16px', fontWeight: 'bold', color: '#4e4c44' }}>
                            <h2 style={{ fontSize: 20,  fontWeight: 'bold', color: '#4e4c44' }}>Showing 24 Results</h2>
                            <hr />
                        </div>
                        <div style={{ width: 'auto', height: 'auto', fontSize: 14, fontWeight: 'bold' }}>
                            <table style={{ width: 'auto', height: '18px', color: '#4e4c44' }}>
                                <tbody>
                                    <tr>
                                        <td href="#" style={{ width: '86px' }}>Best seller</td>
                                        <td href="#" style={{ width: '70px' }}>New</td>
                                        <td href="#" style={{ width: '135px' }}>Price: Low to High</td>
                                        <td href="#" style={{ width: '135px' }}>Price: High to Low</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr />
                        </div>
                    </div>
                    <div className="subcatrow">
                        <div onClick={productinfo} className="subcatcolumn">
                            <img src="../public/Images/img.jpg" className="subcateimgscale" />
                            <h2 className="headingstyle">
                                1st
                                categories in
                                this sub categories</h2>
                            <div className="subcatdetails">
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                                <p style={{ marginLeft: '-3px' }}>(4.3) 223</p>
                                <button className="dealoftheday">Deal of the day</button>
                                <nobr style={{ fontSize: '20px', fontWeight: '500px', marginLeft: '20px' }}>
                                    ₹552 <s style={{ fontSize: '12px', color: '#696e72' }}> ₹999</s>&nbsp;<span style={{ fontSize: '12px', color: '#696e72' }}>(48% off)</span></nobr>
                            </div>
                        </div>
                        <div onClick={productinfo} className="subcatcolumn">
                            <img src="../public/Images/img.jpg" className="subcateimgscale" />
                            <h2 className="headingstyle">
                                1st
                                categories in
                                this sub categories</h2>
                            <div className="subcatdetails">
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                                <p style={{ marginLeft: '-3px' }}>(4.3) 223</p>
                                <button className="dealoftheday">Deal of the day</button>
                                <nobr style={{ fontSize: '20px', fontWeight: '500px', marginLeft: '20px' }}>
                                    ₹552 <s style={{ fontSize: '12px', color: '#696e72' }}> ₹999</s>&nbsp;<span style={{ fontSize: '12px', color: '#696e72' }}>(48% off)</span></nobr>
                            </div>
                        </div>
                        <div onClick={productinfo} className="subcatcolumn">
                            <img src="../public/Images/img.jpg" className="subcateimgscale" />
                            <h2 className="headingstyle">
                                1st
                                categories in
                                this sub categories</h2>
                            <div className="subcatdetails">
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                                <p style={{ marginLeft: '-3px' }}>(4.3) 223</p>
                                <button className="dealoftheday">Deal of the day</button>
                                <nobr style={{ fontSize: '20px', fontWeight: '500px', marginLeft: '20px' }}>
                                    ₹552 <s style={{ fontSize: '12px', color: '#696e72' }}> ₹999</s>&nbsp;<span style={{ fontSize: '12px', color: '#696e72' }}>(48% off)</span></nobr>
                            </div>
                        </div>
                    </div>
                    <div className="subcatrow">
                        <div onClick={productinfo} className="subcatcolumn">
                            <img src="../public/Images/img.jpg" className="subcateimgscale" />
                            <h2 className="headingstyle">
                                1st
                                categories in
                                this sub categories</h2>
                            <div className="subcatdetails">
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                                <p style={{ marginLeft: '-3px' }}>(4.3) 223</p>
                                <button className="dealoftheday">Deal of the day</button>
                                <nobr style={{ fontSize: '20px', fontWeight: '500px', marginLeft: '20px' }}>
                                    ₹552 <s style={{ fontSize: '12px', color: '#696e72' }}> ₹999</s>&nbsp;<span style={{ fontSize: '12px', color: '#696e72' }}>(48% off)</span></nobr>
                            </div>
                        </div>
                        <div onClick={productinfo} className="subcatcolumn">
                            <img src="../public/Images/img.jpg" className="subcateimgscale" />
                            <h2 className="headingstyle">
                                1st
                                categories in
                                this sub categories</h2>
                            <div className="subcatdetails">
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                                <p style={{ marginLeft: '-3px' }}>(4.3) 223</p>
                                <button className="dealoftheday">Deal of the day</button>
                                <nobr style={{ fontSize: '20px', fontWeight: '500px', marginLeft: '20px' }}>
                                    ₹552 <s style={{ fontSize: '12px', color: '#696e72' }}> ₹999</s>&nbsp;<span style={{ fontSize: '12px', color: '#696e72' }}>(48% off)</span></nobr>
                            </div>
                        </div>
                        <div onClick={productinfo} className="subcatcolumn">
                            <img src="../public/Images/img.jpg" className="subcateimgscale" />
                            <h2 className="headingstyle">
                                1st
                                categories in
                                this sub categories</h2>
                            <div className="subcatdetails">
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                                <p style={{ marginLeft: '-3px' }}>(4.3) 223</p>
                                <button className="dealoftheday">Deal of the day</button>
                                <nobr style={{ fontSize: '20px', fontWeight: '500px', marginLeft: '20px' }}>
                                    ₹552 <s style={{ fontSize: '12px', color: '#696e72' }}> ₹999</s>&nbsp;<span style={{ fontSize: '12px', color: '#696e72' }}>(48% off)</span></nobr>
                            </div>
                        </div>
                    </div>
                    <div className="subcatrow">
                        <div onClick={productinfo} className="subcatcolumn">
                            <img src="../public/Images/img.jpg" className="subcateimgscale" />
                            <h2 className="headingstyle">
                                1st
                                categories in
                                this sub categories</h2>
                            <div className="subcatdetails">
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                                <p style={{ marginLeft: '-3px' }}>(4.3) 223</p>
                                <button className="dealoftheday">Deal of the day</button>
                                <nobr style={{ fontSize: '20px', fontWeight: '500px', marginLeft: '20px' }}>
                                    ₹552 <s style={{ fontSize: '12px', color: '#696e72' }}> ₹999</s>&nbsp;<span style={{ fontSize: '12px', color: '#696e72' }}>(48% off)</span></nobr>
                            </div>
                        </div>
                        <div onClick={productinfo} className="subcatcolumn">
                            <img src="../public/Images/img.jpg" className="subcateimgscale" />
                            <h2 className="headingstyle">
                                1st
                                categories in
                                this sub categories</h2>
                            <div className="subcatdetails">
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                                <p style={{ marginLeft: '-3px' }}>(4.3) 223</p>
                                <button className="dealoftheday">Deal of the day</button>
                                <nobr style={{ fontSize: '20px', fontWeight: '500px', marginLeft: '20px' }}>
                                    ₹552 <s style={{ fontSize: '12px', color: '#696e72' }}> ₹999</s>&nbsp;<span style={{ fontSize: '12px', color: '#696e72' }}>(48% off)</span></nobr>
                            </div>
                        </div>
                        <div onClick={productinfo} className="subcatcolumn">
                            <img src="../public/Images/img.jpg" className="subcateimgscale" />
                            <h2 className="headingstyle">
                                1st
                                categories in
                                this sub categories</h2>
                            <div className="subcatdetails">
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                                <p style={{ marginLeft: '-3px' }}>(4.3) 223</p>
                                <button className="dealoftheday">Deal of the day</button>
                                <nobr style={{ fontSize: '20px', fontWeight: '500px', marginLeft: '20px' }}>
                                    ₹552 <s style={{ fontSize: '12px', color: '#696e72' }}> ₹999</s>&nbsp;<span style={{ fontSize: '12px', color: '#696e72' }}>(48% off)</span></nobr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default SubCategories