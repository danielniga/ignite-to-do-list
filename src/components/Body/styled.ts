import styled from "styled-components"
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 46rem;
    margin: auto;

    .notValue{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        width: 46rem;
        height: 19px;
        margin-bottom: 12px;
        box-sizing: border-box;
        margin-top: 4rem;
        img{
            width: 56px;
            height: 56px;
            margin: 64px 0 16px 0;
        }
        p{
            color: var(--Gray-300);
            font-size: 1rem;
        }
        p:nth-child(2){
            font-weight: bold;
        }
    }
    .divHeaderList{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 46rem;
        height: 19px;
        margin-bottom: 12px;
        box-sizing: border-box;
        margin-top: 4rem;

    }

    .divHeaderListChildEsq,.divHeaderListChildDir {
        display: flex;  
        justify-content:center ;
        align-items: center;
            div{
                background-color: var(--Gray-400);
                color: var(--Gray-200);
                margin: 0;
                font-size: 14px;
                padding:2px 0.5rem;
                border-radius: 1rem;
            }
            
            label{
                color: var(--Purple);
                margin-right: 0.5rem;
                font-size: 14px;
                font-weight: bold;
                }
        }
        .divHeaderListChildEsq{
            label{color: var(--Blue); }
        }
        


    .divTxt{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        max-width: 46rem;
        height: 52px;
        margin-top: -27px;
        box-sizing: border-box;
    }
    .txtAdd{
        width: 638px;
        height: 50px;
        background-color: var(--Gray-500);
        color: var(--Gray-100);
        margin-right: 0.5rem;
        border: none;
        outline:none;
        padding: 1rem;
        border-radius: 8px;
        border: solid 1px var(--Gray-700);
        ::placeholder{
            color: var(--Gray-300);
        }
    }
    .btnAdd{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90px;
        height: 52px;
        background-color: var(--BlueDark);
        color: var(--Gray-100);
        border-radius: 8px;
        font-size: 14px;
        img{
            width: 1rem;
            height: 1rem;
            margin: 0.5rem;
        }
    }
`;