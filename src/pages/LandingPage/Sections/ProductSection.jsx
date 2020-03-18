import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <h2 className={classes.title}>A nossa comunidade é um lugar seguro para TODOS</h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer justify="center">
            <GridContainer xs={12} sm={12} md={10}>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="Diversidade e inclusão"
                  description="Nós adotamos a política de tolerância zero para assédio, perseguições ou discriminações e respeitamos os limites e identidade das pessoas."
                  icon={() => <img src={require("assets/img/chat.png")} alt="Ícone de chat" />}
                  iconColor="info"
                  horizontal
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="Segurança"
                  description="Cultivamos uma rede de suporte e encorajamento para todos e suas variadas formas de expressão de maneira responsável."
                  icon={() => <img src={require("assets/img/conversation.png")} alt="Ícone de conversa" />}
                  iconColor="success"
                  horizontal
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="Boa conduta"
                  description={<span>Prezamos pelo bom senso e pela boa conduta, por isso temos um
                    código de conduta que deve ser seguido a risca sob pena de expulsão da comunidade.
                  Veja <a href="https://github.com/androiddevbr/codigo-de-conduta">aqui</a></span>}
                  icon={() => <img src={require("assets/img/law.png")} alt="Ícone repesentando lei" />}
                  iconColor="danger"
                  horizontal
                />
              </GridItem>
            </GridContainer>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
