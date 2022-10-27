import styled from "styled-components";
export const BarsWrapper=styled.div`
    padding:20px;    
    height:100%;
    width:350px;
    background-color: rgba(255,252,247);
    border-radius:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .bars{
        min-height:100px;
        width:100%;
        padding:10px;
        ${'' /* background-color: rgba(0,0,0,0.2); */}
        border-bottom:1px solid rgba(0,0,0,0.1) ;
    }
`