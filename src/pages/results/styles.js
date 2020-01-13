import styled, { keyframes } from 'styled-components';
import { colors } from '../../constants/styles';

const height = keyframes`
    to{
        height: 100%;
    }
    from{
        height: 0%;
    }
`;

export const Container = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: fill-available;
    display: flex;
    margin-left: 16px;
    margin-right: 16px;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
}
`;
export const Header = styled.header`
    height: 20%;
    width: fill-available ;
    padding-left: 28px;
    padding-right: 28px;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 600px){
        height: 10%;
        padding: 0;
    }
}
`;
export const Content = styled.section`
    position: absolute;
    top: 20vh;
    height: 80vh;
    width: fill-available;
    display: flex;
    @media only screen and (max-width: 600px){
        height: auto;
    }
`;
export const Information = styled.aside`
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 80px;
    animation: ${height} 1000ms ease;
    @media only screen and (max-width: 600px){
        padding-left: 0px;
        width: 0%;
        position: absolute;
    }
`;
export const RepositoriesSpace = styled.article`
    height: 100%;
    width: 100%;
`;
export const Repositories = styled.article`
    height: 90%;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    transition: height 500ms linear;
    ::-webkit-scrollbar-thumb {
        background-color: ${colors.lilac};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb ::hover {
        background-color: ${colors.lilacHover};
        border-radius: 10px;
    }
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    animation: ${height} 800ms ease;

    @media only screen and (max-width: 600px){
        height: 75%; 
        width: 100%;
        ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
        }   
    }
`;
export const BottomSpace = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 10%;
    @media only screen and (max-width: 600px){
        height: 8%;
        position: relative;
        bottom: 20px;
          
    }
`;
export const ImageHeader = styled.img`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: 2px solid ${colors.black};
    margin: auto;
    margin-left: 0;
    @media only screen and (min-width: 600px){
        display: none;
          
    }
`;
