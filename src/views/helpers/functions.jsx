export const CapitalizeFirstLetter = (text) => {
    var result = text.charAt(0).toUpperCase() + text.slice(1);
    return result;
}

export const TransformTextStrings = (text) => {
    var result = '';
    var ability = text.charAt(0).toUpperCase() + text.slice(1);
    ability = ability.split('-');
    for (var i = 0; i < ability.length; i++) {
        if ((i + 1) < ability.length) {
            result += ability[i] + ' ';
        } else {
            result += ability[i];
        }
    }
    return result;
}