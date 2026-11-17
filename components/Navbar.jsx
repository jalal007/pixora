import Image from "next/image";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <>
      <nav class="py-4 md:py-6 border-b">
        <div class="container mx-auto flex items-center justify-between gap-x-6">
          <Logo />

          <div class="flex gap-4 items-center">
            <div class="relative">
              <button class="flex items-center gap-2">
                <Image
                  class="max-w-8"
                  src="/bd.png"
                  width={32}
                  height={32}
                  alt="bangla"
                />
                Bangla
              </button>

              <div class="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                <li class="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                  <Image
                    class="max-w-8"
                    src="/bd.png"
                    width={32}
                    height={32}
                    alt="bangla"
                  />
                  Bangla
                </li>
                <li class="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                  <Image
                    class="max-w-8"
                    src="/usa.png"
                    width={32}
                    height={32}
                    alt="bangla"
                  />
                  English
                </li>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
