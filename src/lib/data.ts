import {
  Activity,
  Brain,
  Eye,
  Heart,
  Stethoscope,
  Syringe,
  HeartPulse,
  UserCheck,
  Microscope,
} from 'lucide-react'

export const NAVIGATION = [
  { name: 'Especialidades', href: '#especialidades' },
  { name: 'Procedimentos', href: '#procedimentos' },
  { name: 'Exames', href: '#exames' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Estrutura', href: '#estrutura' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Contato', href: '#contato' },
]

export const SPECIALTIES = [
  { id: '1', name: 'Cardiologia', icon: Heart, desc: 'Cuidado completo para o seu coração.' },
  { id: '2', name: 'Ortopedia', icon: Activity, desc: 'Especialistas em ossos e articulações.' },
  {
    id: '3',
    name: 'Neurologia',
    icon: Brain,
    desc: 'Diagnósticos precisos para o sistema nervoso.',
  },
  { id: '4', name: 'Oftalmologia', icon: Eye, desc: 'Saúde ocular com tecnologia de ponta.' },
  {
    id: '5',
    name: 'Angiologia',
    icon: HeartPulse,
    desc: 'Prevenção e tratamento especializado das doenças do sistema circulatório.',
  },
  {
    id: '6',
    name: 'Geriatria',
    icon: UserCheck,
    desc: 'Cuidado integral e humanizado com foco na saúde, bem-estar e qualidade de vida do idoso.',
  },
  {
    id: '7',
    name: 'Clínica Médica',
    icon: Stethoscope,
    desc: 'Atendimento global e integrativo para diagnóstico e tratamento de pacientes adultos.',
  },
  {
    id: '8',
    name: 'Anestesiologia',
    icon: Syringe,
    desc: 'Excelência em segurança, monitoramento e controle da dor em procedimentos médicos.',
  },
  {
    id: '9',
    name: 'Exames de Imagem',
    icon: Microscope,
    desc: 'Ultrassonografia, Endoscopia, Eletrocardiograma e mais procedimentos diagnósticos.',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ana Lúcia Ferreira',
    text: 'Atendimento impecável desde a recepção até a consulta. A infraestrutura é realmente de primeiro mundo.',
    rating: 5,
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=55',
  },
  {
    id: 2,
    name: 'Marcos Vinícius',
    text: 'Fiz meus exames de imagem e o resultado saiu muito rápido. Equipe extremamente atenciosa e prestativa.',
    rating: 5,
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=66',
  },
  {
    id: 3,
    name: 'Juliana Paes',
    text: 'Profissionais maravilhosos! O ambiente é acolhedor e passa muita segurança durante todo o atendimento.',
    rating: 5,
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=77',
  },
]

export const FAQS = [
  {
    q: 'Como devo me preparar para exames de imagem?',
    a: 'O preparo varia de acordo com o exame. Ao agendar, nossa equipe enviará todas as instruções necessárias por WhatsApp ou e-mail, incluindo jejum e medicações.',
  },
  {
    q: 'É possível agendar consultas e exames para o mesmo dia?',
    a: 'Sim, visando o seu conforto, possuímos pacotes de check-up onde organizamos a agenda para que você realize consultas e exames em um único período.',
  },
  {
    q: 'Onde posso retirar o resultado dos meus exames?',
    a: 'Os resultados podem ser acessados diretamente pelo nosso portal online com o protocolo fornecido no dia, ou retirados presencialmente em nossa recepção.',
  },
]
