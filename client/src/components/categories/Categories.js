import React from 'react';

class Cats extends React.Component{
    render(){
        return(
            <h1 style={{marginTop: 100}}>{this.props.match.params.cat||"Cats"}</h1>
        );
    }
}

export default Cats;