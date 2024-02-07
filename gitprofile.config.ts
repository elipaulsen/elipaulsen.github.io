// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'elipaulsen', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['elipaulsen/Banking-JavaFx', 'elipaulsen/TaskTrack', 'elipaulsen/Wordle', 'elipaulsen/Multithreaded-Rootfinder', 'elipaulsen/Barcodes', 'elipaulsen/KingsOnTheCorner', 'elipaulsen/Networked-LinkedList', 'elipaulsen/Comparator-Network', 'elipaulsen/Programmable-Chess-Clock', 'elipaulsen/Polymorphic-Scoreboard']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        
      ],
    },
  },
  seo: {
    title: 'Eli\'s Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'eli-paulsen',
    phone: '3193251321',
    email: 'eli.m.paulsen@gmail.com',
  },
  resume: {
    fileUrl:
      'public/EliPaulsenResume2024.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'C',
    'C++',
    'Javascript',
    'SQL',
    'Haskell',
    'Vue JS',
    'React',
    'Spring Boot',
    'HTML',
    'CSS',
    'Git',
    'Subversion',
    'Docker',
  ],
  courses: [
    'Data Structures',
    'Algorithms',
    'Software Design',
    'Embedded Systems',
    'Operating Systems',
    'High Performance Computer Architecture',
    'Software Security',
    'Networks',
    'Programming Language Concepts'
  ],
  experiences: [
    {
      company: 'Collins Aerospace',
      position: 'Software Engineering Co-op',
      from: 'May 2023',
      to: 'December 2023',
    },
    {
      company: 'University of Iowa AIS',
      position: 'Software Developer Intern',
      from: 'December 2022',
      to: 'Present',
    },
  ],
  educations: [
    {
      institution: 'University of Iowa',
      degree: 'Bachelors of Science in Engineering, Computer Science and Engineering',
      from: '2020',
      to: 'December 2024',
    },
  ],

  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      accent: '#FFFFFF',
      neutral: '#FFFFFF',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
