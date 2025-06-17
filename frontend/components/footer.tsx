import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative px-4 z-50 bg-transparent text-white pt-6">
      <div className="container mx-auto border-t-2 border-[#28306E] py-3">
        <div className="flex flex-col lg:flex-row justify-between max-md:space-y-6 items-center py-5">
          <p className="font-roboto text-xl text-center text-[#28306E]">
            IndoEBTKE ConEx 2025 © All Right Reserved
          </p>
          <div className=" font-roboto flex flex-wrap items-center justify-center gap-6 text-sm text-center">
            <Link
              href="#"
              className="hover:text-green-200 text-xl text-[#28306E]"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="hover:text-green-200 text-xl text-[#28306E]"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-green-200 text-xl text-[#28306E]"
            >
              Policy and Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
