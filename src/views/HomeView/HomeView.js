import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import postcardsActions from 'redux/modules/postcards/actions';
import PostcardBox from 'components/PostcardBox/PostcardBox';

const mapStateToProps = (state) => ({
    postcards: state.postcards
});

export class HomeView extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        const { dispatch } = this.props;
        dispatch(postcardsActions.fetch());
    }

    render () {
        let { postcards } = this.props;

        return (
            <div className='container text-center'>
                <div className='row'>
                    <div className='col-xs-2 col-xs-offset-5'>
                        { _.map(postcards.items, postcard => <PostcardBox key={postcard.id} postcard={postcard} />) }
                    </div>
                </div>
            </div>
        );
    }
}

HomeView.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    postcards: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps)(HomeView);
