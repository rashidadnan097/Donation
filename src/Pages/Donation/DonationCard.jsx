

const DonationCard = ({help}) => {
     
    const {Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Text_color, Description, Price} = help;

    return (
        <div className="mt-10">
           <div style={{background:Card_bg}} className="card card-side  border rounded-md">
         <img className="w-[220px] h-[250px]" src={Picture} alt="Movie"/>
       <div className="card-body">
      <button style={{background:Text_button_bg,color:Text_color}} className="btn px-2 py-3 w-28 cursor-default">{Category}</button>
      <p className="text-2xl font-bold">{Title}</p>
      <p style={{color:Text_color}} className="text-xl">{Price}</p>
      <div className="card-actions ">
      <button style={{background:Text_color}} className="btn text-white font-extrabold">View Details</button>
     </div>
      </div>
      </div>
        </div>
    );
};

export default DonationCard;