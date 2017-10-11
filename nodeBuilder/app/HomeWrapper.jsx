
import AboutPage from './static_content/AboutPage';
//import CommunicationsPage from './static_content/CommunicationsPage';
import Header from './wrapper/Header';
import Footer from './wrapper/Footer';
import React from 'react';
import ReactDOM from 'react-dom';

import bootstrapcss from './css/bootstrap.min.css';
import bootstrapthemecss from './css/bootstrap-theme.min.css';
import css from './css/main.css';

class HomeWrapper extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="about-wrapper">
      <Header/>
        <AboutPage/>
      </div>
      <Footer/>
      </div>

    );
  }
}

ReactDOM.render(
<HomeWrapper/>, document.getElementById('root'));
