
import React from 'react';
import { connect } from 'react-redux'

const Count = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.count}</h1>
        </div>
    );
};


function mapStateToProps(state) {
    console.log(state);
    return {
        count: state.count,
    }
}

export default connect(mapStateToProps)(Count);






















