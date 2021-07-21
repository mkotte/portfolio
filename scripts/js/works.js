// array containing project modal information
const projectInfo = [
    {
        name: "Custom Workforce Manager",
        repo:"https://github.com/mkotte/Custom-Workforce-Manager",
        app:"https://custom-workforce-manager.herokuapp.com/",
        description:"An application that was created to streamline communication between administration and its workforce while maintaining an organized log of the company's job information.",
        tech:["MongoDb","Express","React","Node", "Material-UI", "Passport.js", "SortableJS", "Heroku"]
    },
    {
        name: "COVID Woke",
        repo:"https://github.com/mkotte/COVIDwoke",
        app:"https://mkotte.github.io/COVIDwoke/",
        description:"COVID woke seeks to elevate the public information environment by presenting necessary information that is accessible and easy to understand.",
        tech:["Javascript", "HTML", "CSS", "Bootstrap", "3rd-Party API", "Chart.js"]
    },
    {
        name: "Employee Tracker",
        repo:"https://github.com/mkotte/Employee-Tracker",
        app: "none",
        description:"CLI application where users are able to manage, manipulate and view employee information. Demo video is located in the repository's README.",
        tech:["MYSQL", "Express", "Node"]
    },
    {
        name: "eCommerce Back-End Demo",
        repo:"https://github.com/mkotte/eCommerce-back-end",
        app:"none",
        description:"Example of ability to create, map and test routes to showcase ability in Back-End work. Demo video is located in the repository's README.",
        tech:["MYSQL", "Sequelize", "Express", "Insomnia"]
    },
    {
        name: "Budget Tracker",
        repo:"https://github.com/mkotte/budget-tracker",
        app:"https://ancient-everglades-37448.herokuapp.com/",
        description:"Updated a simple budget tracker to include PWA capabilities, including offline mode.",
        tech:["MongoDB Atlas", "Node", "Express", "Heroku"]
    },
    {
        name: "Team Profile Generator",
        repo:"https://github.com/mkotte/Team-Profile-Generator",
        app:"none",
        description:"CLI application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Demo video and example HTML page is located in the repo.",
        tech:["Node", "Jest","Bootstrap"]
    }    
]

// generic event listener on projects sourcing by ID for reference of array of obj values