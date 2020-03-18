import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

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
              Somos uma comunidade para profissionais e estudantes do desenvolvimento Android.
              Nenhuma experiência prévia é necesssária para fazer parte. Nosso objetivo é levantar conteúdos e discussões relevantes dentro do própósito da comunidade.
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
