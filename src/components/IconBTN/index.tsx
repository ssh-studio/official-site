import {
  FunctionComponent,
  MouseEventHandler,
} from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
}

const IconBTN: FunctionComponent<Props> = ({
  children,
  className,
  onclick,
}) => {
  return (
    <button
      onClick={onclick}
      className={twMerge(
        "bg-gray-200 hover:bg-gray-100 duration-200 cursor-pointer active:shadow-inner w-11 h-11 text-lg flex items-center justify-center rounded-[20px]",
        className
      )}
    >
      {children}
    </button>
  );
};

export default IconBTN;
