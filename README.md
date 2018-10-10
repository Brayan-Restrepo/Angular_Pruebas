# Metodos de las pruebas

* beforeAll() // Antes que todas
* beforeEach() // Antes que cada una
* afterAll(); // Despues de todas
* afterEach(); // Despues de cada una

## Para sacar el informe de cobertura de las pruebas se corre el siguiente comando
``` sh
ng test --code-coverage
```
Rebisar que en el angular.json en la parte de options de test este lo siguiente
```
"sourceMap": true,
```
debe de quedar asi:
``` js
"test": {
    "builder": "@angular-devkit/build-angular:karma",
    "options": {
        "main": "src/test.ts",
        "polyfills": "src/polyfills.ts",
        "tsConfig": "src/tsconfig.spec.json",
        "karmaConfig": "src/karma.conf.js",
        "sourceMap": true,
        "styles": [
            "src/styles.css"
        ],
        "scripts": [],
        "assets": [
            "src/favicon.ico",
            "src/assets"
        ]
    }
},
```

## Para utilizar map en angular 6 es necesario instalar lo siguiente 
```sh
npm i rxjs-compat 
```
## Simular servicios en los test
```
it('Init debe de cargar los medicos', () => {
    const medicos = ['Medico1', 'Medico2', 'Medico3'];
    spyOn(servicio, 'getMedicos').and.callFake( () => {
        return Observable.from([medicos]);
    });
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
});
```

## Para tener en cuenta

```ts
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
```

# Pruebas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
