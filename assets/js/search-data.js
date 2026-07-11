// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-one-paper-accepted-to-neurips-2022-as-spotlight",
          title: 'One paper accepted to NeurIPS 2022 as Spotlight.',
          description: "",
          section: "News",},{id: "news-nemf-was-involved-in-project-motion-mix-on-adobe-max-sneaks-2022",
          title: 'NeMF was involved in Project Motion Mix on Adobe Max Sneaks 2022.',
          description: "",
          section: "News",},{id: "news-digital-salon-was-presented-at-siggraph-asia-2024-real-time-live-in-tokyo",
          title: 'Digital Salon was presented at SIGGRAPH Asia 2024 Real-Time Live! in Tokyo.',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-to-iclr-2025-as-spotlight",
          title: 'One paper accepted to ICLR 2025 as Spotlight.',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-to-siggraph-2025-as-a-journal-paper",
          title: 'One paper accepted to SIGGRAPH 2025 as a Journal Paper.',
          description: "",
          section: "News",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/c-he", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chengan-he", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/_c_he_", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=L-8aMasAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
