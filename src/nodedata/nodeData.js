import React from 'react';

export default [
    {
        id: '1',
        type: 'input',
        data: { label : ( <> <p>Web Development</p> </> ) },
        position: {x:1700, y:-435},
        className: 'tierTwo'
      },
      {
        id: '2',
        data: { label : ( <> <p>Preparation</p> </> ) },
        position: {x:1700, y:-235},
        className: 'tierTwo'
      },
      {
        id: '3',
        data: { label : ( <> <p>Fundamental Languages</p> </> ) },
        position: {x:1900, y:-50},
        className: 'tierTwo'
      },
      {
        id: '4',
        data: { label : ( <> <p>specialization</p> </> ) },
        position: {x:1465, y:740},
        className: 'tierTwo'
      },
      {
        id: '5',
        data: { label : ( <> <p>Front-End</p> </> ) },
        position: {x:285, y:1400},
        className: 'tierTwo'
      },
      {
        id: '6',
        data: { label : ( <> <p>Back-End</p> </> ) },
        position: {x:1980, y:1015},
        className: 'tierTwo'
      },
      {
        id: '7',
        data: { label : ( <> <p>Auxiliary Expansion</p> </> ) },
        position: {x:5335, y:1460},
        className: 'tierTwo'
      },
      {
        id: '8',
        data: { label : ( <> <p>Fundamental Knowledge</p> </> ) },
        position: {x:1565, y:-50},
        className: 'tierTwo'
      },
      {
        id: '9',
        data: { label : ( <> <p>Hosting / Domain / DNS / HTTP</p> </> ) },
        parent: 8,
        position: {x:1475, y:205},
        className: 'tierTwo'
      },
      {
        id: '10',
        data: { label : ( <> <p>Dev Environment</p> </> ) },
        position: {x:1200, y:-50},
        className: 'tierTwo'
      },
      {
        id: '11',
        data: { label : ( <> 
        <p>OS - Mac, Window</p> 
        <p> Text Editor - VS Code, Monaco Editor, Webstorm, Vim</p> 
        <p> Browser - Chrome, Firefox</p> 
        <p> Terminal - Git Bash, Zsh, Cmder</p> 
        <p> Design - Adobe XD, Figma</p> </> ) },
        parent: 10,
        position: {x:755, y:205},
        className: 'tierTwo longNode'
      },
      {
        id: '12',
        data: { label : ( <> <p>HTML</p> </> ) },
        position: {x:2400, y:205},
        className: 'tierTwo'
      },
      {
        id: '13',
        data: { label : ( <> <p>CSS</p> </> ) },
        position: {x:2800, y:205},
        className: 'tierTwo'
      },
      {
        id: '14',
        data: { label : ( <> <p>JavaScript</p> </> ) },
        position: {x:2000, y:205},
        className: 'tierTwo'
      },
      {
        id: '15',
        data: { label : ( <> <p>Semantics</p> <p> Page Structure</p> <p> Grammar</p> </> ) },
        parent: 12,
        position: {x:2400, y:385},
        className: 'tierTwo'
      },
      {
        id: '16',
        data: { label : ( <> <p>Basic styling</p> <p> positions</p> <p> Flexbox</p> </> ) },
        parent: 13,
        position: {x:2800, y:385},
        className: 'tierTwo'
      },
      {
        id: '17',
        data: { label : ( <> <p>Variables</p> <p> data type</p> <p> object</p> <p> array</p> <p> Function</p> <p> Loops</p> <p> DOM</p> </> ) },
        parent: 14,
        position: {x:2000, y:385},
        className: 'tierTwo'
      },
      {
        id: '18',
        data: { label : ( <> <p>HTML</p> </> ) },
        position: {x:650, y:1575},
        className: 'tierTwo'
      },
      {
        id: '19',
        data: { label : ( <> <p>JavaScript</p> </> ) },
        position: {x:-210, y:1635},
        className: 'tierTwo'
      },
      {
        id: '20',
        data: { label : ( <> <p>CSS</p> </> ) },
        position: {x:315, y:1740},
        className: 'tierTwo'
      },
      {
        id: '21',
        data: { label : ( <> <p>Web Standards</p>
        <p>Accessibility</p>
        <p>Cross-Browser Compatibility</p>
        </> ) },
        parent: 18,
        position: {x:830, y:1750},
        className: 'tierTwo midNode'
      },
      {
        id: '22',
        data: { label : ( <> <p>TypeScript</p>
        </> ) },
        parent: 19,
        position: {x:0, y:1820},
        className: 'tierTwo'
      },
      {
        id: '23',
        data: { label : ( <> <p>DOM</p>
        <p>Array Method</p>
        <p>JSON</p>
        <p>HTTP</p>
        <p>Fetch API</p>
        <p>Scope</p>
        <p>Closure</p>
        <p>Event Loop</p>
        <p>Etc.</p>
        </> ) },
        parent: 19,
        position: {x:-800, y:1820},
        className: 'tierTwo midNode'
      },
      {
        id: '24',
        data: { label : ( <> <p>Front-End Frameworks</p>
        </> ) },
        parent: 19,
        position: {x:-225, y:2300},
        className: 'tierTwo'
      },
      {
        id: '25',
        data: { label : ( <> <p>Svelte</p>
        </> ) },
        parent: 24,
        position: {x:180, y:2580},
        className: 'tierTwo'
      },
      {
        id: '26',
        data: { label : ( <> <p>React</p>
        </> ) },
        parent: 24,
        position: {x:-984, y:2710},
        className: 'tierTwo'
      },
      {
        id: '27',
        data: { label : ( <> <p>Vue</p>
        </> ) },
        parent: 24,
        position: {x:-460, y:2710},
        className: 'tierTwo'
      },
      {
        id: '28',
        data: { label : ( <> <p>Angular</p>
        </> ) },
        parent: 24,
        position: {x:66, y:2710},
        className: 'tierTwo'
      },
      {
        id: '29',
        data: { label : ( <> <p>Tools</p>
        </> ) },
        parent: 24,
        position: {x:-1500, y:2710},
        className: 'tierTwo'
      },
      {
        id: '30',
        data: { label : ( <>
         <p>Git - git-scm</p>
         <p>Repository - github, bizbucket</p>
         <p>Package Manager - NPM, Yarn</p>
         <p>Module Bundler - Webpack, Parcel</p>
         <p>State management - Redux, Vuex, NgRx</p>
         <p>Extensions - lint, live-server, snippets</p>
        </> ) },
        parent: 29,
        position: {x:-2040, y:3000},
        className: 'tierTwo longNode'
      },
      {
        id: '31',
        data: { label : ( <> <p>Context API</p>
        </> ) },
        parent: 26,
        position: {x:-803, y:3000},
        className: 'tierTwo'
      },
      {
        id: '32',
        data: { label : ( <> <p>Redux</p>
        </> ) },
        parent: 26,
        position: {x:-1180, y:3000},
        className: 'tierTwo'
      },
      {
        id: '33',
        data: { label : ( <> <p>Vuex</p>
        </> ) },
        parent: 27,
        position: {x:-460, y:3000},
        className: 'tierTwo'
      },
      {
        id: '34',
        data: { label : ( <> <p>Shared Service</p>
        </> ) },
        parent: 28,
        position: {x:-20, y:3000},
        className: 'tierTwo'
      },
      {
        id: '35',
        data: { label : ( <> <p>NgRx</p>
        </> ) },
        parent: 28,
        position: {x:320, y:3005},
        className: 'tierTwo'
      },
      {
        id: '36',
        type: 'input',
        data: { label : ( <> <p>Server Side Rendering</p>
        </> ) },
        parent: 'none',
        position: {x:-450, y:3200},
        className: 'tierTwo'
      },
      {
        id: '37',
        data: { label : ( <> <p>Next.js</p>
        </> ) },
        parent: 36,
        position: {x:0, y:3480},
        className: 'tierTwo'
      },
      {
        id: '38',
        data: { label : ( <> <p>Nuxt.js</p>
        </> ) },
        parent: 36,
        position: {x:-460, y:3480},
        className: 'tierTwo'
      },
      {
        id: '39',
        data: { label : ( <> <p>Angular Universal</p>
        </> ) },
        parent: 36,
        position: {x:-880, y:3480},
        className: 'tierTwo'
      },
      {
        id: '40',
        type: 'input',
        data: { label : ( <> <p>Static Site Generator</p>
        </> ) },
        parent: 'none',
        position: {x:360, y:3190},
        className: 'tierTwo'
      },
      {
        id: '41',
        data: { label : ( <> 
        <p>CMS</p>
        <p>JAMstack</p>
        <p>11ty</p>
        <p>Gridsome</p>
        <p>Gatsby</p>
        </> ) },
        parent: 40,
        position: {x:360, y:3425},
        className: 'tierTwo'
      },
      {
        id: '42',
        data: { label : ( <> 
        <p>Flexbox</p>
        <p>Grid</p>
        <p>transition</p>
        <p>responsive - Media Query</p>
        </> ) },
        parent: 20,
        position: {x:160, y:1995},
        className: 'tierTwo'
      },
      {
        id: '43',
        data: { label : ( <> 
        <p>SASS</p>
        <p>PostCSS</p>
        </> ) },
        parent: 20,
        position: {x:645, y:2055},
        className: 'tierTwo'
      },
      {
        id: '44',
        data: { label : ( <> 
        <p>Variables</p>
        <p>Nested</p>
        <p>Functions</p>
        <p>Mixin</p>
        </> ) },
        parent: 43,
        position: {x:910, y:2345},
        className: 'tierTwo'
      },
      {
        id: '45',
        data: { label : ( <> 
        <p>CSS Framework</p>
        </> ) },
        parent: 43,
        position: {x:520, y:2400},
        className: 'tierTwo'
      },
      {
        id: '46',
        data: { label : ( <> 
        <p>Bootstrap5</p>
        </> ) },
        parent: 45,
        position: {x:1080, y:2777},
        className: 'tierTwo'
      },
      {
        id: '47',
        data: { label : ( <> 
        <p>Materialize</p>
        </> ) },
        parent: 45,
        position: {x:752, y:2777},
        className: 'tierTwo'
      },
      {
        id: '48',
        data: { label : ( <> 
        <p>Tailwind</p>
        </> ) },
        parent: 45,
        position: {x:422, y:2777},
        className: 'tierTwo'
      },
      {
        id: '49',
        data: { label : ( <> 
        <p>Languages</p>
        </> ) },
        parent: 6,
        position: {x:2740, y:1220},
        className: 'tierTwo'
      },
      {
        id: '50',
        data: { label : ( <> 
        <p>Node.js - Express</p>
        <p>Deno - Oak, *</p>
        <p>Python - Django, Flask</p>
        <p>PHP - Laravel</p>
        <p>Java - Springboot</p>
        <p>C# - ASP.NET</p>
        <p>Ruby - Ruby on Rails</p>
        </> ) },
        parent: 49,
        position: {x:3610, y:1540},
        className: 'tierTwo longNode'
      },
      {
        id: '51',
        data: { label : ( <> 
        <p>Database</p>
        </> ) },
        parent: 49,
        position: {x:3105, y:1705},
        className: 'tierTwo'
      },
      {
        id: '52',
        data: { label : ( <> 
        <p>RESTful API</p>
        </> ) },
        parent: 51,
        position: {x:2577, y:2167},
        className: 'tierTwo'
      },
      {
        id: '53',
        data: { label : ( <> 
        <p>GraphQL</p>
        </> ) },
        parent: 52,
        position: {x:2413, y:2485},
        className: 'tierTwo'
      },
      {
        id: '54',
        data: { label : ( <> 
        <p>Apollo</p>
        </> ) },
        parent: 53,
        position: {x:2280, y:2720},
        className: 'tierTwo'
      },
      {
        id: '55',
        data: { label : ( <> 
        <p>Authentication</p>
        </> ) },
        parent: 51,
        position: {x:3730, y:2175},
        className: 'tierTwo'
      },
      {
        id: '56',
        data: { label : ( <> 
        <p>OAuth 2.0</p>
        <p>JWT</p>
        </> ) },
        parent: 55,
        position: {x:3730, y:2475},
        className: 'tierTwo'
      },
      {
        id: '57',
        data: { label : ( <> 
        <p>Server / Deployment</p>
        </> ) },
        parent: 51,
        position: {x:2820, y:2405},
        className: 'tierTwo'
      },
      {
        id: '58',
        data: { label : ( <> 
        <p>Hosting</p>
        <p>Web server - Nginx, Apache, IIS</p>
        <p>Container - Docker, Kubernetes</p>
        <p>Storage - Cloudinary, AWS S3</p>
        </> ) },
        parent: 57,
        position: {x:2660, y:2725},
        className: 'tierTwo longNode'
      },
      {
        id: '59',
        data: { label : ( <> 
        <p>PostgresSQL</p>
        <p>MongoDB</p>
        <p>MySQL</p>
        <p>MS SQL</p>
        <p>Firebase</p>
        <p>Elasticsearch</p>
        </> ) },
        parent: 51,
        position: {x:3285, y:2125},
        className: 'tierTwo'
      },
      {
        id: '60',
        data: { label : ( <> 
        <p>Object Relational Mapper</p>
        </> ) },
        parent: 59,
        position: {x:3335, y:2645},
        className: 'tierTwo'
      },
      {
        id: '61',
        data: { label : ( <> 
        <p>Mongoose</p>
        <p>Sequelize</p>
        <p>SQLAlchemy</p>
        <p>Doctrine</p>
        <p>Eloquent</p>
        <p>JPA</p>
        </> ) },
        parent: 60,
        position: {x:3335, y:2950},
        className: 'tierTwo'
      },
      {
        id: '62',
        data: { label : ( <> 
        <p>Dev Ops</p>
        </> ) },
        parent: 6,
        position: {x:1825, y:1235},
        className: 'tierTwo'
      },
      {
        id: '63',
        data: { label : ( <> 
        <p>Web Platforms</p>
        </> ) },
        parent: 62,
        position: {x:1425, y:1425},
        className: 'tierTwo'
      },
      {
        id: '64',
        data: { label : ( <> 
        <p>Digital Ocean</p>
        <p>Heroku</p>
        <p>AWS</p>
        <p>Azure</p>
        <p>OpenShift</p>
        </> ) },
        parent: 63,
        position: {x:1365, y:1765},
        className: 'tierTwo'
      },
      {
        id: '65',
        data: { label : ( <> 
        <p>Server Management</p>
        </> ) },
        parent: 62,
        position: {x:2290, y:1425},
        className: 'tierTwo'
      },
      {
        id: '66',
        data: { label : ( <> 
        <p>Salt</p>
        <p>Docker</p>
        <p>Chef</p>
        <p>Ansible</p>
        <p>Linux</p>
        </> ) },
        parent: 65,
        position: {x:2530, y:1685},
        className: 'tierTwo'
      },
      {
        id: '67',
        data: { label : ( <> 
        <p>Workflow</p>
        </> ) },
        parent: 62,
        position: {x:1860, y:1425},
        className: 'tierTwo'
      },
      {
        id: '68',
        data: { label : ( <> 
        <p>Continuous Integration - Github Hook, Travis CI, Jenkins</p>
        <p>Vagrant - local environment</p>
        <p>Capistrano - Ruby</p>
        <p>Flightplan - Python</p>
        <p>Fabric - Node</p>
        <p>Docker - CoreOS, Mesosphere, Panamax</p>
        </> ) },
        parent: 67,
        position: {x:1740, y:1750},
        className: 'tierTwo longNode'
      },
      {
        id: '69',
        data: { label : ( <> 
        <p>Desktop App</p>
        </> ) },
        parent: 7,
        position: {x:7805, y:1880},
        className: 'tierTwo'
      },
      {
        id: '70',
        data: { label : ( <> 
        <p>Electron</p>
        </> ) },
        parent: 69,
        position: {x:7425, y:2375},
        className: 'tierTwo'
      },
      {
        id: '71',
        data: { label : ( <> 
        <p>NW.js</p>
        </> ) },
        parent: 69,
        position: {x:7790, y:2375},
        className: 'tierTwo'
      },
      {
        id: '72',
        data: { label : ( <> 
        <p>Tkinter</p>
        </> ) },
        parent: 69,
        position: {x:8150, y:2375},
        className: 'tierTwo'
      },
      {
        id: '73',
        data: { label : ( <> 
        <p>Web Assembly</p>
        </> ) },
        parent: 7,
        position: {x:4590, y:1965},
        className: 'tierTwo'
      },
      {
        id: '74',
        data: { label : ( <> 
        <p>Low level byte code</p>
        <p>Game</p>
        <p>Video, Image Adjustment</p>
        <p>C++, Rust compile</p>
        <p>Assembly Script</p>
        </> ) },
        parent: 73,
        position: {x:4210, y:2205},
        className: 'tierTwo longNode'
      },
      {
        id: '75',
        data: { label : ( <> 
        <p>PWA</p>
        </> ) },
        parent: 7,
        position: {x:5110, y:1965},
        className: 'tierTwo'
      },
      {
        id: '76',
        data: { label : ( <> 
        <p>Used as App</p>
        <p>Service Workers</p>
        <p>HTTPS</p>
        <p>Native</p>
        </> ) },
        parent: 75,
        position: {x:4895, y:2205},
        className: 'tierTwo midNode'
      },
      {
        id: '77',
        data: { label : ( <> 
        <p>Mobile Applications</p>
        </> ) },
        parent: 7,
        position: {x:6560, y:1890},
        className: 'tierTwo'
      },
      {
        id: '78',
        data: { label : ( <> 
        <p>React Native</p>
        </> ) },
        parent: 77,
        position: {x:5375, y:2365},
        className: 'tierTwo'
      },
      {
        id: '79',
        data: { label : ( <> 
        <p>Flutter</p>
        </> ) },
        parent: 77,
        position: {x:5735, y:2365},
        className: 'tierTwo'
      },
      {
        id: '80',
        data: { label : ( <> 
        <p>Ionic</p>
        </> ) },
        parent: 77,
        position: {x:6075, y:2365},
        className: 'tierTwo'
      },
      {
        id: '81',
        data: { label : ( <> 
        <p>Kotlin, Java</p>
        </> ) },
        parent: 77,
        position: {x:6415, y:2365},
        className: 'tierTwo'
      },
      {
        id: '82',
        data: { label : ( <> 
        <p>Xamarin</p>
        </> ) },
        parent: 77,
        position: {x:7075, y:2365},
        className: 'tierTwo'
      },
      {
        id: '83',
        data: { label : ( <> 
        <p>Swift, Objective-C</p>
        </> ) },
        parent: 77,
        position: {x:6750, y:2365},
        className: 'tierTwo'
      },
      {
        id: '84',
        data: { label : ( <> 
        <p>AI / Machine Learning</p>
        </> ) },
        parent: 7,
        position: {x:8780, y:1875},
        className: 'tierTwo'
      },
      {
        id: '85',
        data: { label : ( <> 
        <p>Python</p>
        </> ) },
        parent: 84,
        position: {x:8534, y:2375},
        className: 'tierTwo'
      },
      {
        id: '86',
        data: { label : ( <> 
        <p>TensorFlow.js</p>
        </> ) },
        parent: 84,
        position: {x:8895, y:2375},
        className: 'tierTwo'
      },
      {
        id: '87',
        data: { label : ( <> 
        <p>Brain.js</p>
        </> ) },
        parent: 84,
        position: {x:9275, y:2375},
        className: 'tierTwo'
      },
      
      
      {
          id: 'e1-2',
          source: '1',
          target: '2',
          type:'straight'
      },
      {
          id: 'e2-3',
          source: '2',
          target: '3',
          type:'straight'
      },
      {
          id: 'e3-4',
          source: '3',
          target: '4',
          type:'straight'
      },
      {
          id: 'e4-5',
          source: '4',
          target: '5',
          type:'straight'
      },
      {
        id: 'e4-6',
        source: '4',
        target: '6',
        type:'straight'
    },
    {
        id: 'e4-7',
        source: '4',
        target: '7',
        type:'straight'
    },
    {
        id: 'e2-8',
        source: '2',
        target: '8',
        type:'straight'
    },
    {
        id: 'e8-9',
        source: '8',
        target: '9',
        type:'straight'
    },
    {
        id: 'e2-10',
        source: '2',
        target: '10',
        type:'straight'
    },
    {
        id: 'e10-11',
        source: '10',
        target: '11',
        type:'straight'
    },
    {
        id: 'e3-12',
        source: '3',
        target: '12',
        type:'straight'
    },
    {
        id: 'e3-13',
        source: '3',
        target: '13',
        type:'straight'
    },
    {
        id: 'e3-14',
        source: '3',
        target: '14',
        type:'straight'
    },
    {
        id: 'e12-15',
        source: '12',
        target: '15',
        type:'straight'
    },
    {
        id: 'e13-16',
        source: '13',
        target: '16',
        type:'straight'
    },
    {
        id: 'e14-17',
        source: '14',
        target: '17',
        type:'straight'
    },
    {
        id: 'e5-18',
        source: '5',
        target: '18',
        type:'straight'
    },
    {
        id: 'e5-19',
        source: '5',
        target: '19',
        type:'straight'
    },
    {
        id: 'e5-20',
        source: '5',
        target: '20',
        type:'straight'
    },
    {
        id: 'e18-21',
        source: '18',
        target: '21',
        type:'straight'
    },
    {
        id: 'e19-22',
        source: '19',
        target: '22',
        type:'straight'
    },
    {
        id: 'e19-23',
        source: '19',
        target: '23',
        type:'straight'
    },
    {
        id: 'e19-24',
        source: '19',
        target: '24',
        type:'straight'
    },
    {
        id: 'e24-25',
        source: '24',
        target: '25',
        type:'straight'
    },
    {
        id: 'e24-26',
        source: '24',
        target: '26',
        type:'straight'
    },
    {
        id: 'e24-27',
        source: '24',
        target: '27',
        type:'straight'
    },
    {
        id: 'e24-28',
        source: '24',
        target: '28',
        type:'straight'
    },
    {
        id: 'e24-29',
        source: '24',
        target: '29',
        type:'straight'
    },
    {
        id: 'e29-30',
        source: '29',
        target: '30',
        type:'straight'
    },
    {
        id: 'e26-31',
        source: '26',
        target: '31',
        type:'straight'
    },
    {
        id: 'e26-32',
        source: '26',
        target: '32',
        type:'straight'
    },
    {
        id: 'e27-33',
        source: '27',
        target: '33',
        type:'straight'
    },
    {
        id: 'e28-34',
        source: '28',
        target: '34',
        type:'straight'
    },
    {
        id: 'e28-35',
        source: '28',
        target: '35',
        type:'straight'
    },
    {
        id: 'e36-37',
        source: '36',
        target: '37',
        type:'straight'
    },
    {
        id: 'e36-38',
        source: '36',
        target: '38',
        type:'straight'
    },
    {
        id: 'e36-39',
        source: '36',
        target: '39',
        type:'straight'
    },
    {
        id: 'e40-41',
        source: '40',
        target: '41',
        type:'straight'
    },
    {
        id: 'e20-42',
        source: '20',
        target: '42',
        type:'straight'
    },
    {
        id: 'e20-43',
        source: '20',
        target: '43',
        type:'straight'
    },
    {
        id: 'e43-44',
        source: '43',
        target: '44',
        type:'straight'
    },
    {
        id: 'e43-45',
        source: '43',
        target: '45',
        type:'straight'
    },
    {
        id: 'e45-46',
        source: '45',
        target: '46',
        type:'straight'
    },
    {
        id: 'e45-47',
        source: '45',
        target: '47',
        type:'straight'
    },
    {
        id: 'e45-48',
        source: '45',
        target: '48',
        type:'straight'
    },
    {
        id: 'e6-49',
        source: '6',
        target: '49',
        type:'straight'
    },
    {
        id: 'e49-50',
        source: '49',
        target: '50',
        type:'straight'
    },
    {
        id: 'e49-51',
        source: '49',
        target: '51',
        type:'straight'
    },
    {
        id: 'e51-52',
        source: '51',
        target: '52',
        type:'straight'
    },
    {
        id: 'e52-53',
        source: '52',
        target: '53',
        type:'straight'
    },
    {
        id: 'e53-54',
        source: '53',
        target: '54',
        type:'straight'
    },
    {
        id: 'e51-55',
        source: '51',
        target: '55',
        type:'straight'
    },
    {
        id: 'e55-56',
        source: '55',
        target: '56',
        type:'straight'
    },
    {
        id: 'e51-57',
        source: '51',
        target: '57',
        type:'straight'
    },
    {
        id: 'e57-58',
        source: '57',
        target: '58',
        type:'straight'
    },
    {
        id: 'e51-59',
        source: '51',
        target: '59',
        type:'straight'
    },
    {
        id: 'e59-60',
        source: '59',
        target: '60',
        type:'straight'
    },
    {
        id: 'e60-61',
        source: '60',
        target: '61',
        type:'straight'
    },
    {
        id: 'e6-62',
        source: '6',
        target: '62',
        type:'straight'
    },
    {
        id: 'e62-63',
        source: '62',
        target: '63',
        type:'straight'
    },
    {
        id: 'e63-64',
        source: '63',
        target: '64',
        type:'straight'
    },
    {
        id: 'e62-65',
        source: '62',
        target: '65',
        type:'straight'
    },
    {
        id: 'e65-66',
        source: '65',
        target: '66',
        type:'straight'
    },
    {
        id: 'e62-67',
        source: '62',
        target: '67',
        type:'straight'
    },
    {
        id: 'e67-68',
        source: '67',
        target: '68',
        type:'straight'
    },
    {
        id: 'e7-69',
        source: '7',
        target: '69',
        type:'straight'
    },
    {
        id: 'e69-70',
        source: '69',
        target: '70',
        type:'straight'
    },
    {
        id: 'e69-71',
        source: '69',
        target: '71',
        type:'straight'
    },
    {
        id: 'e69-72',
        source: '69',
        target: '72',
        type:'straight'
    },
    {
        id: 'e7-73',
        source: '7',
        target: '73',
        type:'straight'
    },
    {
        id: 'e73-74',
        source: '73',
        target: '74',
        type:'straight'
    },
    {
        id: 'e7-75',
        source: '7',
        target: '75',
        type:'straight'
    },
    {
        id: 'e75-76',
        source: '75',
        target: '76',
        type:'straight'
    },
    {
        id: 'e7-77',
        source: '7',
        target: '77',
        type:'straight'
    },
    {
        id: 'e77-78',
        source: '77',
        target: '78',
        type:'straight'
    },
    {
        id: 'e77-79',
        source: '77',
        target: '79',
        type:'straight'
    },
    {
        id: 'e77-80',
        source: '77',
        target: '80',
        type:'straight'
    },
    {
        id: 'e77-81',
        source: '77',
        target: '81',
        type:'straight'
    },
    {
        id: 'e77-82',
        source: '77',
        target: '82',
        type:'straight'
    },
    {
        id: 'e77-83',
        source: '77',
        target: '83',
        type:'straight'
    },
    {
        id: 'e7-84',
        source: '7',
        target: '84',
        type:'straight'
    },
    {
        id: 'e84-85',
        source: '84',
        target: '85',
        type:'straight'
    },
    {
        id: 'e84-86',
        source: '84',
        target: '86',
        type:'straight'
    },
    {
        id: 'e84-87',
        source: '84',
        target: '87',
        type:'straight'
    },
    {
        id: 'e84-88',
        source: '84',
        target: '88',
        type:'straight'
    }
]