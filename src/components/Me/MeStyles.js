import styled from 'styled-components';

export const BackgroundImage = styled.div`
  background-image: url('https://media-exp1.licdn.com/dms/image/C4D1BAQHkFmZqTpUFgg/company-background_10000/0/1592519376314?e=2147483647&v=beta&t=nZzx-jnr2XAitIxytuXpuXnH0KUxm9be9H_q1N_7qYk');
  background-repeat: no-repeat;
  background-size: 120rem;
`

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const Image = styled.img`
  height: 40rem;
  width: 40rem;
  margin-left: 5rem;
  border: 2px solid white;
  border-radius: 999%;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 20rem;
    width: 20rem;
    margin-left: 5rem;
    border: 2px solid white;
    border-radius: 999%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 30rem;
    width: 30rem;
    margin-left: 5rem;
    border: 2px solid white;
    border-radius: 999%;
  }
`