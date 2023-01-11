import { useContext } from "react";
import { ToastContext } from "../context/ToastProvider";

export const useToasts = () => useContext(ToastContext);
