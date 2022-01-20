import { useState } from "react";
import { Nav,Input,Textbox,Label,Button,Footer } from "../../components";

function Contact(){
    const [name,setname] = useState("");
    const [email,setEmail] = useState("");
    const [sub,setSub] = useState("");
    function Send(){
        let msgbox = document.getElementById('msg');
        let user = {
            name:name,
            email:email,
            subject:sub,
            message:msgbox.value
        }
        console.log(user);
        setname("");
        setEmail("");
        setSub("");
        msgbox.value="";
    }
        return <div>
            <div className="contact-div">
        <Nav />
        <h1>Contact Page</h1>
        <div className="contact">
            <div className="contact-form">
                <h3>Contact Information</h3>
                <h6>Email :</h6>
                <p>areebmuhammad96@gmail.com</p>
                <h6>Phone No :</h6>
                <p> +92 3122326792</p>
                <h6>Address :</h6>
                <p>Gulshan-e-Iqbal Near Karachi University.</p>
            </div>
            <div className="contact-form">
                <h3>Contact Form</h3>
                <div>
                    <Label idFor="name">Name   :</Label><br/>
                    <Input id="name" type="text" value={name} onChange={(e)=>setname(e.target.value)} />
                </div>
                <div>
                    <Label idFor="email">Email:</Label><br/>
                    <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <Label idFor="subject">Subject:</Label><br/>
                    <Input id="subject" type="text" value={sub} onChange={(e)=>setSub(e.target.value)} />
                </div>
                <div>
                    <Label idFor="msg">Message : </Label>
                    <Textbox id="msg" cols="20" rows="6" />
                </div>
                <div>
                    <Button onClick={Send}>Send</Button>
                </div>
            </div>
        </div>
        
    </div>;
        <Footer /> 
    </div>


}
export default Contact;