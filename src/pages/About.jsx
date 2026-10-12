import SEO from "../components/SEO";

function About() {
  return (
    <>
<SEO
  title="About Us"
  description="Learn about Glow Beauty Salon, our team and our beauty services."
  path="/about"
/>

      <main className="container">
        <h1>About Glow Beauty Salon</h1>

        <p>
          Our goal is to help every customer feel
          confident through professional beauty
          services and personal care.
        </p>

        <h2>Our Mission</h2>

        <p>
          We provide a welcoming beauty experience
          for every customer.
        </p>
      </main>
    </>
  );
}

export default About; 