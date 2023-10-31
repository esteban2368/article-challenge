import StylesHome from "./HomeCard.module.css";
import Image from "next/image";
import imageDrawers from "../public/images/drawers.jpg"

async function getData(){
  const response = await fetch("http://localhost:8000/articles/1")

  return response.json()
} 

export default async function HomeCard(){
  const articles = await getData()
  return (
    <section className="w-full mx-auto max-w-[730px]">
      <article className="grid grid-cols-[285px_minmax(200px,_1fr)] bg-white rounded-xl overflow-hidden shadow-[0_40px_40px_-10px_rgba(201,213,225,0.5034)]">
        <figure className={`${StylesHome.image} relative`}>
          <Image
            className="object-cover object-left"
            fill
            priority
            src={imageDrawers}
            alt="Desk and computer"
          ></Image>
        </figure>
        <section className="py-8 px-10">
          <h2 className="font-sans text-slate-600 text-lg font-bold tracking-wide">{articles.title}</h2>
          <p className="text-slate-500 text-sm tracking-wide mt-3">{articles.text}</p>
        </section>
      </article>
    </section>
  )
}