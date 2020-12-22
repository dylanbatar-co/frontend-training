import React, { useState } from 'react';
import AlertE from 'emerald-ui/lib/Alert';

export const Alert = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <AlertE className="alert" dismissible onDismiss={() => setShow(false)}>
          <div className="alert-message-container">
            Welcome to the new look of News.com. Keep scrolling to discover
            interesting new features and news.
          </div>
        </AlertE>
      )}
    </>
  );
};
