/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";
import { FaGithub, FaFacebook, FaTwitterSquare, FaYoutube, FaMedium, FaPodcast } from "react-icons/fa";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/androiddevbr"
                className={classes.block}
                target="_blank"
              >
                <FaGithub/>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.facebook.com/AndroidDevBrOrg"
                className={classes.block}
                target="_blank"
              >
                <FaFacebook/>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://twitter.com/AndroidDevBrOrg"
                className={classes.block}
                target="_blank"
              >
                <FaTwitterSquare/>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.youtube.com/channel/UC3UIetA7QQJNyt25BXcUALA"
                className={classes.block}
                target="_blank"
              >
                <FaYoutube/>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://medium.com/android-dev-br"
                className={classes.block}
                target="_blank"
              >
                <FaMedium/>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://pod.link/1387735341"
                className={classes.block}
                target="_blank"
              >
                <FaPodcast/>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/androiddevbr/codigo-de-conduta"
                className={classes.block}
                target="_blank"
              >
                Código de conduta
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          <a
            href="https://www.creative-tim.com"
            className={aClasses}
            target="_blank"
          >
            Creative Tim
          </a>{" "}
          &copy; {1900 + new Date().getYear()}
          {" "}Adaptado pela moderação do ADBR.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
