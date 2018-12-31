import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Navigation from './Navigation';
import ThemeOptions from './ThemsOptions';
import LeafletMap from './LeafletMap';

class ThemeSwitcher extends Component {
    constructor(props){
      super(props);
      this.state = {
          theme: null,
          dropdownOpen: false
      }
    }

    toggleDropdown = () => {
      this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }
    
    resetTheme = evt => {
      evt.preventDefault();
      this.setState({ theme: null });
    }
    
    chooseTheme = (theme, evt) => {
      evt.preventDefault();
      this.setState({ theme });
    }

    render() { 
      return (
          <Fragment>
              <Navigation state={this.state}/>
              <main className="my-5 py-5">
              <Container className="px-0">
                  <Row>
                      <Col><LeafletMap theme={this.state.theme} /></Col>
                      <Col>
                          <ThemeOptions 
                            state={this.state}
                            toggleDropdown={this.toggleDropdown}
                            resetTheme={this.resetTheme}
                            chooseTheme={this.chooseTheme}
                          />
                          {this.props.post}
                      </Col>
                  </Row>
              </Container>
              </main>
          </Fragment>
      );
    }
}

export default ThemeSwitcher;