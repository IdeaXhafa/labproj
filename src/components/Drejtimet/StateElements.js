import styled from "styled-components";

export const StatesContainer = styled.div `
    height:800px;
    align-items:center;
    background:#5fb4cb;
    padding-top: 5%;
    @media screen and (max-width: 768px){
        height:1100px;
    }

    @media screen and (max-width: 480px){
        height:1300px;
    }
`

export const StatesWrapper = styled.div `
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
        padding:0 20px;
    }
`
