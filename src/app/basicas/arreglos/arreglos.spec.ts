import { obtenerRobots } from './arreglos';
describe('Pruebas de Arreglos', () => {

    it('Debe retornar almenos un robot', () => {
        const resp = obtenerRobots();
        expect(resp.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe existir Robot2', () => {
        const resp = obtenerRobots();
        expect(resp).toContain('Robot2');
    });

});
