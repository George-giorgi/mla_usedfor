import LogoTitleSVG from "./ui/SVGs/LogoTitleSVG";

import TitleLineWelderSVG from "./ui/TitlesLineWelderSVG/TitleLineWelderSVG";

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen ">
      <TitleLineWelderSVG />

      <div className=" flex items-center md:flex-row-reverse flex-col-reverse md:justify-center justify-center md:gap-0">
        <LogoTitleSVG />
      </div>
    </div>
  );
}
