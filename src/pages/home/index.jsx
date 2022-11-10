
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Title, TextContent, TitleHighlight } from "./style";
import BannerImg from "../../assets/banner.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleClickSignIN = () => {
    navigate('/login')
  }
  return (
    <div>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
            desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={(handleClickSignIN) => null}></Button>
        </div>
        <div>
          <img src={BannerImg} alt="Imagem principal"></img>
        </div>
      </Container>
    </div>
  );
}
