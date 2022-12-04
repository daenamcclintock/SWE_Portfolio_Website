import React, {useState} from 'react';
import { ProjectCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ImgGenStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { articles } from '../../constants/constants';
import { Configuration, OpenAIApi } from "openai";

const ImgGen = ({ open }) => {
    const [searched, setSearched] = useState(false)
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");

    const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_VITE_Open_AI_Key
    })

    const openai = new OpenAIApi(configuration)
    
    const generateImage = async () => {
        const res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
        });

        setResult(res.data.data[0].url)
    }

    return (
      <Section id="projects" open={open}>
          <SectionTitle main>Generate Images with AI !</SectionTitle>
          <SectionDivider />
          <div className="app-main">
                <>
                    <textarea
                    className="app-input"
                    placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
                    onChange={(e) => setPrompt(e.target.value)}
                    rows="10"
                    cols="40"
                    />
                    <button onClick={generateImage}>Generate an Image</button>
                </>
            </div>
            {result.length > 0 ? (
                <img className="result-image" src={result} alt="result" />
                ) : (
                null
            )}
        {searched ?
        <GridContainer>
          {articles.map((article, index) => {
            return (
              <ProjectCard key={index}>
                <TitleContent>
                    <HeaderThree title>{article.title}</HeaderThree>
                    <Hr />
                </TitleContent>
                <Img src={article.image} />
              </ProjectCard>
            );
          })}
        </GridContainer>
        :
        null
        }   
      </Section>
    )
}


export default ImgGen;