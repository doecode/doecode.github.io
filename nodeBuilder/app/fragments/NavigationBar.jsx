import React from 'react';
import NavBarItem from './NavigationBarItem';

export default class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        this.current_page = "N/A";
    }

    render(){
        return(
        <div className='container'>
            <div className='row'>
                <div className='col-xs-12'>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#header-nav-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id='header-nav-collapse'>
                        <ul className='nav navbar-nav nav-menu'>
                            <NavBarItem current_page={this.current_page} destination="https://www.osti.gov/" special="true" fa_icon="fa fa-home" display_name="OSTI Home"/>
                            <NavBarItem current_page={this.current_page} destination="https://www.osti.gov/doecode/" special="true" fa_icon="fa fa-folder-open-o" display_name="DOE CODE Home"/>
                            <NavBarItem current_page={this.current_page} destination="https://www.osti.gov/doecode/communications.html" special="true" fa_icon="fa fa-newspaper-o" display_name="Communications/Resources"/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
