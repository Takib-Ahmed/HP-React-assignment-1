
import Card from './Card';

const Section = () => {
  const cards = [
    { title: 'Whitechapel Rd.', location: 'Whitechapel Rd.', price: '$1,456,654.00',                    image: '/public/Section/disas1.png' },
    { title: 'Whitechapel Rd.', location: 'Whitechapel Rd.', price: '$1,456,654.00',                    image: '/public/Section/Rectangle 2.png'},
    { title: 'Tulare County', location: 'Tulare County, Los Angeles, CA 23415', price: '$1,456,654.00', image: '/public/Section/Rectangle3.png' },
    { title: 'Tulare County', location: 'Tulare County, Los Angeles, CA 23415', price: '$1,456,654.00', image: '/public/Section/Rectangle 4.png' },
    { title: 'Tulare County', location: 'Tulare County, Los Angeles, CA 23415', price: '$1,456,654.00', image: '/public/Section/Rectangle5.png' },
    { title: 'Tulare County', location: 'Tulare County, Los Angeles, CA 23415', price: '$1,456,654.00', image: '/public/Section/Rectangle6.png' },

  ];

  return (
    <section className="flex flex-wrap px-24 py-10 gap-7 p-6">
      {cards.map((card, index) => (
        <Card key={index} {...card}   />
      ))}
    </section>
  );
}

export default Section;
