import { Header } from "../../components/Header";
import { Link } from "react-router-dom"
import { Container, Column, Title, TitleHighlight} from "./style"
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo"

export default function Feed() {
  return (<>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># Ranking TOP 5 da semana</TitleHighlight>

        <UserInfo percentual={80} nome="Mateus R." image="https://raw.githubusercontent.com/Mattsptc/PaginaPortfolio/main/assets/img/my-photo.png" />
        <UserInfo percentual={62} nome="Mateus R." image="https://raw.githubusercontent.com/Mattsptc/PaginaPortfolio/main/assets/img/my-photo.png" />
        <UserInfo percentual={30} nome="Mateus R." image="https://raw.githubusercontent.com/Mattsptc/PaginaPortfolio/main/assets/img/my-photo.png" />
        <UserInfo percentual={18} nome="Mateus R." image="https://raw.githubusercontent.com/Mattsptc/PaginaPortfolio/main/assets/img/my-photo.png" />
        <UserInfo percentual={8} nome="Mateus R." image="https://raw.githubusercontent.com/Mattsptc/PaginaPortfolio/main/assets/img/my-photo.png" />

        </Column>
      </Container>
      </> );
}
 