"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function LanguagesToggle() {
  
  const handleLanguageChange = (language: string) => {
   
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("pt")}>PT</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>EN</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("fr")}>FR</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
