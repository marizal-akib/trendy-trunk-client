import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../Elements/Footer";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const allProducts = useLoaderData();
  const { id } = useParams();

  const product = allProducts.find((product) => product._id == id);

  const {image, name , description, type, price, rating } = product;

  const handleAddToCart = () => {
    const user = {
      email,
      cartProduct: product,
    };
    fetch("http://localhost:5000/user", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Added To The Cart",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  console.log(product);
  return (
    <div>
      <div className="bg-[#f3f0ec] md:flex gap-3 mx-auto py-6">
        <div className="md:w-1/2 ">
          <img className="mx-auto" src={image} alt="" />
        </div>
        <div className="md:w-1/2">
          <h2 className="underline md:text-2xl text-lg font-semibold">
            {name} 
          </h2>
          <p>{price}</p>
          <p>{rating}</p>
          <p>{type}</p>
          <p>{description}</p>

          <div className="text-center  ">
            <button
              onClick={handleAddToCart}
              className="btn w-4/5 bg-[#ff9f8b] "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
