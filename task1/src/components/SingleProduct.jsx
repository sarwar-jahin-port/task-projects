import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="max-h-96 min-w-full" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body flex flex-col items-start">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}$</h3>
        <p className="text-justify">{description.length > 100 ? description.slice(0, 100): description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
