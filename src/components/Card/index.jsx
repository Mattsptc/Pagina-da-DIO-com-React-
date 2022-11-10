import React from "react";
import {FiThumbsUp} from 'react-icons/fi'
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./style";
const Card = () => {
  return (
    <CardContainer>
        <ImageBackground>
            <Content>
                <UserInfo>
                    <UserPicture src="https://raw.githubusercontent.com/Mattsptc/PaginaPortfolio/main/assets/img/my-photo.png" />
                    <div>
                        <h4>Mateus R.</h4>
                        <p>Há 10 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no bootcamp Inter - Aprendendo HTML E CSS...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 16
                    </p>
                    </HasInfo>
            </Content>
        </ImageBackground>
    </CardContainer>
  )
};

export { Card }