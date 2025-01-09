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
    <div className="content2-item3"></div>
    <div className="content2-item4">{num}
        <input type="time" name="" id="time" />
        <button onClick = {() =>setNum(num + 1)}></button>
    </div>
    <div className="content2-item5">248 15:30 <span className="span-bar"><ImStatsBars /></span>
    </div>
    <div className="content2-item6">248 15:30 <span className="span-bar"><ImStatsBars /></span>
    </div>
    <div className="content2-item7">248 15:30 <span className="span-bar"><ImStatsBars /> </span>
    </div>
    <div className="content2-item8">248 15:30 <span className="span-bar"><ImStatsBars /> </span>
    </div>
    <div className="content2-item9">248 15:30 <span className="span-bar"><ImStatsBars /> </span>
    </div>
    <div className="content2-item10">248 15:30 <span className="span-bar"> <ImStatsBars /> </span>
    </div>
    <div className="content2-item11">248 15:30 <span className="span-bar"><ImStatsBars /> </span>
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