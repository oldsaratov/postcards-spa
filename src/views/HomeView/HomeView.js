import React  from 'react';
import { connect } from 'react-redux';
import PostcardBox from 'components/PostcardBox/PostcardBox';

const mapStateToProps = (state) => ({

});

export class HomeView extends React.Component {
    render () {
        let postcards = [ // TODO: Fetch using REST API
            {
                id: 1,
                frontTitle: 'Радищевский музей',
                imageFrontUrl: 'https://ucarecdn.com/f41d1fcb-ca6b-45b5-8a91-3358b892cb92/-/resize/360x226/'
            },
            {
                id: 2,
                frontTitle: 'Публичная библиотека',
                imageFrontUrl: 'https://ucarecdn.com/891d5d04-3f42-4426-8d3e-fbcdb6b616f3/-/resize/360x226/'
            }
        ];

        return (
            <div className='container text-center'>
                <h1>Welcome to Postcards</h1>
                <div className='row'>
                    <div className='col-xs-2 col-xs-offset-5'>
                        {postcards.map(function (postcard) {
                            return <PostcardBox postcard={postcard} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(HomeView);
