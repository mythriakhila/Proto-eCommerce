import Header from "./components/header";
import Footer from "./components/footer";
import Sliding from "./components/carousel";
import Body from "./components/body";
import Brand from "./components/brands";
import Blogger from "./components/blog";
import Main from "./components/feature";
import Browsers from "./components/browse"
import 'antd/dist/reset.css';
function App() {
  return (
    <div>
      <Header/>
      <Sliding/>
      <Main/>
      <Browsers/>
      <Body/>
      <Blogger/>
      <Brand/>

     <Footer/>
    </div>
  );
}

export default App;
