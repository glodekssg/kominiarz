document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const contactButton = document.getElementById('contactButton');
    const closeModal = document.getElementById('closeModal');
  
    contactButton.addEventListener('click', function() {
      modal.classList.remove('hidden');
    });
  
    closeModal.addEventListener('click', function() {
      modal.classList.add('hidden');
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
  