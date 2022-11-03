function SecondsToTime(seconds) {
    return new Date(1000 * seconds)
    .toISOString()
    .substr(14, 5)
}

export {SecondsToTime}