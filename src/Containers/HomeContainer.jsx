import React from 'react';
import Home from '../Components/Home'


class HomeContainer extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>


                <div className="home_container">
                    <h1>Home Container</h1>
                    <Home />
                </div>

            </div>
        );
    }

}

export default HomeContainer;
