'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [], 
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How many movies have you watched?');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you watched?');
        }
    },
    validStrInput: function (str) {
        return str !== null && str.trim().length > 0 && str.length <= 50;
    },
    validNumInput: function (num) {
        return num !== null && !isNaN(num) && num !== 0;
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const movie = prompt('What was the last movie you watched?', '');
            const rating = +prompt('How much do you rate it?');

            if (this.validStrInput(movie) && this.validNumInput(rating)) {
                personalMovieDB.movies[movie] = rating;
            } else {
                console.log('Error')
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count <= 10) {
            console.log('Watched quite a few films.');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are a classic viewer.');
        } else if (personalMovieDB.count > 30) {
            console.log('You are a movie buff.');
        } else {
            console.log('error');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            const favoriteGenre = prompt(`Your favorite genre at number ${i}`);

            if (this.validStrInput(favoriteGenre)) {
                personalMovieDB.genres.push(favoriteGenre);
            } else {
                i--;
            }
        }
        this.genres.forEach((e, i) => console.log(`Your favorite genre at number ${i + 1} - ${e}`));
    },
};

// const adv = document.querySelectorAll('.promo__adv img');
// adv.forEach(e => e.remove());

// const janre = document.querySelector('.promo__genre');
// janre.innerHTML = `ДРАМА`;

// const bg = document.querySelector('.promo__bg');
// bg.style.backgroundImage = "url('../img/bg.jpg')";

// const moviess = ['Liga of Honor', 'La-la-lend', 'Oder', 'Pilligrim', 'Logan'].sort();

// const m = document.querySelectorAll('.promo__interactive-item');
// m.forEach((e, index) => e.textContent = `${index + 1} ${moviess[index]}`);

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => alert('Second click!!'));
// btn.addEventListener('mouseenter', () => console.log('Hover'))

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();