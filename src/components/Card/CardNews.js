import React from 'react';
import Card from 'emerald-ui/lib/Card';

export const CardNews = ({ ...props }) => {
  return (
    <Card>
      <img src={props.urlToImage} alt={props.title} />
      <div>
        <h2 className="eui-card-title mb-2 mt-2">{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </Card>
  );
};
