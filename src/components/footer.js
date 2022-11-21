import logo1 from "../media/eb-33-removebg-preview.png"
import logo2 from "../media/EASY-LINK-H53-removebg-preview.png"
import logo3 from "../media/mail-removebg-preview.png"
import { Input } from 'antd';
import { CaretRightOutlined,FacebookOutlined,TwitterOutlined,LinkedinOutlined} from "@ant-design/icons"
import "../styles/footer.css"
const Footer= () => {
    return(
        <div className="footerHeader">
        <div className="footerContainer">
           <div className="footerOne">
            <div className="contact">CONTACT INFO</div>
<div className="footertwo"><div className="div1"><img src={logo1} className="img1"/></div>
<div className="footerthree"><div className="para1">ADDRESS</div>
<div className="para2">123 Street Name, City, England</div>
</div>
</div>
           
 <div className="footer2"><div className="div2"><img src={logo2} className="img2"/></div>
<div className="footer3"><div className="para3">PHONE</div>
<div className="para4">Toll Free (123) 456-7890</div>
</div>
</div>

<div className="footer4"><div className="div3"><img src={logo3} className="img3"/></div>
<div className="footer5"><div className="para5">EMAIL</div>
<div className="para6">mail@example.com</div>
</div>
</div>
</div>

<div className="footernext">
    <div className="account">ACCOUNT</div>
    <div className="about"><CaretRightOutlined /><a href="https://d-themes.com/react/porto/demo11/pages/about-us/" className="anc">About us</a></div>
    <div className="contactus"><CaretRightOutlined /><a href="https://d-themes.com/react/porto/demo11/pages/contact-us/" className="anc">Contact us</a></div>
    <div className="myaccount"><CaretRightOutlined /><a href="https://d-themes.com/react/porto/demo11/pages/account/" className="anc">My Account</a></div>
    <div className="order"><CaretRightOutlined /><a href="#" className="anc">Order history</a></div>
    <div className="advance"><CaretRightOutlined /><a href="#" className="anc">Advanced search</a></div>
</div>

<div className="footernext1">
    <div className="main">MAIN FEATURES</div>
    <div className="about"><CaretRightOutlined /><a href="#" className="anc">Super Fast React Template</a></div>
    <div className="contactus"><CaretRightOutlined /><a href="#" className="anc">1st Fully working Ajax Theme</a></div>
    <div className="myaccount"><CaretRightOutlined /><a href="#" className="anc">36 Unique Shop Layouts</a></div>
    <div className="order"><CaretRightOutlined /><a href="#" className="anc">Powerful Admin Panel</a></div>
    <div className="advance"><CaretRightOutlined /><a href="#" className="anc">Mobile & Retina Optimized</a></div>
</div>


<div className="footernext2">
<div className="news">NEWSLETTER</div>
<div className="para7">Get all the latest information on Events, Sales</div>
<div className="para8">and Offers. Sign up for newsletter today.</div>
<div className="place">
    {/* <form> */}
    <Input className="input1"  placeholder="Enter email"  />
    {/* <input type="mail" className="input1" required/> */}
    <button type="submit"><a href="#" className="para9">GO</a></button>
{/* </form> */}
</div>
</div>
</div>


<div className="border1"></div>
<div className="footerflex">
    <div className="footerflex1">© Porto eCommerce. 2021. All Rights Reserved</div>
    <div className="footerflex2">
        <span className="fb"><FacebookOutlined /></span>
        <span className="twitter"><TwitterOutlined /></span>
        <span className="lin"><LinkedinOutlined /></span>
    </div>
</div>
</div>
    )
}
export default Footer;