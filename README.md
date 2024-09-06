# Angular Basics

## Instalar Angular
```bash
npm i -g @angular/cli
```

## Crear aplicacion
```bash
ng new app
ng new app --skip-tests
ng new app --style=css
ng new app --directory=mi-directorio
ng new app --ssr=false
ng new app --directory=my-app --style=css --ssr=false --skip-tests
```

## Ejecutar Servicio
```bash
ng serve
ng serve --port=4201
ng serve --open
ng serve --configuration=production
ng serve --disable-host-check
```

# Clase 1
## Crear Componente
```bash
ng generate component nombre-del-componente
ng generate component componentes/nombre-del-componente
```

# Clase 2
## Desplegar aplicacion con firebase
```bash
firebase deploy --only hosting
```