///пошук ////////////////////////////////////////////////////////////////////////////////
// Знаходження елементів
const searchForm = document.querySelector('.search form');
const searchInput = document.querySelector('.search input[type="text"]');

// Додавання події натискання на кнопку пошуку
searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Відміна стандартної поведінки форми
  const searchTerm = searchInput.value.trim(); // Отримання значення пошукового запиту
  if (searchTerm !== '') {
    // Якщо поле пошуку не пусте, ви можете виконати ваш пошук тут
    console.log('Пошук:', searchTerm);
    // Додайте вашу логіку пошуку тут
  }
});



/****************************************************************************************************** */
AOS.init();



/*****************************************ТУРИ СТОРІНКА************************************************************* */
// Функція для переключення між категоріями
function changeCategory(event) {
  const category = event.target.closest('.category');
  if (!category) return;

  // Отримання типу категорії з даних
  const type = category.getAttribute('data-type');

  // Відобразити тільки тури, що відповідають вибраній категорії
  const tours = document.querySelectorAll('.jewelry');
  tours.forEach(tour => {
      const tourType = tour.getAttribute('data-type');
      if (type === 'all' || type === tourType) {
          tour.style.display = 'block';
      } else {
          tour.style.display = 'none';
      }
  });
}

// Додати обробник подій для кожної категорії
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
  category.addEventListener('click', changeCategory);
});





/****************************************************************************************************** */

document.querySelectorAll('.heart').forEach(item => {
  item.addEventListener('click', event => {
      item.classList.toggle('red-heart');
  });
});

/************************************************************************************************ */
// Отримуємо посилання на модальне вікно та іконку особистого кабінету
var modal = document.getElementById("registrationModal");
var icon = document.getElementById("personalAccountIcon");

// При кліку на іконку відкриваємо модальне вікно
icon.onclick = function() {
    modal.style.display = "block";
}

// При кліку на "х" закриваємо модальне вікно
var closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Закриваємо модальне вікно, якщо користувач клікне поза ним
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const aLink = document.getElementById('a-link');
const bLink = document.getElementById('b-link');
const aContaine = document.getElementById('a-containe');
const bContaine = document.getElementById('b-containe');

aLink.addEventListener('click', (e) => {
    e.preventDefault();
    aContaine.style.display = 'none';
    bContaine.style.display = 'block';
});

bLink.addEventListener('click', (e) => {
    e.preventDefault();
    bContaine.style.display = 'none';
    aContaine.style.display = 'block';
});






var heart = document.querySelector('.heart');
var isClicked = false;

heart.addEventListener('click', function() {
  // Змініть колір серця
  if (!isClicked) {
    heart.style.fill = 'crimson'; // Якщо серце не натиснуто, змініть колір на темно-червоний
    isClicked = true; // Позначте серце як натиснуте
  } else {
    heart.style.fill = 'red'; // Якщо серце вже натиснуто, залиште колір червоний
    isClicked = false; // Позначте серце як не натиснуте
  }
});
