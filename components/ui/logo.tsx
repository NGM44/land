import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/images/onlylogo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src={LogoImage} alt={""} width={24} height={24} />
    </Link>
  );
}
