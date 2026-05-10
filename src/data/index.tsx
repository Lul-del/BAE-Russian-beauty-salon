import { Eye, Scissors, Hand, Palette, Wand2, Gem } from 'lucide-react';
import img1 from '../images/BAE-Russian-beauty-salon-Lashes-Hair-Nails-1.jpg';
import img2 from '../images/BAE-Russian-beauty-salon-Lashes-Hair-Nails-2.jpg';
import img3 from '../images/BAE-Russian-beauty-salon-Lashes-Hair-Nails-3.jpg';
import img4 from '../images/BAE-Russian-beauty-salon2-Lashes-Hair-Nails.jpg';

export const services = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Extensions de Cils',
    desc: 'Sublimez votre regard avec nos extensions de cils premium. Volume russe, effet naturel ou glamour.',
    items: ['Volume Russe', 'Volume 3D-6D', 'Effet Naturel', 'Mega Volume', 'Lash Lift'],
    color: 'from-pink-500 to-rose-400',
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Coiffure & Cheveux',
    desc: 'Coupe, coloration, soin et coiffure. Nos experts subliment votre chevelure avec les dernières tendances.',
    items: ['Coloration', 'Balayage', 'Coupe & Brushing', 'Soin Kératine', 'Lissage Brésilien'],
    color: 'from-amber-500 to-yellow-400',
  },
  {
    icon: <Hand className="w-8 h-8" />,
    title: 'Manucure & Ongles',
    desc: "Manucure russe, gel, semi-permanent et nail art. Des ongles parfaits jusqu'au bout des doigts.",
    items: ['Manucure Russe', 'Gel & Semi-permanent', 'Nail Art', 'Pose de Capsules', 'Pédicure Spa'],
    color: 'from-purple-500 to-violet-400',
  },
];

export const pricing = [
  {
    cat: 'Cils',
    icon: <Eye className="w-5 h-5" />,
    items: [
      { name: 'Volume Russe Classique', price: '65€' },
      { name: 'Volume 3D', price: '80€' },
      { name: 'Volume 5D-6D', price: '95€' },
      { name: 'Mega Volume', price: '110€' },
      { name: 'Lash Lift + Teinture', price: '55€' },
      { name: 'Remplissage Cils', price: '45€' },
    ],
  },
  {
    cat: 'Cheveux',
    icon: <Scissors className="w-5 h-5" />,
    items: [
      { name: 'Coupe Femme', price: '35€' },
      { name: 'Brushing', price: '25€' },
      { name: 'Coloration Complète', price: '75€' },
      { name: 'Balayage / Mèches', price: '95€' },
      { name: 'Soin Kératine', price: '120€' },
      { name: 'Lissage Brésilien', price: '150€' },
    ],
  },
  {
    cat: 'Ongles',
    icon: <Hand className="w-5 h-5" />,
    items: [
      { name: 'Manucure Russe', price: '35€' },
      { name: 'Vernis Semi-permanent', price: '30€' },
      { name: 'Gel Complet', price: '45€' },
      { name: 'Nail Art (par ongle)', price: '5€' },
      { name: 'Pose de Capsules', price: '55€' },
      { name: 'Pédicure Spa Complète', price: '40€' },
    ],
  },
];

export const testimonials = [
  {
    name: 'Tereza Stránská',
    text: 'I regularly visit this salon for lash extensions and pedicure, they do the best lash extensions I\'ve ever had. The salon is also very cozy, friendly, and welcoming 🩷',
    rating: 5,
  },
  {
    name: 'Mark Stivert',
    text: 'Top professionals Haircuts Manicure Pedicure Browns',
    rating: 5,
  },
  {
    name: 'MashaSan beauty Groningen',
    text: 'Highly recommend 👌 Got hair extensions by Alex , so love result',
    rating: 5,
  },
  {
    name: 'Maria Nemchinova',
    text: 'The best salon in Dubai, top maters! I do all in house - mani , pedi, lashes, got new amazing haircut from Alex , highly recommend 🔝',
    rating: 5,
  },
  {
    name: 'Iryna Bolibok',
    text: 'Thank you so much to BAE Beauty salon for such beauty and care!! The eyelash extensions turned out absolutely perfect – exactly what I wanted. Very meticulous work, a pleasant atmosphere, and true professionalism from the technician. Ladies, I highly recommend them.',
    rating: 5,
  },
];

export const galleryItems = [
  {
    image: img1,
    label: 'Extensions de Cils',
    sublabel: 'Volume Russe',
    icon: <Eye className="w-5 h-5" />,
  },
  {
    image: img2,
    label: 'Nail Art',
    sublabel: 'Manucure créative',
    icon: <Palette className="w-5 h-5" />,
  },
  {
    image: img3,
    label: 'Lash Lift',
    sublabel: 'Rehaussement de cils',
    icon: <Wand2 className="w-5 h-5" />,
  },
  {
    image: img4,
    label: 'Manucure',
    sublabel: 'Gel & Semi-permanent',
    icon: <Gem className="w-5 h-5" />,
  },
];
