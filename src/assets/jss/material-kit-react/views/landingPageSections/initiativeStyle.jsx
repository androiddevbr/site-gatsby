import { title, cardTitle, cardLink, cardSubtitle } from "assets/jss/material-kit-react.jsx";

const initiativeStyle = {
  cardTitle: {
    ...cardTitle,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    color: "#00796B"
  },
  cardLink: {
    ...cardLink,
    textTransform: "uppercase",
    fontWeight: "600"
  },
  cardSubtitle,
  section: {
    padding: "70px 0", 
    backgroundColor: "#6FCF97",
    marginTop: "60px"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    color: "#fff",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#fff",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  image: {
    width: "39px",
    marginTop: "20px"
  }
};

export default initiativeStyle;
