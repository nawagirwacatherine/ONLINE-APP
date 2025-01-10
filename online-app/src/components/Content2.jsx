import PromoHeading from "./PromoHeading"

import { IoMdFootball } from "react-icons/io";
import { FaBasketballBall } from "react-icons/fa";
import { CgTennis } from "react-icons/cg";
import { FaAnchor } from "react-icons/fa";
import { FaHandBackFist } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { ImStatsBars } from "react-icons/im";


function Content2 () {
 const [ num, setNum ]  = useState (282);

 const data = {
    heading: "99% off all items!",
    callToAction: "Everything must go!"
 }
    return(
    <>
     
    <div className="content2">
    <div className="content2-item1" >TOP MATCHES</div>
    <div className="content2-item2">
        <span className="soccer"><IoMdFootball />soccer</span>
        <span className="basketball"><FaBasketballBall />Basketball</span>
        <span className="tenis"><CgTennis />Tenis</span>
        <span className="hokey"><FaAnchor />Hokey</span>
        <span className="handball"> <FaHandBackFist />
        Handball</span>

        <div className="arrows"><GoArrowLeft /><GoArrowRight />
        </div>
    
    </div>
    <div className="content2-item3">

    < PromoHeading  
    head = {data.heading}
    callToAction = {data. callToAction}
    />
    </div>
    <div className="content2-item4">{num}
        <input type="time" name="" id="time" />
        <button onClick = {() =>setNum(num + 1)}></button>
    </div>
    <div className="content2-item5">248 15:30 <span className="span-bar"><ImStatsBars /></span>
    </div>
    <div className="content2-item5">248 15:30 <span className="span-bar"><ImStatsBars /></span>
    </div>
    <div className="content2-item5">248 15:30 <span className="span-bar"><ImStatsBars /> </span>
    </div>
    <div className="content2-item5">248 15:30 <span className="span-bar"><ImStatsBars /> </span>
    </div>
    <div className="content2-item5">248 15:30 <span className="span-bar"><ImStatsBars /> </span>
    </div>
    <div className="content2-item5">248 15:30 <span className="span-bar"> <ImStatsBars /> </span>
    </div>
    <div className="content2-item5">248 15:30 <span className="span-bar"><ImStatsBars /> </span>
    </div>

    <div className="live"> 
        <div>LIVE</div>
        <div className="more">More</div>
    </div>
    </div>
      
    </>
    
    )
    
    
    }
    
    export default Content2;