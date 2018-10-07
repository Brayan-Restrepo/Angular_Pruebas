import { FormularioRegistro } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {

    let componente: FormularioRegistro;

    beforeEach( () => {
        componente = new FormularioRegistro( new FormBuilder() );
    });

    it('Debe de crear un formulario con dos campos, email, password', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });

    it('El email es obligatorio', () => {
        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('El email debe de ser valido', () => {
        const control = componente.form.get('email');
        control.setValue('Brayan@');
        expect(control.valid).toBeFalsy();
    });

});
