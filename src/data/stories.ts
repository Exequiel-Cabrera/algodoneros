import chaleco from '../assets/relatos/ko-huella/chaleco.jpg'
import creadoras from '../assets/relatos/ko-huella/creadoras.jpg'
import kohuellaVideo from '../assets/relatos/ko-huella/kohuella.mp4'
import prendas from '../assets/relatos/ko-huella/prendas.jpg'
import francisco from '../assets/relatos/optitech/francisco.jpg'
import gabinete from '../assets/relatos/optitech/gabinete.jpg'
import optitechVideo from '../assets/relatos/optitech/optitech.mp4'
import pcArmada from '../assets/relatos/optitech/pc-armada.jpg'
import fabrizio from '../assets/relatos/havs/fabrizio.jpg'
import havsVideo from '../assets/relatos/havs/havs.mp4'
import havsVideo2 from '../assets/relatos/havs/havs-2.mp4'
import type { Story } from '../types'
import { partnerLinks } from './links'

/*
 * Relatos de muestra para el lanzamiento, uno por etapa: OptiTech (Cultivo), HAVS
 * (Crecimiento) y Ko Huella (Cosecha). Las fotos y los videos están en src/assets/relatos.
 * Los enlaces vacíos ('') se completan cuando haya datos de cada emprendedor.
 * `coords` es la latitud y longitud de la localidad del protagonista (API Georef): el punto
 * del mapa y el departamento se calculan solos.
 */

/*
 * Relato de muestra (etapa Cosecha), redactado por el equipo a partir de información
 * pública de la marca. La muestra no da edades: después del nombre va la ocupación.
 * La localidad es solo "Chaco", así que el punto del mapa sigue siendo de ejemplo.
 */
const kohuella: Story = {
  slug: 'ko-huella',
  stage: 'cosecha',
  business: 'Ko Huella',
  person: 'Liza Knezovich y Anabella Oviedo',
  age: 'diseñadoras',
  locality: 'Chaco',
  field: 'Indumentaria de algodón agroecológico',
  title: 'Prendas simples y poderosas desde la semilla',
  summary:
    'Dos diseñadoras convirtieron el algodón agroecológico del Chaco en prendas con Sello de Buen Diseño.',
  cover: {
    label: 'Liza y Anabella en el stand de Ko Huella, en Puro Diseño Raíces',
    src: creadoras,
    position: 'center 25%',
  },
  note: 'Relato de muestra. Lo redactó el equipo de Algodoneros a partir de información pública de la marca, para mostrar cómo funciona la sección. Como cualquier relato, se publica recién cuando sus protagonistas lo revisan y lo aprueban.',
  chapters: [
    {
      id: 'la-semilla',
      title: 'La semilla',
      paragraphs: [
        'Somos diseñadoras. Liza viene de la indumentaria y el textil, de la docencia y la producción. Anabella, del vestuario, las instalaciones textiles y el acompañamiento a otros emprendimientos del rubro. Cuando empezamos a pensar Ko Huella teníamos algo claro: no queríamos diseñar a partir de una tela que llega de cualquier lado, sino empezar por el principio, por la semilla.',
        'En el Chaco eso tiene un sentido especial. El algodón es parte de la historia de la provincia, pero muchas veces la fibra se va en bruto y la prenda se hace en otro lado. Nosotras quisimos hacer el camino completo acá. Por eso la marca nació para trabajar con dos algodones chaqueños: el agroecológico de No’oxonec y el algodón natural de la Cooperativa Inimbó. Detrás de esa fibra hay familias criollas y originarias que siembran y cosechan con prácticas agroecológicas.',
        'Esa frase resume lo que buscamos. Que cada prenda sea simple de usar, pero que lleve adentro toda la cadena: la chacra, el hilado, el tejido y las manos que la terminan.',
      ],
      quote: 'Hacemos prendas simples y poderosas desde la semilla.',
      quoteAfter: 1,
    },
    {
      id: 'el-taller',
      title: 'El taller',
      paragraphs: [
        'Trabajamos con un modo de diseñar y producir lento, bajo el paradigma de lo circular. Eso se nota en los detalles. Los descartes del mismo textil no se tiran: los volvemos textura y los usamos para decorar otras prendas. Algunas piezas llevan cuellos de chaguar, una fibra del monte chaqueño que tiene su propio saber artesanal.',
        'Aprendimos que no lo hacemos solas. Para el chaleco Guardián del monte trabajamos con autoras chaqueñas. Luján Signoris creó un textil nuevo a partir de los descartes de nuestras producciones, y Malarriada hizo botones con fibras de algodón agroecológico, exclusivos para Ko Huella. La pieza se inspira en las leyendas del protector del monte y tiene lazos regulables para adaptarse a distintos cuerpos. La mostramos en la Argentina Fashion Week Chaco.',
        'También aprendimos que contar el camino es parte del trabajo. En 2025, en la feria Puro Diseño Raíces de Resistencia, dimos una charla junto a No’oxonec que se llamó “El camino del algodón agroecológico: de la semilla a la prenda”. Ese camino es también lo que queremos que se vea en cada prenda.',
      ],
      media: ['video'],
    },
    {
      id: 'la-cosecha',
      title: 'La cosecha',
      paragraphs: [
        '2026 fue el año en que el camino empezó a dar frutos. En julio llevamos la marca a la Expo Rural de Palermo, en el stand del Chaco, y mostramos con un video toda la cadena de producción y valor del algodón. En septiembre Ko Huella recibió el Sello de Buen Diseño argentino. Y en octubre presentamos Plexus, nuestra colección más reciente, de siluetas fluidas, tonos crudos y texturas que invitan a descubrir el algodón desde otra perspectiva.',
        'A fines de octubre ganamos el primer puesto provincial de Emprendimiento Argentino en la categoría de emprendimientos tradicionales con modelos de negocio innovadores. Ahora vamos a la final nacional en Buenos Aires, el 19 y 20 de noviembre, a representar al Chaco con nuestro algodón.',
        'Lo que más nos importa de todo eso es que la prenda sigue empezando acá. En nuestra presentación lo decimos así: de Chaco al mundo, con trazabilidad real. Llegar lejos no significó irnos; significó llevar con nosotras la tierra de donde viene la fibra.',
      ],
      quote: 'Una nueva mirada sobre lo natural.',
      quoteAfter: 0,
      media: ['gallery'],
    },
  ],
  learned:
    'Una prenda puede contar de dónde viene. Si el algodón es del Chaco, la historia también tiene que serlo.',
  video: {
    src: kohuellaVideo,
    caption: 'Viaje hacia el origen: la chacra donde crece el algodón.',
  },
  gallery: [
    { label: 'Prendas de Ko Huella en algodón', src: prendas, position: 'center 20%' },
    { label: 'Un chaleco con lazos y botones', src: chaleco },
    { label: 'Liza y Anabella en el stand de Ko Huella, en Puro Diseño Raíces', src: creadoras },
  ],
  followUp: {
    text: 'Si tenés un emprendimiento y querés presentarte a Emprendimiento Argentino o mostrar tu trabajo en ferias, la Subsecretaría de Emprendedurismo del Chaco tiene cursos gratuitos y abre convocatorias durante todo el año en Espacio Emprendedor Chaco.',
    link: { label: 'Ver los cursos de la Subsecretaría', href: partnerLinks.subsecretaria },
  },
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/kohuella__/' },
    { label: 'Sitio web', href: 'https://kohuella.com.ar' },
  ],
  coords: { lat: -27.05, lon: -59.62 },
  publishedAt: '2027-04-12',
}

/*
 * Relato de muestra (etapa Cultivo), armado con las palabras del protagonista en el video
 * "Así empezó todo" y en las publicaciones de OptiTech. La muestra no da edad ni ocupación.
 */
const optitech: Story = {
  slug: 'optitech',
  stage: 'cultivo',
  business: 'OptiTech',
  person: 'Francisco Figliuolo',
  locality: 'Resistencia',
  field: 'Optimización y mantenimiento de PC',
  title: 'Ese regalo terminó siendo mi pasión',
  summary:
    'De chico le regalaron una PC que apenas abría el Buscaminas. Aprendió a hacerla rendir y hoy lo hace con las computadoras de otros, a distancia.',
  cover: {
    label: 'Francisco frente a su escritorio, con los monitores y una PC encendida detrás',
    src: francisco,
    position: 'center 20%',
  },
  note: 'Relato de muestra. Está armado con las palabras de su protagonista en el video “Así empezó todo” y en las publicaciones de OptiTech, para mostrar cómo funciona la sección. Como cualquier relato, se publica recién cuando su protagonista lo revisa y lo aprueba.',
  chapters: [
    {
      id: 'el-regalo',
      title: 'El regalo',
      paragraphs: [
        'Cuando era chico, todos mis amigos tenían la Play 2. A mí me tocó otra cosa: una PC gamer. O eso creía. Era una computadora que, si abrías el Buscaminas, salía literalmente volando. Yo no tenía idea de nada, pero para mí fue el mejor regalo de mi vida.',
        'Esa máquina lenta fue mi primera escuela. Si quería jugar, tenía que entender qué le pasaba por dentro. Y ahí empezó todo.',
      ],
      quote: 'Con esa computadora abrías el Buscaminas y salías literalmente volando.',
      quoteAfter: 0,
    },
    {
      id: 'horas-de-optimizar',
      title: 'Horas de optimizar',
      paragraphs: [
        'De alguna forma, después de muchas horas de optimizar e investigar, logré mantenerla durante mucho tiempo. Así aprendí lo que hoy le digo a todos: una computadora lenta casi nunca es una computadora vieja. La mayoría de las veces está saturada, sucia o mal configurada.',
        'Eso lo veo todas las semanas. Nico me trajo su PC porque la sentía rara. Era una muy buena computadora, pero tenía el sistema operativo más raro que vi en mi vida. Hicimos limpieza y mantenimiento, instalamos Windows y Office y la optimizamos. Ahora funciona al máximo rendimiento. En una prueba, con la misma computadora, pasé de unos 80 a unos 500 FPS en Fortnite, y de 205 a 643 en Counter Strike 2.',
      ],
      quote: 'Tu PC no viene optimizada de fábrica.',
      media: ['video'],
    },
    {
      id: 'optitech',
      title: 'OptiTech',
      paragraphs: [
        'En septiembre de 2026 abrí la cuenta de OptiTech. Hoy me dedico a que tu compu rinda como tiene que rendir: limpieza, optimización, armado de PC e instalación de Windows. No solo ganás FPS, también te olvidás del input lag.',
        'Y lo mejor de todo es que se hace a distancia. No tenés por qué moverte de tu casa: yo entro con un programa y listo. Trabajo desde Resistencia, pero eso me permite llegar a cualquier computadora, esté donde esté.',
        'Al final, ese regalo terminó siendo mi pasión. Ojalá el día de mañana sea mucho más.',
      ],
      media: ['gallery'],
    },
  ],
  learned:
    'No tenés por qué comprar una computadora nueva. Detrás de cada PC lenta hay una computadora saturada que puede dar muchísimo más.',
  video: {
    src: optitechVideo,
    caption: 'Francisco habla a cámara desde su escritorio.',
  },
  gallery: [
    { label: 'Un gabinete abierto sobre la mesa de trabajo', src: gabinete },
    { label: 'Una PC ya armada, con las luces encendidas', src: pcArmada },
  ],
  followUp: {
    text: 'Si estás empezando y querés ordenar tu idea o mejorar cómo comunicás tu emprendimiento, la Subsecretaría de Emprendedurismo del Chaco ofrece talleres gratuitos como “Formulación y Evaluación de Proyectos Emprendedores” y “Audiovisual y Comunicación para tu Negocio”. Las convocatorias se publican en Espacio Emprendedor Chaco.',
    link: { label: 'Ver los talleres de la Subsecretaría', href: partnerLinks.subsecretaria },
  },
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/optitech_pc/' },
    // Los turnos se piden por WhatsApp desde el enlace de su perfil: falta ese enlace
    { label: 'Turnos por WhatsApp', href: '' },
  ],
  // Resistencia, la misma ubicación que usa el mapa (chacoPlaces.ts)
  coords: { lat: -27.4511, lon: -58.9865 },
  publishedAt: '2027-04-12',
}

/*
 * Relato de muestra (etapa Crecimiento), armado con las palabras de los fundadores en la serie
 * de videos "HAVS" (capítulos I, II y III) y con la información de su sitio.
 */
const havs: Story = {
  slug: 'havs',
  stage: 'crecimiento',
  business: 'HAVS',
  person: 'Fabrizio Faccioli',
  age: '25 años',
  locality: 'Pampa del Infierno',
  field: 'Afeitadoras corporales para hombres',
  title: 'Entre hombres nos cuidamos',
  summary:
    'Cinco amigos de Pampa del Infierno se cansaron de las afeitadoras que irritan y crearon su propia marca. Ya vendieron más de 2.000.',
  cover: {
    label: 'Fabrizio con una caja de HAVS en el Mercado Libre Experience',
    src: fabrizio,
    position: 'center 40%',
  },
  note: 'Relato de muestra. Está armado con las palabras de los fundadores en la serie de videos “HAVS”, capítulos I, II y III, y con la información de su sitio, para mostrar cómo funciona la sección. Como cualquier relato, se publica recién cuando su protagonista lo revisa y lo aprueba.',
  chapters: [
    {
      id: 'el-fogon',
      title: 'El fogón',
      paragraphs: [
        'Somos cinco amigos de Pampa del Infierno: Nicolás, Francisco, Angelo, Bruno y yo, Fabrizio. Como tantos chicos del interior, nos fuimos a estudiar a Corrientes, pero la raíz quedó allá. Nuestras familias siguen en el pueblo y volvemos cada vez que podemos.',
        'HAVS nació en una de esas noches de fogón y asado. Uno de nosotros contaba que seguía usando la misma afeitadora de siempre, y empezó la cargada: que eso te irrita todo, que te irrita y te corta. Otro salió a defender las que van con cable, conectadas a la pared. Entonces surgió la idea:',
        'Esa pregunta quedó dando vueltas. Conseguir una fábrica, armar algo nuestro, pensado por y para hombres. A todos nos gustó la idea.',
      ],
      quote: '¿Y qué otra opción hay? ¿Y si la importamos?',
      quoteAfter: 1,
    },
    {
      id: 'paso-a-paso',
      title: 'Paso a paso',
      paragraphs: [
        'Así decidimos crear nuestra propia marca. La idea parecía sencilla, pero aprendimos rápido que hay que empezar paso a paso. El primero fue encontrar un proveedor. Importar de varias fábricas no era nada fácil: teníamos que hablar y coordinar muchos envíos de distintos proveedores.',
        'El siguiente desafío fue analizar el mercado y probar desde máquinas genéricas hasta prototipos rarísimos, solo para entender cómo mejorar cada detalle y crear la máquina perfecta. Hasta hoy trabajamos así: cada producto lo probamos nosotros antes de venderlo.',
        'Después vino patentar nuestra marca, una tarea para nada sencilla. Hicimos un pizarrón lleno de nombres, dimos algunas vueltas y pasamos por trámites que parecían no terminar más. Pero pudimos hacerlo. Así nació HAVS.',
      ],
      quote: 'La idea parecía sencilla, pero hay que empezar paso a paso.',
      media: ['video'],
    },
    {
      id: 'llego-la-primera-caja',
      title: 'Llegó la primera caja',
      paragraphs: [
        'Y por fin llegó, después de mucho laburo. Abrir las primeras cajas azules con nuestro nombre fue uno de los momentos más lindos de todo el proceso. Ese primer lote fue The Wingman Kit, una rasuradora corporal con hoja de cerámica y cuchillas anticortes, pensada para que afeitarse deje de ser un problema.',
        'Hoy llevamos más de dos años en el mercado y más de 2.000 ventas, por nuestra tienda online y por Mercado Libre. Mostramos nuestras caras porque creemos en lo que hacemos, y contestamos cada mensaje antes y después de la compra. Nuestro lema lo dice todo: entre hombres nos cuidamos.',
        'Estamos en plena etapa de crecimiento. Seguimos analizando qué hace la competencia, nacional e internacional, para ofrecer la mejor rasuradora al mejor precio. Cuando contamos de dónde salió HAVS, siempre empezamos por el mismo lugar: un fogón con amigos en Pampa del Infierno.',
      ],
      media: ['gallery'],
    },
  ],
  learned:
    'La idea parecía sencilla, pero hay que empezar paso a paso. Primero un proveedor, después el producto, después la marca.',
  video: {
    src: havsVideo,
    caption: 'Una escena de la serie de videos de HAVS. Con subtítulos.',
  },
  gallery: [{ type: 'video', label: 'HAVS en el Mercado Libre Experience', src: havsVideo2 }],
  followUp: {
    text: 'Si tu emprendimiento ya vende y querés profesionalizar la forma en que comercializás, la Subsecretaría de Emprendedurismo del Chaco ofrece cursos gratuitos como “Comercialización Exitosa: del proyecto al negocio” y “Buenas Prácticas en la Comercialización”. Las convocatorias se publican en Espacio Emprendedor Chaco.',
    link: { label: 'Ver los cursos de la Subsecretaría', href: partnerLinks.subsecretaria },
  },
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/havs.arg/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@havs.arg' },
    { label: 'Sitio web', href: 'https://havs.com.ar' },
  ],
  // Pampa del Infierno (dpto. Almirante Brown), centroide de la API Georef
  coords: { lat: -26.5036, lon: -61.1766 },
  publishedAt: '2027-04-12',
}

export const stories: Story[] = [optitech, havs, kohuella]

export function findStory(slug: string | undefined): Story | undefined {
  return stories.find((story) => story.slug === slug)
}
