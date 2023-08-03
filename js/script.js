/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt('How many movies have you watched?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
  const movie = prompt('What was the last movie you watched?', '');
  const rating = +prompt('How much do you rate it?');
  const validMovie = movie !== null && movie.trim().length > 0 && movie.length <= 50;
  const validRating = rating !== null && !isNaN(rating);

  if (validMovie && validRating) {
    personalMovieDB.movies[movie] = rating;
  } else {
    console.log('Error')
    i--; 
  }
}

if (personalMovieDB.count <= 10) {
    console.log('Watched quite a few films.');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are a classic viewer.');
} else if (personalMovieDB.count > 30) {
    console.log('You are a movie buff.');
} else {
    console.log('error');
}

console.log(personalMovieDB)