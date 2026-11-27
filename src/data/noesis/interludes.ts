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
      es: 'Anotación marginal: la inteligencia fluida no acumula datos aislados; teje un modelo generativo vivo donde cada disciplina ilumina a las demás.',
      en: 'Marginal note: fluid intelligence does not hoard isolated facts; it weaves a living generative model where every discipline illuminates the rest.',
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
      es: 'Integración cognitiva Φ: cuando múltiples dimensiones del pensamiento operan juntas, emergen patrones que ninguna facultad aislada podría percibir.',
      en: 'Cognitive integration Φ: when multiple dimensions of thought operate together, patterns emerge that no isolated faculty could perceive alone.',
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
      es: 'De la cartografía celeste de Kepler a la psicología analítica: leer el mundo exige dominar tanto la precisión matemática como el símbolo.',
      en: 'From Kepler’s celestial cartography to analytical psychology: reading the world demands mastery of both mathematical precision and symbol.',
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
      es: 'Del cálculo y la anatomía a la literatura y la aviación: la polimatía convierte el aprendizaje en una segunda naturaleza.',
      en: 'From calculus and anatomy to literature and aviation: polymathy turns curiosity into second nature.',
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
      es: 'Último volumen del códice: arquitectura experimental, integración semántica y guía práctica para escuchar con libertad.',
      en: 'Final volume of the codex: experimental architecture, semantic integration and practical guidelines for effortless listening.',
    },
  },
];
