/**
 * Formulario "Contá tu historia": cinco preguntas, una por pantalla.
 * Es una maqueta: las respuestas quedan en el navegador y no se envían.
 */

export type FieldKind = 'text' | 'number' | 'textarea' | 'stage' | 'choice'

export interface FormField {
  name: string
  label: string
  kind: FieldKind
  placeholder?: string
  options?: string[]
  required?: boolean
}

export interface FormQuestion {
  id: string
  title: string
  help: string
  fields: FormField[]
}

export const formQuestions: FormQuestion[] = [
  {
    id: 'quien',
    title: '¿Cómo te llamás y cuántos años tenés?',
    help: 'Con tu nombre de pila alcanza.',
    fields: [
      { name: 'nombre', label: 'Nombre', kind: 'text', placeholder: 'Tu nombre', required: true },
      { name: 'edad', label: 'Edad', kind: 'number', placeholder: 'Ej.: 23', required: true },
    ],
  },
  {
    id: 'donde',
    title: '¿Desde qué localidad emprendés?',
    help: 'Queremos mostrar que se emprende en toda la provincia.',
    fields: [
      {
        name: 'localidad',
        label: 'Localidad',
        kind: 'text',
        placeholder: 'Ej.: Los Frentones',
        required: true,
      },
    ],
  },
  {
    id: 'que',
    title: '¿Qué hace tu emprendimiento?',
    help: 'Contalo como se lo contarías a un amigo.',
    fields: [
      {
        name: 'emprendimiento',
        label: 'Nombre del emprendimiento',
        kind: 'text',
        placeholder: 'Si todavía no tiene nombre, dejalo vacío',
      },
      {
        name: 'descripcion',
        label: 'Qué hacés',
        kind: 'textarea',
        placeholder: 'Ej.: Hago velas con plantas de la zona y las vendo por Instagram.',
        required: true,
      },
    ],
  },
  {
    id: 'etapa',
    title: '¿En qué etapa estás?',
    help: 'Elegí la que más se parezca a tu momento.',
    fields: [{ name: 'etapa', label: 'Etapa', kind: 'stage', required: true }],
  },
  {
    id: 'contacto',
    title: '¿Cómo te contactamos?',
    help: 'Te escribimos para coordinar una charla. Si preferís, la entrevista puede ser por audio.',
    fields: [
      {
        name: 'canal',
        label: 'Por dónde',
        kind: 'choice',
        options: ['Instagram', 'WhatsApp'],
        required: true,
      },
      {
        name: 'contacto',
        label: 'Tu usuario o número',
        kind: 'text',
        placeholder: '@usuario o 362 4…',
        required: true,
      },
    ],
  },
]
