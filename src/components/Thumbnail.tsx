import { MouseEventHandler } from "react";

interface ThumbnailProps {
  imgSrc: string;
  isSelected: boolean;
  action: MouseEventHandler<HTMLImageElement> | undefined;
}

const Thumbnail = ({ imgSrc, isSelected, action }: ThumbnailProps) => {
  return (
    <div
      className={`${
        isSelected
          ? "bg-transparent gradient-border"
          : "flex justify-center items-center min-h-[106px] md:h-auto"
      } min-w-fit max-w-fit min-h-[106px] md:h-auto justify-self-center cursor-pointer`}
    >
      <img
        src={imgSrc}
        className={`${
          isSelected
            ? "rounded-md md:rounded-lg w-24 h-24 md:w-48 md:h-48"
            : "rounded-lg w-24 h-24 md:w-32 md:h-32 brightness-50"
        }`}
        alt="thumbnail"
        onClick={action}
      />
    </div>
  );
};

export default Thumbnail;
