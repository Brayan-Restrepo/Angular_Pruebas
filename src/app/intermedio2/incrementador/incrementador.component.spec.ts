import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { findLocaleData } from '@angular/common/src/i18n/locale_data_api';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {
        component.leyenda = 'Progreso de carga';
        // Dectetar la detección de cambios
        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('Progreso de carga');
    });

    it('Debe de mostrar en el input el valor del progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges();

        // Como la deteccion de cambios puede demosrar un poco
        // llama a un promesa
        fixture.whenStable().then( () => {
            const input = fixture.debugElement.query(By.css('input')).nativeElement;
            expect(input.value).toBe('55');
        });
    });

    it('Debe de incrementar y decrementar', () => {
        const btn = fixture.debugElement.queryAll(By.css('.btn-primary'));

        btn[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        btn[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });

    it('Debe decrementar', () => {
        const btn = fixture.debugElement.queryAll(By.css('.btn-primary'));

        btn[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        
        fixture.whenStable().then( () => {
            expect(elem.innerHTML).toContain('45');
        });
    });
});
