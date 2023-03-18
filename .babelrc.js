module.exports = function (api){ //Manera de usar para convertir a emsc 5
    api.cache(true);
    const presets = ["@babel/preset-env"];
    return {
        presets
    }
}
