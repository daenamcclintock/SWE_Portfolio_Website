export const projects = [
  {
    title: 'Web3 Social',
    description: "Fullstack social media application built for the web3 ecosystem to collaborate. Users sign in with a web3 wallet of choice, have the option to use NFTs as their profile picture, and can edit other spects of their profile. Users can post written content as well as photos, which are stored in a Moralis database. Smart contract developed with Solidity, tested with Chai, and deployed using Hardhat JS scripts. Frontend built with React.",
    image: '/images/Web3Social.png',
    tags: ['Solidity', 'Hardhat', 'React', 'Web3UIKit'],
    // source: '',
    backendCode: 'https://github.com/daenamcclintock/web3_social_media/tree/main/Smart_Contract',
    frontendCode: 'https://github.com/daenamcclintock/web3_social_media/tree/main/web3_social',
    id: 0,
  },
  {
    title: 'NFT Marketplace',
    description: "Fullstack NFT Markeplace where users can list and sell NFTs from their wallet and browse and purchase NFTs listed by other users. Application features full CRUD functionality as well as the ability for users to withdraw funds from NFT sales to their connected Web3 wallet. Smart contracts deployed to the Ethereum Rinkeby Testnet and database hosted on Moralis. Wrote passing Chai test to ensure all Smart Contract code works correctly.",
    image: '/images/NFT_Marketplace.png',
    tags: ['Solidity', 'Next.js', 'React', 'Moralis'],
    source: 'https://fullstack-nft-marketplace.netlify.app/',
    backendCode: 'https://github.com/daenamcclintock/nft-marketplace-backend-contracts',
    frontendCode: 'https://github.com/daenamcclintock/nft-marketplace-frontend-moralis',
    id: 1,
  },
  // {
  //   title: 'Transfer ETH & NFTs',
  //   description: "Web3 application used to transfer Ethereum or NFTs to any wallet address. App features two Solidity smart contracts that post information directly to the blockchain. Wrote Chai tests to ensure the accuracy of the smart contract code and functionality. Incorporated logic to query all recent transactions of the connected wallet and render them in a componenet of the application.",
  //   image: '/images/EtherTransfer.png',
  //   tags: ['Solidity', 'Javascript', 'Web3.js', 'Vite'],
  //   // source: 'https://ether-nft-transfer.netlify.app/',
  //   backendCode: 'https://github.com/daenamcclintock/Web3_Ethereum_NFT_Transfer_App/tree/main/smart_contract',
  //   frontendCode: 'https://github.com/daenamcclintock/Web3_Ethereum_NFT_Transfer_App/tree/main/client',
  //   id: 2,
  // },
  {
    title: 'DeFi: Aave Borrowing & Lending',
    description: "Wrote scripts to programatically deposit ETH / WETH as collateral, borrow the DAI stablecoin, repay the DAI loan, and lend out ETH using the Aave protocol. Utilized Aave smart contracts to call functions to get and store WETH, lend out the WETH to earn interest, and pledge the WETH as collateral to borrow additional digital assets.",
    image: '/images/Aave.png',
    tags: ['Solidity', 'Javascript', 'Hardhat', 'Chai'],
    // source: 'www.google.com',
    backendCode: 'https://github.com/daenamcclintock/hardhat-DeFi',
    id: 3,
  },
  {
    title: 'DEX: Decentralized Exchange',
    description: "Decentralized exchange built with the Moralis 1inch Plugin. Application features the ability to connect a Metamask wallet, choose a coin from your Web3 wallet, and swap a specified amount for a different coin or cryptocurrency. The Moralis plugin tracks real-time prices to allow for this transfer to be made without potential arbitrage opportunities.",
    image: '/images/DEX.png',
    tags: ['HTML', 'CSS', 'Bootstrap', 'Moralis'],
    source: 'https://moralis-dex.netlify.app/',
    frontendCode: 'https://github.com/daenamcclintock/Moralis_DEX',
    id: 4,
  },
  {
    title: 'NFT Social',
    description: "Social media application designed for NFT owners to showcase their digital artwork. Application features secure user authentication and full CRUD functionality. Utilized the Moralis third party API to integrate search functionality and extract real-time data from the OpenSea NFT marketplace.",
    image: '/images/NFT_Social.png',
    tags: ['Liquid', 'Express.js', 'MongoDB', 'Node.js'],
    // source: 'https://nftsocialmedia.herokuapp.com/',
    backendCode: 'https://github.com/daenamcclintock/NFT_Social',
    frontendCode: 'https://github.com/daenamcclintock/NFT_Social',
    id: 5,
  },
  {
    title: 'LuxEstate',
    description: "Luxury real estate application designed for realtors to list properties and users to browse and inquire about properties. LuxEstate features two different user types, full CRUD functionality, and complex logic for searching and filtering properties by location as well as a multitude of metrics. Utilized the MapBox API for visual mapping.",
    image: '/images/LuxEstate.png',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    // source: '',
    backendCode: 'https://github.com/daenamcclintock/Project-4-API',
    frontendCode: 'https://github.com/daenamcclintock/Project-4-Client',
    id: 6,
  },
  // {
  //   title: 'GytShop',
  //   description:"Full-stack e-commerce store featuring user authentication, full CRUD functionality, and the ability for users to add products to their cart and checkout. Built a proprietary API to seed data and utilized the third party Stripe API for payment processing. Developed in a team of four in three business days using Agile development methodology.",
  //   image: '/images/Gytshop.png',
  //   tags: ['Mongo', 'Express.js', 'React', 'Node'],
  //   source: 'https://gogytshop.herokuapp.com/',
  //   backendCode: 'https://github.com/daenamcclintock/Gytshop-API',
  //   frontendCode: 'https://github.com/daenamcclintock/GytShop-Client',
  //   id: 5,
  // },
  // {
  //   title: 'Bringing Down The House!',
  //   description: "Interactive front-end blackjack game. Operates with logic mirroring casino-style blackjack and an AI simulating the dealer. Includes functionality to keep the card count and teach the user how to count cards. Individually developed over three business days.",
  //   image: '/images/Bringing_Down_The_House.png',
  //   tags: ['Javascript', 'HTML', 'CSS', 'Bootstrap'],
  //   source: 'https://google.com',
  //   frontendCode: 'https://github.com/daenamcclintock/bringing-down-the-house',
  //   id: 6,
  // },
  {
    title: 'Portfolio Website',
    description: "Frontend portfolio website to showcase my projects and skills. Built with Next.js to increase search engine optimization and allow for React integration. Incorporated the ThreeJS library to give the site more of a Web 3.0 feel.",
    image: '/images/Portfolio_Website.png',
    tags: ['Javascript', 'Next.js', 'React', 'Three.js'],
    source: 'https://daenamcclintock-portfolio.netlify.app/',
    frontendCode: 'https://github.com/daenamcclintock/Portfolio_Website',
    id: 7,
  },
];

export const TimeLineData = [
  { year: 'Summer 2019', text: "Interned with BNY Mellon's Buyside Equity Research Division", },
  { year: 'Spring 2020', text: "Graduated from UMass Amherst Cum Laude with Degrees in Finance and Economics", },
  { year: '2020/ 2021', text: "Worked for BNY Mellon Wealth Management in a Client-Facing Portfolio Analyst Role", },
  { year: 'Spring 2022', text: "Completed General Assembly's Software Engineering Immersive Program" },
  { year: 'Summer 2022', text: "Working on Several Web3 Projects: NFT Art Generation, Minting, and Smart Contract dApps ", },
];