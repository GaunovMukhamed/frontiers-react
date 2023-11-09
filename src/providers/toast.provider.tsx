import { Toast } from "primereact/toast";
import { createContext, useContext, useRef } from "react";
import PropTypes from 'prop-types';

const ToastContext = createContext({});

export const useToastState = () => {
  return useContext(ToastContext);
};

export const ToastContextProvider = (props: any) => {
  const toastRef = useRef(null);

  const showToast = (options: any) => {
    if (!toastRef.current) return;
    //@ts-ignore
    toastRef.current.show(options);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast ref={toastRef} />
      {props.children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(
      "useToastContext have to be used within ToastContextProvider"
    );
  }
  return context;
};