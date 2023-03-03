/* eslint-disable */
// @ts-nocheck
function Template() {
  const data = [{
    slug: 'centro',
    label: 'Centro',
  },
  {
    slug: 'lapa',
    label: 'Lapa',
  },
  {
    slug: 'funk',
    label: 'Funk',
  },
  ];

  return data.map((item) => <Button pill href={`https://sextou.rio/category/${item.slug}`}>{item.label}</Button>);
}

export const Example = Template.bind({});
