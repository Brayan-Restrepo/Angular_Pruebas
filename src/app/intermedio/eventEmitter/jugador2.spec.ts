import { Jugador2 } from './jugador2';

describe('Jugador2 Emit', () => {

    let jugador: Jugador2;

    /**
     * Se ejecuta antes de cada prueba
     */
    beforeEach( () => {
        jugador = new Jugador2();
    });

    it('Debe de emitir un evento cuando recibe daño', () => {
        let nuevoHP = 0;
        jugador.hpCambia.subscribe( hp => {
            nuevoHP = hp;
        });
        jugador.recibeDanio(1000);
        expect(nuevoHP).toBe(0);
    });

    it('Debe de emitir un evento cuando recibe daño y sobre vivir si es menor que 100', () => {
        let nuevoHP = 0;
        jugador.hpCambia.subscribe( hp => {
            nuevoHP = hp;
        });
        jugador.recibeDanio(70);
        expect(nuevoHP).toBe(30);
    });
});

