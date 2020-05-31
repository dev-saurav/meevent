import React, { Component } from 'react'
import Home from './pages/home/home'
import SignIn from './pages/Signin/Signin'
import SignUp from './pages/Signup/Signup'
class App extends Component {
    render() {
        return (
            <div>
                <Home />
                {/* <SignIn /> */}
                {/* <SignUp /> */}
            </div>
        )
    }
}


export default App
