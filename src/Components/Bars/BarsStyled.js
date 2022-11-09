import styled from "styled-components";
export const BarsWrapper=styled.div`  
    height:100%;
    width:100%;
    border-radius:15px;
    display:flex;
    flex-direction:column;

    .bars{
        height: 10rem;
        width:100%;
        margin:0;
        ${'' /* background-color: rgba(0,0,0,0.2); */}
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:flex-end;
    }

    .days{
        margin:0;
        height: 20%;
        border-bottom:1px solid rgba(0,0,0,0.1);
        padding-bottom:5%;
        align-items:center;
        text-align: center;
        transition: all .4s ease-in-out;

        p{
            width: 10%;
        }
    }

    @media (max-height:780px){           
            .days{
                padding-bottom:1%;
            }           
        }

`

export const Bar=styled.div`
    min-height: ${props => props.amount+15}%;
    width: 10%;
    background-color: red;
    border-radius: 5px;
    background-color:${props => props.maxAmount>props.amount ?  "rgba(236,117,93)" : "hsl(186, 34%, 60%)" };
    position:relative;

    &:active{
        opacity:0.6;
    }

    &:active::after{
        content: "$${props => props.amount}";
        position:absolute;
        top: -30px;
        left: -5px;
        padding:5px;
        border-radius:3px;
        text-align:center;
        width:35px;
        font-size:12px;
        color:white;
        background-color:hsl(25,47%,15%);
        opacity: 2;
    }
`