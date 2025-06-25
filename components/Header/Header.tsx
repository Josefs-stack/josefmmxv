import StaticNoise from "../StaticNoise";
import BackgroundMusic from "./BackgroundMusic";
import Menu from "./Menu";

export default function Header() {
    return (
        <header className="sm:w-20 w-14 h-full py-5 fixed flex flex-col justify-between items-center bottom-0 right-0 bg-noise border-l-2 border-neutral-50/50 z-50">
          <StaticNoise />
          <Menu />
          <BackgroundMusic />
        </header>
    );
}