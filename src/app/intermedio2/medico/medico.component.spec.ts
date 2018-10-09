import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';
describe('Medico Component', () => {

    let componentMedico: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [
                HttpClientModule
            ],
        });
        fixture = TestBed.createComponent(MedicoComponent);
        componentMedico = fixture.componentInstance;
    });

    it('Debe de crearce el componente', () => {
        expect(componentMedico).toBeTruthy();
    });

    it('Debe de retornar el nombre del medico', () => {
        const nombre = 'Brayan';
        const resp = componentMedico.saludarMedico(nombre);
        expect(resp).toContain(nombre);
    });

});
