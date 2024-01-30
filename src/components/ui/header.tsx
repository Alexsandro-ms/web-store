"use client";
import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Cart from "./cart";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { usePathname } from "next/navigation";

const Header = () => {
  const { data } = useSession();
  const pathName = usePathname();
  const links = [{name: "Inicio", path: "/"}, {name: "Ofertas", path: "/a"}, {name: "Catálogo", path: "/b"}, {name: "Sobre", path: "/c"} ]

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleSignOutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between border-none bg-[#fafafa] px-8 text-sm text-[#ccc]">
      <div className="hidden gap-5 md:flex">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={
              pathName === link.path ? "font-bold text-[#5033C3]" : "text-[#ccc]"
            }
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Link href="/">
        <Image
          src="logo-light.svg"
          width={0}
          height={0}
          className="h-full max-h-[60px] w-full"
          alt="logo da loja"
        />
      </Link>
      <div className="flex items-center justify-between">
        <div className="relative max-sm:hidden">
          <Search size={20} className="absolute ml-2 h-full" />
          <input
            type="text"
            placeholder="Procurar"
            className="rounded-full py-2 pl-8 outline-none"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="h-full max-h-[32px] w-full">
              <ShoppingBag size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white">
            <Cart />
          </SheetContent>
        </Sheet>
        <Popover>
          {data?.user && (
            <PopoverTrigger>
              <Avatar className="max-h-[32px] max-w-[32px] max-sm:hidden">
                <AvatarFallback>
                  {data?.user?.name?.[0]?.toUpperCase()}
                </AvatarFallback>
                {data?.user?.image && <AvatarImage src={data.user.image} />}
              </Avatar>
            </PopoverTrigger>
          )}
          <PopoverContent className="flex flex-col gap-5 border-none bg-white text-[#313131]">
            <div>
              <h1 className="text-sm font-bold text-[#313131]">
                {data?.user?.name}
              </h1>
              <p className="text-xs text-[#ccc]">{data?.user?.email}</p>
            </div>
            <Button variant="default" onClick={handleSignOutClick}>
              Sair
            </Button>
          </PopoverContent>
        </Popover>
        <Sheet>
          <SheetTrigger>
            <Menu className="md:hidden" size={24} />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-5 border-none bg-white">
            <div className="relative ml-0 flex w-full gap-3">
              {data?.user && (
                <Avatar className="max-h-[32px] w-full max-w-[32px]">
                <AvatarFallback>
                  {data?.user?.name?.[0]?.toUpperCase()}
                </AvatarFallback>
                {data?.user?.image && <AvatarImage src={data.user.image} />}
              </Avatar>
              )}
              <div className="flex flex-col ">
                <h1 className="text-sm">
                  {data?.user?.name && data?.user.name.length > 15
                    ? `${data.user.name.substring(0, 15)}...`
                    : data?.user?.name}
                </h1>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
                  {data?.user?.email && data?.user.email.length > 20
                    ? `${data?.user.email.substring(0, 20)}...`
                    : data?.user?.email}
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-3">
            {links.map((link) => (
          <Link
          key={link.name}
          href={link.path}
          className={
            pathName === link.path ? "font-bold text-[#5033C3]" : "text-[#ccc]"
          }
        >
          {link.name}
        </Link>
        ))}
              {!data?.user ? (
                <Button variant="link" onClick={handleLoginClick}>
                  Entrar
                </Button>
              ) : (
                <Button
                  className="absolute bottom-8 left-4 right-4"
                  onClick={handleSignOutClick}
                >
                  Sair
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
};

export default Header;
