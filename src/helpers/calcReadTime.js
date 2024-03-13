export function calcReadTime(content) {

    const readWPM = 200;
    let numOfWords = content.split(" ").length;

    return Math.ceil(numOfWords/readWPM)

}

