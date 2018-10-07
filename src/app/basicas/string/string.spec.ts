import { mensaje } from './string';

describe('Pruebas de Strings', () => {

    it('Debe de regresar un string', () => {
        const resp = mensaje('Bryan');
        expect(typeof resp).toBe('string');
    });

    it('Debe de regresar el nombre', () => {
        const nombre = 'Brayan';
        const resp = mensaje(nombre);
        expect(resp).toContain(nombre);
    });
});
