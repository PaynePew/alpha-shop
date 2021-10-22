const nextBtn = document.querySelector('')






function toggleTheme(){
  // Default to light theme, since that is starting theme
  window.theme = typeof(window.theme)==='string' ? window.theme : 'theme-light';
  var switchToTheme = window.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
  window.theme = switchToTheme;
  document.querySelector('body').setAttribute('class',switchToTheme);
}