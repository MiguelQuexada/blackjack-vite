import _ from 'underscore';


/**
 * 
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>}  New card deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta === 0) throw new Error('tipoDeCarta es obligatorio');


    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}