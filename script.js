const projectFrames = document.querySelectorAll('.project-frame');
const aboutBtn = document.getElementById('about-btn');

projectFrames.forEach((frame) => {
  frame.addEventListener('click', (event) => {
    projectFrames.forEach((f) => f.classList.remove('project-frame--selected'));
    frame.classList.add('project-frame--selected');

    const href = frame.dataset.href;
    if (!href || href === '#') {
      event.preventDefault();
    }
  });
});

if (aboutBtn) {
  aboutBtn.addEventListener('click', (event) => {
    event.preventDefault();
  });
}
