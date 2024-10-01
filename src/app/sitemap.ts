import { API_URL } from '@/services/enums';

async function getEvents() {
  const res = await fetch(
    `${API_URL}/sextou/v1/events/?page=1&after=2023-08-01&before=2023-08-31`,
    {
      cache: 'no-cache',
    }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
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
  // const data: EventsAPIResponse = await getEvents();

  // const categories = categoriesList.map((cat) => {
  //   return {
  //     url: `https://sextou.rio/category/${cat}`,
  //     lastModified: new Date(),
  //     changeFrequency: 'weekly',
  //     priority: 0.8,
  //   };
  // });

  // const posts = data.posts?.map((post) => {
  //   return {
  //     url: `https://sextou.rio/event/${post.slug}`,
  //     lastModified: new Date(),
  //     changeFrequency: 'never',
  //     priority: 0.5,
  //   };
  // });

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
