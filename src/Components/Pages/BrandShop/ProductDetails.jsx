import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../Elements/Footer";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const email = user._id;
  const allProducts = useLoaderData();
  const { id } = useParams();

  const product = allProducts.find((product) => product._id == id);

  const { image, name, description, type, price, rating } = product;

  const handleAddToCart = () => {
    const id = user._id;
    
    const cart = {
      id,
      email,
      cartProduct: product,
    };
    fetch("https://trendy-trunk-server-q2waxgv0j-mariz-al-akibs-projects.vercel.app/user", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
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

  // console.log(product);
  return (
    <div>
      <div className="bg-[#f3f0ec] md:flex gap-3 mx-auto py-6">
        <div className="md:w-1/2 ">
          <img className="mx-auto" src={image} alt="" />
        </div>
        <div className="md:w-1/2">
          <h2 className="underline md:text-2xl text-lg font-semibold">
            <span className="bg-slate-400 text-slate-400">..</span>
            <span className=" relative text-red-500 font-extrabold bg-red-500 ">
              l
            </span>
            <span className=" relative text-orange-500 font-extrabold bg-orange-500 ml-1 mr-2">
              l
            </span>
            {name}
          </h2>
          <p className="badge badge-error badge-sm">{type}</p>
          <p className="my-3">{rating}</p>
          <p className="font-thin text-2xl">{price}</p>
          <p className="my-3 text-xl font-medium">{description}</p>

          <div className="text-center  ">
            <button
              onClick={handleAddToCart}
              className="btn my-6 w-4/5 bg-[#ff9f8b] "
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
