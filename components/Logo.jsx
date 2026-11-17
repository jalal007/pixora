import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/lws-logo.png"
        alt="logo"
        width={180}
        height={38}
        priority
      />
    </Link>
  );
}
