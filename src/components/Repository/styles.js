import styled from 'styled-components';

import { colors, fontSize } from '../../constants/styles';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;
export const Title = styled.a`
    font-family: 'Raleway';
    color: ${colors.lilac};
    margin-bottom: 10px;
    font-size: ${fontSize.medium};
    text-decoration: none;
`;
export const Description = styled.label`
    font-family: 'Raleway';
    color: ${colors.black};
    font-size: ${fontSize.small};
    margin-bottom: 10px;
`;
export const Field = styled.div`
    display: flex;
`;
export const Stars = styled.label`
    font-family: 'Raleway';
    color: ${colors.gray};
    font-size: ${fontSize.small};
    margin-left: 10px;
`;
