

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched?');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function validStrInput(str) {
    return str !== null && str.trim().length > 0 && str.length <= 50;
}

function validNumInput(num) {
    return num !== null && !isNaN(num) && num !== 0;
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const movie = prompt('What was the last movie you watched?', '');
        const rating = +prompt('How much do you rate it?');
      
        if (validStrInput(movie) && validNumInput(rating)) {
          personalMovieDB.movies[movie] = rating;
        } else {
          console.log('Error')
          i--; 
        }
      }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('Watched quite a few films.');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are a classic viewer.');
    } else if (personalMovieDB.count > 30) {
        console.log('You are a movie buff.');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const favoriteGenre = prompt(`Your favorite genre at number ${i}`);

        if (validStrInput(favoriteGenre)) {
            personalMovieDB.genres.push(favoriteGenre);
        } else {
            i--;
        }
    }
}

writeYourGenres();