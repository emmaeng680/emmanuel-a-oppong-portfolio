import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg'
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Emmanuel was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Mina Aidoo",
    position: "Student Intern @ ALX Africa",
    text: "Working with Emmanuel was a pleasure. His expertise in frontend development brought our Duolingo clone designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Gabriel Asare",
    position: "Student @ Mississipi State University",
    text: "Emmanuel's ability to create seamless user experiences is unmatched. I have no doubt that any company would greatly benefit from his skills, and I highly recommend him for any role.",
    avatar: memojiAvatar3,
  },
  {
    name: "James Oppong",
    position: "Area Manager @ KPMG",
    text: "Emmanuel is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Ebenezer Kobina Acquah",
    position: "Tech Lead @ EquiLearn",
    text: "Emmanuel's work on our website, Equilearn has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
      <div className='py-16 lg:py-24'>
        <div className='container'>
        <SectionHeader title='What Clients Say About Me' eyebrow='Happy Clients' description="Don't just take my word for it. See what my clients have to say about my work"/>
        <div className='mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent, black_10%, black_90%, transparent)]'>
          <div className='flex gap-8 flex-none'>
          {testimonials.map(testimonial => (
            <Card key={ testimonial.name} className='max-w-xs md:max-wd-md p-6 md-p-8'>
              <div className='flex gap-4 items-center'>
                <div className='size-14 bg-gray-700 inline-flex rounded-full flex-shrink-0 items-center justify-center'>
                  <Image src={testimonial.avatar} alt={testimonial.name} className='max-h-full'/>
                </div>

                <div>
                  <div className='font-semibold'>{testimonial.name}</div>
                  <div className='text-sm text-white/40'>{testimonial.position}</div>
                </div>

              </div>

              <p className='mt-4 md:mt-6 text-sm md:text-base'>{testimonial.text}</p>
            </Card>
          ))}
          </div>
        </div>
        </div>
      </div>
  )
};
