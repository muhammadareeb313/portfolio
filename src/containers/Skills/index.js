import CustomizedProgressBars from '../../components/ProgressBar';
import {Nav,Footer} from '../../components';
function Skills(){
    return (
    <div className="Skills-div">
        <Nav />
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">HTML</h3>
                <h3 className="skill-percent">100%</h3>
            </div>
            <CustomizedProgressBars value={100} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">CSS</h3>
                <h3 className="skill-percent">100%</h3>
            </div>
            <CustomizedProgressBars value={100} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">JavaScript</h3>
                <h3 className="skill-percent">80%</h3>
            </div>
            <CustomizedProgressBars value={80} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">Bootstrap</h3>
                <h3 className="skill-percent">80%</h3>
            </div>
            <CustomizedProgressBars value={80} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">React</h3>
                <h3 className="skill-percent">80%</h3>
            </div>
            <CustomizedProgressBars value={80} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">Express js</h3>
                <h3 className="skill-percent">80%</h3>
            </div>
            <CustomizedProgressBars value={80} />
        </div>
       
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">MongoDB</h3>
                <h3 className="skill-percent">70%</h3>
            </div>
            <CustomizedProgressBars value={70} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">Firebase</h3>
                <h3 className="skill-percent">80%</h3>
            </div>
            <CustomizedProgressBars value={80} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">React Native</h3>
                <h3 className="skill-percent">50%</h3>
            </div>
            <CustomizedProgressBars value={50} />
        </div>
        <Footer />
    </div>);
}
export default Skills;