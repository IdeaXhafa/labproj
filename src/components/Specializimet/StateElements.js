import styled from "styled-components";

export const SpecContainer = styled.div `
    height:1300px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    //background:#010606;
    background:#d3d3d3;

    @media screen and (max-width: 768px){
        height:1100px;
    }

    @media screen and (max-width: 480px){
        height:1300px;
    }
`

export const SpecWrapper = styled.div `
    max-width:1000px;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items:center;
    grid-gap:10px;
    padding:0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
        padding:0 20px;
    }
`
