import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    postcard: state.postcard
});

export class PostcardDetailsView extends React.Component {
    render () {
        return (
            <div>Postcard Details View </div>
        );
    }
}

export default connect(mapStateToProps)(PostcardDetailsView);
