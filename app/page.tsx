import Link from 'next/link';

const animeCatalog = [
  {
    slug: 'solo-leveling',
    title: 'Solo Leveling',
    season: 'Season 1',
    year: 2024,
    genres: ['Action', 'Fantasy'],
    rating: '8.8',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    description: 'A hunter enters a dangerous new world and uncovers powers beyond imagination.'
  },
  {
    slug: 'naruto-shippuden',
    title: 'Naruto Shippuden',
    season: 'Season 1',
    year: 2010,
    genres: ['Adventure', 'Action'],
    rating: '9.2',
    image:
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=80',
    description: 'The legendary ninja story continues as Naruto faces stronger enemies and deeper trials.'
  },
  {
    slug: 'attack-on-titan',
    title: 'Attack on Titan',
    season: 'Final Season',
    year: 2023,
    genres: ['Drama', 'Mystery'],
    rating: '9.5',
    image:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80',
    description: 'A brutal war for survival unfolds as secrets and betrayal shape the fate of humanity.'
  },
  {
    slug: 'demon-slayer',
    title: 'Demon Slayer',
    season: 'Kimetsu no Yaiba',
    year: 2022,
    genres: ['Action', 'Adventure'],
    rating: '9.0',
    image:
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80',
    description: 'A young swordsman fights to save his sister and protect humanity from demonic terror.'
  }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="logo">AnimeHubWatch</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#popular">Popular</a>
          <a href="#new">New Episodes</a>
          <a href="#watch">Watch</a>
        </nav>
        <Link href="/watch" className="primary-btn">Watch Now</Link>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow">LIVE • UPDATED DAILY</span>
          <h1>Stream anime without the clutter.</h1>
          <p>
            Discover trending titles, curated collections, and an immersive stream experience built for fans.
          </p>
          <div className="hero-actions">
            <Link href="/watch" className="primary-btn">Start Watching</Link>
            <Link href="#popular" className="secondary-btn">Browse Library</Link>
          </div>
          <div className="hero-meta">
            <span>580k+ Fans</span>
            <span>4.9/5 Rating</span>
            <span>24/7 Updates</span>
          </div>
        </div>

        <div className="featured-panel">
          <div className="featured-image" />
          <div className="featured-card">
            <p className="pill">Trending</p>
            <h3>Solo Leveling</h3>
            <p>Action • Fantasy • 2024</p>
          </div>
        </div>
      </section>

      <section className="library" id="popular">
        <div className="section-head">
          <h2>Popular Anime</h2>
          <Link href="/watch">View All</Link>
        </div>

        <div className="card-grid">
          {animeCatalog.map((anime) => (
            <Link href={`/anime/${anime.slug}`} key={anime.slug} className="anime-card">
              <div
                className="anime-thumb"
                style={{ backgroundImage: `url(${anime.image})` }}
              />
              <div className="anime-content">
                <div className="anime-row">
                  <strong>{anime.title}</strong>
                  <span>{anime.rating}</span>
                </div>
                <p>{anime.description}</p>
                <div className="tag-row">
                  {anime.genres.map((genre) => (
                    <span key={genre}>{genre}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
