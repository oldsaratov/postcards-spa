import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    counter: state.counter
});

export class PostcardsView extends React.Component {
    render () {
        return (
            <div>Postcards View</div>
        );
    }
}

export default connect(mapStateToProps)(PostcardsView);
