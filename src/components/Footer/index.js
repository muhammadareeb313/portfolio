import {Button} from '../index';
import {Facebook,LinkedIn} from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { WhatsApp } from '@mui/icons-material';
function Footer(){
    function Goto(link){
        let tab = window.open();
        tab.location.href = link;
        return null;
    }
    return (
    <div className="footer">
        <Button onClick={()=>Goto("https://github.com/muhammadareeb313")} className="link">
            <GitHubIcon />
        </Button>
        <Button onClick={()=>Goto("https://www.facebook.com/profile.php?id=100057806174219")} className="link">
            <Facebook />
        </Button>
        <Button onClick={()=>Goto("https://api.whatsapp.com/send?phone=+923122326792")} className="link">
            <WhatsApp />
        </Button>
        <Button onClick={()=>Goto("https://www.linkedin.com/in/muhammad-areeb-006a31228/")} className="link">
            <LinkedIn />
        </Button>
    </div>
        );
}
export default Footer;