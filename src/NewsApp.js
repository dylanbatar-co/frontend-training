import React from 'react';
import { Alert } from './components/Alert/Alert';
import { Header } from './components/Header/Header';
import { Banner, ContactUs, News } from './components/Sections';

export const NewsApp = () => {
  return (
    <>
      <Header />
      <main className="mt-8">
        <Alert />
        <News />
        <Banner />
        <ContactUs />
      </main>
    </>
  );
};
