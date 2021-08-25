// TODO: Clean this up once the event listeners are fitted with DRY principle
const projectCard = document.getElementsByClassName('project');
const projectCardButton = document.getElementsByClassName('button');
const closeButtonCard = document.getElementsByClassName('project-close');
const projectSection = document.getElementById('overlay');
const selectionButtons = document.getElementsByClassName('category-item');

function filterCategories(e) {
  const categories = document.querySelectorAll("#project-grid li");
  let filter = e.target.dataset.filter;

  if (filter === '*') {
    categories.forEach(category => category.classList.remove('hidden'));
  } else {
    categories.forEach(category => {
      category.classList.contains(filter) ? category.classList.remove('hidden') : category.classList.add('hidden')
    });
  }
}

/* =====================================================
                Toggles the active button.
   =====================================================*/ 
Array.from(selectionButtons).forEach(function (element) {
  element.addEventListener('click', () => {
    let current = document.getElementsByClassName('active');

    current[0].classList.remove("active");
    element.classList.add('active');
  });

});


/* =====================================================
                Opens the project card
   =====================================================*/ 
// TODO: Refactor this code, it's terrible Javascript.
let firstCounter = 0;
let secondCounter = 0;

Array.from(projectCardButton).forEach(function (element) {
  let x = projectCardButton[firstCounter].id = firstCounter;

  firstCounter++;
  element.addEventListener('click', () => {
    projectSection.style.visibility = 'visible';
    projectCard[x].style.display = 'block';
  })
});

/* =====================================================
            This is to close a project card
   =====================================================*/ 
Array.from(closeButtonCard).forEach(function (element) {
  let x = closeButtonCard[secondCounter].id = secondCounter;
  secondCounter++

  element.addEventListener('click', () => {
    projectCard[x].style.display = 'none';
    projectSection.style.visibility = 'hidden';
  });
});


/* =====================================================
            This is for hovering on 'about me'
   =====================================================*/ 
const testVariable = document.getElementsByClassName('hoverable');
let aboutMeBackground = document.getElementById("about-me-background");
let imageInside = document.getElementById("img-content");


Array.from(testVariable).forEach((element) => {
  element.addEventListener('mouseover', () => {
    changeBackground(element);
  });
});

// TODO Change to a more dynamic solution.
function changeBackground(element) {
  const classList = element.classList;

  if (classList.contains("spigot")) {
    imageInside.src = "images/about-me/villager.gif";
    aboutMeBackground.style.background = "linear-gradient(270deg, #f19a1a, #ed8106)";
    // imageInside.src = "images/about-me/villager.gif";
  } else if (classList.contains("eh")) {
    aboutMeBackground.style.background = "linear-gradient(270deg, #f44881, #ec454f)";
    imageInside.src = "images/about-me/alternative.jpg";
  } else if (classList.contains("ai")) {
    aboutMeBackground.style.background = "linear-gradient(270deg,#21c8f6,#637bff)"; // aboutMeBackground.style.background ="linear-gradient(270deg,#f44881,#ec454f)";
    imageInside.src = "images/about-me/machine-learning-img.jpg";
  } else if (classList.contains("formula")) {
    aboutMeBackground.style.background = "linear-gradient(270deg, #004C6C,  #223971)"
    imageInside.src = "images/about-me/rbr.gif";
  } else if (classList.contains("future")) {
    aboutMeBackground.style.background = "linear-gradient(270deg, #6edcc4, #1aab8b)";
    imageInside.src = "images/about-me/futureimg.jpg";
  } else if (classList.contains("self")) {
    imageInside.src = "images/about-me/self.jpg";
    // return to default
  }
}