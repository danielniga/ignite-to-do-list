import styled from "styled-components"

interface ContainerProps {
    changeLine:boolean;
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;    
    width: 46rem;
    padding: 1rem;
    background-color: var(--Gray-500);
    border-radius: 8px;
    box-sizing: border-box;
    margin-top: 12px;
    p{
        color: var(--Gray-100);
        margin: 0 1rem;
        font-size: 14px;
        text-decoration:${props=>props.changeLine?"line-through":"none"} ;
    }
    input{
        border-radius: 8px;
    }
    img{
        width: 1.5rem;
        height: 1.5rem;
    }
`;