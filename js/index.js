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
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//adding text to nav
const navLinks = document.querySelectorAll('a');
navLinks[0].textContent = "Services";
navLinks[1].textContent = "Product";
navLinks[2].textContent = "Vision";
navLinks[3].textContent = "Features";
navLinks[4].textContent = "About";
navLinks[5].textContent = "Contact";


//created new a tag stuff
const newContent = document.createElement("a");
newContent.textContent = "YESSIR!";

const newerContent = document.createElement("a");
newerContent.textContent = "blahah!";

const nav = document.querySelector("nav");
nav.prepend(newerContent);
nav.appendChild(newContent);


// adding green text color

const greenA = document.querySelectorAll("a");

greenA.forEach(goGreen => {
    console.log(goGreen);
    goGreen.style.color = "green";
})

//make the cursor match the other nav buttons.... didnt match before.
greenA.forEach(pointer => {
    console.log(pointer);
    pointer.style.cursor = "pointer";
})

//cta section

const ctaTitle = document.querySelector('.cta-text h1');
ctaTitle.textContent = "DOM is Awesome";
// NEED TO COME BACK TO THIS TO MAKE THE BR IN THE TITLE

const topImg = document.getElementById('cta-img');
topImg.setAttribute('src', "img/header-img.png");

const buttonText = document.querySelector('.cta-text button');
buttonText.textContent = "Get Started";

const buttonBackground = document.querySelector("button");
buttonBackground.style.backgroundColor = "silver";


//main content 
//my attempt at stretch-change h4 color and font size.
const titleColor = document.querySelectorAll("h4");

titleColor.forEach(goPurple => {
    console.log(goPurple);
    goPurple.style.color = "purple";
})

const titleSize = document.querySelectorAll("h4");

titleSize.forEach(goBig => {
    console.log(goBig);
    goBig.style.fontSize = "3rem";
})


const middlePic = document.getElementById('middle-img');
middlePic.setAttribute('src', 'img/mid-page-accent.jpg')


const textContentTitle = document.querySelectorAll('.text-content h4');
textContentTitle[0].textContent = "Features";
textContentTitle[1].textContent = "About";
textContentTitle[2].textContent = "Services";
textContentTitle[3].textContent = "Product";
textContentTitle[4].textContent = "Vision";

const mainPTags = document.querySelectorAll('.main-content p');
mainPTags[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainPTags[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainPTags[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainPTags[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainPTags[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//section class .contact
const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = "Contact";

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];


//footer
const footerP = document.querySelector('footer p');
footerP.textContent = "Copyright Great Idea!2018";