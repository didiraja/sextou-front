import Link from 'next/link';
import * as React from 'react';

import Title from '@/components/atoms/Title';
import About from '@/components/molecules/About';
import Card from '@/components/molecules/Card';
import CardGrid from '@/components/templates/Card.Grid';
import { IEventProps } from '@/Content/types';

export default function HomePage() {
  // const showCarousel = false;

  return (
    <>
      {/* {showCarousel ? <Carousel /> : null} */}

      <div className='home-wrapper'>
        <Title>Principais eventos no Rio de Janeiro</Title>

        <>
          <CardGrid>
            {mockArr.map((event: IEventProps) => (
              <Link key={event.id} href={`/event/${event.slug}`}>
                <Card {...event} />
              </Link>
            ))}
          </CardGrid>

          {/* <Pagination
            totalItems={loaderData.total_posts}
            perPage={PER_PAGE}
          /> */}
        </>
      </div>

      <About />
    </>
  );
}

const mockArr = [
  {
    id: 726,
    slug: '726-rio-metal-fest',
    title: 'Rio Metal Fest',
    event_date: '2023-08-05T18:00:00+00:00',
    categories: [
      {
        term_id: 57,
        name: 'Zona Norte',
        slug: 'zona-norte',
        term_group: 0,
        term_taxonomy_id: 57,
        taxonomy: 'category',
        description: '',
        parent: 30,
        count: 22,
        filter: 'raw',
      },
      {
        term_id: 83,
        name: 'Pra\u00e7a da Bandeira',
        slug: 'praca-da-bandeira',
        term_group: 0,
        term_taxonomy_id: 83,
        taxonomy: 'category',
        description: '',
        parent: 31,
        count: 10,
        filter: 'raw',
      },
      {
        term_id: 35,
        name: 'Rock',
        slug: 'rock',
        term_group: 0,
        term_taxonomy_id: 35,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 103,
        filter: 'raw',
      },
    ],
    cover:
      'https://sextou.quartemo.com.br/wp-content/uploads/2023/06/361694797_189770127185848_7914942705485887160_n-768x960.jpg',
    free: false,
    tickets: 'https://www.sympla.com.br/evento/rio-metal-fest/2004702',
    description:
      'A Noise Stage apresenta para voc\u00eas o nosso t\u00e3o aguardado "Rio Metal Fest\u201d, com a banda de GRIND Desalmado,\u00a0substituindo\u00a0a banda de sarav\u00e1 metal\u00a0@gangrenagasosa\u00a0na Zona Oeste do Rio de janeiro na\u00a0@areninha_carioca_gilberto_gil\u00a0em Realengo. Para iniciar os trabalhos, teremos as bandas\u00a0@clivaoficial\u00a0@voxmortemband\u00a0@sanguedebode\u00a0e\u00a0@forkillofficial\u00a0. Os ingressos podem ser adquirido pelo sympla ou nos pontos de vendas. Os valores est\u00e3o a partir\u00a0de R$35,00, ent\u00e3o garanta j\u00e1 o seu antes que acabe. Anotem a\u00ed, dia 5 de agosto as 18h em Realengo RIO METAL FEST',
  },
  {
    id: 802,
    slug: '802-cyro-sampaio-e-gabriel-ventura-em-duque-de-caxias-cupom-sextou',
    title: '[CUPOM] Cyro Sampaio e Gabriel Ventura em Duque de Caxias',
    event_date: '2023-08-05T18:00:00+00:00',
    categories: [
      {
        term_id: 54,
        name: 'Baixada',
        slug: 'baixada',
        term_group: 0,
        term_taxonomy_id: 54,
        taxonomy: 'category',
        description: '',
        parent: 30,
        count: 11,
        filter: 'raw',
      },
      {
        term_id: 55,
        name: 'Duque de Caxias',
        slug: 'duque-de-caxias',
        term_group: 0,
        term_taxonomy_id: 55,
        taxonomy: 'category',
        description: '',
        parent: 31,
        count: 7,
        filter: 'raw',
      },
      {
        term_id: 61,
        name: 'Ac\u00fastico',
        slug: 'acustico',
        term_group: 0,
        term_taxonomy_id: 61,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 18,
        filter: 'raw',
      },
    ],
    cover:
      'https://sextou.quartemo.com.br/wp-content/uploads/2023/08/64c1a6c45d594-lg-768x432.jpg',
    free: false,
    tickets:
      'https://www.sympla.com.br/evento/cyro-sampaio-e-gabriel-ventura-em-duque-de-caxias/2092416',
    description:
      '<div class="sc-e3efa2c6-0 auDss">\r\n<h3><strong>\u26a0\ufe0f\u26a0\ufe0f </strong>10 REAIS DE DESCONTO SE USAR O CUPOM<strong> SEXTOU </strong><em>(sem exclama\u00e7\u00e3o)</em><strong>\u26a0\ufe0f\u26a0\ufe0f</strong></h3>\r\n</div>\r\n<div><img class="alignnone size-full wp-image-804" src="http://sextou.quartemo.com.br/wp-content/uploads/2023/08/F2dm6FuXUA49IrE.jpg" alt="" width="750" height="936" /></div>\r\n<div></div>\r\n<div class="sc-e3efa2c6-0 auDss">\r\n<div>Cyro Sampaio e Gabriel Ventura divulgam seus trabalhos solo em miniturn\u00ea que vai passar por Petr\u00f3polis, Rio de Janeiro, D. de Caxias e S\u00e3o Paulo entre os dias 3 e 6 de agosto. No dia 05, s\u00e1bado os artistas se apresentam em Duque de Caxias no Jardim 125.</div>\r\n<div></div>\r\n<div>Cyro \u00e9 m\u00fasico e compositor, vocalista e guitarrista da banda menores atos e rec\u00e9m-lan\u00e7ado em carreira solo, com o EP \u201cNada Presta\u201d. Do formato totalmente ac\u00fastico, cru, o projeto ganhou outros caminhos e, a partir de julho deste ano, Cyro inicia a divulga\u00e7\u00e3o de seu primeiro disco cheio, com o single \u201cUnfollow\u201d, que j\u00e1 mostra o artista flertando com novos elementos, como beats e synths, trazendo um apelo mais pop para o seu trabalho. Em seu show solo, o m\u00fasico apresenta suas principais composi\u00e7\u00f5es, em vers\u00f5es intimistas no viol\u00e3o, guitarra, explorando improvisa\u00e7\u00f5es, loops, efeitos e batidas eletr\u00f4nicas.</div>\r\n<div></div>\r\n<div>O guitarrista, compositor e produtor Gabriel Ventura, nasceu na cidade de Miguel Pereira, no interior do do Estado Rio de Janeiro, em 1988. Aos 18 anos se mudou para a cidade do Rio de Janeiro, onde se formou em Produ\u00e7\u00e3o Fonogr\u00e1fica.</div>\r\n<div>Ex-integrante da banda Ventre (agora em hiato por tempo indeterminado), lan\u00e7ou em 2022 o seu elogiado primeiro disco solo, \u201cTarde\u201d, gravado e co-produzido por Patrick Laplan, grande parceiro musical do artista e lan\u00e7ado pelo selo Balaclava Records.</div>\r\n<div>Dando suporte nas apresenta\u00e7\u00f5es de abertura, teremos os shows da artista caxiense Letti\u00e9 e do carioca thonygama.</div>\r\n<div></div>\r\n<div>05/08 a partir das 18h</div>\r\n<div>Jardim 125 - Rua Tuiuti, 125 - Jardim 25 de Agosto, Duque de Caxias - RJ.</div>\r\n<div></div>\r\n<div>$30,00 lote unico.</div>\r\n</div>',
  },
  {
    id: 668,
    slug: '668-braza-no-circo',
    title: 'BRAZA NO CIRCO',
    event_date: '2023-08-05T22:00:00+00:00',
    categories: [
      {
        term_id: 38,
        name: 'Centro',
        slug: 'centro',
        term_group: 0,
        term_taxonomy_id: 38,
        taxonomy: 'category',
        description: '',
        parent: 30,
        count: 138,
        filter: 'raw',
      },
      {
        term_id: 37,
        name: 'Lapa',
        slug: 'lapa',
        term_group: 0,
        term_taxonomy_id: 37,
        taxonomy: 'category',
        description: '',
        parent: 31,
        count: 100,
        filter: 'raw',
      },
      {
        term_id: 78,
        name: 'MPB',
        slug: 'mpb',
        term_group: 0,
        term_taxonomy_id: 78,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 26,
        filter: 'raw',
      },
      {
        term_id: 50,
        name: 'Reggae',
        slug: 'reggae',
        term_group: 0,
        term_taxonomy_id: 50,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 5,
        filter: 'raw',
      },
    ],
    cover:
      'https://sextou.quartemo.com.br/wp-content/uploads/2023/06/sitebraza-768x432.png',
    free: false,
    tickets:
      'https://www.eventim.com.br/event/braza-no-circo-voador-circo-voador-16974638/#tab=',
    description:
      '<div class="chamada-container">\r\n<div class="chamada-inner-container">\r\n<div class="chamada-text-container">\r\n<div class="chamada-text">\r\n\r\nDe noite quente eles entendem!\r\n\r\nS\u00e1bado, 05 de agosto, o BRAZA chega com o seu caldeir\u00e3o sonoro, que mistura elementos do reggae, do rap, do pop, os beats do funk, riffs de rock e ritmos brasileiros, pra mais uma apresenta\u00e7\u00e3o cat\u00e1rtica no palco do Circo Voador. Iniciando os trabalhos e estreando na Lona: os paulistas da Big Up.\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</div>',
  },
  {
    id: 864,
    slug: '864-rockarioca-convida-2',
    title: 'Rockarioca Convida #2',
    event_date: '2023-08-10T19:30:00+00:00',
    categories: [
      {
        term_id: 38,
        name: 'Centro',
        slug: 'centro',
        term_group: 0,
        term_taxonomy_id: 38,
        taxonomy: 'category',
        description: '',
        parent: 30,
        count: 138,
        filter: 'raw',
      },
      {
        term_id: 37,
        name: 'Lapa',
        slug: 'lapa',
        term_group: 0,
        term_taxonomy_id: 37,
        taxonomy: 'category',
        description: '',
        parent: 31,
        count: 100,
        filter: 'raw',
      },
      {
        term_id: 35,
        name: 'Rock',
        slug: 'rock',
        term_group: 0,
        term_taxonomy_id: 35,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 103,
        filter: 'raw',
      },
    ],
    cover:
      'https://sextou.quartemo.com.br/wp-content/uploads/2023/08/64c93f78d18dd-lg-768x402.jpg',
    free: false,
    tickets:
      'https://www.sympla.com.br/evento/rockarioca-convida-2-carbona-toca-back-to-basics-os-vulcanicos/2099521',
    description:
      '<div class="sc-e3efa2c6-0 auDss">\r\n<div>O coletivo Rockarioca, fundado em 2020 com alguns dos mais relevantes artistas de rock do Rio de Janeiro, promove o ROCKARIOCA CONVIDA #2 - com as bandas CARBONA (tocando Back to Basics) &amp; OS VULC\u00c2NICOS na quinta-feira 10 de agosto no LA ESQUINA (Mem de S\u00e1, 61 - Lapa/RJ).</div>\r\n<div></div>\r\n<div>O evento mensal, que acontece todas as 2\u00aas quintas-feiras do m\u00eas no La Esquina, traz em sua segunda edi\u00e7\u00e3o as bandas CARBONA - com 11 discos, um DVD e mais de 20 anos de estrada, a banda vai tocar na \u00edntegra o disco Back to Basics de 1999, que acaba de ser lan\u00e7ado em vinil na It\u00e1lia - e OS VULC\u00c2NICOS, banda que vira monstro no palco e leva o p\u00fablico \u00e0 loucura com seu punk garage rock.</div>\r\n<div>\r\n[Rockarioca Convida vai sempre contar com duas bandas: uma do coletivo Rockarioca e outra convidada - e o que n\u00e3o falta \u00e9 banda boa de rock no Rio, como mostram as redes sociais do coletivo. Os shows v\u00e3o ser cedo: das 19h30 \u00e0s 23h. Nosso compromisso \u00e9 com a m\u00fasica autoral, ent\u00e3o sempre ser\u00e3o artistas que t\u00eam trabalho pr\u00f3prio e com personalidade, selecionados a dedo, compondo a nata do rock carioca atual]</div>\r\n<div></div>\r\n<div>RELEASES BANDAS</div>\r\n<div></div>\r\n<div>CARBONA</div>\r\n<div>"No final de 1999 o CARBONA lan\u00e7ou seu segundo disco, \u201cBack to Basics\u201d, pela 13 records. O \u00e1lbum acabou ficando marcado como o mais importante da primeira fase da banda, quando ainda cantava em ingl\u00eas. A partir de 2002, no seu sexto disco, o CARBONA cantou em portugu\u00eas, e as m\u00fasicas em ingl\u00eas foram naturalmente saindo do set.</div>\r\n<div>\r\nEm 2023 o selo italiano Radiation Records relan\u00e7ou o \u201cBack to Basics\u201d em uma edi\u00e7\u00e3o caprichada em vinil branco, e o trio, com a presen\u00e7a do baterista Pedro (atualmente morando nos EUA) marcou dois shows comemorando o fato e relembrando pela primeira vez em duas d\u00e9cadas essas m\u00fasicas."</div>\r\n<div></div>\r\n<div></div>\r\n<div>OS VULC\u00c2NICOS</div>\r\n<div>"Retomando a lascividade do rock de garagem, tocado com a intensidade e urg\u00eancia do punk rock, em 2020, Os Vulc\u00e2nicos lan\u00e7am pela Abraxas Records, seu novo Ep, Deus Monstro. As 5 faixas ganham nova abrasividade e letras em portugu\u00eas com o retorno de Alam Ribeiro (voz/guitarra) dividindo os vocais com Filipe "Rat\u00e3o" Proen\u00e7a (voz/baixo), Dony Escobar (guitarra/voz) e Zozio Le\u00e3o (bateria/ voz).\r\n\r\nIniciado em 2009, o grupo lan\u00e7a "Os Vulcanicos (2010) e "El Truco" (2013) ainda em trio, sendo ent\u00e3o respons\u00e1veis por dar vida a uma regi\u00e3o quase esquecida no bairro da Lapa, tocando e organizando eventos semanalmente, onde tamb\u00e9m recebiam outras bandas e artistas. Durante a pandemia do COVID-19 lan\u00e7aram ainda o single/v\u00eddeo da m\u00fasica P\u00e2ntanos (2021)."</div>\r\n<div></div>\r\n<div></div>\r\n<div>\r\n<div><b>LINKS</b></div>\r\n<div><b>\u00a0</b></div>\r\n<div>- Ou\u00e7a Carbona:\u00a0<a href="https://open.spotify.com/artist/3H6dCs0SepKvLefBhYIwCp" target="_blank" rel="nofollow noopener noreferrer">https://open.spotify.com/artist/3H6dCs0SepKvLefBhYIwCp</a></div>\r\n<div></div>\r\n<div>- Ou\u00e7a Os Vulc\u00e2nicos:\u00a0<a href="https://open.spotify.com/artist/15RAGDAEq1iQd3soTFPVBq" target="_blank" rel="nofollow noopener noreferrer">https://open.spotify.com/artist/15RAGDAEq1iQd3soTFPVBq</a></div>\r\n<div></div>\r\n<div>- Conhe\u00e7a ROCKARIOCA:\u00a0<a href="https://linktr.ee/rockarioca" target="_blank" rel="nofollow noopener noreferrer">https://linktr.ee/<wbr />rockarioca</a></div>\r\n</div>\r\n<div></div>\r\n<div></div>\r\n<div><b>SERVI\u00c7O</b></div>\r\n<div>- Evento: Rockarioca Convida #2</div>\r\n<div>- Shows: Carbona (tocando Back to Basics)\u00a0+ Os Vulc\u00e2nicos</div>\r\n<div>- Quando: Quinta-feira 10 de agosto - das 19h30 \u00e0s 23H</div>\r\n<div>- Onde: La Esquina (Mem de S\u00e1, 61 - Lapa/RJ)</div>\r\n<div>- Ingressos: R$30 no dia / R$20 adiantado no Sympla</div>\r\n</div>\r\n<div class="sc-575bb398-2 fPASTb"></div>',
  },
  {
    id: 858,
    slug: '858-caos-in-baile',
    title: 'Caos in Baile',
    event_date: '2023-08-10T21:00:00+00:00',
    categories: [
      {
        term_id: 38,
        name: 'Centro',
        slug: 'centro',
        term_group: 0,
        term_taxonomy_id: 38,
        taxonomy: 'category',
        description: '',
        parent: 30,
        count: 138,
        filter: 'raw',
      },
      {
        term_id: 37,
        name: 'Lapa',
        slug: 'lapa',
        term_group: 0,
        term_taxonomy_id: 37,
        taxonomy: 'category',
        description: '',
        parent: 31,
        count: 100,
        filter: 'raw',
      },
      {
        term_id: 46,
        name: 'EDM',
        slug: 'edm',
        term_group: 0,
        term_taxonomy_id: 46,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 84,
        filter: 'raw',
      },
      {
        term_id: 63,
        name: 'Funk',
        slug: 'funk',
        term_group: 0,
        term_taxonomy_id: 63,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 66,
        filter: 'raw',
      },
      {
        term_id: 36,
        name: 'Hip-hop',
        slug: 'hip-hop',
        term_group: 0,
        term_taxonomy_id: 36,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 98,
        filter: 'raw',
      },
    ],
    cover:
      'https://sextou.quartemo.com.br/wp-content/uploads/2023/08/366439661_1437092013814957_7380241033838145302_n-768x960.jpg',
    free: false,
    tickets: '',
    description:
      '<p class="_aacl _aaco _aacu _aacx _aad7 _aade" dir="auto">Essa quinta temos a estreia do <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd" tabindex="0" role="link" href="https://www.instagram.com/caosinbaile/">@caosinbaile</a> nas terras cariocas e nada melhor que come\u00e7armos no ber\u00e7o do caos. Nossa casa nesta edi\u00e7\u00e3o \u00e9 o <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd" tabindex="0" role="link" href="https://www.instagram.com/lapalounge21/">@lapalounge21</a> .\r\n\r\nLINE\r\n<a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd" tabindex="0" role="link" href="https://www.instagram.com/gustavo.elsas/">@gustavo.elsas</a>\r\n<a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd" tabindex="0" role="link" href="https://www.instagram.com/bobzilladj/">@bobzilladj</a>\r\n<a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd" tabindex="0" role="link" href="https://www.instagram.com/pedro_viellas/">@pedro_viellas</a>\r\n\r\nBrota que vai ser ritimado.</p>',
  },
  {
    id: 854,
    slug: '854-cariocaos-na-audio-rebel',
    title: 'Emicaeli e + na Audio Rebel',
    event_date: '2023-08-11T19:00:00+00:00',
    categories: [
      {
        term_id: 33,
        name: 'Zona Sul',
        slug: 'zona-sul',
        term_group: 0,
        term_taxonomy_id: 33,
        taxonomy: 'category',
        description: '',
        parent: 30,
        count: 81,
        filter: 'raw',
      },
      {
        term_id: 34,
        name: 'Botafogo',
        slug: 'botafogo',
        term_group: 0,
        term_taxonomy_id: 34,
        taxonomy: 'category',
        description: '',
        parent: 31,
        count: 65,
        filter: 'raw',
      },
      {
        term_id: 46,
        name: 'EDM',
        slug: 'edm',
        term_group: 0,
        term_taxonomy_id: 46,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 84,
        filter: 'raw',
      },
      {
        term_id: 131,
        name: 'Experimental',
        slug: 'experimental',
        term_group: 0,
        term_taxonomy_id: 131,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 4,
        filter: 'raw',
      },
      {
        term_id: 35,
        name: 'Rock',
        slug: 'rock',
        term_group: 0,
        term_taxonomy_id: 35,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 103,
        filter: 'raw',
      },
    ],
    cover:
      'https://sextou.quartemo.com.br/wp-content/uploads/2023/08/366112674_857465549131941_1567950010455617339_n.jpg',
    free: false,
    tickets: '',
    description:
      '<p class="_aacl _aaco _aacu _aacx _aad7 _aade" dir="auto">Fim de semana de CarioCaos na Audio Rebel!</p>\r\nSexta rola o bail\u00e3o de luxo com <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd" tabindex="0" role="link" href="https://www.instagram.com/emicaeli_/">@emicaeli_</a>\r\n<a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd" tabindex="0" role="link" href="https://www.instagram.com/crizindazo/">@crizindazo</a> + <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd" tabindex="0" role="link" href="https://www.instagram.com/jezadapedra/">@jezadapedra</a>\r\n<a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd" tabindex="0" role="link" href="https://www.instagram.com/naosomosaprefeitura/">@naosomosaprefeitura</a>\r\n19 horas porta e vamos tocar 20 hs porque o igor vai trabalhar as 21!\r\nLUXO!\r\n\r\nMas o que \u00e9 Cariocaos?\r\nUm estilo? Uma galera? Um papo novo? Um papo velho repaginado?Uma pagina de instagram? Um remedio novo? Um golpe de marketing?\r\n\r\nVem descobrir!\r\n\r\nTem algo borbulhando sob o asfalto carioca pronto para invadir sua calma.',
  },
  {
    id: 851,
    slug: '851-pistinha-3',
    title: 'Pistinha',
    event_date: '2023-08-11T20:00:00+00:00',
    categories: [
      {
        term_id: 33,
        name: 'Zona Sul',
        slug: 'zona-sul',
        term_group: 0,
        term_taxonomy_id: 33,
        taxonomy: 'category',
        description: '',
        parent: 30,
        count: 81,
        filter: 'raw',
      },
      {
        term_id: 110,
        name: 'Lagoa',
        slug: 'lagoa',
        term_group: 0,
        term_taxonomy_id: 110,
        taxonomy: 'category',
        description: '',
        parent: 31,
        count: 4,
        filter: 'raw',
      },
      {
        term_id: 63,
        name: 'Funk',
        slug: 'funk',
        term_group: 0,
        term_taxonomy_id: 63,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 66,
        filter: 'raw',
      },
      {
        term_id: 36,
        name: 'Hip-hop',
        slug: 'hip-hop',
        term_group: 0,
        term_taxonomy_id: 36,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 98,
        filter: 'raw',
      },
    ],
    cover:
      'https://sextou.quartemo.com.br/wp-content/uploads/2023/08/366419869_110908035413575_1073687838842688975_n-768x768.jpg',
    free: false,
    tickets: 'https://www.ingresse.com/parque-bar-pistinha-11-08',
    description:
      '<p class="_aacl _aaco _aacu _aacx _aad7 _aade" dir="auto">\ud835\udd94\ud835\udd93\ud835\udd9f\ud835\udd8a \ud835\udd89\ud835\udd8a \ud835\udd86\ud835\udd8c\ud835\udd94\ud835\udd98\ud835\udd99\ud835\udd94</p>\r\n\r\n<ul>\r\n \t<li dir="auto">Thai</li>\r\n \t<li dir="auto">Jacquelone</li>\r\n \t<li dir="auto">Bia Marques</li>\r\n \t<li dir="auto">Izzi</li>\r\n \t<li dir="auto">Mano a Mano</li>\r\n</ul>\r\n<p dir="auto">+18</p>',
  },
  {
    id: 788,
    slug: '788-bxd-in-cena-na-casa-33',
    title: 'BXD IN CENA NA CASA 33',
    event_date: '2023-08-11T23:00:00+00:00',
    categories: [
      {
        term_id: 34,
        name: 'Botafogo',
        slug: 'botafogo',
        term_group: 0,
        term_taxonomy_id: 34,
        taxonomy: 'category',
        description: '',
        parent: 31,
        count: 65,
        filter: 'raw',
      },
      {
        term_id: 46,
        name: 'EDM',
        slug: 'edm',
        term_group: 0,
        term_taxonomy_id: 46,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 84,
        filter: 'raw',
      },
      {
        term_id: 36,
        name: 'Hip-hop',
        slug: 'hip-hop',
        term_group: 0,
        term_taxonomy_id: 36,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 98,
        filter: 'raw',
      },
      {
        term_id: 66,
        name: 'Jazz',
        slug: 'jazz',
        term_group: 0,
        term_taxonomy_id: 66,
        taxonomy: 'category',
        description: '',
        parent: 32,
        count: 8,
        filter: 'raw',
      },
    ],
    cover:
      'https://sextou.quartemo.com.br/wp-content/uploads/2023/07/64bf13b108a5f-lg-768x402.png',
    free: false,
    tickets: 'https://www.sympla.com.br/evento/bxd-in-cena-na-casa-33/2089854',
    description:
      '<div class="sc-e3efa2c6-0 auDss">\r\n<div>BXD IN CENA em uma edi\u00e7\u00e3o especial.</div>\r\n<div>Fomos convidados pela Casa 33 Studio pra se apresentar e mostrar a for\u00e7a da BXD na Zona Sul.</div>\r\n<div>E eu estarei l\u00e1 fazendo aquele groove que voc\u00eas j\u00e1 conhecem com a minha banda dirigida pelo @lobo_ cantando o melhor da Black Music, Soul/R&amp;B, trazendo tamb\u00e9m as minhas autorais pra voc\u00eas cantarem bem alto.</div>\r\n<div>Laizz cria de Nova Igua\u00e7u \u00e9 a nova aposta do cen\u00e1rio art\u00edstico contempor\u00e2neo do R&amp;B e da MPB (M\u00fasica Preta Brasileira) .</div>\r\n<div>A cantora traz consigo a pot\u00eancia de um timbre marcante e sua ampla extens\u00e3o vocal.</div>\r\n<div>Recentemente a artista lan\u00e7ou o EP Soul da Baixada.</div>\r\n<div>Joazz cria de Duque de Caxias, seu conhecimento musical vai do Hip Hop ao Soul, muito Groove, Jazz, R&amp;B, House, passando tamb\u00e9m pelas vertentes eletr\u00f4nicas como UK Garage, Grime, Jersey, al\u00e9m das cl\u00e1ssicas refer\u00eancias brasileiras e internacionais.</div>\r\n<div></div>\r\n<div>__________________</div>\r\n<div></div>\r\n<div>Ingressos no Sympla, link na bio.</div>\r\n<div>Primeiro lote: R$ 15,00</div>\r\n<div>Segundo lote: R$ 20,00</div>\r\n<div>No dia: 25,00</div>\r\n<div></div>\r\n<div>Hor\u00e1rio:</div>\r\n<div>18h - Abertura da casa</div>\r\n<div>19h - Joazz</div>\r\n<div>20h - Laizz</div>\r\n<div>21h - J\u00e9z e Banda.</div>\r\n<div></div>\r\n<div>__________________</div>\r\n<div></div>\r\n<div>CASA 33 \u2013 Rua Professor Alfredo Gomes, 33 \u2013 Botafogo \u2013 Rio de Janeiro</div>\r\n<div>- Fiquem atento aos hor\u00e1rios, o evento acaba \u00e0s 22h.</div>\r\n<div>- Local perto do Metr\u00f4.</div>\r\n</div>',
  },
];

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

{
  /* <GracefulLoad loaderData={homeLoader.result}>
          {({ loaderData }) => (
            <>
              <CardGrid>
                {loaderData.posts?.map((event: IEventProps) => (
                  <Card
                    key={event.id}
                    {...event}
                    path={event.slug}
                    onClick={() => setGoBack('/')}
                  />
                ))}
              </CardGrid>

              <Pagination
                totalItems={loaderData.total_posts}
                perPage={PER_PAGE}
              />
            </>
          )}
        </GracefulLoad> */
}
