import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop.js';
import Header from './components/header/header.js';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.js';
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action.js';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount(){
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    this.props.setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    })
                });
            }else{
                this.props.setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render(){
        return <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInAndSignUp} />
            </Switch>
        </div>
    }
};

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
