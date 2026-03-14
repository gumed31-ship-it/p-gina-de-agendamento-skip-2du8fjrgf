import {
  Activity,
  Stethoscope,
  Syringe,
  HeartPulse,
  UserCheck,
  Heart,
  Brain,
  Bone,
  Eye,
  Droplets,
  Baby,
} from 'lucide-react'

export const NAVIGATION = [
  { name: 'Especialidades', href: '#especialidades' },
  { name: 'Procedimentos', href: '#procedimentos' },
  { name: 'Exames', href: '#exames' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Estrutura', href: '#estrutura' },
  { name: 'Equipe', href: '#equipe' },
  { name: 'Contato', href: '#contato' },
]

export const SPECIALTIES = [
  {
    id: '1',
    name: 'Anestesiologia',
    icon: Syringe,
    desc: 'Excelência em segurança, monitoramento e controle da dor em procedimentos médicos.',
  },
  {
    id: '2',
    name: 'Angiologia',
    icon: HeartPulse,
    desc: 'Prevenção e tratamento especializado das doenças do sistema circulatório.',
  },
  {
    id: '3',
    name: 'Cardiologia',
    icon: Heart,
    desc: 'Prevenção, diagnóstico e tratamento de doenças do coração e do sistema cardiovascular.',
  },
  {
    id: '4',
    name: 'Clínica Médica',
    icon: Stethoscope,
    desc: 'Atendimento global e integrativo para diagnóstico e tratamento de pacientes adultos.',
  },
  {
    id: '5',
    name: 'Gastroenterologia',
    icon: Activity,
    desc: 'Diagnóstico e tratamento de doenças do aparelho digestivo com cuidado e precisão.',
  },
  {
    id: '6',
    name: 'Geriatria',
    icon: UserCheck,
    desc: 'Cuidado integral e humanizado com foco na saúde, bem-estar e qualidade de vida do idoso.',
  },
  {
    id: '11',
    name: 'Ginecologia e Obstetrícia',
    icon: Baby,
    desc: 'Cuidado integral à saúde da mulher e acompanhamento especializado durante a gestação.',
  },
  {
    id: '7',
    name: 'Neurologia adulto e pediátrica',
    icon: Brain,
    desc: 'Diagnóstico e tratamento de distúrbios do sistema nervoso para pacientes de todas as idades.',
  },
  {
    id: '8',
    name: 'Oftalmologia',
    icon: Eye,
    desc: 'Prevenção, diagnóstico e tratamento de doenças relacionadas aos olhos e à visão.',
  },
  {
    id: '9',
    name: 'Ortopedia',
    icon: Bone,
    desc: 'Cuidado especializado na prevenção e tratamento de doenças dos ossos, músculos e articulações.',
  },
  {
    id: '10',
    name: 'Urologia',
    icon: Droplets,
    desc: 'Cuidado especializado do trato urinário e sistema reprodutor masculino.',
  },
]

export const MEDICAL_TEAM = [
  {
    id: 1,
    name: 'Dr. Roberto Almeida',
    specialty: 'Radiologia e Diagnóstico por Imagem',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=101',
  },
  {
    id: 2,
    name: 'Dra. Camila Vasconcelos',
    specialty: 'Ginecologia e Obstetrícia',
    image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=102',
  },
  {
    id: 3,
    name: 'Dr. Fernando Costa',
    specialty: 'Cardiologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=103',
  },
  {
    id: 4,
    name: 'Dra. Beatriz Santos',
    specialty: 'Angiologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=104',
  },
  {
    id: 5,
    name: 'Dr. Thiago Moraes',
    specialty: 'Ortopedia',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=105',
  },
  {
    id: 6,
    name: 'Dra. Juliana Mendes',
    specialty: 'Neurologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=106',
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
