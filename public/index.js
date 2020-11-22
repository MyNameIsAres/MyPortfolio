const projectCard = document.getElementsByClassName('project');
const projectCardButton = document.getElementsByClassName('button');
const closeButtonCard = document.getElementsByClassName('project-close');
const projectSection = document.getElementById('overlay');

let projectThumbnail = document.getElementsByClassName('thumbnail');
let selectionButtons = document.getElementsByClassName('category-item');

const x = document.getElementById('toggle');
console.log(x);
x.addEventListener('click', () => {
});

console.log("I WORK FINE NO WORRIES");

filterSelection("all");
function filterSelection(category) {
  if (category == "all") category = "";
  for (let i = 0; i < projectThumbnail.length; i++) {
    w3RemoveClass(projectThumbnail[i], "show");
    if (projectThumbnail[i].className.indexOf(category) > -1) w3AddClass(projectThumbnail[i], "show");
    console.log(projectThumbnail[i].classList);
}
}

function w3AddClass(element, name) {
    console.log("Trying to add");
  let firstArray = element.className.split(" ");
  let secondArray = name.split(" ");
  for (let i = 0; i < secondArray.length; i++) {
    if (firstArray.indexOf(secondArray[i]) == -1) {element.className += " " + secondArray[i];}
    console.log(" I am first array" + firstArray);
    console.log(" I am second array: " + secondArray);
}
}

function w3RemoveClass(element, name) {
  let firstArray = element.className.split(" ");
  let secondArray = name.split(" ");
  for (let i = 0; i < secondArray.length; i++) {
    while (firstArray.indexOf(secondArray[i]) > -1) {
      firstArray.splice(firstArray.indexOf(secondArray[i]), 1);     
    }
  }
  element.className = firstArray.join(" ");
}

Array.from(selectionButtons).forEach(function(element) {

    element.addEventListener('click', () => {
        let current = document.getElementsByClassName('active');
//         console.log(current + " I am current");
//         console.log(current[0] + " I am also a current")

    console.log(current[0].className + " I am current");
        // current.className.replace("active", "")
        current[0].classList.remove("active");

        // current.className.replace("active", "");
        
        // console.log(current[0].classList);
        element.classList.add('active');

        // console.log()
    });

});


let firstCounter = 0;
let secondCounter = 0;






Array.from(projectCardButton).forEach(function (element) {

    let x = projectCardButton[firstCounter].id = firstCounter;

    firstCounter++;
    console.log("ppppppppppppppp");
    element.addEventListener('click', () => {
        console.log("lsdajfaslkfj");
        projectSection.style.visibility = 'visible';
        projectCard[x].style.display = 'block';
    })
});


Array.from(closeButtonCard).forEach(function (element) {
    let x = closeButtonCard[secondCounter].id = secondCounter;
    secondCounter++

    element.addEventListener('click', () => {
        console.log("lsdajfaslkfj");

        projectCard[x].style.display = 'none';
        projectSection.style.visibility = 'hidden';


    });
});