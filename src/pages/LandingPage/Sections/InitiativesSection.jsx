import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import initiativeStyle from "assets/jss/material-kit-react/views/landingPageSections/initiativeStyle.jsx";

import podcast from "assets/img/podcast.png";
import work from "assets/img/work.png";
import news from "assets/img/news.png";
import medium from "assets/img/medium.png";
import slack from "assets/img/slack.png";
import study from "assets/img/study.png";

class InitiativesSection extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section} id="initiatives">
                <GridContainer justify="center">
                    <GridItem cs={12} sm={11} md={8}>
                        <h2 className={classes.title}>Temos diversas iniciativas para a comunidade:</h2>
                    </GridItem>
                    <GridContainer xs={11} sm={11} md={8} justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes.textCenter}>
                                <CardBody>
                                    <img src={podcast} className={classes.image} alt="Ícone de podcast" />
                                    <h4 className={classes.cardTitle}>Podcast</h4>
                                    <p>Podcasts sobre diversos assuntos relacionados a desenvolvimento Android.</p>
                                    <a
                                        href="http://podcast.androiddevbr.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.cardLink}>
                                        Ouvir</a>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes.textCenter}>
                                <CardBody>
                                    <img src={work} className={classes.image} alt="Ícone de trabalho" />
                                    <h4 className={classes.cardTitle}>Mural de vagas</h4>
                                    <p>Diversas vagas Android para todos os níveis, no Brasil e no mundo, presencial ou remoto.</p>
                                    <a
                                        href="http://vagas.androiddevbr.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.cardLink}>
                                        Ver vagas</a>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes.textCenter}>
                                <CardBody>
                                    <img src={news} className={classes.image} alt="Ícone de jornal" />
                                    <h4 className={classes.cardTitle}>Newsletter</h4>
                                    <p>Informativos mensais sobre novidades e eventos de desenvolvimento Android.</p>
                                    <a
                                        href="http://newsletter.androiddevbr.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.cardLink}>
                                        Inscrever</a>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes.textCenter}>
                                <CardBody>
                                    <img src={medium} className={classes.image} alt="Ícone do Medium" />
                                    <h4 className={classes.cardTitle}>Medium</h4>
                                    <p>Diversos posts sobre desenvolvimento Android para qualquer nível de conhecimento.</p>
                                    <a
                                        href="http://medium.androiddevbr.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.cardLink}>
                                        Ver posts</a>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes.textCenter}>
                                <CardBody>
                                    <img src={slack} className={classes.image} alt="Ícone do Slack" />
                                    <h4 className={classes.cardTitle}>Slack</h4>
                                    <p>Diversos canais para comunicação, dúvidas técnicas, ajuda na carreira, anúncios da comunidade, etc.</p>
                                    <a
                                        href="http://slack.androiddevbr.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.cardLink}>
                                        Entrar</a>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes.textCenter}>
                                <CardBody>
                                    <img src={study} className={classes.image} alt="Ícone de podcast" />
                                    <h4 className={classes.cardTitle}>Material de Estudo</h4>
                                    <p>Lista de sugestões de materiais para estudo da plataforma Android. Para todos os níveis.</p>
                                    <a
                                        href="https://github.com/androiddevbr/materiais-de-estudo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.cardLink}>
                                        Ver material</a>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(initiativeStyle)(InitiativesSection);
