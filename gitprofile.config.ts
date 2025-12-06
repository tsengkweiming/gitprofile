// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'tsengkweiming', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    external: {
      header: '案件 Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '珍珠のVJ制作',
          description:
            '個人製作\ Jun 2025, Tokyo, Japan',
          imageUrl:
            'https://tsengkweiming.github.io/portfolio-pages/project-pearl-vj/photos/img3.png',
          link: 'https://tsengkweiming.github.io/portfolio-pages/project-pearl-vj/',
        },
        {
          title: 'Flowers and People, Cannot be Controlled but Live Together',
          description:
            'Oct 2025, Kyoto, Japan',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/d53fa366-71ef-4b3c-d72a-ec3025c24600/width=3840,quality=80',
          link: 'https://www.teamlab.art/ew/flowersandpeople-kyoto/kyoto/',
        },
        {
          title: 'Megaliths in the Roots Garden',
          description:
            'Dec 2024, Abu Dhabi, UAE',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/cefLMoExSvd8Mocz5H3imF/width=3840,quality=80',
          link: 'https://www.teamlab.art/ew/megaliths-phenomena/phenomena/',
        },
        {
          title: 'Soft Terrain in Granular Topography',
          description:
            'May 2024, Jeddah, Saudi Arabia',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/FQqwRLb8U8EuWnBs6P6RWM/width=1920,quality=80',
          link: 'https://www.teamlab.art/ew/softterrain-jeddah/jeddah/',
        },
        {
          title: 'Life is an Ephemeral Light that Blooms in the Dark',
          description:
            'May 2024, Jeddah, Saudi Arabia',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/fCk4ndN2jMwkTWYuMcVET4/width=3840,quality=80',
          link: 'https://www.teamlab.art/w/life-ephemerallight-jeddah/jeddah/',
        },
        {
          title: 'Life is an Ephemeral Light that Blooms in the Dark',
          description:
            'Feb 2024, Tokyo, Japan',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/KFKrRpZk6UdmMhB5pPsZTV/width=3840,quality=80',
          link: 'https://www.teamlab.art/w/life-ephemerallight-jeddah/jeddah/',
        },
        {
          title: 'Rinkan sauna',
          description:
            'Mar 2021, Roppongi, Tokyo, Japan',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/ri8LBVvcb8rAFWy2Drf96/width=3840,quality=80',
          link: 'https://www.teamlab.art/w/stepinto_lightcircles/',
        },
        {
          title: 'Flower Bombing home',
          description:
            'Aug 2020',
          imageUrl:
            'https://flowers-bombing-home.teamlab.art/static/media/your-flower-art-PC.e2ffdf79.jpg',
          link: 'https://flowers-bombing-home.teamlab.art/',
        },
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
  seo: { title: 'Portfolio of Tseng KweiMing', description: '', imageURL: '' },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HLSL',
    'C#',
    'GLSL',
    'Rhino',
    'Grasshopper',
    'Node.js',
    'MySQL',
    'PHP',
    'Git',
    'CSS',
  ],
  experiences: [
    {
      company: 'teamLab',
      position: 'graphics engineer',
      from: 'Jan 2020',
      to: 'Present',
      companyLink: 'https://www.teamlab.art',
    },
    {
      company: 'NAXS Corp',
      position: 'VR developer',
      from: 'July 2017',
      to: 'August 2019',
      companyLink: 'https://www.naxs.tech',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'National Chiao Tung University',
      degree: 'Master of Science in Architecture',
      from: '2016',
      to: '2018',
    },
    {
      institution: 'National Chiao Tung University',
      degree: 'Bachelor of Transporation Technology',
      from: '2012',
      to: '2016',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

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
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
