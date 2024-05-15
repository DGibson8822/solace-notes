'use client'

import Link from "next/link";
import { Breadcrumb } from "../lib/definitions";

export default function Breadcrumbs({ breadcrumbs } : { breadcrumbs: Breadcrumb[]}) {
    return (
        <>
      <div className="w-full h-20 bg-[#3f937c] rounded-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
                {breadcrumbs.map( (breadcrumb, idx) => {
                    return(
                        <li key={breadcrumb.path}>
                    <Link href={breadcrumb.path}>
                      <p className={ idx === breadcrumbs.length - 1 ? 'font-bold border-b-2 border-white' : ''}>{breadcrumb.text}</p>
                    </Link>
                  </li>
                )     
                })}
            </ul>
            <h1 className="text-white text-3xl font-serif">Taker of Notes</h1>
          </div>
        </div>
      </div>
    </>
    )
}