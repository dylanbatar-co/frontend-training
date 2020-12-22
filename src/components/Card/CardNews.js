import React from "react";
import Card from "emerald-ui/lib/Card";

export const CardNews = () => {
  return (
    <Card>
      <Card.Header>
        <h1 className="eui-card-header-title">Default</h1>
      </Card.Header>
      <div>
        <h2 className="eui-card-title">Card Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
      </div>
    </Card>
  );
};
