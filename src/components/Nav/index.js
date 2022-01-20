import { Link } from "react-router-dom";
function Nav(){
    return (
    <div className="Nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/education" className="link">Education</Link>
        <Link to="/skills" className="link">Skills</Link>
        <Link to="/projects" className="link">Projects</Link>
        <Link to="/contact" className="link">Contact</Link>
    </div>
    )
}
export default Nav;