import logo4 from "../media/slide-1.jpg";
import logo5 from "../media/slide-2.jpg";
import logo6 from "../media/logo-white__1_-removebg-preview.png";
import logo7 from '../media/admin-removebg-preview.png';
import logo8 from '../media/download-removebg-preview.png';
import logo9 from '../media/cartlogo-removebg-preview.png';
import { Carousel } from "antd";
import { Input } from 'antd';
import { UserOutlined,HeartOutlined, SearchOutlined,ShoppingOutlined } from "@ant-design/icons";
import "../styles/carousel.css";


const Sliding = () =>{
    return(
        <div className="carouselContainer">
       
     <Carousel >
        <div className="carousel1">
        <div className="carouselflex">
              <div className="carouseltop1"><img className="carouseltop" src={logo6} /> </div>
             <div className="carouselflex2">
              <div ><Input className="search"  placeholder="Search Products" suffix={ <SearchOutlined />} /></div>
              <div className="carouseltop2"><UserOutlined />  </div>
              <div className="carouselheart">< HeartOutlined /> </div>
              <div className="carouselcart"><ShoppingOutlined /></div>
              </div>
              </div>
         <img className="carouselImg" src={logo4} />
         <div className="ab">
          <div className="new">New Season Hats</div>
        <div className="rotation"> <span className="rotate">UP TO</span><span className="flat">20% OFF</span></div>
        <div className="border"></div>
        <div className="spansection"><span className="boldletter">STARTING AT $</span>
        <span className="span39">39</span><span className="boldletter">99</span>
        <span className="shop"><a className="ancshop" href="https://d-themes.com/react/porto/demo11/shop/">SHOP NOW</a></span>
        </div>
         </div>
        </div>
        <div className="carousel2">
        <div className="carouselflex">
              <div className="carouseltop1"><img className="carouseltop" src={logo6} /> </div>
             <div className="carouselflex2">
              <div ><Input className="search"  placeholder="Search Products" suffix={ <SearchOutlined />} /></div>
              <div className="carouseltop2"><UserOutlined />  </div>
              <div className="carouselheart">< HeartOutlined /> </div>
              <div className="carouselcart"><ShoppingOutlined /></div>
              </div>
              </div>
        <img className="carouselImg2" src={logo5} />
        <div className="abcd">
          <div className="new">New Season Hats</div>
        <div className="rotation"> <span className="rotate">UP TO</span><span className="flat">20% OFF</span></div>
        <div className="border"></div>
        <div className="spansection"><span className="boldletter">STARTING AT $</span>
        <span className="span39">19</span><span className="boldletter">99</span>
        <span className="shop"><a className="ancshop" href="https://d-themes.com/react/porto/demo11/shop/">SHOP NOW</a></span>
        </div>
         </div>
        </div>
      
      </Carousel>
      
      </div>
    )

}
export default Sliding;