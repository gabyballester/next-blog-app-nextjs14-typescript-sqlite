import { logoImg } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="logo-img" href="/">
      <Image src={logoImg.src} alt={logoImg.alt} fill />
    </Link>
  );
};
