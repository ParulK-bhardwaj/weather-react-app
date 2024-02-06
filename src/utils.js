function getUnits (unit, type) {
    switch (unit) {
        case "metric":
            return type === "temp" ? "℃" : "meter/sec";
        case "imperial":
            return type === "temp" ? "℉" : "miles/hour";
        case "standard":
            return type === "temp" ? " Kelvin" : "meter/sec";
        default:
            return type === "temp" ? "℃" : "meter/sec";
    }
}

function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { getUnits, capitalizeFirstLetter };