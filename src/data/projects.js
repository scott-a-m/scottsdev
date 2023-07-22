const commercialApplications = [
  {
    name: "Point Of Sale System",
    url: "/assets/img/commercial-applications/POS-system.jpg",
    longDescription: [
      "I worked on both the backend (server-side code) and frontend (user interface (UI)) of a point of sale system for a company which caters for food and beverage suppliers in South Africa.",
      "The backend involved development in C# Dotnet Enity Framework for the server-side code and SQL database. The UI was built using React JS.",
    ],
    development: "C#, Dotnet, Entity Framework, React JS, HTML, CSS",
  },
  {
    name: "Trailer Rental Inspections",
    url: "/assets/img/commercial-applications/trailer-hire.jpg",
    longDescription: [
      "I was responsible for development - both backend (server-side code) and frontend (user interface (UI)) - of two systems for a US-based trailer hire company.",
      "One system, the admin system, is a web application which is used to manage the inbound (prior to being leased) and outbound inspections (after the leasee returns the trailer) of the company's trailers.",
      "The backend for both the web application and the mobile app used Mongbo DB for the database together with Node and Express JS for the server-side code. The UI for the web application was built in React JS, and the mobile app was developed using React Native.",
    ],
    development:
      "MERN stack (MongoDB, Express JS, React JS and Node JS), React Native, HTML, CSS",
  },
  {
    name: "Vehicle Data Services",
    url: "/assets/img/commercial-applications/data-services.jpg",
    longDescription: [
      "I was responsible for developing a new user interface (UI) for a company which offers a range of data services for vehicles in South Africa. The UI was developed with the Ionic Framework and React Typescript.",
    ],
    development: "Ionic Framework, React TS, HTML, CSS",
  },
  {
    name: "Mind Meanings Therapy",
    url: "/assets/img/commercial-applications/mind-meanings.png",
    longDescription: [
      "I was responsible for developing a website for Mind Meanings Therapy.",
      "The client asked for a simple, clean, and calming user interface (UI).",
      "Next JS, a Framework which uses React and offers SEO optimisation amongst other benefits, was used to build the UI. A content management system, Contentful, was used to separate the website content from the UI code.",
      "Via this approach, the client is able to update the content of the website through Contentful and the UI updates itself automatically as the content is updated, giving the client full control over the content whilst allowing me to focus on the UI and provide a custom solution.",
    ],
    development: "Next JS, Contentful, HTML, CSS",
    siteUrl: "https://www.mindmeanings.com/",
  },
];

const projects = [
  {
    name: "Scott Shop",
    url: "/assets/img/scott-shop.png",
    description: "Fashion Store",
    longDescription: [
      "Scott Shop is a online fashion store. You can browse the cool clothes, 'buy' them with the test credit card (it's a personal project - not a real shop) provided via stripe payment, view your orders and leave reviews.",
    ],
    development:
      "MERN stack (MongoDB, Express JS, React JS and Node JS), HTML, Tailwind CSS.",
    siteUrl: "https://scottshop.scottsdev.net/",
  },
  {
    name: "Pomo-it",
    url: "/assets/img/pomo-it.png",
    description: "Time-management App",
    longDescription: [
      "Pomo-it is a time management app featuring a timer and task manager to help you practice the Pomodoro® Technique, an effective time-management technique developed by Francesco Cirillo",
      "The main idea is that you work in 25-minute intervals known as pomodoros (Italian for tomato), not letting anything distract you (if you think of something, jot it down and address it later) and having short breaks between them.",
      "This ultimately helps you to be more productive with your limited time and work more effectively - to pomo-it!",
    ],
    development:
      "MERN stack (MongoDB, Express JS, React JS and Node JS), HTML, CSS",
    siteUrl: "https://pomo-it.scottsdev.net/",
  },
  {
    name: "Slayers",
    url: "/assets/img/slayers.png",
    description: "NFT Game dApp",
    longDescription: [
      "Slayers is a free turn-based NFT mini-game where the goal is to defeat the evil Desolator who is threatening the metaverse.",
      "There are seven characters to choose from, mint and bring to battle.",
      "The desolator has a mega HP of 20000. It is impossible to defeat him alone. Thus the more players who participate the higher the chance of defeating him.",
      "Slayers lives on Ethereum's Rinkeby Test Network. This means that all transactions are processed using Test Eth which won't cost you a thing.",
      "Each character is an NFT, which means once you mint one - it's in your wallet and yours for life! Only one character can be minted per wallet address.",
    ],

    development: "React JS, Solidity, HTML, CSS",
    siteUrl: "https://slayers.scottsdev.net/",
  },
  {
    name: "Forever Wave",
    url: "/assets/img/foreverwave.png",
    description: "Blockchain Message Board",
    longDescription: [
      "The Forever Wave dApp is a 'permanent' message board living on the blockchain. You'll be able to wave, send a message and there's also a chance you'll win some Rinkeby test Eth😀.",
      "Finally, be careful what you write as your message will be recorded forever on the chain! Muhaha!",
    ],
    development: "React JS, Solidity, HTML, CSS.",
    siteUrl: "https://foreverwave.scottsdev.net/",
  },
  {
    name: "Cool Calc",
    url: "/assets/img/coolcalc.png",
    description: "Futuristic Calculator",
    longDescription: [
      "A calculator from the future - let's solve your equations!",
    ],
    development: "React JS, HTML, CSS",

    siteUrl: "https://coolcalc.scottsdev.net/",
  },
  {
    name: "Drum Time",
    url: "/assets/img/drumtime.png",
    description: "Drums App",
    longDescription: ["A fun drums app - let's make some noise!"],
    development: "React JS, HTML, CSS",
    siteUrl: "https://drumtime.scottsdev.net/",
  },
];

export { projects, commercialApplications };
