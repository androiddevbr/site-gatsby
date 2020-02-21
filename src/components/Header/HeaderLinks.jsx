/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaMedium, FaPodcast, FaSlack } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        >Quem Somos</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        >Iniciativas</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        >Contato</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-slack"
          title="Entrar no slack"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="http://slack.androiddevbr.org/"
            target="_blank"
            className={classes.navLink}
          >
            <FaSlack />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Siga no Twitter"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/AndroidDevBrOrg"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Siga no facebook"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/AndroidDevBrOrg"
            target="_blank"
            className={classes.navLink}
          >
            <FaFacebook />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-medium"
          title="Veja o Medium"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://medium.com/android-dev-br"
            target="_blank"
            className={classes.navLink}
          >
            <FaMedium />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-podcast"
          title="Ouvir podcast"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://pod.link/1387735341"
            target="_blank"
            className={classes.navLink}
          >
            <FaPodcast />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
