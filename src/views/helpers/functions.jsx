export const CapitalizeFirstLetter = (text) => {
    var result = text.charAt(0).toUpperCase() + text.slice(1);
    return result;
}