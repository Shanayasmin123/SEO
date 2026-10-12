
import SEO from "../components/SEO";

function Services() {
  return (
    <>
<SEO
  title="Services"
  description="Explore professional hair styling, skincare and beauty services at Glow Beauty Salon."
  path="/services"
/>

      <main className="container">
        <h1>Our Beauty Services</h1>

        <section className="service-card">
          <h2>Hair Styling</h2>
          <p>
            Professional hair styling for everyday
            looks and special occasions.
          </p>
        </section>

        <section className="service-card">
          <h2>Skin Care</h2>
          <p>
            Explore skincare and beauty treatments
            suited to your needs.
          </p>
        </section>

        <section className="service-card">
          <h2>Bridal Makeup</h2>
          <p>
            Beauty services for your special day.
          </p>
        </section>
      </main>
    </>
  );
}

export default Services;
