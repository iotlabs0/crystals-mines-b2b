import './products.css';

const products = [
  {
    id: 1,
    name: 'Amethyst Crystal',
    description: 'Beautiful purple quartz known for its calming properties.',
    price: '$25',
    imageUrl: '/images/amethyst.jpg',
  },
  {
    id: 2,
    name: 'Clear Quartz',
    description: 'Versatile crystal often used for healing and energy amplification.',
    price: '$20',
    imageUrl: '/images/clear-quartz.jpg',
  },
  {
    id: 3,
    name: 'Rose Quartz',
    description: 'Known as the stone of love, promoting compassion and peace.',
    price: '$22',
    imageUrl: '/images/rose-quartz.jpg',
  },
  {
    id: 4,
    name: 'Citrine',
    description: 'Yellow quartz that brings positivity and abundance.',
    price: '$30',
    imageUrl: '/images/citrine.jpg',
  },
];

export default function ProductPage() {
  return (
    <div className="product-container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map(({ id, name, description, price, imageUrl }) => (
          <div key={id} className="product-card">
            <img src={imageUrl} alt={name} className="product-image" />
            <div className="product-info">
              <h2>{name}</h2>
              <p>{description}</p>
              <span className="product-price">{price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
