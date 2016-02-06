import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Select from 'react-select';
import seriesActions from 'redux/modules/series/actions';

const mapStateToProps = (state) => ({
    series: state.series.items
});

export class SeriesView extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        const { dispatch } = this.props;
        dispatch(seriesActions.fetch());
    }

    renderTableRow (seriesItem) {
        const { id, year, title } = seriesItem;

        return (
            <tr key={id}>
                <td>
                    <Link to={`/series/${id}`}>{ title === '-' ? '...' : title }</Link>
                </td>
                <td>{year}</td>
                <td>Publisher Title</td>
                <td>
                    <Link to={`/series/${id}/edit`}><i className='fa fa-pencil'> </i></Link>
                </td>
            </tr>
        );
    }

    render () {
        const { series } = this.props;
        let divStyle = { width: 300 };

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Год</th>
                        <th>Издатель</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    { _.map(series, seriesItem => this.renderTableRow(seriesItem)) }
                    </tbody>
                </table>
            </div>
        );
    }
}

SeriesView.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    series: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps)(SeriesView);
