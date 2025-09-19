document.querySelectorAll('.img-box').forEach(box => {
  box.addEventListener('click', () => {
    // pehle sab box se active hatao
    document.querySelectorAll('.img-box').forEach(b => b.classList.remove('active'));
    // jis box pe click hua usme active class lagao
    box.classList.add('active');
  });
});