// function chooseSubject(subject) {
//      localStorage.setItem("selectedSubject", subject); // store subject choice
//      window.location.href = "quiz.html"; // go to quiz
// }


function goToIntro() {
  window.location.href = "java.html";
}
function goToIntro2() {
  window.location.href = "pyhton.html";
}
function goToIntro3() {
  window.location.href = "javaScript.html";
}
function goToIntro4() {
  window.location.href = "css.html";
}
function goToIntro5() {
  window.location.href = "html.html";
}


const scrollRevealOption = {
     distance: "50px",
     origin: "bottom",
     duration: 1000,
  };
  
  ScrollReveal().reveal(".subjects-grid", {
     ...scrollRevealOption,
     delay: 500,
     interval:500,
  });
  ScrollReveal().reveal(" .subject-card", {
     ...scrollRevealOption,
     delay: 500,
     interval:500,
  });