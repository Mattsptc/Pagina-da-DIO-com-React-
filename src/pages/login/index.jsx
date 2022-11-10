
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./style";
import { Input } from "../../input";
import {MdEmail, MdLock} from "react-icons/md"
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const handleClickSignIN = () => {
    navigate('/feed')
  }

  return (
    <div>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para voçê aprender com expert, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
          <form >
            <Input placeholder="Email" leftIcon={<MdEmail />}/>
            <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
            <Button title="Entrar" variant="secondary" onClick={handleClickSignIN} type="button"/>
          </form>
          <Row>
            <EsqueciText>Esqueci minha senha</EsqueciText>
            <CriarText>Criar Conta</CriarText>
          </Row>
          </Wrapper>
        </Column>
      </Container>
    </div>
  );
}
