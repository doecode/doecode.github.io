
import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from '../fragments/NavigationBar';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

        <nav className="navbar navbar-default main-header" id="top">
            <div className="container-fluid">
                {/*Actual Navbar*/}
                <NavigationBar />
            </div>
        </nav>

        );

    }
  }
