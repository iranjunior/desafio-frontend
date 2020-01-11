import styled, { css } from 'styled-components';

export const Container = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
width: 56%;
height: 46px;
padding: 0;
padding-left: 20px;
color: #777;
font-size: 18px;
font-family: monospace;
box-shadow: 1px 1px 5px 1px #cacaca;
border-top-left-radius: 3px;
border-bottom-left-radius: 3px;
border-style: none;
${(props) => props.validate === false && css`
    border:1px solid red;
`}

:hover {
    border:1px solid cornflowerblue;
    box-shadow: 1px 1px 10px 1px cornflowerblue;
    transition: box-shadow 500ms;
}
`;
export const Submit = styled.button`
width: 100px;
height: 50px;
padding: 0;
border-style: unset;
border-top-right-radius: 3px;
border-bottom-right-radius: 3px;
background-color: #ac53f2;
:hover {
    cursor: pointer;
    box-shadow: 1px 1px 10px 1px #ac53f2;
    transition: box-shadow 500ms;
}

`;
export const Logo = styled.img`
height: 100%;
width: 100%;

`;
