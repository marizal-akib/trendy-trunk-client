import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-7xl mx-auto  items-center py-3 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
      </div>
      <div className="navbar-center ">
        <Link to="/" className="btn h-24 btn-ghost normal-case text-xl">
          <img
            className="w-20 "
            src="https://i.ibb.co/0nDxPyP/Screenshot-2023-10-20-232439-removebg-preview.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-end">
        <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Login
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box bg-transparent ">
            <div className="md:grid md:grid-cols-2 grid-cols-1 items-center  gap-3">
              <div className="text-center bg-opacity-50 bg-blue-200 mt-8 h-full">
                <div className="py-4">
                <h3 className="font-bold mt-3 py-2 text-xl">Login with</h3>
                    <button className="btn text-xs font-semibold py-2 ">Google</button>
                <p className="py-0 font-bold text-xl">
                  or 
                </p>
                <Link to="/login" className="btn text-white btn-primary py-2 px-4  h-auto text-xs font-semibold">Email<br />and<br />Password </Link>

                </div>
                    
              </div>
              <div className="text-center bg-opacity-50 bg-rose-200 mt-8 h-full ">
                <div className="py-4 h-full justify-center">
                <h3 className="font-bold  py-2 text-xl">Create,<br />Account </h3>
                <p className="text-xs">
                  Sing-up if you still do not have an account... 
                </p>
                <Link to='/sing-up' className="btn mt-2 h-auto text-xs font-semibold"> Sing Up </Link>
                </div>
              </div>
            </div>
            <div className="  modal-action">
              <form method="dialog ">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn mt-3 text-white bg-slate-500">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        </div>

        <button className="btn mx-2">my cart</button>

      </div>
    </div>
  );
};

export default Navbar;
