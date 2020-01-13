import styled from 'styled-components';
import { colors, fontSize } from '../../constants/styles';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;

export const Message = styled.label`
    font-family: 'Raleway';
    font-size: ${fontSize.large};
    color: ${colors.lilac};
    margin-top: 40px;
`;
