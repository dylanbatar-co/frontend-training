import React from 'react';
import { NewsGrid } from '../../NewsGrid/NewsGrid';

export const News = () => {
  return (
    <section className="news-grid container">
      <h2 className="section-title mb-4">Top news</h2>
      <NewsGrid />
    </section>
  );
};
