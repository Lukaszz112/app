import styled from "styled-components";
export const FooterWrapper = styled.div`
    *{
        margin:0;
        padding:0;
    }

    display:flex;
    width:100%;
    padding-top:20px;
    padding-bottom:10px;

    p{
        font-size:12px;
        color:grey;
    }
    
    h2{
        font-size:32px;
    }

    .left,.right{
        width:50%;
        display:flex;
        flex-direction:column;
    }

    .left{
        justify-content:flex-start;
    }
    
    .right{
        justify-content:flex-end;
        align-items:flex-end;
    }
`;