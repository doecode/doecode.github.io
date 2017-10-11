import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.footer_classes = "footer-homepage";
    this.img_link = "https://www.osti.gov/scitech/img/ui/DOE_SC_OSTI_70th_white.png";
    this.footer_link = "footer-link-homepage";
  }

  render() {

    const bg = {"backgroundColor" : "#113e5b"};
    const alignCenter = {"textAlign" : "center"};
    const tripleC = {"color" : "#ccc"};
    const white= {"color" : "#fff"};
    const twoHeight = {"height" : "2px"};
    const trayPadding = {"paddingTop" : "20px", "paddingBottom" : "20px"};
    const imageStyle = {"marginBottom" : "5px", "marginTop" : "15px"};
    const arrowStyle = {"marginBottom" : "5px"};
    //const leftTenPer = {"marginRight" : "10%"};
    return (
      <footer className={this.footer_classes} style={bg}>
        <div className="footer-pre">
    	<div className="container">
    		<div className="row">
    			<div className="col-md-6">
    				<a style={white} href="mailto:doecode@osti.gov"><span className="fa fa-comment-o" aria-hidden="true"></span> Have feedback or questions? Let us know!</a>
    			</div>
    			<div className="col-md-6 text-right">
    				<a style={white} href="#top"><span className="fa fa-arrow-up" aria-hidden="true"></span> Back to top</a>
    			</div>
    		</div>
    	</div>
    	</div>

        <div style={alignCenter}>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-3 col-md-6 col-xs-12">
              <img src={this.img_link} style={imageStyle} alt="U.S. Department of Energy" useMap="#Map_SC"/>

              <map id="Map_SC" name="Map_SC">
				        <area href="https://energy.gov" target="_self" coords="1,1,150,43" shape="rect" alt="U.S. Department of Energy"/>
				        <area href="https://science.energy.gov" target="_self" coords="160,1,230,43" shape="rect" alt="Office of Science"/>
				        <area href="https://www.osti.gov" target="_self" coords="240,1,495,43" shape="rect" alt="Office of Scientific and Technical Information"/>
				      </map>

              <p className="sr-only">
                <a href="https://energy.gov">https://energy.gov</a> |
              <a href="https://science.energy.gov">https://science.energy.gov</a>
              </p>
            </div>
          </div>

          <div className="row white">
            <ul className="col-md-offset-3 col-sm-6 col-xs-12 list-inline">
              <li className={this.footer_link}>
                <a href="https://www.osti.gov/home/disclaimer.shtml"><span className="fa fa-university"></span>&nbsp;Website Policies / Important Links</a>
              </li>
              <li className={this.footer_link}>
                <a href="https://www.osti.gov/home/contact.html"><span className="fa fa-comments-o"></span>&nbsp;Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="row" style={arrowStyle}>
    			<div className="col-xs-12">
    				<div>
    					<button className="footer-chevron collapsed" alt="Display additional footer links" data-toggle="collapse" data-target="#footer-tray" aria-expanded="false">
    					</button>
    				</div>
    			</div>
    		</div>

        </div>
      </div>

      <div className="footer-tray collapse" id="footer-tray" aria-expanded="false">
      	<div className="container" style={trayPadding}>
      		<div className="row">
            <div className="col-md-4 col-md-offset-2 text-left footer-links-l">
      				<ul>
      					<li className="nav-header"><span className="glyphicon glyphicon-menu-right" style={tripleC} aria-hidden="true"></span> About DOE / OSTI:</li>
      					<li><a href="//www.osti.gov/home/mission.html" target="_blank">Mission <span className="fa fa-external-link" aria-hidden="true"></span></a></li>
      					<li><a href="//www.osti.gov/home/doecommunity.html" target="_blank">DOE STI Program <span className="fa fa-external-link" aria-hidden="true"></span></a></li>
      					<li><a href="//www.osti.gov/home/document/osti-organization-chart" target="_blank">Organization Chart <span className="fa fa-external-link" aria-hidden="true"></span></a></li>
      					<li><a href="//www.osti.gov/home/history.html" target="_blank">History <span className="fa fa-external-link" aria-hidden="true"></span></a></li>
      				</ul>
      			</div>
      			<div className="col-md-4 col-md-offset-2 text-left footer-links-r">
      				<ul>
      					<li className="nav-header"><span className="glyphicon glyphicon-menu-right" style={tripleC} aria-hidden="true"></span> DOE Science Resources:</li>
                <li><a href="//www.osti.gov/scitech/" target="_blank">DOE SciTech<span className="fa fa-external-link" aria-hidden="true"></span></a></li>
      					<li><a href="//www.osti.gov/pages/" target="_blank">DOE PAGES <span className="fa fa-external-link" aria-hidden="true"></span></a></li>
      					<li><a href="//www.osti.gov/dataexplorer/" target="_blank">DOE Data Explorer <span className="fa fa-external-link" aria-hidden="true"></span></a></li>
      					<li><a href="//www.osti.gov/home/collections/" target="_blank">More DOE Collections » <span className="fa fa-external-link" aria-hidden="true"></span></a></li>
      					<li className="nav-header"><span className="glyphicon glyphicon-menu-right" style={tripleC} aria-hidden="true"></span> U.S. / Global Science Resources:</li>
      					<li><a href="//www.science.gov" target="_blank">Science.gov <span className="fa fa-external-link" aria-hidden="true"></span></a></li>
      					<li><a href="//www.worldwidescience.org" target="_blank">WorldWideScience.org <span className="fa fa-external-link" aria-hidden="true"></span></a></li>
      				</ul>
      			</div>
      		</div>
      	</div>
    	</div>

      </footer>

    );
  }

}
