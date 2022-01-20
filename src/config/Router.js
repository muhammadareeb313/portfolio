import {BrowserRouter as Router,Route,Switch,useLocation} from 'react-router-dom';
import {Education,Skills,Home,Contact,Projects} from '../containers';
import {useEffect} from 'react';
function ScrollToUp(){
    const {pathname} = useLocation();
    useEffect(()=>
        window.scrollTo(0,0)
    ,[pathname]);
    return null;
}
function AppRouter(){
    return (
    <Router>
        <ScrollToUp/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    </Router>);
}
export default AppRouter;