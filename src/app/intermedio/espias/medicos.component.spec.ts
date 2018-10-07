import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente  = new MedicosComponent(servicio);
    });


    it('Init debe de cargar los medicos', () => {
        const medicos = ['Medico1', 'Medico2', 'Medico3'];
        spyOn(servicio, 'getMedicos').and.callFake( () => {
            return Observable.from([medicos]);
        });
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe de llamar al servidor para agregar un médico', () => {
        const spy = spyOn(servicio, 'agregarMedico').and.callFake( medico => {
            return Observable.empty();
        });

        componente.agregarMedico();

        // Haber sido llamadp
        expect(spy).toHaveBeenCalled();
    });
    
    it('Debe de agregar un nuevo medico al arreglo de medicos', () => {

    });
});
