import Link from 'next/link';

const catalog = {
  'solo-leveling': {
    title: 'Solo Leveling',
    year: '2024',
    rating: '8.8',
    description: 'A hunter awakens to extraordinary powers in a brutal, dangerous world.',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    synopsis:
      'After a mysterious event reshapes the world, Jin-Woo must rise through the ranks and confront impossible foes.'
  },
  'naruto-shippuden': {
    title: 'Naruto Shippuden',
    year: '2010',
    rating: '9.2',
    description: 'The journey of a determined ninja continues toward greatness.',
    image:
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=80',
    synopsis:
      'Naruto and his team battle new enemies while chasing a future shaped by hope, friendship, and sacrifice.'
  },
  'attack-on-titan': {
    title: 'Attack on Titan',
    year: '2023',
    rating: '9.5',
    description: 'The final chapter reveals the truth behind the walls and the world beyond them.',
    image:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80',
    synopsis:
      'Humanity’s last war reaches its breaking point as the cost of survival grows greater with each move.'
  },
  'demon-slayer': {
    title: 'Demon Slayer',
    year: '2022',
    rating: '9.0',
    description: 'A swordsman must master his fear to protect his family and fight monsters.',
    image:
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80',
    synopsis:
      'As Tanjiro journeys deeper into the world of demons, every step brings him closer to the truth.'
  }
} as const;

export default function AnimeDetailPage({ params }: { params: { slug: string } }) {
  const item = catalog[params.slug as keyof typeof catalog];

  if (!item) {
    return (
      <main className="page-shell detail-page">
        <h1>Anime not found</h1>
        <Link href="/" className="primary-btn">Back home</Link>
      </main>
    );
  }

  return (
    <main className="page-shell detail-page">
      <div className="detail-hero" style={{ backgroundImage: `url(${item.image})` }}>
        <div className="detail-overlay">
          <div className="detail-copy">
            <span className="eyebrow">SERIES • {item.year}</span>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div className="hero-actions">
              <Link href="/watch" className="primary-btn">Watch Episode 1</Link>
              <Link href="/" className="secondary-btn">Back Home</Link>
            </div>
          </div>
        </div>
      </div>

      <section className="detail-content">
        <div className="meta-box">
          <p><strong>Rating:</strong> {item.rating}</p>
          <p><strong>Genre:</strong> Action, Fantasy</p>
          <p><strong>Status:</strong> Ongoing</p>
        </div>

        <div className="synopsis-box">
          <h2>Synopsis</h2>
          <p>{item.synopsis}</p>
        </div>
      </section>
    </main>
  );
}
