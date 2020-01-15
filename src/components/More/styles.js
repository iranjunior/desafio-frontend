import styled, { keyframes } from 'styled-components';
import { colors, fontSize } from '../../constants/styles';

const animation = keyframes`
0% {
    top: 0px
}
50% {
    top: 5px
}
100% {
    top: 0px
}

`;
export default styled.button`
    height: 40px;
    width: 80px;
    background-color: #fff;
    border:3px solid ${colors.lilac};
    border-radius: 20px;
    font-family: 'Raleway';
    font-size: ${fontSize.small};
    color: ${colors.lilac};
    position: relative;
    animation: ${animation} 1.5s infinite;
        animation-play-state: running;
    
    :hover {
        cursor: pointer;
        box-shadow: 0px 0px 3px 1px ${colors.lilac};
        transition: box-shadow 1000ms ease, font-weight 1000ms ease;
        font-weight: 800;
        animation-play-state: paused;
    }
`;
