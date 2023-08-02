/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

          addForm.addEventListener('submit', (event) => {
            event.preventDefault();

            let newFilm = addInput.value;
            const favorite = checkbox.checked;

            if (newFilm) {
                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`; 
                };

                if (favorite) {
                    console.log('Добавляем любимый фильм');
                }
                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);
    
                createMovieList(movieDB.movies, movieList);
            }

            event.target.reset();
          });
    
    const deleteAvd = (arr) => {
        arr.forEach(item => {
            item.remove();
        }); 
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    }
    
    function createMovieList (films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);
            })
        });
    }

    deleteAvd(adv);
    createMovieList(movieDB.movies, movieList);
    makeChanges();
    sortArr(movieDB.movies);
    
});

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//                   b = +prompt('На сколько оцените его?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('DONE!');
//             } else {
//                 console.log('Error!');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count <  30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман"); 
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 0; i < 2; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');

//             if (genre === '' || genre == null) {
//                 console.log('Введено не коректние данние');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };




// const areaOrPerimeter = function(l , w) {
//     if (l === w) {
//         return l * w;
//     } else {
//         return (l + w) * 2;
//     }
//   };

function XO(str) {
    str.toLowerCase();
    countX = 0;
    countO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'x') {
            countX++;
        } else if (str[i] == 'o') {
            countO++;
        } else {
            continue;
        }
    }

    if (countX == countO) {
        return true;
    } else {
        return false;
    }
}

console.log(XO('xxOo'))

function calculateYears(principal, interest, tax, desired) {
    let calc = 0;
    let years = 1;
    while (calc < desired) {
        calc += ((principal * interest) - (principal * interest * tax)) + principal;
            years++;
    }
    return years;   
}

console.log(calculateYears(1000,0.01625,0.18,1200))