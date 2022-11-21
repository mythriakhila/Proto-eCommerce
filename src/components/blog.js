import "../styles/blog.css";


const Blogger = () =>{
    return(
        <div className="blogContainer">
            <div className="blogheading">FROM THE BLOG</div>
<div className="bloghead2">Only the latest news from us, stay tuned.</div>
<div className="blogsdiv">
    <div className="blog1">
        <div className="ancnews1"><a className="ancnews" href="https://d-themes.com/react/porto/demo11/pages/blog/fashion-news/"><b>FASHION NEWS</b></a></div>
        <div className="date">11-NOV-2020</div>
        <div className="para11">Quisque elementum nibh at dolor</div>
        <div className="para21">pellentesque,a elenfied libero</div>
        <div className="ancread2"><a className="ancread" href="https://d-themes.com/react/porto/demo11/pages/blog/fashion-news/">READ MORE</a></div>
    </div>
    <div className="blog2">
    <div className=""><a className="ancnews" href="https://d-themes.com/react/porto/demo11/pages/blog/trends-of-spring/"><b>TRENDS OF SPRING</b></a></div>
    <div className="date">25-OCT-2020</div>
    <div className="para11">Quisque elementum nibh at dolor</div>
        <div className="para21">pellentesque,a elenfied libero</div>
        <div className="ancread1"><a className="ancread" href="https://d-themes.com/react/porto/demo11/pages/blog/trends-of-spring/">READ MORE</a></div>
    </div>
</div>
<div className="our"><a className="ancour" href="https://d-themes.com/react/porto/demo11/pages/blog/">OUR BLOG </a></div>
        </div>
    )
}

export default Blogger;