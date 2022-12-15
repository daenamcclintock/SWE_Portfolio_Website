import React, {useState} from 'react';
import { ProjectCard, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, InputDiv, TextArea, GenerateButton, ResultImageDiv, ResultImage, GenerateButtonDiv, SelectDropdown, DropdownOption, ModalTitle, ModalTitleDiv, SelectDropdownDiv } from './ImgGenStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Configuration, OpenAIApi } from "openai";
import Modal from 'react-modal';

const ImgGen = ({ open }) => {
    const [prompt, setPrompt] = useState("");
    const [results, setResults] = useState("");
    const [imgCount, setImgCount] = useState(1)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_VITE_Open_AI_Key
    })

    const openai = new OpenAIApi(configuration)
    
    const generateImage = async () => {
        const response = await openai.createImage({
        prompt: prompt,
        n: imgCount,
        size: "512x512",
        });
        console.log('RESPONSE', response)
        const data = response.data.data
        const imgURLs = []
        for (let i = 0; i < imgCount; i++) {
            console.log(data[i])
            imgURLs.push(data[i].url)
        }
        setResults(imgURLs)
    }
    console.log(prompt)
    console.log(imgCount)

    return (
      <Section id="projects" open={open}>
          <SectionTitle main>Generate Images with AI !</SectionTitle>
          <SectionDivider />
          <InputDiv>
                <TextArea
                className="app-input"
                placeholder="Type anything and DALL-E AI will create an image!"
                onChange={(e) => setImgCount(e.target.value)}
                rows="10"
                cols="40"
                />
            </InputDiv>
            <ModalTitleDiv>
                    <ModalTitle>How many images would you like to generate?</ModalTitle>
            </ModalTitleDiv>
            {/* <TextArea
                className="app-input"
                placeholder="How many images would you like to generate?"
                onChange={(e) => setPrompt(e.target.value)}
                rows="10"
                cols="40"
                /> */}
            <SelectDropdownDiv>
                <SelectDropdown onChange={(e) => setImgCount(parseInt(e.target.value))}>
                    <DropdownOption value={1}>1</DropdownOption>
                    <DropdownOption value={2}>2</DropdownOption>
                    <DropdownOption value={3}>3</DropdownOption>
                    <DropdownOption value={4}>4</DropdownOption>
                    <DropdownOption value={5}>5</DropdownOption>
                    <DropdownOption value={6}>6</DropdownOption>
                    <DropdownOption value={7}>7</DropdownOption>
                    <DropdownOption value={8}>8</DropdownOption>
                    <DropdownOption value={9}>9</DropdownOption>
                    <DropdownOption value={10}>10</DropdownOption>
                </SelectDropdown>
            </SelectDropdownDiv>
            <GenerateButtonDiv>
                <GenerateButton onClick={generateImage}>Generate AI Images</GenerateButton>
            </GenerateButtonDiv>
            <GridContainer>
                {results.length > 0 ? (
                    results.map((result, i) => {
                        console.log(result)
                        return (
                            <ProjectCard key={i} results={results} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                <Img src={result} alt="result" />
                            </ProjectCard>
                        )
                    })
                    ) : (
                    null
                )}
            </GridContainer>
            {/* <Modal
                isOpen={modalIsOpen}
                onAfterOpen={''}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <a className="close" onClick={() => setModalIsOpen(false)}></a>
                <ModalTitleDiv>
                    <ModalTitle>How many images would you like to generate?</ModalTitle>
                </ModalTitleDiv>
                <SelectDropdownDiv>
                    <SelectDropdown onChange={(e) => setImgCount(e.target.value)}>
                        <DropdownOption value={1}>1</DropdownOption>
                        <DropdownOption value={2}>2</DropdownOption>
                        <DropdownOption value={3}>3</DropdownOption>
                        <DropdownOption value={4}>4</DropdownOption>
                        <DropdownOption value={5}>5</DropdownOption>
                        <DropdownOption value={6}>6</DropdownOption>
                        <DropdownOption value={7}>7</DropdownOption>
                        <DropdownOption value={8}>8</DropdownOption>
                        <DropdownOption value={9}>9</DropdownOption>
                        <DropdownOption value={10}>10</DropdownOption>
                    </SelectDropdown>
                </SelectDropdownDiv>
                <GenerateButtonDiv>
                    <GenerateButton onClick={async () => await generateImage()}>Generate</GenerateButton>
                </GenerateButtonDiv>
            </Modal> */}
      </Section>
    )
}


export default ImgGen;