import React from 'react';
import "../assets/css/FirstBanner.css"

const FirstBanner = () => {
    return (

        <div>
            <img className="firstbanner"
                src="https://static3.depositphotos.com/1000454/256/i/450/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg" />

        </div>

    )
}

export default FirstBanner





// import React, { useState } from "react";

// const FirstBanner = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const items = [
//         { id: 1, title: "Item 1", description: "This is item 1", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcrgvSXoB3vNxRFbS1cQxOg5lxWogeXC48Jf8mA6hZXK4rRtXx4Qksu2WfQo7TF20o_0&usqp=CAU" },
//         { id: 2, title: "Item 2", description: "This is item 2", url:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/video/discover/types-of-shots-in-films/desktop/types-of-shots-in-film_P1_900x420.jpg.img.jpg" },
        
//     ];

//     const handleNext = () => {
//         setActiveIndex(prevIndex =>
//             prevIndex === items.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     const handlePrev = () => {
//         setActiveIndex(prevIndex =>
//             prevIndex === 0 ? items.length - 1 : prevIndex - 1
//         );
//     };

//     return (
//         <div style={{ width: '1100px', height: '400px', backgroundColor: 'skyblue', }}>
//             <div>
//                 {items.map((item, index) => (
//                     <div
//                         key={item.id}
//                         style={{ display: index === activeIndex ? "block" : "none" }} >
//                         <img src={item.url} style={{width: '1100px', height: '400px',}}></img>
//                     </div>
//                 ))}
//             </div>
//             <button onClick={handlePrev}>Prev</button>
//             <button onClick={handleNext}>Next</button>
//         </div>
//     );
// };

// export default FirstBanner;
