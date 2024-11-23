function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

function openModal(memberId) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
      modal.style.display = 'none';
  });
  const modal = document.getElementById('modal-' + memberId);
  modal.style.display = 'flex';  
  document.body.style.overflow = 'hidden'; 
}

function closeModal(memberId) {
  const modal = document.getElementById('modal-' + memberId);
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';  
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
      document.body.style.overflow = 'auto';
  }
}
