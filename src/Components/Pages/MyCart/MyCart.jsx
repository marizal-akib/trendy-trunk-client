import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import CartProvider from "../../../Providers/CartProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);

  const allUserData = useLoaderData();

  const activeUser = allUserData.find(
    (userData) => userData.email === user.email
  );

  console.log(activeUser);

  const cartItems = activeUser.cartProduct;

//   const orders = cartItems.length;

  

  return (
    <div>
      <div>
        <img src="https://i.ibb.co/Wf3kKNd/SL-100321-45940-75.jpg" alt="" />
      </div>
      <div className="my-4 text-start items-center flex mx-5">
        <h2 className="md:text-2xl flex-1 font-semibold text-xl ">You have {cartItems.length} items in your cart</h2>
        <button className="btn   btn-error text-sm  mx-5">Submit Order</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartItems.map((item, i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.brand_Name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.type}
                  </span>
                </td>
                <td>{item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Remove</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <CartProvider cartItems={cartItems}></CartProvider>
    </div>
  );
};

export default MyCart;
