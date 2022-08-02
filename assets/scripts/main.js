(() => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav');
  const items = [
    {
      templateString: `<img src="./assets/images/icon-close.svg" alt="Fechar Menu" />`,
      ariaLabel: 'Fechar Menu',
    },
    {
      templateString: `<img src="./assets/images/icon-menu.svg" alt="Menu" />`,
      ariaLabel: 'Menu',
    }
  ];
  const gallery = [
    { image: 'tenis-1-galeria.png', ampliado: `./assets/images/tenis-1-ampliado.png` },
    { image: 'tenis-2-galeria.png', ampliado: `./assets/images/tenis-2-ampliado.png` },
    { image: 'tenis-3-galeria.png', ampliado: `./assets/images/tenis-3-ampliado.png` }
  ];
  let templateString;

  const principalImage = document.querySelector('.principal img');
  const images = document.querySelectorAll('.gallery img');

  menu.addEventListener('click', handleMenu);

  function handleMenu() {
    nav.classList.toggle('close');
    menu.removeChild(menu.lastElementChild);
    if (!nav.classList.contains('close')) {
      showCloseMenuIcon();
    } else {
      showMenuIcon();
    }
    menu.innerHTML = templateString;
  }

  function showMenuIcon() {
    templateString = items[1].templateString;
    menu.ariaLabel = items[1].ariaLabel;
  }

  function showCloseMenuIcon() {
    templateString = items[0].templateString;
    menu.ariaLabel = items[0].ariaLabel;
  }

  images.forEach((image) => image.addEventListener('click', () => handleChangeImage(image)))

  function handleChangeImage(image) {
    for (let i = 0; i < gallery.length; i++) {
      if (image.src.includes(gallery[i].image)) {
        principalImage.src = gallery[i].ampliado;
        image.classList.add('marker');
        removeImageMarker(image);
      }
    }
  }

  function removeImageMarker(image) {
    images.forEach(img => {
      if (img !== image) {
        img.classList.remove('marker');
      }
    })
  }
})()