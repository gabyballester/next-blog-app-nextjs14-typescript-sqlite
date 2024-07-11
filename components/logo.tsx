import logo from "@/assets/logo.png";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <img src={logo.src} alt="Company Logo" />
    </Link>
  );
};
