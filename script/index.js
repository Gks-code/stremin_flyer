// Transições suaves ao passar o mouse sobre os produtos
document.querySelectorAll('.produto').forEach(produto => {
    produto.addEventListener('mouseover', () => {
      produto.style.transform = 'translateY(-10px)';
    });
    produto.addEventListener('mouseout', () => {
      produto.style.transform = 'translateY(0)';
    });
  });
  