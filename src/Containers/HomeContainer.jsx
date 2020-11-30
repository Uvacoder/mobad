import React from 'react';
import Home from '../Components/Home'


class HomeContainer extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>

                <div><h3>Mobâd</h3></div>

                <div className="auth">
                        <Home />
                    </div>

            </div>
        );
    }

}

export default HomeContainer;
