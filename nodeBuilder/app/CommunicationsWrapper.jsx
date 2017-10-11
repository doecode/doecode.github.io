
import CommunicationsPage from './static_content/CommunicationsPage';
import Header from './wrapper/Header';
import Footer from './wrapper/Footer';
import React from 'react';
import ReactDOM from 'react-dom';

import bootstrapcss from './css/bootstrap.min.css';
import bootstrapthemecss from './css/bootstrap-theme.min.css';
import css from './css/main.css';

class CommunicationsWrapper extends React.Component {

  constructor(props) {
    super(props);
    /*If we're on the homepage, we have some different work to do*/
    const current_page = location.href.match(/([^\/]*)\/*$/)[1];
    this.outtermost_class_name = "";
    this.is_homepage = false;
    this.wrapper_class = " wrapper ";

    /*if (current_page === '' || current_page === '/' || current_page === 'doecode') {
      this.outtermost_class_name = 'homepage-outtermost-style';
      this.is_homepage = true;
      this.wrapper_class = " homepage-wrapper ";
    }*/
  }

  render() {
    return (
      <div>
      <div className={this.wrapper_class}>
      <Header/>
        <CommunicationsPage/>
      </div>
      <Footer/>
      </div>

    );
  }
}

ReactDOM.render(
<CommunicationsWrapper/>, document.getElementById('root'));
