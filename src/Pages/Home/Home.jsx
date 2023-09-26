import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Helps from "../../Components/Helps/Helps";





const Home = () => {

    const helps = useLoaderData()

    console.log(helps);


    return (
        <div>
           <Banner></Banner>
           <Helps helps={helps}></Helps>
        </div>
    );
};

export default Home;