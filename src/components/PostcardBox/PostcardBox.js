import React from 'react';
import { Link } from 'react-router';

class PostcardBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            postcard: props.postcard
        };
    }

    render () {
        let { id, frontTitle, imageFrontUrl } = this.state.postcard;

        return (
            <Link to={`/postcards/${id}`} className='postcard-card'>
                <div className='postcard-card__wrap'>
                    <div className='postcard-card__loader'></div>
                    <div className='postcard-card__back'>
                        <img height='226' width='360' src={imageFrontUrl} alt={frontTitle} />
                    </div>
                    <div className='postcard-card__hover'>
                        <div className='postcard-card__author'>
                            <div className='postcard-card__name'>{frontTitle}</div>
                        </div>
                        <div className='postcard-card__show'>Открыть</div>
                    </div>
                </div>
            </Link>
        );
    }
}

PostcardBox.propTypes = {
    postcard: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        frontTitle: React.PropTypes.string.isRequired,
        imageFrontUrl: React.PropTypes.string.isRequired
    })
};

export default PostcardBox;
