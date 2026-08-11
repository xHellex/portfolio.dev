const fs = require('fs');
const path = require('path');

const cvPath = path.join(__dirname, 'src', 'data', 'cv.json');
const cvEnPath = path.join(__dirname, 'src', 'data', 'cv-en.json');

let cv = JSON.parse(fs.readFileSync(cvPath, 'utf8'));
let cvEn = JSON.parse(fs.readFileSync(cvEnPath, 'utf8'));

// Fix Spanish bleed due to shallow copy previously
cv.work[0].position = "Desarrollador Web Independiente";
cv.work[2].position = "Desarrollador Web Independiente";
cv.work[5].position = "Diseñador y Desarrollador Web";

// Hide the first two projects
if (cv.projects[0].name.includes("Microservicios")) {
    cv.projects[0].isActive = false;
    cvEn.projects[0].isActive = false;
}

if (cv.projects[1].name.includes("Plataforma")) {
    cv.projects[1].isActive = false;
    cvEn.projects[1].isActive = false;
}

fs.writeFileSync(cvPath, JSON.stringify(cv, null, 2));
fs.writeFileSync(cvEnPath, JSON.stringify(cvEn, null, 2));

console.log('CVs successfully hotfixed.');
