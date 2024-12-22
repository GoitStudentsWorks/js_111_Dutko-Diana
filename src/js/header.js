const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');

menu.addEventListener('click', onClick);
document.addEventListener('click', onDocumentClick);

function onClick(event) {
  event.preventDefault();
  menuList.classList.toggle('is-hidden');
  const links = document.querySelectorAll('.menu-list a');
  links.forEach(link => {
    link.addEventListener('click', handleClicks);
  });
}

function onDocumentClick(event) {
  if (!menu.contains(event.target) && !menuList.contains(event.target)) {
    menuList.classList.add('is-hidden');
  }
}

function handleClicks(event) {
  event.preventDefault();
  const sectionId = event.target.getAttribute('href').substring(1);
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  menuList.classList.add('is-hidden');
}
