const fragment = document.createDocumentFragment();

function addListItem(label, targetLink) {
  const listItem = document.createElement("li");
  const anchorTag = document.createElement("a");
  anchorTag.setAttribute("href", targetLink);
  anchorTag.innerText = label;
  listItem.appendChild(anchorTag);
  fragment.appendChild(listItem);
}

// add 4 navigation list items
for (let i = 1; i <= 4; i++) {
  addListItem("Section" + i, "#section-" + i);
}

const navLinks = document.getElementById("nav-list");
navLinks.appendChild(fragment);

//Change navigation style on scroll
window.addEventListener('scroll', event => {
  let nav = document.querySelector('nav');

  (window.scrollY >= document.getElementById("nav-list").getAttribute("height")) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});

//toggle active navigation on scroll
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('nav ul li a');

  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    let sectionTopPosition = section.offsetTop;
    let sectionHeight = section.offsetHeight;

    // padding value is added to adjust frame due to padding
    // 50 and 90 are padding top value on large and small screen
    let padding = (window.innerWidth > 500) ? 50 : 90;
    let scrollPosition = window.scrollY + padding;

    // If section is in frame (check using scrollPosition)
    // frame is rectangular box from section top position to section top position plus height of section
    if (sectionTopPosition <= scrollPosition &&
      sectionTopPosition + sectionHeight >= scrollPosition) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
