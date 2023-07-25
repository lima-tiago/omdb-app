import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import Style from "./style.module.scss";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: ReactNode;
}

export const Input = ({ icon, ...props }: InputProps) => {
  return (
    <div className={Style.wrapper}>
      <input {...props} />
      {icon ? icon : null}
    </div>
  );
};
