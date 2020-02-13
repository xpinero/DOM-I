const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//images//
let headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent['cta']['img-src']);

let midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);


//nav//
let navBar = document.querySelectorAll('a');
navBar.forEach((item, index) => {
  item.textContent = siteContent['nav'][`nav-item-${(index += 1)}`]
});
console.log(navBar);
// let navigation = document.getElementsByTagName('a');
// Array.from(navigation).forEach((item, index) => {  //// remember this!//
//   item.textContent = siteContent['nav'][`nav-item-${(index += 1)}`]
// })


//logo text//
let logoText = document.querySelectorAll('.cta-text h1')[0];
logoText.textContent = siteContent['cta']['h1'];


//button//
let btn = document.querySelectorAll('.cta-text button')[0];
btn.textContent = siteContent['cta']['button'];


//main features//
let featureTitle = document.querySelectorAll('.main-content .top-content .text-content h4')[0];
featureTitle.textContent = siteContent['main-content']['features-h4'];

let featureTitlePar1 = document.querySelectorAll('.main-content .top-content .text-content p')[0];
featureTitlePar1.textContent = siteContent['main-content']['features-content'];

let aboutTitle = document.querySelectorAll('.main-content .top-content .text-content h4')[1];
aboutTitle.textContent = siteContent['main-content']['about-h4'];

let aboutTitlePar1 = document.querySelectorAll('.main-content .top-content .text-content p')[1];
aboutTitlePar1.textContent = siteContent['main-content']['about-content'];


//bottom content//
let serviceTitle = document.querySelectorAll('.main-content .bottom-content .text-content h4')[0];
serviceTitle.textContent = siteContent['main-content']['services-h4'];
