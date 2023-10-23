import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div  className="hero min-h-screen bg-[#f0eceb] ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl mb-3 font-bold">Sign-Up now!</h1>
          <img className="lg:block hidden" src="https://i.ibb.co/0rGTqXK/depositphotos-253160930-stock-photo-beautiful-stylish-young-woman-colorful-transformed.jpg" alt="" />
          <img className="block lg:hidden" src="https://i.ibb.co/CzTsxr6/depositphotos-394294840-stock-photo-collage-smiling-trendy-girl-holding-transformed.jpg" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p>Have an account? Then <span> </span>

                <Link to="/login" className=" link text-blue-700 link-hover">
                  Login.
                </Link>
                </p>
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign-Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
