import { Link } from "react-router-dom";


const HelpsCard = ({help}) => {

    const {Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Text_color, Description, Price} = help;


    return (
        <div>
           <Link to={`/helps/${Category}`}>
           <div style={{backgroundColor:Card_bg}}  className="card w-72 h-80 rounded-xl border ">
   <img className="w-[300px] h-[170px]" src={Picture} alt="" />
  <div className="card-body justify-start">
    <button style={{backgroundColor:Text_button_bg, color:Text_color}} className="btn  w-[90px] text-sm">{Category}</button>
    <span style={{color:Text_color}}><h2 className=" card-title text-lg">{Title}</h2></span>
    
    
  </div>
    </div>
           </Link>
        </div>
    );
};

export default HelpsCard;