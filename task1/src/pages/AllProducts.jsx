import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";
import { toast } from "react-toastify";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
      setProducts(products.filter((product) => product.id !== id));
      toast("Product Deleted.");
  };

  return (
    <>
    <h1 className="text-5xl font-bold text-center my-4">All Produts</h1>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Title</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map(shoe =>(
              <SingleProductCardDashboard
                key={shoe.id}
                shoe={shoe}
                onDelete={handleDeleteProduct}
                />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Photo</th>
              <th>Title</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default AllProducts;
