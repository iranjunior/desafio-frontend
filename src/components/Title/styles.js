import styled from 'styled-components';
import { colors, fontSize } from '../../constants/styles';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.position !== 'initial' && 'center'};
  margin: 8px;
  width: 100%;
  :hover {
      cursor: ${(props) => props.link === 'actived' && 'pointer'};
  }
  
`;
export const Banner = styled.a`    
  font-family: monospace;
  font-size: ${fontSize.large};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${colors.black};

  @media only screen and (max-width: 1400px){
    font-size: ${fontSize.small};
      
  }
  :hover {
      cursor: ${(props) => props.link === 'actived' && 'pointer'};
  }
`;
export const Detach = styled.label`
  font-family: 'Raleway';
  font-weight: 200;
  font-style: italic;
  :hover {
      cursor: ${(props) => props.link === 'actived' && 'pointer'};
  }
`;
