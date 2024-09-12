import React from "react";
import { ReactNode } from "react";

export interface JobProps{
    title: string;
    icon: ReactNode;
    bgColor: string;

}

export const Job: React.FC<JobProps> = ({title,icon,bgColor}) => {
    return(
        <div className={`${bgColor} p-4 flex flex-col aspect-square rounded-lg justify-center items-center text-white`}>
            {icon}
            <p className="pt-2">{title}</p>
        </div>
        
    )
}