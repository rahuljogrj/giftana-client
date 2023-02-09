




import React, { useState } from "react";
import "../assets/css/Navbar.css";


const NavbarSlider = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { id: 1, title: "Item 1", description: "This is item 1", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcrgvSXoB3vNxRFbS1cQxOg5lxWogeXC48Jf8mA6hZXK4rRtXx4Qksu2WfQo7TF20o_0&usqp=CAU" },
        { id: 2, title: "Item 2", description: "This is item 2", url: "https://www.adobe.com/content/dam/cc/us/en/creativecloud/video/discover/types-of-shots-in-films/desktop/types-of-shots-in-film_P1_900x420.jpg.img.jpg" },

    ];

    const handleNext = () => {
        setActiveIndex(prevIndex =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setActiveIndex(prevIndex =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (

        <>
            <div>
                <header class="relative bg-white">
                    <p class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
                        style={{ backgroundColor: 'rgb(216, 208, 208)', color: 'black' }}>
                        Get free delivery on orders over $100
                    </p>

                    <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ marginTop: '15px' }}>
                        <div class="border-b border-gray-200">
                            <div class="flex h-16 items-center">

                                <button type="button" class="rounded-md bg-white p-2 text-gray-400 lg:hidden">
                                    <span class="sr-only">Open menu</span>

                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>



                                <div class="flex justify between ..">
                                    <div class="group">
                                        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                                            <g>
                                                <path
                                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                                </path>
                                            </g>
                                        </svg>
                                        <input placeholder="Search" type="search" class="input" />
                                    </div>






                                    <div class="ml-4 flex lg:ml-0" style={{ marginLeft: '150px' }}>
                                        <a href="#">
                                            <span class="sr-only">Your Company</span>
                                            <img src="https://www.giftana.com/images/Giftana.com%20Logo%20(Black).png" alt="" style={{ width: '220px', height: 'auto', marginTop: '-15px' }} />

                                        </a>
                                    </div>
                                </div>




                                <div class="ml-auto flex items-center" style={{ marginRight: '10px' }}>

                                    <i class="navicon fa fa-bell-o" href="#">&nbsp;&nbsp;&nbsp;| </i>
                                    <i class="navicon fa fa-user-o" href="#">&nbsp;&nbsp;&nbsp;| </i>
                                    <i class="navicon fa fa-heart-o" href="#">&nbsp;&nbsp;&nbsp;| </i>
                                    <i class="navicon fa fa-shopping-cart" href="#"></i>

                                </div>

                            </div>
                        </div>
                    </nav>


                    <nav class="navbar flex justify-between ...">

                        <div class="leftnavmenu">
                            <i class="navfa fa fa-bars"></i>
                            <button type="button" style={{ fontSize: '18px', margin: '10px', fontWeight: '400', color: 'white' }}>All
                                categories &nbsp;&nbsp;&nbsp;&nbsp;</button> <i class="fa fa-chevron-down"
                                    style={{ fontSize: '14px', color: '#ffffff' }}></i>

                        </div>

                        <div class="rightnavmenu">
                            <button type="button" class="navbtn"><i class="navfa fa fa-home"></i> Home</button>
                            <button type="button" class="navbtn">Best Seller</button>
                            <button type="button" class="navbtn"><i class="navfa fa fa-th"></i> New
                                Arrivals</button>
                            <button type="button" class="navbtn"><i class="navfa fa fa-star"></i> Corporate
                                Gifts</button>
                            <button type="button" class="navbtn">Blog</button>
                            <button type="button" class="navbtn">Videos</button>
                            <button type="button" class="navbtn">Track Order</button>

                        </div>

                    </nav>



                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div calss="mainsidebar" style={{ width: '16%', border: '1px solid rgb(201, 186, 186)' }}>
                            <div class="subnav">
                                <button class="subnavbtn sidebar">Gift By Gender &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-chevron-right"
                                    style={{ fontSize: '12px', color: '#9e9ea7' }}></i> </button>
                                <div class="subnav-content flex justify-between .." style={{ marginTop: '-48px' }}>
                                    <div class="column">
                                        <h2 class="h2css">Column 1</h2>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                    </div>
                                    <div class="column">
                                        <h2 class="h2css">Column 2</h2>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                    </div>
                                    <div class="column">
                                        <h2 class="h2css">Column 3</h2>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                    </div>



                                    <div class="column">
                                        <img class="submenuimg" src="https://opri.sg/wp-content/uploads/2020/08/covid-square-image.png" />
                                        <h2 class="h2css">Image 1</h2>
                                        <p class="submenu">Some text..</p>
                                    </div>
                                    <div class="column">
                                        <img class="submenuimg" src="https://opri.sg/wp-content/uploads/2020/08/covid-square-image.png" />
                                        <h2 class="h2css">Image 2</h2>
                                        <p class="submenu">Some text..</p>
                                    </div>
                                </div>
                            </div>


                            <div class="subnav">
                                <button class="subnavbtn sidebar">Gift By Budget &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-chevron-right"
                                    style={{ fontSize: '12px', color: '#9e9ea7' }}></i> </button>
                                <div class="subnav-content flex justify-between .." style={{ marginTop: '-95px' }}>
                                    <div class="column">
                                        <h2 class="h2css">Column 1</h2>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                    </div>
                                    <div class="column">
                                        <h2 class="h2css">Column 2</h2>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                    </div>
                                    <div class="column">
                                        <h2 class="h2css">Column 3</h2>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                        <p class="submenu">Some text..</p>
                                    </div>


                                    <div class="column">
                                        <img class="submenuimg" src="https://opri.sg/wp-content/uploads/2020/08/covid-square-image.png" />
                                        <h2 class="h2css">Image 1</h2>
                                        <p class="submenu">Some text..</p>
                                    </div>

                                    <div class="column">
                                        <img class="submenuimg" src="https://opri.sg/wp-content/uploads/2020/08/covid-square-image.png" />
                                        <h2 class="h2css">Image 1</h2>
                                        <p class="submenu">Some text..</p>
                                    </div>

                                </div>
                            </div>


                            <button type="button" class="sidebar">Gift By Ideas</button><br />
                            <button type="button" class="sidebar">Gift By Occasion</button><br />
                            <button type="button" class="sidebar">Gift By Festival</button>
                        </div>

                        <div>
                            <div class="slideshow-container">
                                <div>
                                    <div>
                                        {items.map((item, index) => (
                                            <div
                                                key={item.id}
                                                style={{ display: index === activeIndex ? "block" : "none" }} >
                                                <img class="slider-img" src={item.url}></img>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{}}>
                                        <button class="prev" onClick={handlePrev}>❮</button>
                                        <button class="next" onClick={handleNext}>❯</button>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* <div class="slideshow-container">

                                    <div class="mySlides fade">

                                        <img class="slider-img"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcrgvSXoB3vNxRFbS1cQxOg5lxWogeXC48Jf8mA6hZXK4rRtXx4Qksu2WfQo7TF20o_0&usqp=CAU" />
                                        <div class="text">Caption Text</div>
                                    </div>

                                    <div class="mySlides fade">

                                        <img class="slider-img"
                                            src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/video/discover/types-of-shots-in-films/desktop/types-of-shots-in-film_P1_900x420.jpg.img.jpg" />
                                        <div class="text">Caption Two</div>
                                    </div>


                                    <a class="prev" onclick="plusSlides(-1)">❮</a>
                                    <a class="next" onclick="plusSlides(1)">❯</a>

                                </div> */}

                    </div>

                </header>
            </div>
        </>
    )
}

export default NavbarSlider