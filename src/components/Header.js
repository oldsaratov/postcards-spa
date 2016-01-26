import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    renderMenuItem (name, url) {
        return (
            <Link to={url} activeClassName='active'>{name}</Link>
        );
    }

    render () {
        return (
            <header className='header'>
                {this.renderMenuItem('Главная', '/')}
                {this.renderMenuItem('Открытки', '/postcards')}
                {this.renderMenuItem('Серии', '/series')}
                {this.renderMenuItem('Издатели', '/publishers')}
                {this.renderMenuItem('Фотографы', '/photographers')}
            </header>
        );
    }
}

export default Header;
