import { FaCircleChevronLeft,FaCircleChevronRight } from "react-icons/fa6";
import House_Image_Card from "./house_image_card";
import Body_image_card from "./body_image_card";

export default function Body_card() {
  return (
    <>
    <div className='header_div'>
    <div className="hero">
    <div className="house_card_div">
        <div className="house_title">
            <div className="house_title">지금 진행 중인 모드니펫 이벤트</div>
            <div className="house_icons">
                <div className="icons_size"><FaCircleChevronLeft/></div>
                <div className="icons_size"><FaCircleChevronRight/></div>
            </div>
        </div>
        <div className="house_image_cards">
            <Body_image_card img="/house_image_cards/1.jpeg"/>
            <Body_image_card img="/house_image_cards/1.jpeg"/>
            
            
        </div>
    </div>
    </div>
    </div>
    
    
    
    </>
  )
}