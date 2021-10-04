import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop.js';
import Header from './components/header/header.js';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.js';
import {auth} from './firebase/firebase.utils.js';

class App extends React.Component {
    constructor(){
        super();
        this.state = { currentUser: null };
    }

    unsubscribeFromAuth = null;

    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            // createUserProfileDocument(user);
            this.setState({currentUser: user});
            console.log(user)
        });
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render(){
        return <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInAndSignUp} />
            </Switch>
        </div>
    }
};

export default App;
