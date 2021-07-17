// array of objects including required devicon classes
const deviconClasses = [
    'NodeJS', 'jQuery', 'Heroku', 'Slack', 'JavaScript', 'Express', 'MySQL', 'Sequelize','MongoDB','HTML5','npm', 'Bootstrap', 'MaterialUI', 'VSCode', 'CSS3', 'Git', 'GitHub', 'HandleBars', 'Jest', 'React'
];

console.log(deviconClasses[0])
// selecting skills wrapper
const skillsWrapper = document.querySelector(".skills-wrapper")

// using a loop to create 5 rows for skills 
for (let i=0 ; i < 5; i++){
    const skillRow = document.createElement("div")
    skillRow.setAttribute("class", "skillRow")
    skillRow.setAttribute("id", `skillRow-${i}`)
    skillsWrapper.appendChild(skillRow);
}

// looping through creation of individual skill names + icons
for (let j=0; j < 20; j++){

    // singleSkill acting as a wrapper for structure + styling
    let singleSkill = document.createElement('div');
    singleSkill.setAttribute("class", "singleSkill");
    
    // creation of skills Icon and wrapper
    let iconWrapper = document.createElement('div');
    iconWrapper.setAttribute("class", "iconWrapper");
    let skillsIcon = document.createElement('i');
    // conditional statement for two exceptions of devicon classes to render icons
    if( j !== 5  && j !== 10){
        skillsIcon.setAttribute("class", `devicon-${deviconClasses[j].toLowerCase()}-plain`);
    } else if( j === 5) {
        skillsIcon.setAttribute("class", `devicon-${deviconClasses[j].toLowerCase()}-original`);
    } else if( j === 10) {
        skillsIcon.setAttribute("class", `devicon-${deviconClasses[j].toLowerCase()}-original-wordmark`);
    };
    iconWrapper.appendChild(skillsIcon);
    singleSkill.appendChild(iconWrapper);

    
    let skillsName = document.createElement('h4');
    skillsName.setAttribute("class", "skillsName");
    skillsName.textContent = `${deviconClasses[j]}`;
    singleSkill.appendChild(skillsName);

    // determining which row to append to by utilizing a modulus operator
    let rowToAppendToo = document.getElementById(`skillRow-${ (j+6) % 5 }`);
    rowToAppendToo.appendChild(singleSkill);
};