import{P as b}from"./PageHeader.25d3428b.js";import{o as i,Z as f,a,_ as u,aI as s,c,a0 as e,J as r,F as g,a5 as j,aG as y,T as w}from"./index.2db987cc.js";function P(n,l){return i(),f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z","clip-rule":"evenodd"})])}const L={name:"DevPageContentBlock",components:{ArrowCircleRightIcon:P},props:{project:Object},computed:{projectTags(){return this.project.tags.join(", ")}}},R={class:"project-img-container"},k=["href"],C=["src"],U=e("div",{class:"project-item-1"},null,-1),B=e("div",{class:"project-item-2"},null,-1),S=e("div",{class:"project-item-3"},null,-1),T={class:"project-caption-container"},D={class:"project-h6"},I={class:"project-h1"},x={class:"project-p"},J={class:"project-year"},A=["href"],H=j("click here to read my code on Github");function M(n,l,t,m,p,h){const o=s("ArrowCircleRightIcon");return i(),c(g,null,[e("div",R,[e("a",{href:t.project.websiteURL,class:"project-img-link"},[e("img",{src:t.project.filePath,class:"project-img"},null,8,C)],8,k),U,B,S]),e("div",T,[e("h6",D,r(h.projectTags),1),e("h1",I,r(t.project.title),1),e("p",x,r(t.project.description),1),e("p",J,"\xA9"+r(t.project.dateYear),1),e("a",{href:t.project.githubURL,class:"project-link"},[a(o,{class:"project-icon"}),H],8,A)])],64)}var v=u(L,[["render",M]]);const Y={name:"DevProjectContainer",components:{DevProject:v},props:{devProjects:Array}};function z(n,l,t,m,p,h){const o=s("DevProject");return i(!0),c(g,null,y(t.devProjects,d=>(i(),c("div",{key:t.devProjects.id,class:"project-container"},[a(o,{project:d},null,8,["project"])]))),128)}var E=u(Y,[["render",z]]),G="/portfolio-site/assets/portfolio-thumbnail_portfolio.c3b01b2e.png",N="/portfolio-site/assets/portfolio-thumbnail_cocktailRoulette.5eb7a4f8.png",Q="/portfolio-site/assets/portfolio-thumbnail_TFHotels.ff494a02.jpg",V="/portfolio-site/assets/b2b.bc0e98fa.png",$="/portfolio-site/assets/bamazonM-2.6aeec85c.gif",O="/portfolio-site/assets/eat-da-burger.ce7c2e74.png",F="/portfolio-site/assets/giftastic.1317aa7f.png",W="/portfolio-site/assets/liri-4.4b901e42.gif",q="/portfolio-site/assets/guess-game-mockup.6a1630fe.png",Z="/portfolio-site/assets/wireframe_start_crystal.ca5c659b.png";const K={name:"DevelopmentView",components:{PageHeader:b,DevProjectContainer:E,DevProject:v,TheResume:w},data(){return{devProjects:[{id:1,title:"Portfolio site",tags:["Vue","CSS","HTML","Javascript"],description:"Portfolio website designed and developed to showcase work.",filePath:G,websiteURL:"",githubURL:"https://github.com/camille-the-eel/portfolio-site",dateYear:2022},{id:2,title:"Cocktail Roulette",tags:["APIs","Javascript","JSON","HTML","CSS"],description:`A vanilla javascript web application\u2013 enter an ingredient, and you'll be told what drink you'll be having tonight, plus some "close calls", utilizing TheCocktailDB API.`,filePath:N,websiteURL:"https://camille-the-eel.github.io/cocktail-roulette/",githubURL:"https://github.com/camille-the-eel/cocktail-roulette",dateYear:2022},{id:3,title:"T|F Hotels",tags:["MySQL","Express","Node.js","Bulma-CSS"],description:"Collaborative project: a management system for front-desk employees that aggregates all relevant data and searches to one easy-to-use page, with creation of reservations and guest accounts just one page click away.",filePath:Q,websiteURL:"https://tf-hotels.herokuapp.com/",githubURL:"https://github.com/camille-the-eel/tf-hotel-management-app",dateYear:2019},{id:4,title:"Bike To Brew",tags:["APIs","Javascript","JQuery","HTML","CSS"],description:"Collaborative project: a responsive site that connects mountain bikers and beer enthusiasts to breweries and mountain trails near one another. Users are able to map search breweries and mountain biking trails together based on chosen location, brewery, or trail.",filePath:V,websiteURL:"https://camille-the-eel.github.io/bike-to-brew/",githubURL:"https://github.com/camille-the-eel/bike-to-brew",dateYear:2018},{id:5,title:"Bamazon",tags:["MySQL","Node.js","Javascript"],description:`Bamazon is a command line Node.js application that utilizes MySQL to retrieve and update database-stored information. On the "Bamazon" storefront, customers can view products and make a purchase that updates the store's inventory. Managers can view all inventory, view low inventory, add to the inventory of an existing product, and create a new product. Instructions to run this app can be found in the READ.me on Github.`,filePath:$,websiteURL:"",githubURL:"https://github.com/camille-the-eel/bamazon",dateYear:2019},{id:6,title:"Burger App",tags:["MySQL","Express-handlebars","JQuery"],description:`A basic full-stack application that takes in a user's burger "order", which is saved in MySQL database, then once a user "devours" the burger, the back-end database is updated, as is the front-end display.`,filePath:O,websiteURL:"https://ur-eat-da-burger.herokuapp.com/",githubURL:"https://github.com/camille-the-eel/eat-da-burger",dateYear:2019},{id:7,title:"Giftastic",tags:["APIs","Javascript","JSON"],description:"Click to play/stop gifs of any topic of your choice on a dynamic web page that utilizes the GIPHY API.",filePath:F,websiteURL:"https://camille-the-eel.github.io/giftastic/",githubURL:"https://github.com/camille-the-eel/giftastic",dateYear:2018},{id:8,title:"LIRI Bot",tags:["Javascript","Node.js"],description:"Use LIRI, a command line node application, to discover more information about your favorite songs, movies, and artist's concerts!",filePath:W,websiteURL:"",githubURL:"https://github.com/camille-the-eel/liri",dateYear:2018},{id:9,title:"Word-Guess Game",tags:["Javascript","HTML","CSS"],description:'Harry Potter "Exam Review" themed word guessing game, complete the spell before you run out of guesses!',filePath:q,websiteURL:"https://camille-the-eel.github.io/word-guess-game/",githubURL:"https://github.com/camille-the-eel/word-guess-game",dateYear:2018},{id:10,title:"Crystal Collector",tags:["Javascript","JQuery","HTML","CSS"],description:"Javascript game: You can only take home your crystals if your collection is equal to the head miner's! Blackjack style gameplay.",filePath:Z,websiteURL:"https://camille-the-eel.github.io/crystal-collector-game/",githubURL:"https://github.com/camille-the-eel/crystal-collector-game",dateYear:2018}]}}},X={class:"dev-page-head"},ee={class:"dev-page-content"};function te(n,l,t,m,p,h){const o=s("PageHeader"),d=s("DevProjectContainer"),_=s("TheResume");return i(),c(g,null,[e("div",X,[a(o,{"page-category":"WEB DEVELOPMENT","page-title":"PROJECTS"})]),e("div",ee,[a(d,{"dev-projects":p.devProjects},null,8,["dev-projects"])]),a(_)],64)}var se=u(K,[["render",te]]);export{se as default};