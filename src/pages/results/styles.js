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
}
`;
export const Content = styled.section`
    position: absolute;
    top: 20vh;
    height: 80vh;
    width: fill-available;
    display: flex;
`;
export const Information = styled.aside`
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 80px;
    animation: ${height} 1000ms ease;
`;
export const Repositories = styled.article`
    height: 100%;
    width: 70%;
    overflow-y: scroll;
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
`;
