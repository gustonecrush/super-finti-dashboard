import React from 'react'
import styled from 'styled-components';

function TransactionCard({title, status, price, color, icon}) {
  return (
    <Container>
        <ContainerMainInfo>
            <ImgContainer color={color}>
                <i class={icon}></i>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    {title}
                </Title>
                <Status>
                    {status}
                </Status>
            </InfoContainer>
        </ContainerMainInfo>
        
        <Price>${price}</Price>
    </Container>
  )
}

export default TransactionCard

const ImgContainer = styled.div(
    ({color}) => `
    margin-right: 20px;
    background-color: ${color};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;

    i {
        color: #FFF;
        font-size: 1.3rem;
    }
`);

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -10px;
`;

const ContainerMainInfo = styled.div`
    display: flex;
    align-items: center;
`;

const InfoContainer = styled.div``;

const Title = styled.p`
    font-weight: 700;
    font-size: 0.85rem;
`;

const Status = styled.p`
    font-size: 0.85rem;
    margin-top: -10px;
    color: #C5C9C8;
`;

const Price = styled.p`
    font-weight: 700;
    margin-left: 50px;
`;