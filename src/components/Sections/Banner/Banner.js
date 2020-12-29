import React from 'react';
import Button from 'emerald-ui/lib/Button';
export const Banner = () => {
  return (
    <section
      className="banner mt-5 mb-5"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/banner.jpg)`
      }}
    >
      <div className="banner-content container">
        <h2 className="mb-2">Subscribe to our newsletter</h2>
        <p className="mb-4">
          Subscribe to our newsletter to receive weekly digest of the best and
          most ground-breaking news. Also receive a discount on your monthly
          subscription.
        </p>

        <Button color="default" shape="outline" className="banner-button">
          Subscribe
        </Button>
      </div>
    </section>
  );
};
