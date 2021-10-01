let navContainer = document.querySelector('#navbar__list');
let sectionContainer = document.querySelectorAll('section');




//generating active section
const addActiveSection = (inFocus, section) => {
    if (inFocus) {
        section.classList.add('your-active-class');
        section.style.backgroundColor = "rgba(103, 67, 133, 0.466)";
    };
};

//removing active class
const removeActiveSection = (section) => {
    section.classList.remove("your-active-class");
    section.style.backgroundColor = "";
};


// build the nav

const navBuild = () => {
    sectionContainer.forEach(section => {
        // Set the class in string template
        const listItem = `<li class="menu__link"><a href="#${section.id}">${section.dataset.nav}</a></li>`;
        navContainer.insertAdjacentHTML('beforeend', listItem);
    });
};

navBuild();


// Add class 'active' to section when near top of viewport

const generateActiveSection = () => {
    sectionContainer.forEach((section) => {
        const sectionElementOffset = Math.floor(section.getBoundingClientRect().top);
        switch (sectionElementOffset) {
            case Math.floor(section.getBoundingClientRect().top):
                removeActiveSection(section);
                addActiveSection(sectionElementOffset < 200 && sectionElementOffset >= -200, section);
                break;
            default:
                section.classList.remove("your-active-class");
                section.style.backgroundColor = "";
        }
    });
}
window.addEventListener('scroll', generateActiveSection);


// Scroll to anchor ID using scrollTO event


// Build menu 

// Scroll to section on link click

const sectionScroll = () => {
    let links = document.querySelectorAll('li');
    links.forEach(a => {
        a.addEventListener('click', () => {
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });
}
sectionScroll();
