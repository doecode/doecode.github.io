import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.changeImage = this.changeImage.bind(this);
    this.changeDiscover = this.changeDiscover.bind(this);
    this.changeCreate = this.changeCreate.bind(this);
    this.changeSubmit = this.changeSubmit.bind(this);

    this._imageUrls = [
      'https://www.osti.gov/includes/doecode/images/DOEcodeFeatures_main710px-min.png',
      'https://www.osti.gov/includes/doecode/images/DOEcodeFeatures_doi710px-min.png',
      'https://www.osti.gov/includes/doecode/images/DOEcodeFeatures_Repository710px-min.png',
      'https://www.osti.gov/includes/doecode/images/DOEcodeFeatures_Catalog710px-min.png',
      'https://www.osti.gov/includes/doecode/images/DOEcodeFeatures_Policy710px-min.png',
      'https://www.osti.gov/includes/doecode/images/DOEcodeFeatures_GitHub710px-min.png',
      'https://www.osti.gov/includes/doecode/images/DOEcodeFeatures_SocialCode710px-min.png',
      'https://www.osti.gov/includes/doecode/images/DOEcodeFeatures_Easy710px-min.png'
    ];

    this._discoverUrls = ['https://www.osti.gov/includes/doecode/images/Discover-min.png', 'https://www.osti.gov/includes/doecode/images/Discover_hover-min.png'];

    this._createUrls = ['https://www.osti.gov/includes/doecode/images/Create-min.png', 'https://www.osti.gov/includes/doecode/images/Create_hover-min.png'];

    this._submitUrls = ['https://www.osti.gov/includes/doecode/images/Submit-min.png', 'https://www.osti.gov/includes/doecode/images/Submit_hover-min.png']
    this.state = {
      currentImage: this._imageUrls[0],
      currentDiscover: this._discoverUrls[0],
      currentCreate: this._createUrls[0],
      currentSubmit: this._submitUrls[0]
    }
  }

  changeDiscover(index) {
    this.setState({"currentDiscover": this._discoverUrls[index]});
  }

  changeCreate(index) {
    this.setState({"currentCreate": this._createUrls[index]});
  }

  changeSubmit(index) {
    this.setState({"currentSubmit": this._submitUrls[index]});
  }

  changeImage(index) {
    this.setState({"currentImage": this._imageUrls[index]});
  }
  render() {
    return (
      <div className='white-background'>

        <div className="container-fluid ">
          <div className="container containerStyle">
            <div className="row">
              <div className="col-xs-12 static-content center-text">
                <h2>

                  <img className="hidden-xs hidden-sm" src="https://www.osti.gov/doecode/images/DOEcodeBLUE300px.png" width="300" height="44" alt="DOE CODE"/>
                  <img className="hidden-lg hidden-md" src="https://www.osti.gov/doecode/images/DOEcodeBLUE200px-min.png" width="200" height="29" alt="DOE CODE"/>
                </h2>
              </div>
              <div className=""></div>
            </div>
            <div className="row">
              <div className=""></div>
              <div className="col-xs-12 static-content center-text">
                <br/>
                <p className='left-text'>
                  The Department of Energy (DOE) Office of Scientific and Technical Information (OSTI) is developing a new DOE software services platform and search tool for DOE-funded code – DOE CODE. DOE CODE will replace OSTI’s old software center, the Energy Science and Technology Software Center (ESTSC). Since DOE CODE is still under development, if you need to submit, search, or order software, please visit the&nbsp;<a href='https://www.osti.gov/moved/estsc/'>ESTSC</a>&nbsp;site for instructions.
                  <br/>
                  <br/>
                </p>

                <p className="left-text hidden-md hidden-lg">
                  <strong>CREATE</strong>
                  - Create code inside or outside DOE CODE.</p>
                <p className="left-text hidden-md hidden-lg">
                  <strong>SUBMIT</strong>
                  - Submit your DOE-funded code.</p>
                <p className="left-text hidden-md hidden-lg">
                  <strong>DISCOVER</strong>
                  - Discover DOE-funded software and code.</p>

                <img title='Create' className="hidden-xs hidden-sm" src={this.state.currentCreate} width="150" height="113" alt="Create" onMouseOver={() => {
                  this.changeCreate(1)
                }} onMouseOut={() => {
                  this.changeCreate(0)
                }}/>
                <img title='Submit' className="col-md-offset-1 hidden-xs hidden-sm" src={this.state.currentSubmit} width="150" height="113" alt="Submit" onMouseOver={() => {
                  this.changeSubmit(1)
                }} onMouseOut={() => {
                  this.changeSubmit(0)
                }}/>
                <img title='Discover' className="col-md-offset-1 hidden-xs hidden-sm" src={this.state.currentDiscover} width="150" height="113" alt="Discover" onMouseOver={() => {
                  this.changeDiscover(1)
                }} onMouseOut={() => {
                  this.changeDiscover(0)
                }}/>
                <div className=""></div>
                <br/>
                <br/>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container-fluid containerStyle">
            <div className="row">
              <div className=""></div>
              <div className="col-xs-12 static-content no-col-padding-left no-col-padding-right">
                <img title='DOE CODE Features' className="hidden-xs hidden-sm" src={this.state.currentImage} width="710" height="442" alt="DOE CODE Features" useMap="#featuremap"></img>
                <map name="featuremap">
                  {/*10:30*/}
                  <area title='Github' shape="circle" coords="232,107,32" alt="Github" onMouseOver={() => {
                    this.changeImage(5)
                  }} onMouseOut={() => {
                    this.changeImage(0)
                  }}/> {/*9 o clock*/}
                  <area title='Social Code' shape="circle" coords="179,241,32" alt="Social Code" onMouseOver={() => {
                    this.changeImage(6)
                  }} onMouseOut={() => {
                    this.changeImage(0)
                  }}/> {/*7:30*/}
                  <area title='Catalog' shape="circle" coords="233,362,32" alt="Catalog" onMouseOver={() => {
                    this.changeImage(3)
                  }} onMouseOut={() => {
                    this.changeImage(0)
                  }}/> {/*4:30*/}
                  <area title='Repository' shape="circle" coords="481,365,32" alt="Repository" onMouseOver={() => {
                    this.changeImage(2)
                  }} onMouseOut={() => {
                    this.changeImage(0)
                  }}/> {/*3 o clock*/}
                  <area title='DOI' shape="circle" coords="533,239,32" alt="DOI" onMouseOver={() => {
                    this.changeImage(1)
                  }} onMouseOut={() => {
                    this.changeImage(0)
                  }}/> {/*1:30*/}
                  <area title='Easy' shape="circle" coords="481,112,32" alt="Easy" onMouseOver={() => {
                    this.changeImage(7)
                  }} onMouseOut={() => {
                    this.changeImage(0)
                  }}/> {/*12 o clock*/}
                  <area title='Policy' shape="circle" coords="355,55,32" alt="Policy" onMouseOver={() => {
                    this.changeImage(4)
                  }} onMouseOut={() => {
                    this.changeImage(0)
                  }}/>
                </map>

                <h3 className="hidden-md hidden-lg featuresStyle">FEATURES</h3>
                <p className="left-text hidden-md hidden-lg">
                  <strong>CATALOG</strong>
                  - DOE CODE is the DOE Software Catalog.</p>
                <p className="left-text hidden-md hidden-lg">
                  <strong>SOCIAL CODE</strong>
                  - DOE CODE seamlessly interfaces with common development platforms (e.g., open web API).</p>
                <p className="left-text hidden-md hidden-lg">
                  <strong>GITHUB</strong>
                  - DOE CODE is an open source product on GitHub that other institutions can download and deploy for their own purposes.</p>
                <p className="left-text hidden-md hidden-lg">
                  <strong>POLICY</strong>
                  - DOE CODE resources provide you information on best practices and policies for software.</p>
                <p className="left-text hidden-md hidden-lg">
                  <strong>EASY</strong>
                  - DOE CODE is easy to use and requires minimal metadata, often autopopulated.</p>
                <p className="left-text hidden-md hidden-lg">
                  <strong>DOI</strong>
                  - DOE CODE issues digital object identifiers (DOIs) for code so software is more easily cited and discoverable. This allows for stronger connections between code, publications, and data through citation in reference sections.</p>
                <p className="left-text hidden-md hidden-lg">
                  <strong>REPOSITORY</strong>
                  - DOE CODE offers public and private repository services in GitHub and Gitlab.</p>
                <p className="hidden-xs hidden-sm">
                  For more information about DOE CODE, reach out to&nbsp;
                  <a href="mailto:doecode@osti.gov">doecode@osti.gov</a>.</p>
              </div>
            </div>

          </div>
          <br/>
        </div>
      </div>
    );
  }
}
