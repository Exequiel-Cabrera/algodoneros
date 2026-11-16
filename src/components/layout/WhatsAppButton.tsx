import { socialLinks } from '../../data/links'
import ExternalLink from '../ui/ExternalLink'

/** Botón flotante de WhatsApp que ya tiene el sitio de la fiesta. */
function WhatsAppButton() {
  return (
    <ExternalLink
      href={socialLinks.whatsapp}
      newTab
      className="whatsapp-fab"
      aria-label="Escribinos por WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" focusable="false">
        <path
          d="M16 4.5C9.6 4.5 4.5 9.4 4.5 15.5c0 2.2.7 4.3 1.9 6L5 27l5.7-1.4c1.6.9 3.4 1.3 5.3 1.3 6.4 0 11.5-4.9 11.5-11S22.4 4.5 16 4.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M12 11.5c.3-.6.8-.7 1.2-.6l.6.1 1.2 2.6-.8 1.1c.8 1.6 2 2.8 3.6 3.6l1.1-.8 2.6 1.2.1.6c.1.4 0 .9-.6 1.2-1.3.7-3.4.4-5.7-1.4-2.3-1.9-3.8-4.2-3.9-5.8 0-.7.2-1.3.6-1.8Z"
          fill="currentColor"
        />
      </svg>
    </ExternalLink>
  )
}

export default WhatsAppButton
