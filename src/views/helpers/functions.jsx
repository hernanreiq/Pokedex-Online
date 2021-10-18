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

export const PokemonImage = (PokemonType) => {
    var result = '';
    switch (PokemonType) {
        case 'Normal':
            result = 'https://cdn2.bulbagarden.net/upload/9/95/Normal_icon_SwSh.png';
            break;
        case 'Fighting':
            result = 'https://cdn2.bulbagarden.net/upload/3/3b/Fighting_icon_SwSh.png';
            break;
        case 'Flying':
            result = 'https://cdn2.bulbagarden.net/upload/b/b5/Flying_icon_SwSh.png';
            break;
        case 'Poison':
            result = 'https://cdn2.bulbagarden.net/upload/8/8d/Poison_icon_SwSh.png';
            break;
        case 'Ground':
            result = 'https://cdn2.bulbagarden.net/upload/2/27/Ground_icon_SwSh.png';
            break;
        case 'Rock':
            result = 'https://cdn2.bulbagarden.net/upload/1/11/Rock_icon_SwSh.png';
            break;
        case 'Bug':
            result = 'https://cdn2.bulbagarden.net/upload/9/9c/Bug_icon_SwSh.png';
            break;
        case 'Ghost':
            result = 'https://cdn2.bulbagarden.net/upload/0/01/Ghost_icon_SwSh.png';
            break;
        case 'Steel':
            result = 'https://cdn2.bulbagarden.net/upload/0/09/Steel_icon_SwSh.png';
            break;
        case 'Fire':
            result = 'https://cdn2.bulbagarden.net/upload/a/ab/Fire_icon_SwSh.png';
            break;
        case 'Water':
            result = 'https://cdn2.bulbagarden.net/upload/8/80/Water_icon_SwSh.png';
            break;
        case 'Grass':
            result = 'https://cdn2.bulbagarden.net/upload/a/a8/Grass_icon_SwSh.png';
            break;
        case 'Electric':
            result = 'https://cdn2.bulbagarden.net/upload/7/7b/Electric_icon_SwSh.png';
            break;
        case 'Psychic':
            result = 'https://cdn2.bulbagarden.net/upload/7/73/Psychic_icon_SwSh.png';
            break;
        case 'Ice':
            result = 'https://cdn2.bulbagarden.net/upload/1/15/Ice_icon_SwSh.png';
            break;
        case 'Dragon':
            result = 'https://cdn2.bulbagarden.net/upload/7/70/Dragon_icon_SwSh.png';
            break;
        case 'Dark':
            result = 'https://cdn2.bulbagarden.net/upload/d/d5/Dark_icon_SwSh.png';
            break;
        case 'Fairy':
            result = 'https://cdn2.bulbagarden.net/upload/c/c6/Fairy_icon_SwSh.png';
            break;
        default:
            result = 'https://cdn2.bulbagarden.net/upload/9/95/Normal_icon_SwSh.png';
    }
    return result;
}

export const ColStyles = (PokemonTypesLength) => {
    var result = '';
    if (PokemonTypesLength === 1) {
        result = 'col-md-12';
    } else if (PokemonTypesLength === 2) {
        result = 'col-md-6';
    } else {
        result = 'col-md-4';
    }
    return result;
}