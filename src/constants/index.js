const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Hugging Face Binary Text Classification Model - Food/Not Food',
    desc: 'In this project, I used Google Colab and the hugging face libraries to help me obtain the dataset and create the model through the process of transfer learning from the distilbert-base-uncased model. Also utilized pytorch for predicting on test samples and gradio was used to build the application.',
    subdesc:
      'Built as my first end-to-end Machine Learning project.',
    href: 'https://github.com/ArhumsCode/Foodify-ML-Model',
    texture: '/textures/project/projectFood.mp4',
    logo: '/assets/foodLogo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'HuggingFace',
        path: 'assets/huggingface.svg',
      },
      {
        id: 3,
        name: 'PyTorch',
        path: '/assets/pytorch.svg',
      },
      {
        id: 4,
        name: 'Gradio',
        path: '/assets/gradio.svg',
      },
    ],
  },
  {
    title: 'Ayahly - Find your Favourite Ayahs and Enhance your Islamic Journey',
    desc: 'Ayahly is a powerful fullstack Islamic based application that allows for you to find ayahs from Quran based on keywords and gives you a list of your top five reccomendations based on keywords in your searches. Also keeps track of your most recently liked Ayahs using Appwrite database.',
    subdesc:
      'With Ayahly, users can receive reccomendations tailored to their liking and keep their favourite ayahs saved on the platform.',
    href: 'https://github.com/ArhumsCode/Ayahly',
    texture: '/textures/project/ayahly.mp4',
    logo: '/assets/books.png',
    logoStyle: {
      backgroundColor: 'rgb(95, 157, 228)',
      border: '0.2px solid rgb(95, 157, 228)',
      boxShadow: '0px 0px 60px 0px rgba(4, 255, 46, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Maze Search App - Breadth First Search and Depth First Search',
    desc: 'Created a DFS and BFS maze searching algorithm to illustrate how these computer science concepts are used in a practical scenario primarily using ReactJS and TailwindCSS',
    subdesc:
      '',
    href: 'https://github.com/ArhumsCode/dfs-bfs-maze-search',
    texture: '/textures/project/mazeSearch.mp4',
    logo: '/assets/maze.png',
    logoStyle: {
      backgroundColor: '#FFFF',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },

    ],
  },

];



export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale:  isMobile ? 4.5 : 7,
      deskPosition: isMobile ? [0.5, -9.9, 6.9] : isTablet ? [-0.1, -13.7, 2.9] : [-0.7, -7, 4.1],
      cubePosition: isSmall ? [10.3, -3.2, -7.9] : isMobile ? [7, 1.9, 8.7] : isTablet ? [7, 5.5, 8.7] : [11.8, 2.5, 2.5],
      reactLogoPosition: isSmall ? [16.6, 10.9, -5.5] : isMobile ? [17.2, 13.3, -5.5] : isTablet ?  [17.2, 13.3, -5.5]  : [9.1, 10.3, 2.5],
      ringPosition: isSmall ? [1, 5.2, 10.3] : isMobile ? [5.2, 6.1, 0.7] : isTablet ? [4, 6.1, 0.7] : [19.9, 2.5, 2.5],
  } }
export default navLinks;
