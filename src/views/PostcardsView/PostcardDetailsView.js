import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import postcardDetailsActions from 'redux/modules/postcardDetails/actions';
import seriesActions from 'redux/modules/series/actions';

const mapStateToProps = (state) => ({
    postcardDetails: state.postcardDetails,
    series: state.series
});

export class PostcardDetailsView extends React.Component {

    componentDidMount () {
        const { dispatch } = this.props;
        let id = this.props.params.id;

        dispatch(seriesActions.fetch());
        dispatch(postcardDetailsActions.fetch(id));
    }

    getSeriesTitle (seriesId) {
        const { series } = this.props;
        let targetSeries = _.findWhere(series.items, { id: seriesId });
        let targetTitle = targetSeries ? targetSeries.title : '';

        return targetTitle;
    }

    render () {
        const {
            year,
            seriesId,
            numberInSeries,
            publishPlace,
            photographerId,
            postDate
        } = this.props.postcardDetails.entity;

        return (
            <div>
                <p>Год {year}</p>
                <p>Фотограф {photographerId}</p>
                <p>Серия <Link to={`/series/${seriesId}`}>{this.getSeriesTitle(seriesId)}</Link></p>
                <p>Номер в серии {numberInSeries}</p>
                <p>Дата прохождения почты {postDate}</p>
                <p>Место издания {publishPlace}</p>
            </div>
        );
    }
}

PostcardDetailsView.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    params: React.PropTypes.shape({
        id: React.PropTypes.string
    }),
    series: React.PropTypes.object.isRequired,
    postcardDetails: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps)(PostcardDetailsView);
