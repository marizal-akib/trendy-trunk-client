import { Link } from "react-router-dom";
import { BiSolidEditAlt } from "react-icons/bi";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { _id, image, name, brand_Name, type, price, rating } = product;



  return (
    <div className="card glass">
      <figure>
        <div>
          <img src={image} alt="car!" />
          <Link to={`/update/${_id}`} className="btn btn-error text-gray-100 hover:text-gray-700 bg-[#ff7e75] w-full rounded-none">
            <BiSolidEditAlt></BiSolidEditAlt> Update
          </Link>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}
        <span className="badge badge-error badge-sm">
                    {type}
                  </span></h2>
                  <p>{rating}</p>
        <p className="text-lg font-medium">{brand_Name}</p>
      
        <div className="card-actions justify-end">
          <div className="flex flex-col">
          <p className="relative right-8 font-thin text-2xl">{price}</p>
          <Link to={`/product/${_id}`} className="underline text-base font-semibold hover:font-bold">Details</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
