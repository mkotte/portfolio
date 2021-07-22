// array containing project modal information
const projectInfo = [
    {
        name: "Custom Workforce Manager",
        repo:"https://github.com/mkotte/Custom-Workforce-Manager",
        app:"https://custom-workforce-manager.herokuapp.com/",
        description:"An application that was created to streamline communication between administration and its workforce while maintaining an organized log of the company's job information.",
        tech:["MongoDb","Express","React","Node", "Material-UI", "Passport.js", "SortableJS", "Heroku"],
        iconClass: "fas fa-user-tie"
    },
    {
        name: "COVID Woke",
        repo:"https://github.com/mkotte/COVIDwoke",
        app:"https://mkotte.github.io/COVIDwoke/",
        description:"COVID woke seeks to elevate the public information environment by presenting necessary information that is accessible and easy to understand.",
        tech:["Javascript", "HTML", "CSS", "Bootstrap", "3rd-Party API", "Chart.js"],
        iconClass: "fas fa-virus"
    },
    {
        name: "Employee Tracker",
        repo:"https://github.com/mkotte/Employee-Tracker",
        app: "none",
        description:"CLI application where users are able to manage, manipulate and view employee information. Demo video is located in the repository's README.",
        tech:["MYSQL", "Express", "Node"],
        iconClass: "fas fa-search"
    },
    {
        name: "eCommerce Back-End Demo",
        repo:"https://github.com/mkotte/eCommerce-back-end",
        app:"none",
        description:"Example of ability to create, map and test routes to showcase ability in Back-End work. Demo video is located in the repository's README.",
        tech:["MYSQL", "Sequelize", "Express", "Insomnia"],
        iconClass: "fas fa-tags"
    },
    {
        name: "Budget Tracker",
        repo:"https://github.com/mkotte/budget-tracker",
        app:"https://ancient-everglades-37448.herokuapp.com/",
        description:"Updated a simple budget tracker to include PWA capabilities, including offline mode.",
        tech:["MongoDB Atlas", "Node", "Express", "Heroku"],
        iconClass: "fas fa-money-bill-wave"
    },
    {
        name: "Team Profile Generator",
        repo:"https://github.com/mkotte/Team-Profile-Generator",
        app:"none",
        description:"CLI application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Demo video and example HTML page is located in the repo.",
        tech:["Node", "Jest","Bootstrap"],
        iconClass:"fas fa-users"
    }    
]

// adding project boxes
const projectBoxes = (j) => {
    let work = document.querySelector(".work-wrapper")
    let projectBox = document.createElement("div")
    projectBox.setAttribute("class", 'projectBox')
    projectBox.setAttribute("id", `projectBox-${j}`)
    work.appendChild(projectBox);
}

// adding project Icons and img wrappers to respective projectBoxes
const projectIcons = (j) => {
    let projectBox = document.querySelector(`#projectBox-${j}`)
    let projectIconWrapper = document.createElement("div");
    projectIconWrapper.setAttribute("class", "projectIconWrapper")
    projectBox.appendChild(projectIconWrapper);
    let projectIcon = document.createElement("i");
    projectIcon.setAttribute("class", `${projectInfo[j].iconClass}`)
    projectIconWrapper.appendChild(projectIcon);
}

// adding a project name that will be shown on hover
const projectNames = (j) => {
    let projectBox = document.querySelector(`#projectBox-${j}`)
    let projectNameWrapper = document.createElement("div")
    projectNameWrapper.setAttribute("class", "projectNameWrapper");
    projectBox.appendChild(projectNameWrapper)
    let projectName = document.createElement("h3")
    projectName.setAttribute("class", "projectName");
    projectName.textContent = projectInfo[j].name
    projectNameWrapper.appendChild(projectName)
}

// iterating through project functions
// for (i=0; i < projectInfo.length; i++){
//     projectBoxes(i)
//     projectIcons(i)
//     projectNames(i)
// }




// adding modal that pops up and populating correct info 
    // conditional statement if(projectInfo[i].app === "none")
    




// generic event listener on projects sourcing by ID for reference of array of obj values
