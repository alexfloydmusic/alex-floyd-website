import HomePicture from "../components/HomePicture";
import { useEffect } from "react";

function Home() {

  useEffect(()=> {
    document.body.classList.add("no-scroll");

    return () => {
      // Re-enable scrolling when component unmounts
      document.body.classList.remove("no-scroll");
      };
  }, []);

  return (
    <div>
      <HomePicture />
    </div>
  );
}

export default Home;
