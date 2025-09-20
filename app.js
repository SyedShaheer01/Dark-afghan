document.querySelectorAll('.img-box').forEach(box => {
  box.addEventListener('click', () => {
    document.querySelectorAll('.img-box').forEach(b => b.classList.remove('active'));
    box.classList.add('active');
  });
});


