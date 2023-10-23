import Footer from "../Elements/Footer";

const AddProduct = () => {
  return (
    <div>
      <div className="bg-[#F4F3F0] flex flex-col-reverse md:flex-row justify-center">
        <div className=" lg:p-20 md:mt-5">
          <h2 className="relative text-3xl font-extrabold text-center bottom-6">Add Product</h2>
          <form >
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Coffee Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Available Quantity"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Supplier Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Supplier Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="taste"
                    placeholder="Taste"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="details"
                    placeholder="Details"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered  w-full"
                  />
                </label>
              </div>
            </div>
            <input type="submit" value="Add Coffee" className="btn border-solid border-black btn-block" />
          </form>
        </div>
        <div>
            <img className="hidden md:block h-5/6 lg:p-12 md:p-4" src="https://i.ibb.co/ns39y6p/Jacob-Coupe-2017-How-to-Spend-It-Alexander-Mc-Queen.jpg" alt="" />
            <div> 
                <img className="block md:hidden" src="https://i.ibb.co/61mBsH7/hotheads-hair.webp" alt="" />
            </div>
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddProduct;
