// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(element => {
        return element.director
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesSteven = moviesArray.filter( (stevenSpielberg) => {
        return stevenSpielberg.director === "Steven Spielberg" && stevenSpielberg.genre.includes("Drama")
        }
    )
    return moviesSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const arr = moviesArray.map(element => {
        if (element.score === undefined) {
            return 0
        }
        return element.score
    })
    if (arr.length === 0) {
        return 0
    }
    const notes = arr.reduce((accumulator, element) => {
        return element + accumulator
    })
    avg = notes/arr.length
    return Math.round(avg * 100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const arr0 = moviesArray.filter((element) => {
        return element.genre.includes("Drama")
    })

    if (arr0.length === 0) {return 0}

    const arr = arr0.map(element => {
        if (element.score === undefined) {
            return 0
        }
        return element.score
    })

    const notes = arr.reduce((accumulator, element) => {
        return element + accumulator
    })
    avg = notes/arr.length
    return Math.round(avg * 100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arr = moviesArray.map(element => {
        return element
    })
    arrNumericSorted = arr.sort((a, b) => {
        return a.year - b.year || a.title.localeCompare(b.title) 
    })
    
    return arrNumericSorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const arr = moviesArray.map(element => {
        return element.title
    })
    arrAlphabetSorted = arr.sort()
    return arrAlphabetSorted.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArray = [... moviesArray]
    const arr = newArray.map(element => {
        let cleanNumber = element.duration.replace("h", "").replace("min", "");

        let arrNumber = cleanNumber.split(" ");

        if (arrNumber[0] === undefined) {arrNumber[0] = 0}
        else if (arrNumber[1] === undefined) {arrNumber[1] = 0}
        
        element.duration = parseInt(arrNumber[0])*60 + parseInt(arrNumber[1])
        return element
    })
    return arr
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    return moviesArray.map(element => {
        element.score
    })
}
