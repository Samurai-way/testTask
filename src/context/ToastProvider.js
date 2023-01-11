import classNames from "classnames";
import React, { createContext, useState } from "react";
import "./styles.scss";

export const ToastContext = createContext();
let timeoutId;

const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [classes, setClasses] = useState("");

  const updateToasts = (type, value) => {
    if (timeoutId) clearTimeout(timeoutId);

    switch (type) {
      case "error":
        setClasses("toast-error");
        break;
      case "success":
        setClasses("toast-success");
        break;
      case "warning":
        setClasses("toast-warning");
        break;
      default:
        break;
    }
    setMessage(value);

    timeoutId = setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <ToastContext.Provider value={{ updateToasts }}>
      {children}
      {message && (
        <div className="toast-container">
          <div className={classNames("bounce-custom toast", classes)}>
            <p className="toast-text">{message}</p>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
