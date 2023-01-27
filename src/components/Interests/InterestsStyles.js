import styled from 'styled-components';

export const InterestsContainer = styled.div`
    display: ${(props) => props.grid ? "grid" : "flex" };
    flex-direction: ${(props) => props.row ? "row" : "column" };
    padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
    margin: 0 auto;
    max-width: 1080px;
    box-sizing: content-box;
    position: relative;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;

    @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
    display: ${({ open }) => open ? "none": null}
    width: calc(100vw - 32px);
    flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
    display: ${({ open }) => open ? "none": null}
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;

    @media ${(props) => props.theme.breakpoints.lg} {
        
    }

    @media ${(props) => props.theme.breakpoints.md} {

    }

    @media ${(props) => props.theme.breakpoints.sm} {

    }
`

export const Section = styled.div`

`

export const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: cetner;
    margin: 10px;

    @media ${(props) => props.theme.breakpoints.lg} {
            
    }

    @media ${(props) => props.theme.breakpoints.md} {

    }

    @media ${(props) => props.theme.breakpoints.sm} {

    }
`

export const Title = styled.p`
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.02em;
    display: flex;
    /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
    background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;

    @media ${props => props.theme.breakpoints.md} {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 4px;
    }
    
    @media ${props => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
    }
`

export const DescriptionDiv = styled.div`


    @media ${(props) => props.theme.breakpoints.lg} {
                    
    }

    @media ${(props) => props.theme.breakpoints.md} {

    }

    @media ${(props) => props.theme.breakpoints.sm} {

    }
`

export const Description = styled.p`


    @media ${(props) => props.theme.breakpoints.lg} {
                        
    }

    @media ${(props) => props.theme.breakpoints.md} {

    }

    @media ${(props) => props.theme.breakpoints.sm} {

    }
`

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: cetner;
    margin: 2rem;

    @media ${(props) => props.theme.breakpoints.lg} {
                            
    }

    @media ${(props) => props.theme.breakpoints.md} {

    }

    @media ${(props) => props.theme.breakpoints.sm} {

    }
`

export const Image = styled.img`
    border-radius: 4rem;

    @media ${(props) => props.theme.breakpoints.lg} {
                                
    }

    @media ${(props) => props.theme.breakpoints.md} {

    }

    @media ${(props) => props.theme.breakpoints.sm} {

    }
`