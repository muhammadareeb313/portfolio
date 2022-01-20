import {ImgMediaCard} from '../../components';
import calculator from '../../assests/images/calculator3.png';
import stopwatch from '../../assests/images/stopwatch.png';

import pokemon from '../../assests/images/Pokemon1.PNG';
import todo from '../../assests/images/todo.png';
import upwork from '../../assests/images/upwork1.PNG';
import Olx from '../../assests/images/Olx.png';
import login from '../../assests/images/login.png';
import Table from '../../assests/images/Table.png';
import dashboard from '../../assests/images/dashboard.png';



import weather from '../../assests/images/weather-status-app.png';

import {Nav,Footer} from '../../components';

function Projects(){
    function Goto(linkto){
        // console.log(linkto);
        let tab = window.open(); 
        tab.location.href = linkto;
    }
    return (
        <div className="Projects-div">
            <Nav />
            <h1>Projects</h1>
            <div class="Projects">
                <ImgMediaCard src={calculator} alt="Calculator App" title="Calculator App" description="Calculator App" btn1="Open Project" btn1OnClick={()=>Goto("https://jsassingment.firebaseapp.com/")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https://github.com/muhammadareeb313/calculator")} /> 
                <ImgMediaCard src={stopwatch} alt="StopWatch App" title="StopWatch App" description="StopWatch App" btn1="Open Project" btn1OnClick={()=>Goto("https://jsassingment.firebaseapp.com/stopwatch.html")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https://github.com/muhammadareeb313/calculator/blob/main/stop.js")} /> 
                <ImgMediaCard src={Olx} alt="OLX Website" title="OLX Website" description="OLX Website" btn1="Open Project" btn1OnClick={()=>Goto("https://muhammadareeb313.github.io/OLX/")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/muhammadareeb313/OLX")} /> 
                <ImgMediaCard src={login}   alt="Login MongoDB" title="Login MongoDB" description="Login MongoDB" btn1="Open Project" btn1OnClick={()=>Goto("https://memory-posting.herokuapp.com/")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/muhammadareeb313/Food-Delivery-App")} /> 
                <ImgMediaCard src={pokemon} alt="Pokemon Website" title="Pokemon Website" description="Pokemon Website" btn1="Open Project" btn1OnClick={()=>Goto("https://areebworkp.firebaseapp.com/")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/muhammadareeb313/Pokemon")} /> 
                <ImgMediaCard src={Table} alt="Periodic Table" title="Periodic Table" description="Periodic Table & Html Form" btn1="Open Project" btn1OnClick={()=>Goto("https://areebwork-44845.web.app/")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/muhammadareeb313/Report-Card")} /> 
                <ImgMediaCard src={todo} alt="Todo App" title="Todo App" description="Todo App" btn1="Open Project" btn1OnClick={()=>Goto("https://muhammadareeb313.github.io/todo-app")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/muhammadareeb313/todo-app")} /> 
                <ImgMediaCard src={upwork} alt="Upwork Website" title="Upwork Website" description="Upwork Website"btn1="Open Project" btn1OnClick={()=>Goto("https://muhammadareeb313.github.io/demo-/")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/muhammadareeb313/demo-")} /> 
                <ImgMediaCard src={weather} alt="React js 3 project " title="React js 3 project " description="Weather App, Counter App, Web Demo " btn1="Open Project" btn1OnClick={()=>Goto("https://muhammadareeb313.github.io/Reactbootstrap/")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https://github.com/muhammadareeb313/Reactbootstrap")} /> 
                <ImgMediaCard src={dashboard} alt="Cricket Dashboard " title="Cricket Dashboard " description="T20 world Cup Semi Final" btn1="Open Project" btn1OnClick={()=>Goto("https://cricketdash.herokuapp.com/")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https://github.com/muhammadareeb313/dashboard")} /> 
            </div>
            <Footer />
        </div>
    );
}
export default Projects;

// 