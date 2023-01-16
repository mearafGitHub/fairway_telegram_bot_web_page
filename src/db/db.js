import cv_edit from "../icons/CV_Edit.png";
import cv from "../icons/cv.png";
import personalised from "../icons/dart.jpeg";
import website from "../icons/website.jpeg";
import skills from "../icons/skills.jpeg";
import info from "../icons/info.jpeg";
import bio from "../icons/bio.png";

export function getData() {
  return [
    { title: "My Info", Image: info, id:1 },
    { title: "CV", Image: cv, id:2 },
    { title: "Edit CV", Image: cv_edit, id:2 },
    { title: "Bio", Image: bio , id:3},
    { title: "Skills", Image: skills,id:4 },
    { title: "Bio", Image: bio, id:5 },
    { title: "My Jobs", Image: personalised, id:6 },
    { title: "Goto Website", Image: website, id:7 },
  ];
}
