import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Donate = () => {

   const [help, setHelp] = useState({})

    const {Category} = useParams()
  


    const helps = useLoaderData()
    

    useEffect(() =>{

        const findHelp = helps?.find(help => help.Category === Category )
     
        setHelp(findHelp)

    },[Category, helps])

    console.log(help);


   


    return (
        <div>
            <img src= alt="" />
        </div>
    );
};

export default Donate;