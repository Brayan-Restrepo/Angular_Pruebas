import { incrementar } from './numeros';

describe('Pruebas de Numeros', () => {

    it('Debe retornar 100', () => {
        const resp = incrementar(102);
        expect(resp).toBe(100);
    });

    it('Debe retornar menor que 100', () => {
        const numero = 12;
        const resp = incrementar(numero);
        expect(resp).toBe(numero + 1);
    });
});
