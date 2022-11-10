import React from "react";
import Button from "../Button";
import logo from "../../assets/logo-dio.png";
import {
  BuscarInputContainer,
  Column,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  userPicture,
  Wrapper,
} from "./style";
const Header = (autenticado) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar ..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
            {autenticado ? (<userPicture src="https://raw.githubusercontent.com/Mattsptc/PaginaPortfolio/main/assets/img/my-photo.png"></userPicture>) : (<><MenuRight href="#">Home</MenuRight>
          <Button title="Entrar"></Button>
          <Button title="Cadastrar"></Button></>)}

        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
