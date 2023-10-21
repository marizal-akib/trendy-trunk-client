import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Footer from "../../Elements/Footer";
import Banner from "./Banner";
import SAbout from "./SAbout";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Marquee className="mt-5 " speed={75} pauseOnHover={true}>
        {brands.map((brand) => (
          <div className="text-center ml-2 " key={brand.id}>
            {" "}
            <Link to={`/product/${brand.id}`}>
              <img
                className="md:h-32 h-10"
                src={brand.brandImageURL}
                alt={brand.brandName}
              />
            <p className="mb-2 hover:underline uppercase font-semibold">{brand.brandName}</p>
            </Link>
          </div>
        ))}
      </Marquee>
      <SAbout></SAbout>
      <Footer></Footer>
    </div>
  );
};

export default Home;
