import { Link } from "react-router-dom";
import { BiSolidEditAlt } from "react-icons/bi";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { image, name, band_name, type, price, rating } = product;

  return (
    <div className="card glass">
      <figure>
        <div>
          <img src={image} alt="car!" />
          <Link to='/update' className="btn btn-error text-gray-100 hover:text-gray-700 bg-[#ff7e75] w-full rounded-none">
            <BiSolidEditAlt></BiSolidEditAlt> Update
          </Link>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
