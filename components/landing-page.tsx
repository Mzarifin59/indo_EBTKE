import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import HeaderNavbar from "@/components/header-navbar";
import Footer from "@/components/footer";

export default function EBTKELandingPage() {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute bg-gradient-to-b from-blue-300 to-white inset-0 h-[350px] z-0"></div>

        {/* Header */}
        <HeaderNavbar />

        {/* Sponsors Section */}
        <section className="relative z-10 bg-transparent py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start gap-8">
              {/* Part One */}
              <div className="flex sm:flex-row gap-4 sm:gap-6 items-center">
                <div className="flex flex-col gap-2 items-center w-full sm:w-auto">
                  <p className="text-xs sm:text-sm font-normal text-center">
                    Supported By
                  </p>
                  <Image
                    src={"/images/partners/esdm.png"}
                    alt="esdm.png"
                    width={50}
                    height={50}
                    className="object-contain w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                  />
                </div>

                <div className="flex flex-col gap-2 items-center w-full sm:w-auto">
                  <p className="text-xs sm:text-sm font-normal text-center">
                    Hosted By
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Image
                      src={"/images/partners/meti.png"}
                      alt="meti.png"
                      width={50}
                      height={50}
                      className="object-contain w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                    />
                    <Image
                      src={"/images/partners/maskeei.png"}
                      alt="maskeei.png"
                      width={50}
                      height={50}
                      className="object-contain w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-center w-full sm:w-auto">
                  <p className="text-xs sm:text-sm font-normal text-center">
                    Knowledge Partner
                  </p>
                  <Image
                    src={"/images/partners/bcg.png"}
                    alt="bcg.png"
                    width={50}
                    height={50}
                    className="object-contain w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                  />
                </div>

                <div className="flex flex-col gap-2 items-center w-full sm:w-auto">
                  <p className="text-xs sm:text-sm font-normal text-center">
                    Organized By
                  </p>
                  <Image
                    src={"/images/partners/on-us-asia.png"}
                    alt="on-us-asia.png"
                    width={50}
                    height={50}
                    className="object-contain w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                  />
                </div>
              </div>

              {/* Part Two */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="flex flex-col gap-2 items-center w-full md:w-auto">
                  <p className="text-xs sm:text-sm font-normal text-center">
                    In Collaboration with
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Image
                      src={"/images/partners/aesi.png"}
                      alt="aesi.png"
                      width={50}
                      height={50}
                      className="object-contain w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"
                    />
                    <Image
                      src={"/images/partners/aeai.png"}
                      alt="aeai.png"
                      width={50}
                      height={50}
                      className="object-contain w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"
                    />
                    <Image
                      src={"/images/partners/gbci.png"}
                      alt="gbci.png"
                      width={50}
                      height={50}
                      className="object-contain w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"
                    />
                    <Image
                      src={"/images/partners/mebi.png"}
                      alt="mebi.png"
                      width={50}
                      height={50}
                      className="object-contain w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"
                    />
                    <Image
                      src={"/images/partners/applta.png"}
                      alt="applta.png"
                      width={50}
                      height={50}
                      className="object-contain w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"
                    />
                    <Image
                      src={"/images/partners/himpunan-pmi.png"}
                      alt="himpunan-pmi.png"
                      width={50}
                      height={50}
                      className="object-contain w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-center w-full md:w-auto">
                  <p className="text-xs sm:text-sm font-normal text-center">
                    Endorsed By
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Image
                      src={"/images/partners/apindo.png"}
                      alt="apindo.png"
                      width={50}
                      height={50}
                      className="object-contain w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"
                    />
                    <Image
                      src={"/images/partners/tjs.png"}
                      alt="tjs.png"
                      width={50}
                      height={60}
                      className="object-contain w-[35px] h-[42px] sm:w-[40px] sm:h-[48px] lg:w-[50px] lg:h-[60px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative z-10 pb-[400px] pt-10 bg-transparent">
          <div className="relative z-20 container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Left Side - Logo */}
              <div className="flex-1 flex justify-center">
                <Image
                  src="/images/ebtke-logo.png"
                  alt="ebtke-logo"
                  width={670}
                  height={460}
                  className="object-contain"
                />
              </div>

              {/* Separator - Hidden pada mobile, tampil sebagai vertical line pada desktop */}
              <div className="hidden lg:block">
                <div className="w-px h-80 bg-gray-400 opacity-50" />
              </div>

              {/* Separator horizontal untuk mobile */}
              <div className="block lg:hidden w-full">
                <div className="h-px bg-gray-400 opacity-50" />
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#28306E] leading-tight">
                  Redefining Energy in a New Era to Empower Indonesia's
                  Renewable Future
                </h3>

                <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#28306E] leading-relaxed">
                  Positioning Indonesia as a Regional Green Powerhouse to
                  Support Indonesia Emas 2045
                </p>

                {/* Buttons - Stack pada mobile, horizontal pada desktop */}
                <div className="flex flex-col items-center max-lg:justify-center sm:flex-row gap-4 lg:gap-6 mt-4">
                  <Link href={"/"}>
                    <button className="py-3 px-6 bg-[#28306E] rounded-lg font-manrope text-white font-medium hover:bg-[#1f2557] transition-colors">
                      Sponsor
                    </button>
                  </Link>
                  <Link href={"/"}>
                    <button className="py-3 px-6 bg-[#28306E] rounded-lg font-manrope text-white font-medium hover:bg-[#1f2557] transition-colors">
                      Exhibitor
                    </button>
                  </Link>
                  <Link href={"/"}>
                    <button className="py-3 px-6 bg-[#8BC541] rounded-lg font-manrope text-white font-medium hover:bg-green-600 transition-colors">
                      Register Event
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Background Gedung */}
          <div className="absolute bottom-0 left-0 right-0 z-[1] h-[600px] overflow-hidden">
            <Image
              src="/images/background/building-2.png"
              alt="Background-building"
              width={1920}
              height={1080}
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
        </section>

        {/* Background Hijau Mountain */}
        <div className="absolute bottom-0 inset-x-0 left-1/2 transform -translate-x-1/2 w-[1920px] xl:w-[2100px] h-[2600px] xs:h-[2450px] md:h-[2200px] lg:h-[2180px] xl:h-[1850px] overflow-hidden xs:z-[11] z-[1]">
          <Image
            src="/images/background/green-land.svg"
            alt="Background-greenland"
            width={1920}
            height={1800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Section Information */}
        <section className="relative px-4 z-20 text-white pt-[600px] pb-16">
          <div className="max-w-[1540px] relative z-20 mx-auto">
            <h2 className="text-[32px] font-bold text-center mb-14 text-[#28306E]">
              For Information
            </h2>

            {/* GRID CONTACT */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-16">
              {/* Card 1 */}
              <div className="text-center px-4 py-8 border-b md:border-b-0 md:border-r border-white last:border-0 md:last:border-r-0 xl:border-b-0">
                <h3 className="text-2xl font-bold text-[#28306E] mb-2">
                  Ms. Amalia Shalihati
                </h3>
                <p className="text-[#28306E] text-xl font-normal mb-4">
                  Program Manager
                </p>
                <div className="space-y-3 text-2xl font-medium text-[#28306E]">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <Phone className="w-6 h-6" />
                    <span>+62 812 2223 7200</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <Mail className="w-6 h-6" />
                    <span>amilia@onus.asia</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="text-center px-4 py-8 border-b md:border-b-0 xl:border-r border-white last:border-0 md:last:border-r-0 xl:last:border-r-0">
                <h3 className="text-2xl font-bold text-[#28306E] mb-2">
                  Mr. Juan Jeremy
                </h3>
                <p className="text-[#28306E] text-2xl font-normal mb-4">
                  Sales & Marketing Coordinator
                </p>
                <div className="space-y-3 text-2xl font-medium text-[#28306E]">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <Phone className="w-6 h-6" />
                    <span>+62 813 1707 6411</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <Mail className="w-6 h-6" />
                    <span>juan.onus2025@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="text-center px-4 py-8 md:col-span-2 lg:col-span-2 xl:col-span-1 md:border-0">
                <h3 className="text-2xl font-bold text-[#28306E] mb-2">
                  Ms. Kezia Bintang
                </h3>
                <p className="text-[#28306E] text-2xl font-normal mb-4">
                  Sales & Marketing Staff
                </p>
                <div className="space-y-3 text-2xl font-medium text-[#28306E]">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <Phone className="w-6 h-6" />
                    <span>+62 821 9053 6614</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <Mail className="w-6 h-6" />
                    <span>kezia.onus@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECRETARIAT */}
            <div className="text-center space-y-10">
              <h3 className="text-xl font-bold text-[#28306E]">
                Secretariat IndoEBTKE ConEx 2025
              </h3>
              <div className="flex- flex-col space-y-3 items-center">
                <h4 className="text-xl font-bold text-[#28306E]">
                  On Us Asia (PT. Energi Kreatif Dinamika)
                </h4>
                <p className="text-[#28306E] text-xl font-normal">
                  The Strategic Global Event Partner
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center text-xl text-[#28306E] gap-2">
                  <span>
                    Plaza 18<sup>th</sup> floor, Jl. Jend Sudirman Kav 58 - 59
                  </span>
                </div>
                <p className="text-[#28306E] text-xl">Jakarta Selatan</p>
              </div>

              <div className="space-y-2 mt-6">
                <h5 className="text-xl font-bold text-[#28306E]">
                  Ms. Amalia
                </h5>
                <div className="flex items-center justify-center text-xl text-[#28306E] gap-2">
                  <span>+62 812 2223 7200</span>
                </div>
                <p className="text-[#28306E] text-xl">www.onus.asia</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
