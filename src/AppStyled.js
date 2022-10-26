import styled from 'styled-components';
export const AppWrapper = styled.div`
    padding:0;
    margin:0;
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:rgba(247,233,220,0.7);

    h2{
        font-size: 18px;
        font-style:normal;
    }

    header{
        padding:20px;
        margin:20px;
        background-color: rgba(236,117,93);
        width:350px;
        min-height: 50px;
        border-radius:20px;
        color:white;
        display:flex;
    }

    .left{
        display:flex;
        flex-direction: column;
        justify-content:left;
        align-items:left;
    }

    .right{
        width:80%;
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
        top:5px;
        left:20px;
        z-index:99999;
    }
    .circle2{
        height:40px;
        width:40px;
        background-color: hsl(25, 47%, 15%);
        border-radius:100%;
        position:relative;
        top:5px;
        z-index:1;
    }
`