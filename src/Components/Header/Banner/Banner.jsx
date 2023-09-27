

const Banner = () => {
    return (
        <div className="h-[60vh] ">
             <div className="relative"> 
             <img className="h-[60vh] w-full opacity-30" src="https://img.freepik.com/free-photo/diverse-hands-gestured-heart-shape_53876-148195.jpg?w=740&t=st=1695819833~exp=1695820433~hmac=35fa554ec160ab69cef0ea48114b6228f6e881cc5ff726e8e057733b4c6ba279" alt="" />
             <span className="absolute top-[120px] left-[280px]"><h1 className="text-5xl">I Grow By Helping People In Need</h1></span>

          <div className="absolute top-1/2 left-[372px]">
           
          <div className="form-control">
          <label className="label">
     </label>
       <label className="input-group">
       <input type="text" placeholder="Search here" className="input input-bordered w-[400px]" />
        <span className="bg-red-400">Search</span>
       </label>
        </div>
          </div>

           </div>
          
        </div>
    );
};

export default Banner;