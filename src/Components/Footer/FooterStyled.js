import styled from "styled-components";
export const FooterWrapper = styled.div`
    *{
        margin:0;
        padding:0;
    }

    display:flex;
    width:100%;
    padding-bottom:10px;

    p{
        font-size:0.67em;
        color:grey;
    }
    
    h2{
        font-size:2em;
        transition: all .4s ease-in-out;
    }

    h3{
        font-size:1em;
        transition: all .4s ease-in-out;
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

    @media (max-height:780px){
            h2{
                font-size: 1.88em;
            }
            h3{
                font-size: .89em;
            }
        }
`;