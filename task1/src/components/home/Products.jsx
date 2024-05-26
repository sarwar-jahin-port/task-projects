/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  console.log(data);
  const [displayShoes, setDisplayShoes] = useState("0");
  const [loadMore, setLoadMore] = useState(true);

  const handleLoadMore = () =>{
    if(Number(displayShoes)<data.length-6){
      setDisplayShoes(prev => {
        return Number(prev)+6;
      });
    }else{
      setLoadMore(false);
    }
  }
  
  return (
    <div className="w-full text-center">
      <h1 className="my-4 text-5xl font-bold text-center">Our Products</h1>

      <div className="grid grid-cols-4 px-10 gap-10 ">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, Number(displayShoes)+6).map((shoe) => (
            <SingleProduct key={shoe.id} shoe={shoe} />
          ))
        }
      </div>
      <button className="btn btn-info mt-5" onClick={handleLoadMore} disabled={!loadMore}>
        {loadMore ? "Load More ...": "No more shoes"}
      </button>
    </div>
  );
};

export default Products;
