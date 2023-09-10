import { ImgHTMLAttributes } from "react";
import styles from "../Avatar/Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder: boolean;
  src: string;
  alt: string;
}

export function Avatr({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.Avatr}
        {...props}
      />
    </>
  );
}
