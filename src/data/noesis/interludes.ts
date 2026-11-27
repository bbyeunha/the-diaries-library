import type { BilingualText } from './types';

export interface DeskInterlude {
  afterVolumeIndex: number; // -1 = before Vol I, 0 = after Vol I, 1 = after Vol II, 2 = after Vol III, 3 = after Vol IV
  tag: string;
  svgKind: 'feynman' | 'astrolabe' | 'golden' | 'wavepacket' | 'connectome';
  quote: BilingualText;
  author: string;
  formulaLabel: string;
  formulaHtml: string;
  marginalia: BilingualText;
}

export const FORMULA_RIBBON_ITEMS = [
  { label: 'DIRAC', html: '(iγ<sup>μ</sup>∂<sub>μ</sub> − m)ψ = 0' },
  { label: 'FREE ENERGY', html: 'F = D<sub>KL</sub>[q(θ) || p(θ|y)] − ln p(y)' },
  { label: 'EULER', html: 'e<sup>iπ</sup> + 1 = 0' },
  { label: 'RELATIVITY', html: 'R<sub>μν</sub> − ½Rg<sub>μν</sub> = 8πGT<sub>μν</sub>' },
  { label: 'ENTROPY', html: 'H(X) = −∑ p(x) log<sub>2</sub> p(x)' },
  { label: 'EPHEMERIS', html: '☉ ☌ ☿ · △ ♃ 120°' },
  { label: 'LIFT', html: 'L = ½ ρ v² S C<sub>L</sub>' },
  { label: 'RIEMANN', html: 'ζ(s) = ∑ n<sup>−s</sup>' },
];

export const DESK_INTERLUDES: DeskInterlude[] = [
  {
    afterVolumeIndex: -1,
    tag: 'FOLIO A · SCIENTIA UNIVERSALIS',
    svgKind: 'connectome',
    quote: {
      es: '«Estudia la ciencia del arte. Estudia el arte de la ciencia. Desarrolla tus sentidos y comprende que todo se conecta con todo lo demás.»',
      en: '“Study the science of art. Study the art of science. Develop your senses—especially learn how to see. Realize that everything connects to everything else.”',
    },
    author: 'Leonardo da Vinci',
    formulaLabel: 'ACTIVE INFERENCE · PREDICTIVE BRAIN',
    formulaHtml: 'F = D<sub>KL</sub>[ q(θ) || p(θ | y) ] − ln p(y)',
    marginalia: {
      es: 'Esta frase resume todo lo que quería lograr aquí: dejar de ver las materias en cajitas separadas y conectar todo con todo.',
      en: 'This pretty much sums up the whole point for me—stop keeping subjects in separate little boxes and let everything click together.',
    },
  },
  {
    afterVolumeIndex: 0,
    tag: 'FOLIO B · QUANTUM ELECTRODYNAMICS & COGNITION',
    svgKind: 'feynman',
    quote: {
      es: '«El universo no solo es más extraño de lo que suponemos, sino más extraño de lo que podemos suponer.»',
      en: '“The universe is not only queerer than we suppose, but queerer than we can suppose.”',
    },
    author: 'J. B. S. Haldane',
    formulaLabel: 'FEYNMAN PATH INTEGRAL · QUANTUM AMPLITUDE',
    formulaHtml: '⟨q<sub>f</sub> | e<sup>−iĤt/ħ</sup> | q<sub>i</sub>⟩ = ∫ 𝒟[q] exp((i/ħ) S[q])',
    marginalia: {
      es: 'Siempre me ha volado la cabeza cómo cuando combinas lógica, lenguaje e intuición espacial, empiezas a captar patrones que antes ni veías.',
      en: 'Wild how once logic, language, and spatial intuition start firing together, you spot patterns that used to fly right over your head.',
    },
  },
  {
    afterVolumeIndex: 1,
    tag: 'FOLIO C · HARMONICES MUNDI & DEPTH PSYCHE',
    svgKind: 'astrolabe',
    quote: {
      es: '«Hasta que no hagas consciente lo inconsciente, dirigirá tu vida y lo llamarás destino.»',
      en: '“Until you make the unconscious conscious, it will direct your life and you will call it fate.”',
    },
    author: 'Carl Gustav Jung',
    formulaLabel: 'THEMA MUNDI · SYNCHRONICITY & ASPECTS',
    formulaHtml: '☉ ☌ ☿ 0°08′ &nbsp;·&nbsp; ♊︎ △ ♎︎ △ ♒︎ &nbsp;·&nbsp; Sicut superius, sic inferius',
    marginalia: {
      es: 'Ahora sí empieza la parte densa: de la física y las finanzas hasta psicología, historia, arte y vuelo.',
      en: 'Now for the heavy hitter—everything from physics and finance to psychology, history, art, and flight.',
    },
  },
  {
    afterVolumeIndex: 2,
    tag: 'FOLIO D · PROPORTIO DIVINA & BIBLIOTHECA',
    svgKind: 'golden',
    quote: {
      es: '«Las matemáticas son el alfabeto con el cual Dios ha escrito el universo.»',
      en: '“Mathematics is the language in which God has written the universe.”',
    },
    author: 'Galileo Galilei',
    formulaLabel: 'GOLDEN RATIO & RIEMANN HARMONICS',
    formulaHtml: 'φ = (1 + √5) / 2 ≈ 1.61803 &nbsp;·&nbsp; ζ(s) = ∏ (1 − p<sup>−s</sup>)<sup>−1</sup>',
    marginalia: {
      es: 'Saber un montón no sirve de nada si se queda encerrado; este siguiente bloque va de cómo lo expresas, lo disfrutas y lo usas a tu favor.',
      en: 'Knowing a ton means nothing if it stays locked up—this next part is all about how you express it, enjoy it, and actually put it to work.',
    },
  },
  {
    afterVolumeIndex: 3,
    tag: 'FOLIO E · SYNTHESIS & CONTINUUM',
    svgKind: 'wavepacket',
    quote: {
      es: '«No tengo ningún talento especial; solo soy apasionadamente curioso.»',
      en: '“I have no special talent. I am only passionately curious.”',
    },
    author: 'Albert Einstein',
    formulaLabel: 'SCHRÖDINGER EVOLUTION & SHANNON ENTROPY',
    formulaHtml: 'iħ ∂|ψ(t)⟩/∂t = Ĥ|ψ(t)⟩ &nbsp;·&nbsp; H(X) = −∑ p(x) log<sub>2</sub> p(x)',
    marginalia: {
      es: 'Y para cerrar: cómo está armado AURELIS 3.3 por dentro y las notas básicas para escucharlo.',
      en: 'And to wrap things up—how I built AURELIS 3.3 under the hood plus the basics for listening.',
    },
  },
];
