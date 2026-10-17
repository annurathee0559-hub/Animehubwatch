import Link from 'next/link';

export default function WatchPage() {
  return (
    <main className="page-shell watch-page">
      <div className="watch-header">
        <Link href="/" className="secondary-btn">← Back Home</Link>
        <div>
          <p className="eyebrow">NOW PLAYING</p>
          <h1>Solo Leveling • Episode 1</h1>
        </div>
      </div>

      <div className="player-wrap">
        <video
          className="player"
          controls
          preload="metadata"
          poster="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80"
        >
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section className="watch-info">
        <div>
          <h2>Episode overview</h2>
          <p>
            A legendary battle begins as a hunter uncovers hidden power and enters a reality that changes everything.
          </p>
        </div>

        <div className="episode-list">
          <button className="episode active">Episode 1</button>
          <button className="episode">Episode 2</button>
          <button className="episode">Episode 3</button>
          <button className="episode">Episode 4</button>
        </div>
      </section>
    </main>
  );
}
