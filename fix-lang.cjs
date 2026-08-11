const fs = require('fs');
const path = require('path');

const cvPath = path.join(__dirname, 'src', 'data', 'cv.json');
const cvEnPath = path.join(__dirname, 'src', 'data', 'cv-en.json');

let cv = JSON.parse(fs.readFileSync(cvPath, 'utf8'));
let cvEn = JSON.parse(fs.readFileSync(cvEnPath, 'utf8'));

// Fix Spanish language level and certificate node
if (cv.certificates[1] && cv.certificates[1].name.includes("EF SET")) {
    cv.certificates[1].name = "EF SET English Certificate - Nivel B1";
}
if (cv.languages[1] && cv.languages[1].language === "Inglés") {
    cv.languages[1].fluency = "Intermedio (B1)";
}

// Fix English language level and certificate node
if (cvEn.certificates[1] && cvEn.certificates[1].name.includes("EF SET")) {
    cvEn.certificates[1].name = "EF SET English Certificate - Level B1";
}
if (cvEn.languages[1] && cvEn.languages[1].language === "English") {
    cvEn.languages[1].fluency = "Intermediate (B1)";
}

fs.writeFileSync(cvPath, JSON.stringify(cv, null, 2));
fs.writeFileSync(cvEnPath, JSON.stringify(cvEn, null, 2));

console.log('Language levels successfully hotfixed.');
