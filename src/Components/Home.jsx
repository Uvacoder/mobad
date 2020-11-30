import React from 'react';



class Home extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="home">
            <h3>Home stuff goes here</h3>
            </div>
        );
    }

}

export default Home;
