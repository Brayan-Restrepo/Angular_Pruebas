import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

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
        const medico = { id: 1, nombre: 'Brayan' };
        spyOn(servicio, 'agregarMedico')
            .and.returnValue( Observable.from([medico]));
        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adicion, la propiedad mensajeError, debe de ser igual al error del servicio', () => {
        const miError = 'Error en el medico';
        spyOn(servicio, 'agregarMedico').and.returnValue( Observable.throw(miError) );
        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);
    });

    it('Debe de llamar al servicor para borrar un medico', () => {
        // espia para el alert() del navegador
        spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico')
            .and.callFake( () => Observable.empty() );

        componente.borrarMedico('1');
        // Que sea llamado con un dato
        expect(espia).toHaveBeenCalledWith('1');
    });

    it('No, Debe de llamar al servicor para borrar un medico', () => {
        // espia para el alert() del navegador
        spyOn(window, 'confirm').and.returnValue(false);

        const espia = spyOn(servicio, 'borrarMedico')
            .and.callFake( () => Observable.empty() );

        componente.borrarMedico('1');
        // Que sea llamado con un dato
        expect(espia).not.toHaveBeenCalledWith('1');
    });
});
