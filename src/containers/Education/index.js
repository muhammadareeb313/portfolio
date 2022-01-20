import { Nav,Footer } from "../../components";
import img from '../../assests/images/books.jpg';

function Education() {
    return <div className = "Education" >
        <Nav />
        <h1> Education </h1>
        <img src={img} alt="Books" className="header" />
        <div>
        <h3>Dars-e-Nizami<span style={{fontSize:"20px",}}>(Aalim Course)</span> </h3>
        <h4>Seventh Year (Continue)</h4>
        <p>  </p>
        </div>
        <div>
        <h3> INTERMEDIATE </h3>
        <h4> 2019 - 2020 </h4>
        <p> Govt Degree Boys College Asifabad, Karachi, Pakistan </p>
        </div>
        <div>
        <h3> MATRICULATION </h3>
        <h4> 2017 - 2018 </h4>
        <p> Govt Boys Secondary School Waheedabad Golimar, Karachi, Pakistan </p>
        </div>
        <Footer />
        </div>;
}
export default Education;