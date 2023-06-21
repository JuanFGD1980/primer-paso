const subirButtons = document.querySelectorAll('.subir');
    const bajarButtons = document.querySelectorAll('.bajar');
    const lista = document.getElementById('lista');

    subirButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const li = button.parentNode;
        const prevLi = li.previousElementSibling;

        if (prevLi) {
          lista.insertBefore(li, prevLi);
        }
      });
    });

    bajarButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const li = button.parentNode;
        const nextLi = li.nextElementSibling;

        if (nextLi) {
          lista.insertBefore(nextLi, li);
        }
      });
    });