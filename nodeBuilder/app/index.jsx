
import AboutPage from './static_content/AboutPage';
import CommunicationsPage from './static_content/CommunicationsPage';
import Header from './wrapper/Header';
import Footer from './wrapper/Footer';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, browserHistory, IndexRoute} from 'react-router-dom';

import bootstrapcss from './css/bootstrap.min.css';
import bootstrapthemecss from './css/bootstrap-theme.min.css';
import css from './css/main.css';

class DOECodeRouter extends React.Component {

  constructor(props) {
    super(props);
    /*If we're on the homepage, we have some different work to do*/
    const current_page = location.href.match(/([^\/]*)\/*$/)[1];
    this.outtermost_class_name = "";
    this.wrapper_class = " wrapper ";
    if (current_page === '' || current_page === '/' || current_page === 'doecode') {
      this.outtermost_class_name = '';
      this.wrapper_class = " about-wrapper ";
    }
  }

  render() {
    const containerStyle = {"maxWidth" : "750px", "textAlign": "center"};
    return (

      <Router basename="/doecode" history={browserHistory}>
        <div className={this.outtermost_class_name}>
          <div className={this.wrapper_class}>
            <Header/>


              <Route exact path="/" component={AboutPage}/>
              <Route path="/communications" component={CommunicationsPage}/>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <DOECodeRouter/>, document.getElementById('root'));
