
document.addEventListener('DOMContentLoaded', function() {

  const yearSpan = document.createElement('span');
  yearSpan.textContent = new Date().getFullYear();
  document.querySelector('footer p').innerHTML = `© ${yearSpan.textContent} 6xbloodknight. All rights reserved.`;
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
});

function initSupportPage() {
  if (!document.querySelector('.support-options')) return;
  

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const address = this.getAttribute('data-address');
      navigator.clipboard.writeText(address).then(() => {
        const originalText = this.textContent;
        this.textContent = 'Copied!';
        this.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
          this.textContent = originalText;
          this.style.backgroundColor = '';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  });
}


document.addEventListener('DOMContentLoaded', initSupportPage);
