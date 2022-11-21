import "../styles/body.css"
import logo21 from "../media/banner-1.jpg"
import logo22 from "../media/banner-2.jpg"
import logo23 from "../media/banner-3.jpg"
import {DollarOutlined,ShopOutlined} from "@ant-design/icons";
const Body = () =>{
    return(
        <div className="mainContainer">
<div className="bodyContainer">
    <div className="body1">
        <div className="flexbar1">
        <div className="sun">SUNGLASSES</div>
        <div className="pro">16 PRODUCTS</div>
        <div className="borders"></div>
        <div className="ancnow1"><a className="ancnow" href="https://d-themes.com/react/porto/demo11/shop/">SHOP NOW</a></div>
    </div>
   <div className="flexbar2"> <img className="fleximg" src={logo21}/></div>
    </div>
    <div className="body2">
    <div className="flexbar3">
        <div className="shoe">WOMEN SHOES</div>
        <div className="pro2">12 PRODUCTS</div>
        <div className="borders1"></div>
        <div className="ancshoe2"><a className="ancshoe" href="https://d-themes.com/react/porto/demo11/shop/">SHOP NOW</a></div>
    </div>
   <div className="flexbar4"> <img className="fleximg2" src={logo23}/></div>
    </div>

    <div className="body3">
    <div className="flexbar5">
        <div className="bags">WOMAN BAGS</div>
        <div className="pro3">38 PRODUCTS</div>
        <div className="borders2"></div>
        <div className="ancbags2"><a className="ancbags" href="https://d-themes.com/react/porto/demo11/shop/">SHOP NOW</a></div>
    </div>
   <div className="flexbar6"> <img className="fleximg3" src={logo22}/></div>
   </div>
</div>

<div className="main2">
    <div className="dollarflex">
<div className="fontset"><DollarOutlined /></div>
<div>
    <div className="free">FREE SHIPPING & RETURN</div>
    <div className="money">Free shipping on all orders over $99.</div>
    </div>
</div>

    <div className="dollarflex2">
<div className="fontset"><ShopOutlined /></div>
<div>
    <div className="free">MONEY BACK GUARANTEE</div>
    <div className="money">100% money back guarantee</div>
    </div>
    </div>
   
    
    <div className="dollarflex3">
<div className="fontset"><ShopOutlined /></div>
<div>
    <div className="free">ONLINE SUPPORT 24/7</div>
    <div className="money">Lorem ipsum dolor sit amet.</div>
    </div>
    </div>
    </div>
</div>
  )
};
export default Body;