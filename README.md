# Algodoneros

Maqueta académica (TP3 · Gestión y Edición de Publicaciones Culturales) de **Algodoneros**, una nueva sección para el sitio de la Fiesta Nacional del Algodón. Hecha con React, TypeScript, Vite y React Router. Es solo frontend: no tiene backend ni guarda datos.

Las referencias de diseño y contenido están en [`referencias/`](referencias/). El documento del TP es la fuente de verdad; el HTML es solo una referencia visual.

## Requisitos

- Node.js 20 o superior

## Comandos

```bash
npm install      # instalar dependencias (solo la primera vez)
npm run dev      # servidor local en http://localhost:5173
npm run build    # compilar a la carpeta dist/
npm run preview  # ver la versión compilada
npm run lint     # revisar el código
```

## Rutas

| Ruta | Qué muestra |
|---|---|
| `/` | Redirige a `/algodoneros` |
| `/algodoneros` | La sección con sus diez bloques. `?etapa=cultivo`, `crecimiento` o `cosecha` filtra "Algodoneros de hoy" |
| `/algodoneros/:slug` | La sección con el panel del relato abierto (ej. `/algodoneros/optitech`) |
| `/algodoneros/conta-tu-historia` | Formulario de cinco pasos (no envía nada) |

## Estructura

```
src/
  main.tsx              punto de entrada: router, tipografías y estilos globales
  App.tsx               definición de rutas
  types.ts              tipos de etapas y relatos
  styles/               tokens.css (paleta y tipografía del TP) y base.css (reset y utilidades)
  data/                 contenido editable: etapas, relatos, enlaces, mapa y preguntas del formulario
  hooks/                aparición al hacer scroll, anclas, carrusel, bloqueo del panel
  components/
    layout/             cabecera, pie, aviso de maqueta y botón de WhatsApp
    ui/                 piezas chicas: etiqueta de etapa, foto de relleno, enlace externo, flechas
    icons/              capullo e íconos de etapa
    story/              tarjeta y panel del relato (lectura, capítulos, audio, video, galería, compartir)
  sections/             los diez bloques de la sección, en orden
  pages/                páginas de cada ruta
```

## Qué completar más adelante

- **Enlaces a la fiesta y redes:** en [`src/data/links.ts`](src/data/links.ts). Mientras estén vacíos, los enlaces no navegan y muestran "Enlace pendiente".
- **Relatos:** en [`src/data/stories.ts`](src/data/stories.ts). Hoy son tres relatos de muestra, uno por etapa (OptiTech, HAVS y Ko Huella), con sus fotos y videos en `src/assets/relatos/`. Cada uno lleva la latitud y longitud de su localidad (`coords`); con eso el mapa ubica el punto y calcula el departamento.
- **Mapa:** la geometría del Chaco, sus 25 departamentos y las provincias vecinas está en [`src/data/chacoGeo.ts`](src/data/chacoGeo.ts) (datos del IGN vía geoBoundaries). Las localidades de referencia y los nombres de ríos y provincias están en [`src/data/chacoPlaces.ts`](src/data/chacoPlaces.ts), con coordenadas de la API Georef.
- **Fotos, video y audio:** los recuadros de color marcan dónde va cada foto; el video y el audio están simulados.
- **Preguntas del formulario:** en [`src/data/formQuestions.ts`](src/data/formQuestions.ts).
