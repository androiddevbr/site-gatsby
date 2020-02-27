import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="about">
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Quem somos?</h2>
            <h5 className={classes.description}>
              <strong>Uma comunidade brasileira para troca de experiências e aprendizado Android</strong><br />
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <img
              src={require("assets/img/android-fest.jpg")}
              alt="..."
              style={{ marginTop: 10 }}
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
