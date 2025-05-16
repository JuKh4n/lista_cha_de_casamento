function criarNavbar() {
  const navbarContainer = document.getElementById('navbar-container');

  navbarContainer.innerHTML = `
    <nav class="navbar">
      <ul>
        <li><a href="#" data-target="lista" class="active">Lista de Presentes</a></li>
        <li><a href="#" data-target="sugestoes">Sugestões</a></li>
        <li><a href="#" data-target="contato">Contato</a></li>
      </ul>
    </nav>
  `;

  const links = navbarContainer.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      
      document.querySelectorAll('section').forEach(sec => {
        sec.classList.add('section-hidden');
        sec.classList.remove('section-active');
      });

      // Mostra a seção selecionada
      const targetId = link.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if(targetSection){
        targetSection.classList.remove('section-hidden');
        targetSection.classList.add('section-active');
      }

    
      if (targetId === "lista") {
        document.getElementById("titulo-lista").style.display = "block";
      } else {
        document.getElementById("titulo-lista").style.display = "none";
      }
    });
  });
}


document.addEventListener('DOMContentLoaded', criarNavbar);
