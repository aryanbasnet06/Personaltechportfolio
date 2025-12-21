export function ArtCulturePage() {
  return (
    <>
      <style>{`
  * { box-sizing: border-box; }
  body { margin: 0; }

  /* ===== PAGE-LOAD FADE-IN ANIMATION ===== */
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1.2s ease-out forwards;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .page {
    font-family: Georgia, "Times New Roman", serif;
    background: #f6f6f6;
    color: #2e2e2e;
  }

  h1, h2, h3 {
    color: #6b0000;
    font-weight: 600;
  }

  .bg-white { background: #ffffff; }
  .bg-grey { background: #f2f2f2; }

  /* HERO */
  .hero {
    text-align: center;
    padding: 140px 24px 160px;
  }

  .hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }

  .hero .subtitle {
    font-style: italic;
    font-size: 1.3rem;
    margin-bottom: 30px;
  }

  .photo-title {
    text-align: center;
    font-size: 2.2rem;
    color: #6b0000;
    margin-bottom: 40px;
    font-weight: 600;
  }

  .hero .intro {
    max-width: 580px;
    margin: 0 auto;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
  }

  /* SECTION */
  .section {
    padding: 120px 24px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
  }

  /* IMAGE HOVER */
  .images img {
    width: 100%;
    margin-bottom: 28px;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.6s ease, box-shadow 0.6s ease;
  }

  .images img:hover {
    transform: scale(1.05);
    box-shadow: 0 24px 55px rgba(0,0,0,0.22);
  }

  .text h2 {
    font-size: 2.6rem;
    margin-bottom: 36px;
  }

  .text p {
    font-size: 1.05rem;
    line-height: 1.85;
    color: #444;
    margin-bottom: 26px;
  }

  /* PROCESS */
  .process {
    padding: 120px 24px;
  }

  .process-title {
    text-align: center;
    font-size: 2.8rem;
    margin-bottom: 80px;
  }

  .process-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .process-card {
    background: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    transition: transform 0.5s ease, box-shadow 0.5s ease;
  }

  .process-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 22px 50px rgba(107,0,0,0.18);
  }

  /* PHOTO GRID */
  .photo-section {
    padding: 120px 24px;
  }

  .photo-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }

  .photo-grid img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.6s ease, box-shadow 0.6s ease;
  }

  .photo-grid img:hover {
    transform: scale(1.06);
    box-shadow: 0 28px 60px rgba(0,0,0,0.25);
  }

  /* ===== MY ART SECTION ===== */
  .my-art-section {
    padding: 140px 24px;
    background: #ffffff;
  }

  .my-art-header {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 90px;
  }

  .my-art-header h2 {
    font-size: 3rem;
    color: #6b0000;
    margin-bottom: 18px;
  }

  .my-art-header p {
    font-size: 1.15rem;
    line-height: 1.9;
    color: #555;
    font-style: italic;
  }

  .my-art-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 36px;
  }

  .my-art-card {
    background: #f9f9f9;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 14px 40px rgba(0,0,0,0.12);
    transition: transform 0.5s ease, box-shadow 0.5s ease;
  }

  .my-art-card:hover {
    transform: translateY(-14px);
    box-shadow: 0 30px 65px rgba(107,0,0,0.28);
  }

  .my-art-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .my-art-content {
    padding: 26px 24px 32px;
  }

  .my-art-content h3 {
    font-size: 1.35rem;
    margin-bottom: 12px;
    color: #6b0000;
  }

  .my-art-content p {
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .container,
    .process-grid,
    .photo-grid,
    .my-art-grid {
      grid-template-columns: 1fr;
    }

    .hero h1 {
      font-size: 3rem;
    }

    .my-art-card img {
      height: 260px;
    }
  }
`}</style>

      <section className="page fade-in">
        {/* DASHAIN INTRO */}
        <div className="hero bg-white">
          <h1>Dashain</h1>
          <div className="subtitle">My Culture & Inspiration</div>
          <p className="intro">
            Dashain is Nepal’s most significant Hindu festival, symbolizing the
            victory of good over evil and the strength of family bonds.
          </p>
        </div>

        {/* ABOUT DASHAIN */}
        <div className="section bg-grey">
          <div className="container">
            <div className="images">
              <img src="images/Dashain1.jpg" />
            </div>
            <div className="text">
              <h2>About Dashain</h2>
              <p>
                Dashain is the longest and most significant festival in Nepal,
                celebrated by people across the country with great devotion and
                joy. It symbolizes the victory of good over evil and is rooted
                in the worship of Goddess Durga, who represents strength,
                protection, and righteousness. The festival also commemorates
                the triumph of the goddess over the demon Mahishasura,
                reinforcing the belief that truth and virtue ultimately prevail.
              </p>
              <p>
                Observed over fifteen days, Dashain brings families together
                from near and far. Homes are cleaned and decorated, elders bless
                younger members with tika and jamara, and people seek blessings
                for health, prosperity, and success. Traditional rituals,
                prayers, and offerings are performed, especially during the most
                important days such as Maha Ashtami, Maha Navami, and Vijaya
                Dashami.
              </p>
              <p>
                Beyond its religious significance, Dashain holds deep cultural
                and social importance. It is a time of reunion, forgiveness, and
                renewal of relationships. New clothes are worn, traditional
                foods are shared, and swings (ping) are set up in villages,
                adding to the festive spirit. Dashain strengthens family bonds,
                preserves cultural traditions, and fosters a sense of unity and
                gratitude among people across generations.
              </p>
            </div>
          </div>
        </div>

        {/* ESSENCE OF DASHAIN */}
        <div className="process bg-white">
          <h2 className="process-title">The Essence of Dashain</h2>
          <div className="process-grid">
            <div className="process-card">
              <h3>Victory & Renewal</h3>
            </div>
            <div className="process-card">
              <h3>Family Reunion</h3>
            </div>
            <div className="process-card">
              <h3>Tradition & Faith</h3>
            </div>
            <div className="process-card">
              <h3>Gratitude & Blessings</h3>
            </div>
          </div>
        </div>

        {/* DASHAIN PHOTOS */}
        {/* DASHAIN PHOTOS */}
        <div className="photo-section bg-grey">
          <h2 className="photo-title">Photos of Dashain</h2>
          <div className="photo-grid">
            <img src="images/dashain_2.jpg" />
            <img src="images/dashain_3.jpg" />
          </div>
        </div>

        {/* TIHAR INTRO */}
        <div className="hero bg-white">
          <h1>Tihar</h1>
          <div className="subtitle">Festival of Light & Love</div>
          <p className="intro">
            A celebration of compassion, devotion, and the sacred bond between
            brother and sister.
          </p>
        </div>

        {/* ABOUT TIHAR */}
        <div className="section bg-grey">
          <div className="container">
            <div className="text">
              <h2>The Bond of Bhai Tika</h2>
              <p>
                Tihar, also known as Deepawali, is one of Nepal’s most important
                festivals, celebrated over five days. It symbolizes the victory
                of light over darkness and knowledge over ignorance, and
                highlights values of gratitude, harmony, and respect for all
                living beings.
              </p>
              <p>
                Each day of Tihar is dedicated to honoring different beings.
                Crows, dogs, and cows are worshipped for their symbolic and
                practical importance, while Goddess Laxmi, the deity of wealth
                and prosperity, is worshipped with homes illuminated by oil
                lamps and candles. The final day, Bhai Tika, celebrates the
                sacred bond between brothers and sisters through prayers for
                protection, long life, and well-being.
              </p>
              <p>
                Beyond its religious meaning, Tihar is a festival of
                togetherness and joy. People decorate their homes with flowers
                and rangoli, sing Deusi-Bhailo, and exchange sweets and gifts.
                Tihar strengthens family bonds, promotes compassion, and brings
                communities together in a warm and festive spirit.
              </p>
            </div>
            <div className="images">
              <img src="images/Tihar1.jpg" />
            </div>
          </div>
        </div>

        {/* ESSENCE OF TIHAR */}
        <div className="process bg-white">
          <h2 className="process-title">The Essence of Bhai Tika</h2>
          <div className="process-grid">
            <div className="process-card">
              <h3>Protection</h3>
            </div>
            <div className="process-card">
              <h3>Reciprocity</h3>
            </div>
            <div className="process-card">
              <h3>Trust</h3>
            </div>
            <div className="process-card">
              <h3>Cultural Continuity</h3>
            </div>
          </div>
        </div>

        {/* TIHAR PHOTOS */}
        {/* TIHAR PHOTOS */}
        {/* TIHAR PHOTOS */}
        <div className="photo-section bg-grey">
          <div className="photo-title">Photos of Tihar</div>
          <div className="photo-grid">
            <img src="images/Tihar2.jpg" />
            <img src="images/Tihar3.jpg" />
          </div>
        </div>
      </section>

      {/* ===== MY ART SECTION ===== */}
      <div className="my-art-section">
        <div className="my-art-header">
          <h2>My Arts</h2>
          <p>
            Art is where my culture, curiosity, and emotions quietly meet. These
            pieces reflect moments of observation, identity, and
            self-expression.
          </p>
        </div>

        <div className="my-art-grid">
          <div className="my-art-card">
            <img src="images/krishna_art.png" />
            <div className="my-art-content">
              <h3>Bal Krishna</h3>
              <p>
                A soft, expressive art of Lord Krishna as a child, rendered in
                gentle hues, capturing innocence, divinity, and serene grace.
              </p>
            </div>
          </div>

          <div className="my-art-card">
            <img src="images/kumari_art.png" />
            <div className="my-art-content">
              <h3>Kumari</h3>
              <p>
                An artwork portraying the Kumari—the living goddess—adorned in
                ceremonial attire, symbolizing divinity, purity, and Nepal’s
                sacred tradition.
              </p>
            </div>
          </div>

          <div className="my-art-card">
            <img src="images/shiva_art.png" />
            <div className="my-art-content">
              <h3>Mahadev in Solitude</h3>
              <p>
                A dramatic art of Lord Shiva standing in contemplation amid
                mountains and mist, symbolizing cosmic power, detachment, and
                eternal stillness.
              </p>
            </div>
          </div>

          <div className="my-art-card">
            <img src="images/mountain_art.png" />
            <div className="my-art-content">
              <h3>Crossing the Heights</h3>
              <p>
                A miniature landscape art depicting travelers on a suspension
                bridge amid towering mountains, symbolizing journey, resilience,
                and quiet adventure.
              </p>
            </div>
          </div>

          <div className="my-art-card">
            <img src="images/eye_art.png" />
            <div className="my-art-content">
              <h3>Within the Gaze</h3>
              <p>
                A monochrome conceptual art of an eye reflecting an unborn
                child, symbolizing creation, vulnerability, and the profound
                bond between life and consciousness.
              </p>
            </div>
          </div>

          <div className="my-art-card">
            <img src="images/marriage_art.png" />
            <div className="my-art-content">
              <h3>Bidaai</h3>
              <p>
                A poignant art capturing a bride’s quiet farewell, reflecting
                tradition, transition, and the emotional weight of leaving home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
