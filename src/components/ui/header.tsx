'use client'
import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import { MenuIcon, ShoppingCartIcon  } from "lucide-react";

const Header = () => {
    return (
    <Card className="flex p-[1.875rem] justify-between items-center">
        <Button size={"icon"} variant={"outline"}>
            <MenuIcon />
        </Button>
        <h1 className="text-lg font-semibold"><span className="text-primary uppercase">Web</span> Store</h1>
        <Button size={"icon"} variant={"outline"}>
            <ShoppingCartIcon />
        </Button>
    </Card>
    );
}
 
export default Header;