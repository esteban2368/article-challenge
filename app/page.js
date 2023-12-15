import StylesHome from "./HomeCard.module.css";

import imageDrawers from "../public/images/drawers.jpg"
import avatar from "../public/images/avatar-michelle.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShare } from "@fortawesome/free-solid-svg-icons"

import Image from "next/image";
import Tooltip from "./components/Tooltip";
import Date from "./components/Date"

async function getData(){
  const response = await fetch("http://localhost:8000/articles/1")

  return response.json()
} 

export default async function HomeCard(){
  const articles = await getData()
  const {title, text, author, date}  = articles
  return (
    <section className="w-full mx-auto px-3 max-w-[327px] sm:max-w-[730px]">
      <article className="relative grid grid-cols-1 sm:grid-cols-[285px_minmax(200px,_1fr)] bg-white rounded-xl overflow-hidden shadow-[0_40px_40px_-10px_rgba(201,213,225,0.5034)]">
        <figure className={`${StylesHome.image} relative`}>
          <Image
            className="object-cover object-left"
            fill
            priority
            src={imageDrawers}
            alt="Desk and computer"
          ></Image>
        </figure>
        <section className="py-6 sm:py-8 px-8 sm:px-10">
          <h2 className="font-sans text-slate-600 text-md sm:text-lg font-bold tracking-wide">{title}</h2>
          <p className="text-slate-500 text-[13px] tracking-wide mt-3">{text}</p>
          <div className="flex items-center justify-between mt-5">
            <div className="flex gap-4">
              <Image
              className="object-cover rounded-full w-10"
                property
                src={avatar}
                alt="avatar author"
              />
              <div className="flex flex-col">
                <h3 className="font-sans font-bold text-sm text-slate-600">{author}</h3>
                <Date dateString={date}/>
              </div>
            </div>
            <Tooltip text='share' trigger='button' icons={['facebook', 'Twitter', 'pinterest']}>
              <FontAwesomeIcon icon={faShare}/>
            </Tooltip>
          </div>
        </section>
      </article>
    </section>
  )
}