
import House_Image_Card from './house_image_card'
import { FaCircleChevronLeft,FaCircleChevronRight } from "react-icons/fa6";
import Imagecard from './imagecard';
export default function YellowCard(props:any) {
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
            <Imagecard/>
            <Imagecard/>
            
        </div>
    </div>
    </div>
    </div>
    
    
    
    
    
    </>
  )
}
