document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.navbar__burger-btn');
    const navbarList = document.querySelector('.navbar__list');
    const navbarItems = document.querySelectorAll('.navbar__item--has-submenu');
    const submenuItems = document.querySelectorAll('.navbar__submenu-item--has-submenu');
    const quizItems = document.querySelectorAll('.navbar__submenu-item--has-submenu-lowest');

    burgerBtn.addEventListener('click', () => {
      navbarList.classList.toggle('active');
    });

    const closeNavbarItems = () => {
      navbarItems.forEach(item => {
        item.classList.remove('active');
      });
    }

    const closeSubmenuItems = () => {
      submenuItems.forEach(item => {
        item.classList.remove('active');
      })
    }

    const closeQuizItems = () => {
      quizItems.forEach(item => {
        item.classList.remove('active');
      })
    }
  
    navbarItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = item.classList.contains('active');
        closeNavbarItems();
        if(!isActive) {
          item.classList.add('active');
        }
      });
    });

    submenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          const isActive = item.classList.contains('active');
          closeSubmenuItems();

          if(!isActive) {
            item.classList.add('active');
          }
        });
    });

    quizItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = item.classList.contains('active');
        closeQuizItems();

        if(!isActive) {
          item.classList.add('active');
        }
      })
    })
  
    document.addEventListener('click', (e) => {
      if(!navbarList.contains(e.target)) {
        closeNavbarItems();
      }

      if(!Array.from(submenuItems).some(item => item.contains(e.target))) {
        closeSubmenuItems();
      }
    })
  });