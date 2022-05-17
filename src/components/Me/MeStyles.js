import styled from 'styled-components';

export const BackgroundImage = styled.div`
  background-image: url('https://wallpaperaccess.com/full/99173.jpg');
  background-repeat: no-repeat;
  background-size: 120rem;
  
`
// https://free4kwallpapers.com/uploads/originals/2020/10/24/cityscape-photography--boston--usa--overcast--city-lights-wallpaper.jpg

export const MeSection = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1080px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 30rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
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

export const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
`

export const MeText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.7);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`