import { pedirCarta } from "./get-card";
import { valorCarta } from "./card-value";
import { crearCartaHtml } from "./create-card-html";
import Swal from "sweetalert2";

/**
 * Turno IA
 * @param {Number} puntosMinimos 
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 * @param {Array<String>} deck 
*/
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('puntosMinimos es necesario')
    if (!puntosHTML) throw new Error('puntosHTML es necesario')

    let puntosComputadora = 0;

    do {

        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append(imgCarta);
        setTimeout(() => {
            imgCarta.classList.add('entrada');
        }, 150);


        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            Swal.fire({
                title: 'Empate!',
                text: 'Nadie Gana',
                icon: 'warning',
                confirmButtonText: 'Continuar'
            })

        } else if (puntosMinimos > 21) {
            Swal.fire({
                title: 'Derrota!',
                text: 'Gana la computadora',
                icon: 'error',
                confirmButtonText: 'Continuar'
            })
        } else if (puntosComputadora > 21) {
            Swal.fire({
                title: 'Victoria!',
                text: 'Gana el jugador',
                icon: 'success',
                confirmButtonText: 'Continuar'
            })
        } else {
            Swal.fire({
                title: 'Derrota!',
                text: 'Gana la computadora',
                icon: 'error',
                confirmButtonText: 'Continuar'
            })
        }
    }, 300);
}
