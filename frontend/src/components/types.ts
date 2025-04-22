import { SetStateAction } from "react";

export interface NavBarProps{
    isLogin : boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}