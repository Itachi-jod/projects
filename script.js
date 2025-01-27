// script.js
function filterCategory(category) {
  const projectCards = document.querySelectorAll('.project-card');
  
  if (category === 'all') {
    projectCards.forEach(card => card.style.display = 'block');
  } else {
    projectCards.forEach(card => {
      if (card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
}
