
import SEO from "../components/SEO";

function Home() {
  return (
    <>
<SEO
  title="Home"
  description="Discover hair styling, skincare and beauty services at Glow Beauty Salon."
  path="/"
/>

      <main className="container">
        <section className="hero">
          <p className="eyebrow">WELCOME TO GLOW</p>

          <h1>
            Your Beauty, Our Passion
          </h1>

          <p className="hero-text">
            Discover professional hair styling,
            skincare and beauty services designed
            to make you feel confident.
          </p>

          <a className="button" href="/services">
            Explore Services
          </a>
        </section>

        <section className="content-section">
          <h2>Beauty Services for You</h2>

          <p>
            Explore our hair styling and skincare
            services in one place.
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
