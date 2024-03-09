
export function toDutchDate (time) {
    const longOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return time.toLocaleDateString('nl-NL', longOptions)
}

