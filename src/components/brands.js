import "../styles/brands.css";
import logo11 from "../media/brand1.png";
import logo12 from "../media/brand2.png";
import logo13 from "../media/brand3.png";
import logo14 from "../media/brand4.png";
import logo15 from "../media/brand5.png";
import logo16 from "../media/brand6.png";
const Brand = () =>{
    return(
        <div className="brandHeader">
            <img className="image" src={logo11}></img>
            <img className="image" src={logo12}></img>
            <img className="image" src={logo13}></img>
            <img className="image" src={logo14}></img>
            <img className="image" src={logo15}></img>
            <img className="image" src={logo16}></img>
        </div>
    )
}

export default Brand;