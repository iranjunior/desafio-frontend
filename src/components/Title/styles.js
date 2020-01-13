import styled from 'styled-components';
import { colors, fontSize } from '../../constants/styles';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
  margin: 8px;
`;
export const Banner = styled.label`    
  font-family: monospace;
  font-size: ${fontSize.large};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${colors.black};
`;
export const Detach = styled.label`
  font-family: 'Raleway';
  font-weight: 200;
  font-style: italic;

`;
