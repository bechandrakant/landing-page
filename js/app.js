const fragment = document.createDocumentFragment();

function addListItem(label, targetLink) {
  const listItem = document.createElement("li");
  const anchorTag = document.createElement("a");
  anchorTag.setAttribute("href", targetLink);
  anchorTag.innerText = label;
  listItem.appendChild(anchorTag);
  fragment.appendChild(listItem);
}

for (let i = 1; i < 5; i++) {
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
  let distanceFromTop = window.scrollY;

  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= distanceFromTop &&
      section.offsetTop + section.offsetHeight > distanceFromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
