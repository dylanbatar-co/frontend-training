import React from 'react';
import Card from 'emerald-ui/lib/Card';

export const CardNews = ({ ...props }) => {
  return (
    <Card>
      <img
        src={
          props?.multimedia.length === 0
            ? `${process.env.PUBLIC_URL}/assets/img/noImage.png`
            : `https://nytimes.com/${props?.multimedia[0].url}`
        }
        alt={props.title}
      />
      <div>
        <h2 className="eui-card-title mb-2 mt-2">
          <a href={props?.web_url} target="blank" tabIndex="8">
            {props.headline.main}
          </a>
        </h2>
        <p>{props.lead_paragraph}</p>
      </div>
    </Card>
  );
};
