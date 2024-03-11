
export function toDutchDate (time) {
    const longOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return time.toLocaleDateString('nl-NL', longOptions)
}

console.log(toDutchDate("2023-09-21T09:30:00Z"))

