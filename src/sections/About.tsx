import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg"
import BookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GithubIcon from "@/assets/icons/github.svg"
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";


const toolboxItems = [
    {
        title: "Javascript",
        iconType: JavascriptIcon,
    },
    {
        title: "HTML5",
        iconType: HTMLIcon,
    },
    {
        title: "CSS3",
        iconType: CssIcon,
    },
    {
        title: "React",
        iconType: ReactIcon,
    },
    {
        title: "Chrome",
        iconType: ChromeIcon,
    },
    {
        title: "Github",
        iconType: GithubIcon,
    },
]

const hobbies = [
    {
        title: "Painting",
        emoji: "🎨",
    },
    {
        title: "Photography",
        emoji: "📷",
    },
    {
        title: "Gaming",
        emoji: "🎮",
    },
    {
        title: "Hiking",
        emoji: "🚶",
    },
    {
        title: "Music",
        emoji: "🎵",
    },
    {
        title: "Fitness",
        emoji: "🏋",
    },
    {
        title: "Reading",
        emoji: "📚",
    },

]

export const AboutSection = () => {
  return (
      <div className="pb-20">
          <div className="container">
        <SectionHeader title="A Glimpse Into My World" eyebrow="About Me" description="Learn more about who I am, what I do, and what inspires me." />
          <div className="mt-20 flex flex-col gap-8">
              {/*1*/}
              <Card className="h-[320px] ">
                  <CardHeader title='My Reads' description='Explore the books shaping my perspectives.' />
                  <div className="w-40 mx-auto mt-8 ">
                      <Image src={BookImage} alt="Book Cover" />
                  </div>
              </Card>
              {/*2*/}
              <Card className="h-[320px] p-0 ">
                  <CardHeader title='My Toolbox' description='Explore the technologies and tools used to craft exceptional digital experiences.' className="px-6 pt-6" />
                    <ToolboxItems items={toolboxItems} className="mt-6" />
                    <ToolboxItems items={toolboxItems} className="mt-6 " itemsWrapperClassName = "-translate-x-1/2"/>
              </Card>
              {/*3*/}
              <Card>
                  <CardHeader title='Beyond the Code' description='Explore my interests and hobbies beyond the digital realm.' />
                  <div>
                      {hobbies.map(hobby => (
                          <div key={hobby.title}>
                              <span>{hobby.title}</span>
                              <span>{hobby.emoji}</span>
                          </div>
                      ))}
                  </div>
              </Card>
              {/*4*/}
              <Card>
                <Image src={mapImage} alt="map" />
                <Image src={smileMemoji} alt="smile memoji" />
              </Card>
          </div>
      </div>
      </div>
  )
};
