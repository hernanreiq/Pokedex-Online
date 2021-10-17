import axios from "axios";

export const GetPokemon = async (name_ID) => {
    var result = {};
    await axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${name_ID}/`
    })
    .then(res => {
        result = {
            data: res.data,
            err: false
        };
    })
    .catch(err => {
        result = {
            data: err,
            err: true
        };
    })
    return result;
}