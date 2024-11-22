import Body_card from "./components/body_card";
import Body_text from "./components/body_text";
import Bodyimage from "./components/bodyimage";
import Footer from "./components/footer";
import Header from "./components/header";
import Header_text from "./components/header_text";
import House_card from "./components/house_card";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    // main div

    <div className="">
      <Navbar />
      
          <Header />
          <Header_text />
          {/* house cards div start */}
          <House_card title="HAUS in HOUSE"/>

          {/* body image */}
          <Bodyimage/>
          {/* body cards */}
          {/* <Body_card/> */}

          {/* house card 2 */}
          <House_card title="모드니펫 키링"/>
          <Footer/>
        </div>
        
          

        
      
    


  )
}
//  {/* <!-- nav logo div --> */}
//  <div className="nav-container">
//  {/* <!-- img 1 --> */}
//  <div className="logo-1">
//      <img className="image-1" src="/navbar/logo.png" alt="Logo 1"/>
//  </div>
//  {/* <!-- img 2 --> */}
//  <img className="image-2" src="/navbar/logo_2.png" alt="Logo 2"/>
// </div>