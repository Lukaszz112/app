import styled from 'styled-components';
export const AppWrapper = styled.div`
    padding-left:0;
    margin:0;
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:rgba(247,233,220,0.7);

    main{
        padding:20px;
        width:80%;
        max-width:350px;
        background-color: rgba(255,252,247);
        border-radius:15px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:start;

        h1{
            margin:0;
        }
    }
`