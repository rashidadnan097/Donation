import swal from 'sweetalert';

const DonateCard = ({help}) => {

    const {Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Text_color, Description, Price} = help;

    const handleAddToDonation = () =>{

        const addedDonateItem = [];

        const donateItems = JSON.parse(localStorage.getItem('donation'))

        if(!donateItems){
            addedDonateItem.push(help)
            localStorage.setItem('donation',JSON.stringify(addedDonateItem) )
            swal("Good job!", "Products added successfully", "success");
        }
        else{

            const isExist = donateItems.find(help => help.Category === Category)
           

            if(!isExist){
                addedDonateItem.push(...donateItems,help)
                localStorage.setItem('donation',JSON.stringify(addedDonateItem) )
                swal("Good job!", "Products added successfully", "success");
            }
            else{
                console.log("good job");
            }


           
    } 
}

    return (
        <div className="h-[120vh]">
           <div className="relative"> <img className="ml-[178px] w-[850px] h-[450px]" src={Picture} alt="" />
           <button onClick={handleAddToDonation} style={{backgroundColor:Text_color}}  className="absolute btn text-white  top-[360px] left-[230px]">Donate {Price}</button>
           </div>
            <div className="ml-[178px]">
                   <h1 className="mt-6 text-2xl font-extrabold">{Title}</h1>
                   <p className="mt-4 mr-[178px]">{Description}</p>
            </div>
        </div>

    );
};

export default DonateCard;