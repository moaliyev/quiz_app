import { Link } from "react-router-dom";
import Math from "../assets/images/math.png";
import Chemistry from "../assets/images/chemistry.jpg";
import Physics from "../assets/images/physics.png";
import Geo from "../assets/images/geo.avif";
import Python from "../assets/images/python.png";
import English from "../assets/images/english.svg";

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="row">
          <h2 className="title">Subjects</h2>
          <div className="categoriesBox">
            <Link className="cart">
              <img src={Math} alt="subject" />
              <h3 className="cartTitle">math</h3>
            </Link>
            <Link className="cart">
              <img src={Chemistry} alt="subject" />
              <h3 className="cartTitle">chemistry</h3>
            </Link>
            <Link className="cart">
              <img src={Physics} alt="subject" />
              <h3 className="cartTitle">physics</h3>
            </Link>
            <Link className="cart">
              <img src={Geo} alt="subject" />
              <h3 className="cartTitle">geography</h3>
            </Link>
            <Link className="cart">
              <img src={English} alt="subject" />
              <h3 className="cartTitle">english</h3>
            </Link>
            <Link className="cart">
              <img src={Python} alt="subject" />
              <h3 className="cartTitle">python</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
