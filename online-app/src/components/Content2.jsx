import PromoHeading from "./PromoHeading"
import SubContent2 from "./SubContent2"

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

    < SubContent2 number= "282" time= "15:30" country="ENG"  team1="Tottenham"  team2="NewCastle"  number2="912"/>

    < SubContent2 number= "282" time= "15:30" country="ENG"  team1="Aston Villa"  team2="Leicester"  number2="912"/>
    < SubContent2 number= "" time= "15:30" country="ENG"  team1="Bournmouth"  team2="Everton"  number2="912"/>
    < SubContent2 number= "282" time= "15:30" country="ENG"  team1="Crystal Palace"  team2="Chelsea"  number2="912"/>
    < SubContent2 number= "282" time= "15:30" country="ENG"  team1="Manchester City"  team2="WestHam"  number2="912"/>
    < SubContent2 number= "282" time= "15:30" country="ENG"  team1="SouthHampton"  team2="Brentford"  number2="912"/>
    < SubContent2 number= "282" time= "15:30" country="ENG"  team1="Brighton"  team2="Arsenal"  number2="912"/>
    < SubContent2 number= "282" time= "15:30" country="ENG"  team1="Nice"  team2="Renners"  number2="912"/>
    < SubContent2 number= "282" time= "15:30" country="ENG"  team1="St Etienne"  team2="Renne"  number2="912"/>
    <div className="live"> 
        <div>LIVE</div>
        <div className="more">More</div>
    </div>
    </div>
      
    </>
    
    )
    
    
    }
    
    export default Content2;