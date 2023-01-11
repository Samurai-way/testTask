import ToastProvider from "./ToastProvider";

const ContextProviders = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export default ContextProviders;
