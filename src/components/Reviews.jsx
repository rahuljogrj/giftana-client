import React from 'react';
import "../assets/css/Review.css";

const Reviews = () => {

    return (
        <div className="reviews">
            <h1 style={{paddingLeft:'20px', fontSize:'30px', fontWeight:'700', color:'black'}}>Customer Stories</h1>


            <div className="mySlides fade">
                <div className="flex justify-between row">
                    <div className="col-md-3">
                        <div className="testimonial">
                            <blockquote className="blockquote">
                                <img className="reviewimg"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjX2LQupL7FgaqOYjkyq1RDrpppQfCdbCjRA&usqp=CAU" /><br/>
                                    <div className="marcheck"><i className="fa fa-star checked"></i>
                                        <i className="fa fa-star checked"></i>
                                        <i className="fa fa-star checked"></i>
                                        <i className="fa fa-star "></i>
                                        <i className="fa fa-star "></i>
                                    </div>
                                    <p className="mb-0 reviewp">This product is amazing! I
                                        highly recommend it to anyone in
                                        need of a solution This product is amazing! I highly recommend it to anyone in
                                        need of a solution
                                        like this.</p>
                                    <footer className="blockquote-footer">John Doe</footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="testimonial">
                            <blockquote className="blockquote">
                                <img className="reviewimg"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjX2LQupL7FgaqOYjkyq1RDrpppQfCdbCjRA&usqp=CAU" /><br/>
                                    <div className="marcheck"><i className="fa fa-star checked"></i>
                                        <i className="fa fa-star checked"></i>
                                        <i className="fa fa-star checked"></i>
                                        <i className="fa fa-star "></i>
                                        <i className="fa fa-star "></i>
                                    </div>
                                    <p className="mb-0 reviewp">This product is amazing! I
                                        highly recommend it to anyone in
                                        need of a solution
                                        like this.</p>
                                    <footer className="blockquote-footer">John Doe</footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="testimonial">
                            <blockquote className="blockquote">
                                <img className="reviewimg"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjX2LQupL7FgaqOYjkyq1RDrpppQfCdbCjRA&usqp=CAU" /><br/>
                                    <div className="marcheck"><i className="fa fa-star checked"></i>
                                        <i className="fa fa-star checked"></i>
                                        <i className="fa fa-star checked"></i>
                                        <i className="fa fa-star "></i>
                                        <i className="fa fa-star "></i>
                                    </div>
                                    <p className="mb-0 reviewp">This product is amazing! I
                                        highly recommend it to anyone in
                                        need of a solution This product is amazing! I highly recommend it to anyone in
                                        need of a solution
                                        like this.</p>
                                    <footer className="blockquote-footer">John Doe</footer>
                            </blockquote>
                        </div>
                    </div>
                    
                </div>
            </div>

           
            <a className="prevReview semi-circle-prev" onClick="plusSlides(-1)">❮</a>
            <a className="nextReview semi-circle-next" onClick="plusSlides(1)">❮</a>


        </div>

    )
}

export default Reviews