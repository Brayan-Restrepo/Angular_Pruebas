import { usuariosIngresados } from './booleanos';
describe('Pruebas de Booleanos', () => {

    it('Debe retornar true', () => {
        const resp = usuariosIngresados();
        expect(resp).toBeTruthy();
    });

});
