import React, { useState } from 'react';
import AlertE from 'emerald-ui/lib/Alert';

export const Alert = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      {show && (
        <AlertE
          className="alert pl-2"
          dismissible
          onDismiss={() => setShow(false)}
        >
          <div className="alert-message-container">
            <p className="mb-0">
              Welcome to the new look of News.com. Keep scrolling to discover
              interesting new features and news.
            </p>
          </div>
        </AlertE>
      )}
    </div>
  );
};
