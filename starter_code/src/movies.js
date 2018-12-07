/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage (arr){
  let averageRate = arr.reduce(function(sum, movie){
    return sum + parseFloat(movie.rate);
  }, 0);
  return Math.round(averageRate / arr.length * 100) / 100
}

// Get the average of Drama Movies
function dramaMoviesRate(crymovies) {
  let letscry = crymovies.filter(function(crymovies){
    return crymovies.genre.indexOf("Drama") !== -1;
  });
  
  if (letscry.length === 0){
    return undefined;
    } else {
      let rateDrama = letscry.map(function(drama) {
        if (drama.rate === "") {
          drama.rate = 0;
        }
        return drama
      });
      let averageDrama = ratesAverage(rateDrama);
      return averageDrama
  }
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  
  let order = movies.sort(function (firstMovie, secondMovie) {
  if (firstMovie.duration === secondMovie.duration){
    if (firstMovie.title < secondMovie.title) {
      return -1
    } else {
      return 1
    }
  } else if (firstMovie.duration < secondMovie.duration) {
      return -1;
    } else {
      return 1;
    }
  });
  return order;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies (movies) {
  let steven = movies.filter(function(movies) {
    return movies.director === 'Steven Spielberg'
  });

  let letscrysteven = steven.filter(function(steven){
    return steven.genre.indexOf("Drama") !== -1;
  });

    if (movies.length === 0) {
      return undefined
    } else if (steven.length === 0) {
      return 'Steven Spielberg directed 0 drama movies!'
    } else {
      return `Steven Spielberg directed ${letscrysteven.length} drama movies!`;
    }
}

// Order by title and print the first 20 titles

function orderAlphabetically (movies) {
  let order = movies.sort(function (firstMovie, secondMovie) {
    if (firstMovie.title > secondMovie.title) {
      return 1;
    } else if (firstMovie.title < secondMovie.title) {
      return -1;
    } else {
      return 0;
    }
  });
  
  return order.map(function (movies) {
    return movies.title
  }).slice(0, 20);
}

// Best yearly rate average

function bestYearAvg (movies) {
 // MUY IMPORTANTE: Ver moviesByYear[movie.year] como crear keys de objeto!
  let moviesByYear = {}
  let max = 0;
  let yearMAx = '';
   // Recorremos el array, creamos la key con el AÑO numérico de la pelicula y guardamos los rates de ese año en el array del mismo.
    movies.forEach(function(movie) {
      if (moviesByYear[movie.year] === undefined) {
        moviesByYear[movie.year] = []; // Repasar esto, como crear objetos en array. Entre los primeros [] se crea la key del objeto.
        moviesByYear[movie.year].push(parseFloat(movie.rate));
      } else {
        moviesByYear[movie.year].push(parseFloat(movie.rate));
      }
    });

    for (let year in moviesByYear) { // Recorrer objeto.
      let sumOfRates = moviesByYear[year].reduce(function(acc, rate) {
        return acc + rate;
      });
      let avg = sumOfRates / moviesByYear[year].length;
      moviesByYear[year] = avg;
      if (max < moviesByYear[year]) {
        max = moviesByYear[year];
        yearMAx = year;
      }
    }
  return {
    rate: max, 
    year: yearMAx
  }
}
