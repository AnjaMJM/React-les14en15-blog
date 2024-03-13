
export function toDutchDate (time) {
    const longOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    //Via 'time' komt er een string binnen. Deze moet eerst omgezet worden in een datum via onderstaande variabele.
    const date = new Date(time)
    return date.toLocaleDateString('nl-NL', longOptions)

}

console.log(toDutchDate("2023-09-21T09:30:00Z"))

