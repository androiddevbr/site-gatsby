import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaSlack } from 'react-icons/fa';

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={<div><img src="https://github.com/androiddevbr/assets/blob/master/exports/logo_circle_1000x1000.png?raw=true" width={20} alt="Logo Android DEV BR" style={{ marginRight: 10, marginTop: 4, verticalAlign: "top"}} />ANDROID DEV BR</div>}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Android, Kotlin e tudo relacionado.</h1>
                <h4>
                  Uma comunidade para desenvolvedores Android de todo o Brasil.
                </h4>
                <br />
                <Button
                  color="success"
                  size="lg"
                  href="http://slack.androiddevbr.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSlack />
                  Entrar no slack
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TeamSection />
            {/* <WorkSection /> */}
          </div>
        </div>
        <ProductSection />
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
