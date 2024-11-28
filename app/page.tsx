import Home from "@/components/Home/Home";
import Home2 from "@/components/Home/Home2";
import Home3 from "@/components/Home/Home3";
import Home4 from "@/components/Home/Home4";
import Home5 from "@/components/Home/Home5";
import { Home6 } from "@/components/Home/Home6";
import Home7 from "@/components/Home/Home7";
import Home8 from "@/components/Home/Home8";
import vid from "@/videos/video.mp4"
import BackgroundVideo from 'next-video/background-video';

export default function App() {
  return (
    <div className=" overflow-x-hidden">
      <BackgroundVideo src={vid}/>
      <Home/>
      <Home2 props={"Fashion with Natures Essence"}/>
      <Home3/>
      <Home4/>
      <Home7 />
      <Home5/>
      <Home6/>
      <Home8/>
    </div>
  );
}
