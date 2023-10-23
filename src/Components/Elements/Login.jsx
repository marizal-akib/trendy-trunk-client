import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-[#ede9e8]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl mb-3 font-bold">Login now!</h1>
          <img className="lg:block hidden" src="https://i.ibb.co/XXNcKKL/depositphotos-544490046-stock-photo-young-woman-trendy-pastel-suit-transformed.jpg" alt="" />
          <img className="block lg:hidden" src="https://i.ibb.co/zR3whrS/depositphotos-236249986-stock-photo-collage-five-different-young-girls-transformed.jpg" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
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
                <p>Do not have an account? Then <span> </span>

                <Link to="/sign-up" className=" link text-blue-700 link-hover">
                  Sing-up.
                </Link>
                </p>
              </label>
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
