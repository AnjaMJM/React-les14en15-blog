export function createNewDateStamp() {
    const createNewDate = new Date()
    return createNewDate.toISOString()
}

console.log(createNewDateStamp())