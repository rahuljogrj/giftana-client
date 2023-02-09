import React from 'react';
import "../assets/css/ProductInfo.css";

const ProductInfo = () => {
    return (
        <div style={{ paddingTop: '30px', margin: 'auto' }}>

            <div>
                <ul className="breadcrumb1">
                    <li><a href="/">Home</a></li>
                    <li><a href="/subcategories">Back</a></li>
                </ul>
            </div>


            <div className=" flex">
                <div style={{ width: '5%', marginLeft: '50px' }}>
                    <img alt="ecommerce" className="extraimages lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" />

                    <img alt="ecommerce" className="extraimages  lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" />

                    <img alt="ecommerce" className="extraimages lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" />

                    <img alt="ecommerce" className="extraimages lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" />

                </div>

                <div style={{ width: '35%' }}>
                    <img alt="ecommerce" className="mainimage lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" />
                </div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style={{ width: '60%' }}>
                    <p style={{ fontSize: '15px', fontWeight: 500 }}>BRAND NAME</p>
                    <h1 style={{ fontSize: '25px', fontWeight: 700 }}>The Catcher in the Rye</h1>
                    <div className="flex mb-4">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <span className="text-gray-600 ml-3">4 Reviews</span>
                        </span>


                    </div>

                    <h2 className="title-font font-medium text-2xl text-gray-900">$58.00</h2>
                    <div className="flex" style={{ float: 'left' }}>
                        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Buy Now</button>
                        <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 ml-5 focus:outline-none hover:bg-red-600 rounded">Add To Cart</button>
                        
                    </div>


                    <div className="flex items-center" style={{ marginTop: '60px', marginBottom: '20px' }}>
                        <div className="flex">
                            <span className="mr-3">Color : </span>
                            <button className="border-2 border-gray-300 rounded-full w-8 h-8 focus:outline-none" />
                            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-8 h-8 focus:outline-none" />
                            <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-8 h-8 focus:outline-none" />
                            <button className="border-2 border-gray-300 ml-1 rounded-full w-8 h-8 focus:outline-none" />
                            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-8 h-8 focus:outline-none" />
                            <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-8 h-8 focus:outline-none" />
                        </div>
                    </div>


                    <hr />
                    <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha
                        taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage
                        brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle
                        pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                    <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha
                        taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage
                        brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle
                        pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                    <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha
                        taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage
                        brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle
                        pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                </div>
            </div>


            <div>
                <div style={{ marginLeft: '20%' }}>
                    <a class="inlinewords" href="#">Description</a>
                    <a class="inlinewords" href="#">Technical parameters</a>
                    <a class="inlinewords" href="#">Videos</a>
                    <a class="inlinewords" href="#">Reviews(0)</a>
                </div>

                <hr style={{ border: '1px solid black' }} />
            </div>



        </div>



    )
}

export default ProductInfo