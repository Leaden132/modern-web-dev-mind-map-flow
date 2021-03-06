import React from 'react';



export const initialArray = [
    {
        id: '1',
        type: 'input',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Web Development</p> </div> ) },
        position: {x:1700, y:-435},
        className: 'tierOne'
      },
      {
        id: '2',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Preparation</p> </div> ) },
        position: {x:1700, y:-235},
        className: 'tierTwo'
      },
      {
        id: '3',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Fundamental Languages</p> </div> ) },
        position: {x:1900, y:-50},
        className: 'tierThree'
      },
      {
        id: '4',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>specialization</p> </div> ) },
        position: {x:1465, y:740},
        className: 'tierFour'
      },
      {
        id: '5',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Front-End</p> </div> ) },
        position: {x:285, y:1400},
        className: 'tierFive'
      },
      {
        id: '6',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Back-End</p> </div> ) },
        position: {x:1980, y:1015},
        className: 'tierFive'
      },
      {
        id: '7',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Auxiliary Expansion</p> </div> ) },
        position: {x:5335, y:1460},
        className: 'tierFive'
      },
      {
        id: '8',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Fundamental Knowledge</p> </div> ) },
        position: {x:1565, y:-50},
        className: 'tierThree'
      },
      {
        id: '9',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Hosting / Domain / DNS / HTTP</p> </div> ) },
        parent: 8,
        position: {x:1475, y:205},
        className: 'tierFour'
      },
      {
        id: '10',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Dev Environment</p> </div> ) },
        position: {x:1200, y:-50},
        className: 'tierThree'
      },
      {
        id: '11',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>OS - Mac, Window</p> 
        <p> Text Editor - VS Code, Monaco Editor, Webstorm, Vim</p> 
        <p> Browser - Chrome, Firefox</p> 
        <p> Terminal - Git Bash, Zsh, Cmder</p> 
        <p> Design - Adobe XD, Figma</p> </div> ) },
        parent: 10,
        position: {x:755, y:205},
        className: 'tierFour longNode'
      },
      {
        id: '12',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>HTML</p> </div> ) },
        position: {x:2400, y:205},
        className: 'tierFour'
      },
      {
        id: '13',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>CSS</p> </div> ) },
        position: {x:2800, y:205},
        className: 'tierFour'
      },
      {
        id: '14',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>JavaScript</p> </div> ) },
        position: {x:2000, y:205},
        className: 'tierFour'
      },
      {
        id: '15',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Semantics</p> <p> Page Structure</p> <p> Grammar</p> </div> ) },
        parent: 12,
        position: {x:2400, y:385},
        className: 'tierFive'
      },
      {
        id: '16',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Basic styling</p> <p> positions</p> <p> Flexbox</p> </div> ) },
        parent: 13,
        position: {x:2800, y:385},
        className: 'tierFive'
      },
      {
        id: '17',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Variables</p> <p> data type</p> <p> object</p> <p> array</p> <p> Function</p> <p> Loops</p> <p> DOM</p> </div> ) },
        parent: 14,
        position: {x:2000, y:385},
        className: 'tierFive'
      },
      {
        id: '18',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>HTML</p> </div> ) },
        position: {x:650, y:1575},
        className: 'tierOne'
      },
      {
        id: '19',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>JavaScript</p> </div> ) },
        position: {x:-210, y:1635},
        className: 'tierOne'
      },
      {
        id: '20',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>CSS</p> </div> ) },
        position: {x:315, y:1740},
        className: 'tierOne'
      },
      {
        id: '21',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Web Standards</p>
        <p>Accessibility</p>
        <p>Cross-Browser Compatibility</p>
        </div> ) },
        parent: 18,
        position: {x:830, y:1750},
        className: 'tierTwo midNode'
      },
      {
        id: '22',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>TypeScript</p>
        </div> ) },
        parent: 19,
        position: {x:0, y:1820},
        className: 'tierTwo'
      },
      {
        id: '23',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>DOM</p>
        <p>Array Method</p>
        <p>JSON</p>
        <p>HTTP</p>
        <p>Fetch API</p>
        <p>Scope</p>
        <p>Closure</p>
        <p>Event Loop</p>
        <p>Etc.</p>
        </div> ) },
        parent: 19,
        position: {x:-800, y:1820},
        className: 'tierTwo midNode'
      },
      {
        id: '24',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Front-End Frameworks</p>
        </div> ) },
        parent: 19,
        position: {x:-225, y:2300},
        className: 'tierThree'
      },
      {
        id: '25',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Svelte</p>
        </div> ) },
        parent: 24,
        position: {x:180, y:2580},
        className: 'tierFour'
      },
      {
        id: '26',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>React</p>
        </div> ) },
        parent: 24,
        position: {x:-984, y:2710},
        className: 'tierFour'
      },
      {
        id: '27',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Vue</p>
        </div> ) },
        parent: 24,
        position: {x:-460, y:2710},
        className: 'tierFour'
      },
      {
        id: '28',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Angular</p>
        </div> ) },
        parent: 24,
        position: {x:66, y:2710},
        className: 'tierFour'
      },
      {
        id: '29',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Tools</p>
        </div> ) },
        parent: 24,
        position: {x:-1500, y:2710},
        className: 'tierFour'
      },
      {
        id: '30',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}>
         <p>Git - git-scm</p>
         <p>Repository - github, bizbucket</p>
         <p>Package Manager - NPM, Yarn</p>
         <p>Module Bundler - Webpack, Parcel</p>
         <p>State management - Redux, Vuex, NgRx</p>
         <p>Extensions - lint, live-server, snippets</p>
        </div> ) },
        parent: 29,
        position: {x:-2040, y:3000},
        className: 'tierFive longNode longer'
      },
      {
        id: '31',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Context API</p>
        </div> ) },
        parent: 26,
        position: {x:-803, y:3000},
        className: 'tierFive'
      },
      {
        id: '32',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Redux</p>
        </div> ) },
        parent: 26,
        position: {x:-1180, y:3000},
        className: 'tierFive'
      },
      {
        id: '33',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Vuex</p>
        </div> ) },
        parent: 27,
        position: {x:-460, y:3000},
        className: 'tierFive'
      },
      {
        id: '34',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Shared Service</p>
        </div> ) },
        parent: 28,
        position: {x:-20, y:3000},
        className: 'tierFive'
      },
      {
        id: '35',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>NgRx</p>
        </div> ) },
        parent: 28,
        position: {x:320, y:3005},
        className: 'tierFive'
      },
      {
        id: '36',
        type: 'input',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Server Side Rendering</p>
        </div> ) },
        parent: 'none',
        position: {x:-450, y:3200},
        className: 'tierOne'
      },
      {
        id: '37',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Next.js</p>
        </div> ) },
        parent: 36,
        position: {x:0, y:3480},
        className: 'tierTwo'
      },
      {
        id: '38',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Nuxt.js</p>
        </div> ) },
        parent: 36,
        position: {x:-460, y:3480},
        className: 'tierTwo'
      },
      {
        id: '39',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Angular Universal</p>
        </div> ) },
        parent: 36,
        position: {x:-880, y:3480},
        className: 'tierTwo'
      },
      {
        id: '40',
        type: 'input',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> <p>Static Site Generator</p>
        </div> ) },
        parent: 'none',
        position: {x:360, y:3190},
        className: 'tierOne'
      },
      {
        id: '41',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>CMS</p>
        <p>JAMstack</p>
        <p>11ty</p>
        <p>Gridsome</p>
        <p>Gatsby</p>
        </div> ) },
        parent: 40,
        position: {x:360, y:3425},
        className: 'tierTwo'
      },
      {
        id: '42',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Flexbox</p>
        <p>Grid</p>
        <p>transition</p>
        <p>responsive - Media Query</p>
        </div> ) },
        parent: 20,
        position: {x:160, y:1995},
        className: 'tierTwo'
      },
      {
        id: '43',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>SASS</p>
        <p>PostCSS</p>
        </div> ) },
        parent: 20,
        position: {x:645, y:2055},
        className: 'tierTwo'
      },
      {
        id: '44',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Variables</p>
        <p>Nested</p>
        <p>Functions</p>
        <p>Mixin</p>
        </div> ) },
        parent: 43,
        position: {x:910, y:2345},
        className: 'tierThree'
      },
      {
        id: '45',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>CSS Framework</p>
        </div> ) },
        parent: 43,
        position: {x:520, y:2400},
        className: 'tierThree'
      },
      {
        id: '46',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Bootstrap5</p>
        </div> ) },
        parent: 45,
        position: {x:1080, y:2777},
        className: 'tierFour'
      },
      {
        id: '47',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Materialize</p>
        </div> ) },
        parent: 45,
        position: {x:752, y:2777},
        className: 'tierFour'
      },
      {
        id: '48',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Tailwind</p>
        </div> ) },
        parent: 45,
        position: {x:422, y:2777},
        className: 'tierFour'
      },
      {
        id: '49',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Languages</p>
        </div> ) },
        parent: 6,
        position: {x:2740, y:1220},
        className: 'tierOne'
      },
      {
        id: '50',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Node.js - Express</p>
        <p>Deno - Oak, *</p>
        <p>Python - Django, Flask</p>
        <p>PHP - Laravel</p>
        <p>Java - Springboot</p>
        <p>C# - ASP.NET</p>
        <p>Ruby - Ruby on Rails</p>
        </div> ) },
        parent: 49,
        position: {x:3610, y:1540},
        className: 'tierTwo longNode'
      },
      {
        id: '51',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Database</p>
        </div> ) },
        parent: 49,
        position: {x:3105, y:1705},
        className: 'tierTwo'
      },
      {
        id: '52',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>RESTful API</p>
        </div> ) },
        parent: 51,
        position: {x:2577, y:2167},
        className: 'tierFour'
      },
      {
        id: '53',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>GraphQL</p>
        </div> ) },
        parent: 52,
        position: {x:2413, y:2485},
        className: 'tierFive'
      },
      {
        id: '54',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Apollo</p>
        </div> ) },
        parent: 53,
        position: {x:2280, y:2720},
        className: 'tierOne'
      },
      {
        id: '55',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Authentication</p>
        </div> ) },
        parent: 51,
        position: {x:3730, y:2175},
        className: 'tierFour midNode'
      },
      {
        id: '56',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>OAuth 2.0</p>
        <p>JWT</p>
        </div> ) },
        parent: 55,
        position: {x:3730, y:2475},
        className: 'tierFive'
      },
      {
        id: '57',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Server / Deployment</p>
        </div> ) },
        parent: 51,
        position: {x:2820, y:2405},
        className: 'tierFour'
      },
      {
        id: '58',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Hosting</p>
        <p>Web server - Nginx, Apache, IIS</p>
        <p>Container - Docker, Kubernetes</p>
        <p>Storage - Cloudinary, AWS S3</p>
        </div> ) },
        parent: 57,
        position: {x:2660, y:2725},
        className: 'tierFive longNode'
      },
      {
        id: '59',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>PostgresSQL</p>
        <p>MongoDB</p>
        <p>MySQL</p>
        <p>MS SQL</p>
        <p>Firebase</p>
        <p>Elasticsearch</p>
        </div> ) },
        parent: 51,
        position: {x:3285, y:2125},
        className: 'tierFour'
      },
      {
        id: '60',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Object Relational Mapper</p>
        </div> ) },
        parent: 59,
        position: {x:3335, y:2645},
        className: 'tierFive'
      },
      {
        id: '61',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Mongoose</p>
        <p>Sequelize</p>
        <p>SQLAlchemy</p>
        <p>Doctrine</p>
        <p>Eloquent</p>
        <p>JPA</p>
        </div> ) },
        parent: 60,
        position: {x:3335, y:2950},
        className: 'tierOne'
      },
      {
        id: '62',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Dev Ops</p>
        </div> ) },
        parent: 6,
        position: {x:1825, y:1235},
        className: 'tierOne'
      },
      {
        id: '63',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Web Platforms</p>
        </div> ) },
        parent: 62,
        position: {x:1425, y:1425},
        className: 'tierTwo'
      },
      {
        id: '64',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Digital Ocean</p>
        <p>Heroku</p>
        <p>AWS</p>
        <p>Azure</p>
        <p>OpenShift</p>
        </div> ) },
        parent: 63,
        position: {x:1365, y:1765},
        className: 'tierThree'
      },
      {
        id: '65',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Server Management</p>
        </div> ) },
        parent: 62,
        position: {x:2290, y:1425},
        className: 'tierTwo'
      },
      {
        id: '66',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Salt</p>
        <p>Docker</p>
        <p>Chef</p>
        <p>Ansible</p>
        <p>Linux</p>
        </div> ) },
        parent: 65,
        position: {x:2530, y:1685},
        className: 'tierThree'
      },
      {
        id: '67',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Workflow</p>
        </div> ) },
        parent: 62,
        position: {x:1860, y:1425},
        className: 'tierTwo'
      },
      {
        id: '68',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Continuous Integration - Github Hook, Travis CI, Jenkins</p>
        <p>Vagrant - local environment</p>
        <p>Capistrano - Ruby</p>
        <p>Flightplan - Python</p>
        <p>Fabric - Node</p>
        <p>Docker - CoreOS, Mesosphere, Panamax</p>
        </div> ) },
        parent: 67,
        position: {x:1740, y:1750},
        className: 'tierThree longNode'
      },
      {
        id: '69',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Desktop App</p>
        </div> ) },
        parent: 7,
        position: {x:7805, y:1880},
        className: 'tierOne'
      },
      {
        id: '70',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Electron</p>
        </div> ) },
        parent: 69,
        position: {x:7425, y:2375},
        className: 'tierTwo'
      },
      {
        id: '71',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>NW.js</p>
        </div> ) },
        parent: 69,
        position: {x:7790, y:2375},
        className: 'tierTwo'
      },
      {
        id: '72',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Tkinter</p>
        </div> ) },
        parent: 69,
        position: {x:8150, y:2375},
        className: 'tierTwo'
      },
      {
        id: '73',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Web Assembly</p>
        </div> ) },
        parent: 7,
        position: {x:4590, y:1965},
        className: 'tierOne'
      },
      {
        id: '74',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Low level byte code</p>
        <p>Game</p>
        <p>Video, Image Adjustment</p>
        <p>C++, Rust compile</p>
        <p>Assembly Script</p>
        </div> ) },
        parent: 73,
        position: {x:4210, y:2205},
        className: 'tierTwo longNode'
      },
      {
        id: '75',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>PWA</p>
        </div> ) },
        parent: 7,
        position: {x:5110, y:1965},
        className: 'tierOne'
      },
      {
        id: '76',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Used as App</p>
        <p>Service Workers</p>
        <p>HTTPS</p>
        <p>Native</p>
        </div> ) },
        parent: 75,
        position: {x:4895, y:2205},
        className: 'tierTwo midNode'
      },
      {
        id: '77',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Mobile Applications</p>
        </div> ) },
        parent: 7,
        position: {x:6560, y:1890},
        className: 'tierOne'
      },
      {
        id: '78',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>React Native</p>
        </div> ) },
        parent: 77,
        position: {x:5375, y:2365},
        className: 'tierTwo'
      },
      {
        id: '79',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Flutter</p>
        </div> ) },
        parent: 77,
        position: {x:5735, y:2365},
        className: 'tierTwo'
      },
      {
        id: '80',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Ionic</p>
        </div> ) },
        parent: 77,
        position: {x:6075, y:2365},
        className: 'tierTwo'
      },
      {
        id: '81',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Kotlin, Java</p>
        </div> ) },
        parent: 77,
        position: {x:6415, y:2365},
        className: 'tierTwo'
      },
      {
        id: '82',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Xamarin</p>
        </div> ) },
        parent: 77,
        position: {x:7075, y:2365},
        className: 'tierTwo'
      },
      {
        id: '83',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Swift, Objective-C</p>
        </div> ) },
        parent: 77,
        position: {x:6750, y:2365},
        className: 'tierTwo'
      },
      {
        id: '84',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>AI / Machine Learning</p>
        </div> ) },
        parent: 7,
        position: {x:8780, y:1875},
        className: 'tierOne'
      },
      {
        id: '85',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Python</p>
        </div> ) },
        parent: 84,
        position: {x:8534, y:2375},
        className: 'tierTwo'
      },
      {
        id: '86',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>TensorFlow.js</p>
        </div> ) },
        parent: 84,
        position: {x:8895, y:2375},
        className: 'tierTwo'
      },
      {
        id: '87',
        data: { label : ( <div className="nodeLabelFocus" tabIndex={0}> 
        <p>Brain.js</p>
        </div> ) },
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
    }
]