# Playwright E2E Practice

Este repositorio contiene un proyecto de práctica para la automatización de pruebas end-to-end (E2E) utilizando Playwright con TypeScript. Contiene pruebas para diferentes aplicaciones web y tambien un github action para poder ejecutar las pruebas cada vez que se realice un commit en la rama main/master.

## Requisitos

- **Node.js**: Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 14 o superior).
- **Playwright**: Este proyecto utiliza Playwright, una herramienta para pruebas E2E. Se instalará junto con las dependencias del proyecto.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/playwright-e2e-practice.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd playwright-e2e-practice
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

## Ejecución de Pruebas

Para ejecutar las pruebas E2E, usa el siguiente comando:

```bash
npx playwright test
```

Esto ejecutará todas las pruebas que se encuentran en la carpeta `e2e`.

### Opciones de ejecución

- Para ver las pruebas en modo *headful* (con navegador visible):
  ```bash
  npx playwright test --headed
  ```

- Para generar un informe después de la ejecución de las pruebas:
  ```bash
  npx playwright show-report
  ```

## Licencia

- [MIT License](LICENSE).
