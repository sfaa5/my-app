import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
export default function Home() {
  return (
<section className="h-full">
  <div className="container mx-auto h-full">
    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      {/* text */}
      <div className="text-center xl:text-left order-2 xl:order-none">
        <span className="text-xl">Software Developer</span>
        <h1 className="h1 mb-6">
          Hello I`m <br />  <span className="text-accent">Youssef Safaa</span> 
        </h1>

        <p className="max-w-[500px] mb-9 text-white/80">
        I excel at crafting elegant difital experiences and iam 
        proficient in various programming languages and technologies.
        </p>
{/* btn and socials */}
        <div className="flex flex-col xl:flex-row items-center gap-8">

          <a href="/assets/youssef_safa_cv.pdf"  download className="no-underline"  >

          <Button 
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl"/>

          </Button>

          </a>



          <div className="mb-8 xl:mb-0">
            <Social containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent 
            hover:text-primary hover:transition-all duration-500"
            />
          </div>

        </div>

      </div>
      <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo/></div>

    </div>
  <Stats />

  </div>

</section>

  );
}
