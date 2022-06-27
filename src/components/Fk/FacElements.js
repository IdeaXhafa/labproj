import styled from "styled-components";

export const StatesContainer = styled.div `
    height:auto;
    margin-top: 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#d3d3d3;

    @media screen and (max-width: 768px){
        height:1100px;
    }

    @media screen and (max-width: 480px){
        height:1300px;
    }
`

export const StatesWrapper = styled.div `
    width: 1000px;
    margin:0 auto;
    align-items:center;
    padding:0 50px;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
        padding:0 20px;
    }
`

export const CityIcon = styled.img `
    height:110px;
    width:110px;
    margin-bottom:10px;

`