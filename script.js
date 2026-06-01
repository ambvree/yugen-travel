function filter(category) {
  const cards = document.querySelectorAll('.tour-card');

  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 250);
    }
  });
}

function openModal(tourName) {
  const modal = document.getElementById('modal');
  const title = document.getElementById('tourName');

  if (modal && title) {
    title.textContent = tourName;
    modal.style.display = 'flex';
  }
}

function closeModal() {
  const modal = document.getElementById('modal');

  if (modal) {
    modal.style.display = 'none';
  }
}

window.addEventListener('click', function(event) {
  const modal = document.getElementById('modal');

  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Спасибо! Ваша заявка отправлена ✿');
    contactForm.reset();
  });
}