import { IoMdFootball } from "react-icons/io";
import { FaBasketballBall } from "react-icons/fa";
import { CgTennis } from "react-icons/cg";
import { FaAnchor } from "react-icons/fa";
import { FaHandBackFist } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


function Content2 () {

    return(
    <>
     
    <div className="content2">
    <div className="content2-item1" >TOP MATCHES</div>
    <div className="content2-item2">
        <span><IoMdFootball />soccer</span>
        <span><FaBasketballBall />Basketball</span>
        <span><CgTennis />Tenis</span>
        <span><FaAnchor />Hokey</span>
        <span> <FaHandBackFist />
        Handball</span>

        <div className="arrows"><GoArrowLeft /><GoArrowRight />
        </div>
    
    </div>
    <div className="content2-item3">248 15:30</div>
    </div>
      
    </>
    
    )
    
    
    }
    
    export default Content2;