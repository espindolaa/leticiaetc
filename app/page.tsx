'use client';

import { useMemo, useState } from "react";
import { products } from "./products";
import { bgVariants, selectedBgVariants, textVariants } from "./variants";
import { tags } from "./tags";

import React = require("react");

function Tag({title, color, onSelected, isSelected}: {title: string; color: keyof typeof bgVariants; onSelected: () => void; isSelected: boolean;}) {
  const bg = isSelected ? selectedBgVariants[color] : bgVariants[color]
  return (
  <div 
    className={`${bg} rounded w-fit py-1 px-2 ${textVariants[color]} text-sm cursor-pointer`}
    onClick={onSelected}
  >
    {title}
  </div>)
}

function Product({name, link, website, imgSrc} : { name: string; link: string; website: string; imgSrc: string;}) {
  return (
    <div className="cursor-pointer rounded-lg bg-white mt-2 flex flex-row p-2 w-full items-center justify-start hover:bg-gray-100 overflow-hidden min-h-22 h-22"
     onClick={() => 
      window.open(link, "_blank")
    }>
      <img src={imgSrc} className="h-18 w-12 rounded"/>
      <div className="text-left ml-2">
        <h1 className="w-full text-left overflow-hidden text-wrap">{name}</h1>
        <span className="mb-0 mt-auto text-gray-400">{website}</span>
      </div>
    </div>
  )
}

export default function Page() {
  const [searchText, setSearchText] = useState<string | null>(null);
  const [selected, setSelected] = useState<string>("Todos");

  const productList = useMemo(() => {
    return products.filter((p) => {
      const shouldHide = selected !== "Todos" && selected !== p.tag;

      if(shouldHide || searchText && !p.name.toLowerCase().includes(searchText.toLowerCase())) {
        return false
      }

      return true;

    }).sort((a, b) => a.name.localeCompare(b.name)).map((p) => (
      <Product
        key={p.name}
        name={p.name} 
        link={p.link} 
        imgSrc={p.imgSrc}
        website={p.website}
        />
    ))
  }, [products, selected, searchText])

  return (
      <div className="flex flex-col bg-[#a5c6f3] max-w-svw items-center  min-h-svh md:pt-24 pt-12 max-h-svh overflow-hidden">
        <div className="flex flex-col items-center overflow-hidden p-2">
          <div className="flex flex-col items-center">
            <div className="w-full flex flex-row">
              <img src="leticiaetc.png" className="w-48" />
            </div>
            <span className="text-white ml-0 mr-auto">esses links <b>não</b> são afiliados :)</span>
            <input 
              type="text" 
              placeholder="Pesquise aqui"
              className="w-full ml-0 h-8 bg-white text-black rounded mt-2 px-2"
              onChange={(event) => setSearchText(event.target.value)}/>
            <div className="flex flex-row gap-1 my-4 flex-wrap">
              {
                tags.map((t) => (<Tag key={t.title} title={t.title} color={t.color} isSelected={selected === t.title} onSelected={() => setSelected(t.title)}/>))
              }
            </div>
          </div>

          <div className="flex flex-col items-center w-full min-h overflow-y-auto flex-1">
            {
              productList.length ? productList : (<span>Nenhum resultado :(</span>)
            }
          </div>

          <div className="flex flex-row gap-2 ml-auto mr-auto md:mt-18 mt-0 p-4 flex-none">
              <img 
                src="tiktok.svg" 
                className="size-7 cursor-pointer" 
                onClick={() => 
                  window.open("https://www.tiktok.com/@leticiaetc", "_blank")
                }
              />
              <img 
                src="youtube.svg" 
                className="size-8 cursor-pointer"
                onClick={() => 
                  window.open("https://www.youtube.com/@etcleticia", "_blank")
                }
                 />
          </div>
          </div>
      </div>
  )
}
