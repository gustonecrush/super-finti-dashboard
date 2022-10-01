import React from 'react'
import styled from 'styled-components';

function Tasks({title, number1, number2, color = ""}) {
  return (
    <TaskContainer color={color}>
        <div>
            <Title>{title}</Title>
            <Container>
                <Number color={color}>
                    <p>{number1}</p>
                    <p>{number2} <i class='bx bx-right-top-arrow-circle'></i></p>
                </Number>
                Current Month
            </Container>
        </div>

        <i class='bx bxs-bar-chart-alt-2' ></i>
    </TaskContainer>
  )
}

export default Tasks

const TaskContainer = styled.div(
    
    ({color}) => `
    display: flex;
    align-items: center;
    /* background-color: green; */

    i {
        font-size: 60px;
        margin-left: 50px;
        color: ${color}
    }
    margin: 0 50px;
`);

const Title = styled.p`
    color: #C5C9C8;
    font-weight: 700;
`;

const Container = styled.div`
    color: #C5C9C8;
    margin-top: -20px;
`;

const Number = styled.div(
    ({color}) => `
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        :nth-child(1) {
            font-size: 25px;
            font-weight: 700;
            color: ${color};
        }
    }

    i {
        font-size: 15px;
        margin-left: 0;
    }
`);
