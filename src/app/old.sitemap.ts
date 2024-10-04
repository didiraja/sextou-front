import { EventsAPIResponse } from '@/Content/types';

async function getEvents() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
      cache: 'no-cache',
    });

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (e) {
    console.log(e);

    return [];
  }
}

const categoriesList = [
  'acustico',
  'afrobeat',
  'alto-da-boa-vista',
  'bairro',
  'baixada',
  'barra-da-tijuca',
  'botafogo',
  'brega',
  'campo-grande',
  'centro',
  'copacabana',
  'cosme-velho',
  'highlight',
  'drill',
  'drum-n-bass',
  'duque-de-caxias',
  'edm',
  'emo',
  'estilo',
  'experimental',
  'funk',
  'gamboa',
  'grime',
  'grunge',
  'hip-hop',
  'house',
  'humaita',
  'hyperpop',
  'indie',
  'jazz',
  'k-pop',
  'lagoa',
  'lapa',
  'leste-fluminense',
  'madureira',
  'meier',
  'metal',
  'mpb',
  'niteroi',
  'nova-iguacu',
  'padre-miguel',
  'pagodao',
  'penha',
  'pop',
  'pop-punk',
  'praca-da-bandeira',
  'praca-tiradentes',
  'punk-hardcore',
  'rb',
  'ramos',
  'realengo',
  'reggae',
  'regiao',
  'rock',
  'samba',
  'santo-cristo',
  'sao-goncalo',
  'synthwave',
  'tijuca',
  'trap',
  'zona-norte',
  'zona-oeste',
  'zona-sul',
];

export default async function sitemap() {
  const data: EventsAPIResponse = await getEvents();

  // const categories = categoriesList.map((cat) => {
  //   return {
  //     url: `https://sextou.rio/category/${cat}`,
  //     lastModified: new Date(),
  //     changeFrequency: 'weekly',
  //     priority: 0.8,
  //   };
  // });

  const posts = data.items?.map((post) => {
    return {
      url: `https://sextou.rio/event/${post._id}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.5,
    };
  });

  return [
    {
      url: 'https://sextou.rio/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // ...categories,
    // ...posts,
  ];
}
