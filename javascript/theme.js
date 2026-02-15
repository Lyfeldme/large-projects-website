(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!themeToggle) {
      console.warn('Элемент #theme-toggle не найден');
      return;
    }
    
    const body = document.body;
    
    try {
      const savedTheme = localStorage.getItem('darkTheme');
      if (savedTheme === 'true') {
        themeToggle.checked = true;
        body.classList.add('dark-theme');
      }
    } catch (e) {
      console.warn('Ошибка доступа к localStorage:', e);
    }
    
    themeToggle.addEventListener('change', function() {
      try {
        if (this.checked) {
          body.classList.add('dark-theme');
          localStorage.setItem('darkTheme', 'true');
        } else {
          body.classList.remove('dark-theme');
          localStorage.setItem('darkTheme', 'false');
        }
      } catch (e) {
        console.warn('Ошибка сохранения темы:', e);
      }
    });
  });
})();