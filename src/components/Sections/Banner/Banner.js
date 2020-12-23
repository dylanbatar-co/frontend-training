import React from 'react';

export const Banner = () => {
  return (
    <section className="banner mt-5 mb-5">
      <img
        className="banner-image"
        src={`${process.env.PUBLIC_URL}/assets/img/banner.jpg`}
        alt="banner"
      />
    </section>
  );
};
