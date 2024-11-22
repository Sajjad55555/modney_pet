import { FaCircleChevronLeft,FaCircleChevronRight } from "react-icons/fa6";
import House_Image_Card from "./house_image_card";

export default function House_card(props:any) {
  return (
    <>
    <div className='header_div'>
    <div className="hero">
    <div className="house_card_div">
        <div className="house_title">
            <div className="house_title">{props.title}</div>
            <div className="house_icons">
                <div className="icons_size"><FaCircleChevronLeft/></div>
                <div className="icons_size"><FaCircleChevronRight/></div>
            </div>
        </div>
        <div className="house_image_cards">
            <House_Image_Card img="/house_image_cards/1.jpeg"/>
            <House_Image_Card img="/house_image_cards/2.jpeg"/>
            <House_Image_Card img="/house_image_cards/3.jpeg"/>
        </div>
    </div>
    </div>
    </div>
    
    
    
    
    </>
  )
}
