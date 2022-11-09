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

    *{
        font-size: 18px;
    }

    main{
        padding:20px;
        width:80%;
        max-width:500px;
        height:40%;
        min-height:450px;
        background-color: rgba(255,252,247);
        border-radius:15px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:start;
        transition: ease all .4s;

        h1{
            margin:0;
            font-size:1.55em;
        }
    }

    @media (max-height:780px){           
            main{
                min-height:400px;
            }           
        }
`