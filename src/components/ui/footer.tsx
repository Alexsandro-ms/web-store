import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <footer className="flex bg-black opacity-95">
      <div className="md: flex flex-col p-5">
       <Link href="/">
        <Image
          src={"footer-logo.svg"}
          alt="Logo do rodapé"
          width={0}
          height={0}
          className="h-auto max-h-[60.96] w-full max-w-[194.73px]"
          priority
        />
        </Link>
        <Image
          src={"footer-text.svg"}
          alt="Por Alexsandro Martins"
          width={0}
          height={0}
          className="ml-3 mt-8 h-auto max-h-[60.96] w-full max-w-[194.73px]"
          priority
        />
        <div className="ml-2 mt-2 flex gap-2 text-[#9B9B9B]">
          <Link href="https://github.com/Alexsandro-ms/">
            <Github size={24} />
          </Link>
          <Link href="https://www.instagram.com/alexsandrom.s/">
            <Instagram size={24} />
          </Link>
          <Link href={"https://www.linkedin.com/in/alexsandromartiins/"}>
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
      <div className="hidden md:flex md:text-[#ccc] md:justify-between md:items-stretch md:w-full md:pt-8 md:pl-8 md:text-xs">
  <div className="flex flex-col flex-1 gap-1">
    <Link href={"/a"} className="text-white text-base mb-2">Oferta</Link>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
  </div>
  <div className="flex flex-col flex-1 gap-1">
    <Link href={"/a"} className="text-white text-base mb-2">Catálogo</Link>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum dolor sit</p>
  </div>
  <div className="flex flex-col flex-1 gap-1">
    <Link href={"/a"} className="text-white text-base mb-2">Sobre nós</Link>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum dolor</p>
  </div>
  <div className="flex flex-col flex-1 gap-1">
    <Link href={"/a"} className="text-white text-base mb-2">Suporte</Link>
    <p>Lorem ipsum sit</p>
    <p>Lorem ipsum dolor</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum dolor sit amet</p>
  </div>
  <div className="flex flex-col flex-1 gap-1">
    <Link href={"/a"} className="text-white text-base mb-2">Contato</Link>
    <p>Lorem ipsum sit</p>
    <p>Lorem ipsum dolor</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum dolor sit amet</p>
  </div>
</div>

    </footer>
  );
};

export default FooterComponent;
