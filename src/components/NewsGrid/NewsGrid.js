import React, { useState } from 'react';
import CardGrid from 'emerald-ui/lib/CardGrid';
import Button from 'emerald-ui/lib/Button';

import { useFetch } from '../../hooks/useFetch';
import { getNews } from '../../api/client';
import { Loading } from '../Loading/Loading';
import { CardNews } from '../Card/CardNews';

export const NewsGrid = () => {
  const [limitPost, setLimitPost] = useState(4);
  const { data, error, loading } = useFetch(getNews);

  const conditionalRender = (cardNumbers = 4) => (
    <>
      {loading &&
        Array.from({ length: cardNumbers }).map((_, idx) => (
          <Loading key={idx} />
        ))}
      {error && <p>error</p>}
    </>
  );

  const disableButton = () => {
    if (limitPost === data?.articles.length) return true;
    return false;
  };

  const loadMore = () => {
    setLimitPost(limitPost + 4);
  };

  return (
    <>
      <CardGrid>
        {conditionalRender()}
        {!loading &&
          !error &&
          data.articles
            .slice(0, limitPost)
            .map(item => <CardNews key={item.publishedAt} {...item} />)}
      </CardGrid>
      <div className="container-button mt-5">
        <Button
          loading={loading}
          disabled={disableButton()}
          color="info"
          onClick={loadMore}
        >
          Load More
        </Button>
      </div>
    </>
  );
};
