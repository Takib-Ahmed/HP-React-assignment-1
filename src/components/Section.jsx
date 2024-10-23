
import Card from './Card';

const Section = () => {
  const cards = [
    { title: 'Whitechapel Rd.', location: 'Whitechapel Rd.', price: '$1,456,654.00',                    image: '/path/to/image1.jpg' },
    { title: 'Whitechapel Rd.', location: 'Whitechapel Rd.', price: '$1,456,654.00',                    image: '/path/to/image2.jpg' },
    { title: 'Tulare County', location: 'Tulare County, Los Angeles, CA 23415', price: '$1,456,654.00', image: '/path/to/image3.jpg' },
    { title: 'Tulare County', location: 'Tulare County, Los Angeles, CA 23415', price: '$1,456,654.00', image: '/path/to/image4.jpg' },
    { title: 'Tulare County', location: 'Tulare County, Los Angeles, CA 23415', price: '$1,456,654.00', image: '/path/to/image5.jpg' }
  ];

  return (
    <section className="flex flex-wrap justify-center gap-6 p-6">
      {cards.map((card, index) => (
        <Card key={index} {...card}   />
      ))}
    </section>
  );
}

export default Section;
