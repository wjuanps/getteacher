import React from 'react';

import Header from "../Header";
import Banner from "../Banner";

const Home = () => {
  return (
    <div>
      <Header />

      <section className="home_banner_area">
        <Banner>
          <h3>We Ensure better education <br />for a better world</h3>
          <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and
						launch of the space telescope known as the Hubble.</p>
          <a className="main_btn" href="#">Get Started</a>
        </Banner>
      </section>
    </div>
  );
};

export default Home;
