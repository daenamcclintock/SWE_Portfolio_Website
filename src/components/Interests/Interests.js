import React from 'react'
import { Description, DescriptionDiv, Grid, Image, ImageDiv, InterestsContainer, Section, Title, TitleDiv,  } from './InterestsStyles'
import { SectionDivider, SectionTitle } from '../../styles/GlobalComponents';


const Interests = ({ open }) => {
    const interests = [
        {title: "Travel", description: "I have traveled to 20+ countries and live a nomadic lifestyle.", image: ""},
        {title: 'Fitness', description: "I follow a strict fitness routine and can often be found at the gym training before work.", image: ""},
        {title: 'Music', description: "I built my own guitar when I was young and have played ever since. I also enjoy attending music festivals with friends.", image: "/images/guitar.png"},
        {title: "Scuba Diving", description: "Received my PADI Open Water certification on the island of Koh Tao in Thailand.", image: "/images/Scuba.png"},
        {title: "Skiing", description: "When not enjoying tropical places, I can be found up in the mountains enjoying some fresh powder.", image: ""},
        {title: "Personal Projects", description: "I am always working on personal software development projects. You can view some of my personal apps here.", image: ""},
        {title: "Reading", description: "I enjoy a good book or article. Mostly non-fiction about topics that interest me. I read about emerging technologies, financial markets, and world travel adventures.", image: ""}
    ]

    let mappedInterests
    if(interests.length > 0) {
        mappedInterests = interests.map((interest, i) => {
            return (
                <>
                    <Section>
                        <TitleDiv>
                            <Title>{interest.title}</Title>
                        </TitleDiv>
                        <DescriptionDiv>
                            <Description>{interest.description}</Description>
                        </DescriptionDiv>
                        <ImageDiv>
                            <Image src={interest.image} width={'200rem'}/>
                        </ImageDiv>
                    </Section>
                </>
            )
        })
    }

    return (
        <InterestsContainer open={open}>
            <SectionTitle>Interests</SectionTitle>
            <Grid>
                {mappedInterests}
            </Grid>
        </InterestsContainer>
    )
}

export default Interests