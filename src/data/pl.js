const ALL_TECHNOLOGIES = {
  django: {
    name: 'Django',
    description: null,
    thumbnailUrl: '/icons/django.svg',
    experience: 3
  },

  vue: {
    name: 'Vue.js',
    description: null,
    thumbnailUrl: '/icons/vue.svg',
    experience: 3
  },

  ang: {
    name: 'J. Ang.',
    // description: 'Vel fringilla velit imperdiet vel. Sed luctus pretium sem, at blandit dolor vulputate pulvinar. ',
    thumbnailUrl: '/icons/eng.svg',
    experience: 2
  },

  sass: {
    name: 'Sass',
    description: null,
    thumbnailUrl: '/icons/sass.svg',
    experience: 2
  },

  git: {
    name: 'Git',
    description: null,
    thumbnailUrl: '/icons/git.svg',
    experience: 1
  },
  react: {
    name: 'React',
    description: null,
    thumbnailUrl: '/icons/react.svg',
    experience: 1
  },
  html5: {
    name: 'HTML5',
    description: null,
    thumbnailUrl: '/icons/html5.svg',
    experience: 3
  },
  webpack: {
    name: 'Webpack',
    description: null,
    thumbnailUrl: '/icons/webpack.svg',
    experience: 1
  },
  jquery: {
    name: 'jQuery',
    description: null,
    thumbnailUrl: '/icons/jquery.svg',
    experience: 2
  },

  bootstrap: {
    name: 'Bootstrap',
    description: null,
    thumbnailUrl: '/icons/bootstrap.svg',
    experience: 2
  },
  docker: {
    name: 'Docker',
    description: null,
    thumbnailUrl: '/icons/docker.svg',
    experience: 1
  },
  vuetify: {
    name: 'Vuetify',
    description: null,
    thumbnailUrl: '/icons/vuetify.svg',
    experience: 1
  },
    rwd: {
    name: 'Responsive',
        description: null,
    thumbnailUrl: '/icons/rwd.svg',
    experience: 1
    }

};

const TECHNOLOGIES = [
  ALL_TECHNOLOGIES.django,
  ALL_TECHNOLOGIES.vue,
  ALL_TECHNOLOGIES.sass,
  ALL_TECHNOLOGIES.jquery,
  ALL_TECHNOLOGIES.bootstrap,
  ALL_TECHNOLOGIES.react,
  ALL_TECHNOLOGIES.docker,
  ALL_TECHNOLOGIES.git,

];

const PROJECTS = [
  {
    title: 'Strona czasopisma',
    color: '#005a7b',
    bgColor: '#5c96ab',
    textColor: '#fff',
    description: `Zbiór aktualnych i archiwalnych numerów czasopisma 
Studia Pigoniana z możliwością wyszukiwania.
    `,
    thumbnailUrl: '/images/screens/studia/studia-iphone.png',
    sourceUrl: 'https://gitlab.com/chrumczak/studia-pigoniana',
    demoUrl: 'http://193.33.111.200:8030',
    images: [
      'screens/studia/studia-iphone.png',
      'screens/studia/studia-ipad.png',
      'screens/studia/studia-ipad-3.png',
    ],
    technologiesStack: [
      { name: ALL_TECHNOLOGIES.vue.name,
        iconUrl: ALL_TECHNOLOGIES.vue.thumbnailUrl,
        description: null
      },
      { name: ALL_TECHNOLOGIES.django.name,
        iconUrl: ALL_TECHNOLOGIES.django.thumbnailUrl,
        description: null
      },
      { name: ALL_TECHNOLOGIES.docker.name,
        iconUrl: ALL_TECHNOLOGIES.docker.thumbnailUrl,
        description: null
      },
        { name: ALL_TECHNOLOGIES.rwd.name,
        iconUrl: ALL_TECHNOLOGIES.rwd.thumbnailUrl,
        description: null
      },
    ],
    stackDescription: `
Panel administratora (integracja z TinyMCE, wyszukiwanie, filtrowanie) i backend powstał 
z użyciem Django (django-rest-framework).

Frontend z użyciem Vue.js (i Vuetify). 
Wszystko zamknięte zostało w kontenerze Dockera.
    `,
  },
  {
    title: 'Historyczne fotografie',
    description: `Cyfrowe archiwum prezentujące posegregowane zdjecia -
     z możliwością zaawansowanego wyszukiwania.
`,
      color: '#938869',
      bgColor: '#cabf94',
      textColor: '#f6fff7',
    thumbnailUrl: '/images/screens/zagorz/zagorz-macpro.png',
    images: [
      'screens/zagorz/zagorz-macpro.png',
      'screens/zagorz/zagorz-ipad.png',
      'screens/zagorz/zagorz-ipad-2.png',
      'screens/zagorz/zagorz-ipad-3.png',
    ],
    sourceUrl: null,
    demoUrl: 'http://193.33.111.200:8015/',
    technologiesStack: [
      {
        name: ALL_TECHNOLOGIES.django.name,
        iconUrl: ALL_TECHNOLOGIES.django.thumbnailUrl
      },
      {
        name: ALL_TECHNOLOGIES.jquery.name,
        iconUrl: ALL_TECHNOLOGIES.jquery.thumbnailUrl,
      },
      {
        name: ALL_TECHNOLOGIES.bootstrap.name,
        iconUrl: ALL_TECHNOLOGIES.bootstrap.thumbnailUrl
      },
      {
        name: ALL_TECHNOLOGIES.docker.name,
        iconUrl: ALL_TECHNOLOGIES.docker.thumbnailUrl,
      },
       { name: ALL_TECHNOLOGIES.rwd.name,
        iconUrl: ALL_TECHNOLOGIES.rwd.thumbnailUrl,
        description: null
      },
    ],
    stackDescription: `Strona została stworzona z pomocą frameworka Django. 
Seryjne dodawanie i edycja zdjęć możliwa jest poprzez komendę lub w wzbogaconym o nowe funkcje
intuicyjnym panelu. Automatycznie tworzone są także miniaturki.
Wyszukwarka oparta jest na paczce Haystack.
`,
  },

  {
    title: 'Portfolio',
    description: `
Strona portfolio to mój pierwszy projekt w frameworku React.
`,
    thumbnailUrl: null,
    images: [],
    sourceUrl: 'https://gitlab.com/chrumczak/portfolio_site',
    demoUrl: null,
    technologiesStack: [
      {
        name: ALL_TECHNOLOGIES.react.name,
        iconUrl: ALL_TECHNOLOGIES.react.thumbnailUrl
      },
      {
        name: ALL_TECHNOLOGIES.docker.name,
        iconUrl: ALL_TECHNOLOGIES.docker.thumbnailUrl,
      },
    ],
    stackDescription: null,
  }
];

const INFORMATIONS = {
  imageSrc: '/images/mojatwarz.jpg',
  text: `<h1 class="title has-text-dark">
         Mam na imię Eliasz i zajmuje się 
         <span class="has-text-primary">tworzeniem stron internetowych</span> od podstaw<span class="has-text-accent">.</span>
         </h1>
        <p class='subtitle has-text-centered'>
                Cenię sobie estetykę i jakość tworzonych stron, a także możliwość ciągłego podnoszenia
                swoich umiejetności.
            </p>


`,
};

const CONTACT = {
  name: 'Eliasz Śliż',
  email: 'eliaszsliz@hotmail.com'
};

export default { PROJECTS, TECHNOLOGIES, INFORMATIONS, CONTACT };
