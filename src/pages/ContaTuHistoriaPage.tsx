import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import CottonIcon from '../components/icons/CottonIcon'
import StageIcon from '../components/icons/StageIcon'
import ExternalLink from '../components/ui/ExternalLink'
import { formQuestions, type FormField } from '../data/formQuestions'
import { socialLinks } from '../data/links'
import { stages } from '../data/stages'
import './pages.css'

type Answers = Record<string, string>

interface FieldProps {
  field: FormField
  value: string
  onChange: (value: string) => void
}

function Field({ field, value, onChange }: FieldProps) {
  const id = `campo-${field.name}`

  if (field.kind === 'stage') {
    return (
      <div className="stage-options" role="radiogroup" aria-label={field.label}>
        {stages.map((stage) => (
          <label key={stage.id} className="stage-option" data-stage={stage.id}>
            <input
              type="radio"
              name={field.name}
              value={stage.id}
              checked={value === stage.id}
              onChange={() => onChange(stage.id)}
            />
            <StageIcon stage={stage.id} size={56} />
            <span className="stage-option__name">
              {stage.number} · {stage.name}
            </span>
            <span className="stage-option__moment">{stage.moment}</span>
          </label>
        ))}
      </div>
    )
  }

  if (field.kind === 'choice') {
    return (
      <div className="choice" role="radiogroup" aria-label={field.label}>
        <span className="field__label">{field.label}</span>
        <div className="choice__options">
          {field.options?.map((option) => (
            <label key={option} className="choice__option">
              <input
                type="radio"
                name={field.name}
                value={option}
                checked={value === option}
                onChange={() => onChange(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {field.label}
        {!field.required && <span className="field__optional"> (opcional)</span>}
      </label>
      {field.kind === 'textarea' ? (
        <textarea
          id={id}
          rows={4}
          value={value}
          placeholder={field.placeholder}
          required={field.required}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          id={id}
          type="text"
          inputMode={field.kind === 'number' ? 'numeric' : undefined}
          value={value}
          placeholder={field.placeholder}
          required={field.required}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </div>
  )
}

/**
 * Formulario "Contá tu historia": cinco preguntas, una por pantalla.
 * Es una maqueta: no se envía nada, las respuestas viven en el estado de la página.
 */
function ContaTuHistoriaPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [done, setDone] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const firstRender = useRef(true)

  const total = formQuestions.length
  const question = formQuestions[step]
  const isLast = step === total - 1
  const canContinue = question.fields.every(
    (field) => !field.required || (answers[field.name] ?? '').trim() !== '',
  )

  // Al cambiar de pantalla, el foco va al título de la nueva pregunta
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    headingRef.current?.focus()
  }, [step, done])

  function setAnswer(name: string, value: string) {
    setAnswers((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!canContinue) return
    if (isLast) setDone(true)
    else setStep((value) => value + 1)
  }

  function restart() {
    setAnswers({})
    setStep(0)
    setDone(false)
  }

  return (
    <section className="form-page">
      <title>Contá tu historia · Algodoneros</title>
      <div className="form-page__inner">
        <Link to={{ pathname: '/algodoneros', hash: '#sumate' }} className="form-page__back">
          <span aria-hidden="true">←</span> Volver a Algodoneros
        </Link>

        <p className="eyebrow eyebrow--tierra">Sumate a Algodoneros</p>
        <h1>
          Contá tu <em>historia.</em>
        </h1>
        <p className="form-page__lead">
          Cinco preguntas, una por pantalla. Se responden en dos minutos.
        </p>

        {done ? (
          <div className="form-card form-done" role="status">
            <CottonIcon size={64} color="var(--green-dark)" stemColor="var(--tierra)" />
            <h2 ref={headingRef} tabIndex={-1}>
              ¡Gracias, {answers.nombre}!
            </h2>
            <p>
              Te vamos a escribir por {answers.canal} para coordinar una charla. Tu historia puede
              ser la próxima en Algodoneros.
            </p>
            <p className="form-done__note">
              Esto es una maqueta: tus respuestas no se enviaron a ningún lado.
            </p>
            <div className="btn-row">
              <Link className="btn btn--navy" to="/algodoneros">
                Volver a Algodoneros
              </Link>
              <button type="button" className="btn btn--outline" onClick={restart}>
                Empezar de nuevo
              </button>
            </div>
          </div>
        ) : (
          <form className="form-card story-form" onSubmit={handleSubmit} noValidate>
            <div className="story-form__progress">
              <p className="label">
                Pregunta {step + 1} de {total}
              </p>
              <ol className="story-form__steps" aria-hidden="true">
                {formQuestions.map((item, i) => (
                  <li key={item.id} className={i <= step ? 'is-done' : undefined} />
                ))}
              </ol>
            </div>

            <fieldset>
              <legend>
                <h2 ref={headingRef} tabIndex={-1}>
                  {question.title}
                </h2>
              </legend>
              <p className="story-form__help">{question.help}</p>
              <div className="story-form__fields">
                {question.fields.map((field) => (
                  <Field
                    key={field.name}
                    field={field}
                    value={answers[field.name] ?? ''}
                    onChange={(value) => setAnswer(field.name, value)}
                  />
                ))}
              </div>
            </fieldset>

            <div className="story-form__actions">
              {step > 0 && (
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => setStep((value) => value - 1)}
                >
                  <span aria-hidden="true">←</span> Atrás
                </button>
              )}
              <button type="submit" className="btn btn--tierra" disabled={!canContinue}>
                {isLast ? 'Enviar mi historia' : 'Siguiente'} <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        )}

        <p className="form-page__audio">
          ¿Preferís hablar en vez de escribir?{' '}
          <ExternalLink href={socialLinks.whatsapp} newTab>
            Mandanos un audio por WhatsApp
          </ExternalLink>
          .
        </p>
      </div>
    </section>
  )
}

export default ContaTuHistoriaPage
