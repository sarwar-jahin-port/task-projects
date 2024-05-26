import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const EditProducts = () => {
  const shoe = useLoaderData();

  const [title, setTitle] = useState(shoe.title);
  const [price, setPrice] = useState(shoe.price);
  const [brand, setBrand] = useState(shoe.brand);
  const [id, setId] = useState(shoe.id);
  const [description, setDescription] = useState(shoe.description);
  const [image_url, setImageURL] = useState(shoe.image_url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirm("Are you sure?")) {
      const form = e.target;
      const id = form.id.value;
      const title = form.title.value;
      const brand = form.brand.value;
      const price = form.price.value;
      const description = form.description.value;
      const image_url = form.image_url.value;

      const data = { id, title, brand, price, description, image_url };

      await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => data ? toast("Product Edited successfully.") : console.log(data));
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Edit Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <label className="block mb-2 font-semibold" htmlFor="title">Title</label>
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label className="block mb-2 font-semibold" htmlFor="brand">Brand</label>
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              id="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label className="block mb-2 font-semibold" htmlFor="price">Price</label>
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label className="block mb-2 font-semibold" htmlFor="description">Description</label>
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label className="block mb-2 font-semibold" htmlFor="image_url">Image URL</label>
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              id="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          {image_url && (
            <div className="mt-4 flex justify-center">
              <img className="max-w-xs rounded-lg border" src={image_url} alt="Preview" />
            </div>
          )}
          <div className="mt-2">
            <label className="block mb-2 font-semibold" htmlFor="id">ID</label>
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="id"
              id="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <input
              className="btn mt-4 w-full bg-red-500 text-white p-4 rounded-lg"
              type="submit"
              value="Update Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
