import { useEffect } from "react";
import { useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {

    const [donation,setDonation] = useState([])

    const [noFound,setNoFound] = useState(false);

    const [isShow,setIsShow] = useState(false)


    useEffect(()=>{
        const donateItems = JSON.parse(localStorage.getItem('donation'));
        
        if (donateItems) {
            setDonation(donateItems)  
        }else{
            setNoFound("No Data Found")
        }
    },[])

     console.log(donation);

     const handleRemove = () =>{
        localStorage.clear()
        setDonation([])
        setNoFound("No Data Found")
     }


    return (
        <div>
            {
                noFound?<p className="h-[80vh] text-2xl flex justify-center items-center">{noFound}</p>: 
                
                <div>

                    {donation.length > 0 && <button onClick={handleRemove} className="mx-auto px-5 bg-green-600 text-white block py-3 rounded">Clear All Donation</button>}
                    <div className="grid grid-cols-2 gap-x-5">
                        {
                        isShow?  donation.map((help) => (<DonationCard key={help.id} help={help}></DonationCard> )) 
                        :  donation.slice(0,4).map((help) => (<DonationCard key={help.id} help={help}></DonationCard> ))
                        }
                    </div>

                    {donation.length > 4 && <button onClick={()=>setIsShow(!isShow)} className=" mt-8 mb-10 mx-auto px-5 bg-green-600 text-white block py-3 rounded">{isShow? "See less" : "See More"}</button>}


                </div>
            }
        </div>
    );
};

export default Donation;