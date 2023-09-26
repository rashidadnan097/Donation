import HelpsCard from "./HelpsCard";


const Helps = ({helps}) => {

    console.log(helps);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-20 mb-20">
                {
                    helps?.map(help => <HelpsCard key={help.id} help={help}></HelpsCard> )
                }
            </div>
        </div>
    );
};

export default Helps;