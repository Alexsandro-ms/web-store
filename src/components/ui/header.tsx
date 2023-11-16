'use client';
import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import { MenuIcon, ShoppingCartIcon, LogInIcon, HomeIcon, PercentIcon, ListOrderedIcon, LogOutIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";

import Link from "next/link"

const Header = () => {
    const { status, data } = useSession()
    const handleLoginClick = async () => {
        await signIn()
    }
    const handleSignOutClick = async () => {
        await signOut()
    }
    
    return (
    <Card className="flex p-[1.875rem] justify-between items-center">
        <Sheet>
            <SheetTrigger asChild>
            <Button size={"icon"} variant={"outline"}>
                <MenuIcon />
            </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>
                <div className="mt-2 flex flex-col gap-3">
                {status === "authenticated" && data?.user && (
                   <div className="flex flex-col">
                    <div className="flex items-center gap-2 py-4">
                     <Avatar>
                        <AvatarFallback>
                            {data.user.name?.[0].toUpperCase()}
                        </AvatarFallback>
                        {data.user.image && (
                        <AvatarImage src={data.user.image} />
                        )}
                    </Avatar>
                  <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-50">Boas compras.</p>
                  </div>
                   </div>
                   <Separator />
                   </div>
                )}
               {status === "unauthenticated" && (
                 <Button onClick={handleLoginClick} variant={"outline"} className="mt-4 w-full justify-start gap-2">
                    <LogInIcon size={16} />
                     Fazer Login
                </Button>
               )}
               <Link href={"/"}>
                <SheetClose asChild>
                <Button variant={"outline"} className="w-full justify-start gap-2">
                    <HomeIcon size={16} />
                    Início
                </Button>
                </SheetClose>
               </Link>
                <Button variant={"outline"} className="w-full justify-start gap-2">
                    <PercentIcon size={16} />
                    Ofertas
                </Button>
               <SheetClose asChild>
               <Link href={"/catalog"}>
                <Button variant={"outline"} className="w-full justify-start gap-2">
                    <ListOrderedIcon size={16} />
                    Catálogo
                </Button>
                </Link>
               </SheetClose>
                {status === "authenticated" && (
                    <Button onClick={handleSignOutClick} variant={"outline"} className="w-full justify-start gap-2">
                     <LogOutIcon size={16} />
                     Sair
                 </Button>
                )}
                </div>
            </SheetContent>
        </Sheet>
       <Link href={"/"}>
       <h1 className="text-lg font-semibold"><span className="text-primary uppercase">Web</span> Store</h1>
       </Link>
        <Button size={"icon"} variant={"outline"}>
            <ShoppingCartIcon />
        </Button>
    </Card>
    );
}
 
export default Header;