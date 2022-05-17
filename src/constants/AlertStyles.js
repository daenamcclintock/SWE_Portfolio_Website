import styled from "styled-components"

export const Alerts = styled.div`
    animation: .5s ease-in-out 0s 1 light-bounce-in;
    bottom: 25rem;
    display: flex;
    left: 0;
    margin: auto;
    max-width: 30rem;
    position: fixed;
    right: 0;
    z-index: 10000;

    @keyframes light-bounce-in {
        0% {
          opacity: 0;
          transform: translateY(20%);
        }
      
        50% {
          transform: translateY(-5%);
        }
      
        100% {
          opacity: 1;
          transform: translateY(0%);
        }
      }
`

export const AlertBody = styled.p`
    margin: 0;
`