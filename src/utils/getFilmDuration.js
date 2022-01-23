const getFilmDuration = (runningTime) => {
    const beautify = (number) => {
        return number < 10 
            ? `0${number}` 
            : number;
    };

    const hours = beautify(Math.floor(runningTime / 60));
    const minutes = beautify(Math.floor(runningTime % 60));

    return `${hours}:${minutes}`;
};

export default getFilmDuration;