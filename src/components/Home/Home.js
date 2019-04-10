import React from 'react';
import Particles from 'react-particles-js';
import particleParam from './particleParam';
import './Home.css';

class Home extends React.Component{
    render(){
        return (
            <div className="home">
                <Particles className="particles-js" params={particleParam}/>
                <h1>Hello, I'm Rubayth Haque</h1>
                <p>
                   Full Stack Web Developer
                </p>
                
            </div>
            )
    }
}

export default Home;