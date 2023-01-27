import styled from 'styled-components';

export const BackgroundImage = styled.div`
  background-image: url('https://wallpaperaccess.com/full/99173.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  opacity: 80%;
  
  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  
  }
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

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 24px 48px 0;
    flex-direction: column;
    margin-bottom: 0rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
    margin-bottom: 0rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" };
    width: calc(100vw - 32px);
    flex-direction: column;
    margin-bottom: 0rem;
    display: ${({ open }) => open ? "none": "flex"}
  }
`

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    display: flex;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SectionTitle = styled.div`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: ${({ open }) => open ? 'none' : 'flex'};
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

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

export const DownloadButton = styled.button`
  width: 45px;
  height: 45px;
  cursor: pointer;
  background-color: #5de6de;
  background-image: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
  border: none;
  border-radius: 10%;
  transition: 200ms;
  color: black

  &:before {
    content: 'Back to Top';
    position: absolute;
    transform: translateX(-50%) translateY(45px);
    font-size: 15px;
    transition: 200ms;
    color: transparent;
    font-weight: bold;
  }

  &:hover {
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
    width: 45px;
    height: 45px;
    border: 1px solid white;
    transition: 1s ease-in-out;
    color: white;
  }

  &hover::before {
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  @keyframes bounce {
    0% {transform: translateX(-50%) translateY(-50%)}
    25% {transform: translateX(-50%) translateY(-65%)}
    50% {transform: translateX(-50%) translateY(-50%)}
    75% {transform: translateX(-50%) translateY(-35%)}
    100% {transform: translateX(-50%) translateY(-50%)}
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    position: relative;
    bottom: 10rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`

export const ResumeButton = styled.button`
  width: 100px;
  height: 40px;
  cursor: pointer;
  background-color: #5de6de;
  background-image: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
  border: none;
  border-radius: %;
  transition: 200ms;
  font-weight: bold;
  color: white;

  &:before {
    content: 'Back to Top';
    position: absolute;
    transform: translateX(-50%) translateY(45px);
    font-size: 15px;
    transition: 200ms;
    color: transparent;
    font-weight: bold;
  }

  &:hover {
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
    width: 50px;
    height: 50px;
  }

  &hover::before {
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  @keyframes bounce {
    0% {transform: translateX(-50%) translateY(-50%)}
    25% {transform: translateX(-50%) translateY(-65%)}
    50% {transform: translateX(-50%) translateY(-50%)}
    75% {transform: translateX(-50%) translateY(-35%)}
    100% {transform: translateX(-50%) translateY(-50%)}
  }
`