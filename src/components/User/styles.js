import styled, { css } from 'styled-components';
import { colors, fontSize } from '../../constants/styles';

export const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
@media only screen and (max-width: 1400px){
flex-direction: row;
margin-bottom: 25px;

}
`;
export const Header = styled.header`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1400px){
    width: 30%;
    @media only screen and (max-width: 700px){
    width: 20%;
    }
}   
`;

export const Image = styled.img`
height: 280px;
width: 280px;
box-shadow: 1px 1px 5px 1px #cacaca;
border-radius: 2px;
@media only screen and (max-width: 1400px){
    height: 140px;
    width: 140px;
}
@media only screen and (max-width: 700px){
    height: 60px;
    width: 60px;
}
`;
export const Name = styled.label`
    font-family: 'Raleway';
    font-size: ${fontSize.medium};
    margin-top: 12px;
    @media only screen and (max-width: 1400px){
    font-size: 25px;
    }
    @media only screen and (max-width: 700px){
    font-size: 15px;
    }
`;
export const Content = styled.div`
    @media only screen and (max-width: 1400px){
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 700px){
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}


    }
}
`;
export const Information = styled.span`    
font-family: 'Raleway';
font-size: ${fontSize.small};
color: ${colors.gray};
${(props) => !props.login && css`
margin-left: 16px;
`}
@media only screen and (max-width: 1400px){
    font-size: 20px;
    }
    @media only screen and (max-width: 700px){
    font-size: 10px;
    }
`;
export const Space = styled.br`
    line-height: 2;
`;
export const Field = styled.div`
display: flex;
margin-top: 12px;
@media only screen and (max-width: 1400px){
}
`;
