import Home from './Home/home';
import Gallery from './Gallery/gallery';
import Register from './Register/register';
import {Switch,Route,Redirect} from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path='/home' exact component={Home}/>   
                <Route path='/register' exact component={Register}/>
                <Route path='/gallery' exact component={Gallery}/>
                <Redirect from='/' to='/home'/>
            </Switch>
        </div>
    );
}

export default Body;