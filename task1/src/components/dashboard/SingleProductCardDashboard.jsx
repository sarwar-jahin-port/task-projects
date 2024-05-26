/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    if (confirm("Are you sure?")) {
      await fetch(`http://localhost:3000/shoes/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          onDelete(id);
        });
    }
  };

  return (
    <tr>
      <td className="relative w-40 h-24 overflow-visible"><img className="absolute top-2 w-20 h-20 hover:w-40 hover:h-40 hover:z-10" src={shoe.image_url} alt="" /></td>
      <td>{shoe.title}</td>
      <td>{shoe.brand}</td>
      <td>{shoe.price}</td>
      <td>
        <button className="btn btn-sm">
          <Link to={`/products/${id}`}>See details</Link>
        </button>
      </td>
      <td><button className="btn btn-sm btn-accent">
        <Link to={`edit/${id}`}>Edit</Link></button></td>
      <td><button className="btn btn-sm btn-error" onClick={handleDelete}>Delete</button></td>
    </tr>
  );
};

export default SingleProductCardDashboard;
