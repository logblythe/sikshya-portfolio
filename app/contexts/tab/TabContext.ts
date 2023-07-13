"use client";
import { ITabContext } from "@/app/interfaces/ITabContext";
import { createContext } from "react";

const TabContext = createContext<ITabContext | null>(null);
export default TabContext;
