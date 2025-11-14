 README.md — Mini SPA del Reglamento del Aprendiz SENA


Aplicación desarrollada en React que muestra varias normas del Reglamento del Aprendiz SENA.
Incluye búsqueda en tiempo real, filtrado por categoría, y tarjetas interactivas donde el aprendiz puede marcar si ya cumple cada norma.



 Características principales

✔️ Búsqueda de normas en tiempo real

✔️ Filtro por categoría (Disciplina, Convivencia, Seguridad)

✔️ Tarjetas interactivas con botón “Compliant”

✔️ Diseño responsivo

✔️ Uso de componentes funcionales

✔️ Flujo de datos unidireccional

✔️ Estructura clara y organizada del proyecto

✔️ 3 componentes personalizados agregados:



🗂️ Estructura del proyecto
src/
 ├── components/
 │   ├── Header.jsx
 │   ├── SearchBar.jsx
 │   ├── CategoryFilter.jsx
 │   ├── RuleList.jsx
 │   ├── RuleCard.jsx
 │   ├── Footer.jsx
 │
 ├── data/
 │   └── reglas.jsx
 │
 ├── App.jsx
 ├── main.jsx
 ├── index.css




 Arquitectura y explicación técnica
 App.jsx

Es el componente raíz. Contiene el estado global:

search → texto de búsqueda

category → categoría seleccionada

Filtra las reglas antes de enviarlas a RuleList.

 SearchBar.jsx

Componente controlado. Cada vez que el usuario escribe, se actualiza el estado en App.

 CategoryFilter.jsx

Permite filtrar por categoría usando un <select>.

 RuleList.jsx

Recibe la lista de reglas filtradas y genera múltiples RuleCard.

 RuleCard.jsx

Tarjeta individual con:

Título

Categoría

Descripción

Botón para marcar “Completado”

Estado local (useState)

 Flujo de datos (props y estado)

El estado global vive en App.jsx

Los componentes hijos reciben datos por props

Cuando un usuario interactúa (busca, filtra, marca compliant), los componentes disparan eventos que actualizan el estado en App


Diseño completamente responsivo


 Pruebas y verificación

Filtrar normas por texto

Filtrar por categoría

Marcar tarjetas como cumplidas

Ver comportamiento responsivo en móvil y escritorio

Revisar consola del navegador para errores de props o keys
