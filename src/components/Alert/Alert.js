import React from "react";
import AlertE from "emerald-ui/lib/Alert";
import ButtonE from "emerald-ui/lib/Button";

export const Alert = () => {
  return (
    <AlertE>
      <div style={{ padding: "10px 0" }}>This is an info message</div>
      <div className="btn-toolbar">
        <ButtonE color="info">Some action</ButtonE>
      </div>
    </AlertE>
  );
};
