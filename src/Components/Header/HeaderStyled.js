import styled from "styled-components";
export const HeaderWrapper = styled.header`
        padding:20px;
        margin:20px;
        background-color: rgba(236,117,93);
        width:80%;
        max-width:400px;
        height: 70px;
        border-radius:20px;
        color:white;
        display:flex;

        h2{
        margin:0;
        font-size: 28px;
        font-family: sans-serif;
        font-weight: normal;
        }

        p{
            margin:0;
            font-size:18px;
            font-weight: 200;
        }

        .left{
            width:50%;
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-content:left;
        }

        .right{
            width:50%;
            display:flex;
            justify-content:right;
            align-items:center;
        }

        .circle{
            height:36px;
            width:36px;
            border-radius:100%;
            border:2px solid white;
            position:relative;
            left:20px;
            z-index:99999;
        }
        .circle2{
            height:40px;
            width:40px;
            background-color: hsl(25, 47%, 15%);
            border-radius:100%;
            position:relative;
            z-index:1;
        }
`