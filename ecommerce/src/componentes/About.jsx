import React, { useState, useCallback, useRef } from "react";
import "../css/About.css"
// export default function About() {
//   const [count, setCount] = useState(0);
//   const functionRef = useRef(null);

// //   const handleClick = useCallback(() => {
// //     console.log("Clicked");
// //   }, []); // No dependencies → stable function

// const handleClick  = ()=>{
//        console.log("Clicked");
// }

//   if (functionRef.current !== handleClick) {
//     console.log("Same function instance retained");
//     functionRef.current = handleClick;
//   }

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Re-render</button>
//       <p>{count}</p>
//     </div>
//   );
// }

function About() {
  return (
    <div className="main-about">
      <div className="sub-about">
        <p>
          <span style={{fontSize:'22px',fontWeight:'600'}}>About Us</span> – KICKS At KICKS, we believe that great shoes do more than
          just complete an outfit — they define confidence, comfort, and
          character. Founded with a passion for quality and style, KICKS is a
          footwear brand dedicated to creating shoes that blend modern design,
          premium materials, and everyday comfort. Whether you’re stepping out
          for work, hitting the streets with friends, or pushing your limits,
          KICKS is built to move with you. 
          
          <h3 style={{margin:'3px 0px'}}>We focus on:</h3>
          <li>   Superior comfort for
          all-day   wear</li>
          <li>Trendy and timeless designs</li>
          <li> Durable craftsmanship that
          lasts </li>
          <li>  Affordable pricing without compromising quality </li>
     Every pair of
          KICKS shoes is designed with attention to detail, ensuring the perfect
          balance between fashion and function. Our mission is simple — to help
          you walk confidently, wherever life takes you. Step into style. Step
          into comfort. Step into KICKS.
        </p>
      </div>
    </div>
  );
}

export default About;
