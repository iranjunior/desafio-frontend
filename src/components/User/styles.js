import styled, { css } from 'styled-components';

export const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`;
export const Image = styled.img`
height: 280px;
width: 280px;

box-shadow: 1px 1px 5px 1px #cacaca;
border-radius: 2px;
`;
export const Name = styled.label`
    font-family: 'Raleway';
    font-size: 35px;
    margin-top: 12px;
`;
export const Information = styled.span`    
font-family: 'Raleway';
font-size: 20px;
color: #5c5c5c;
${(props) => !props.login && css`
margin-left: 16px;
`}
`;
export const Space = styled.br`
    line-height: 2;
`;
export const Field = styled.div`
display: flex;
margin-top: 12px;
`;
