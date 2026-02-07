import { Link } from "react-router-dom";
import IntroBio from "../components/IntroBio";
import Influences from "../components/Influences";

function About() {
  return (
    <div className="text-left">
      <IntroBio />
      <h2 className="bottom-line">Early Years</h2>
      <p>
        Alex can barely remember a time in his life where music <em>wasn't</em> part of it. He remembers jumping around his house to Beatles records at two years old, strumming an inflatable guitar.
      </p>
      <p>
        When Alex was six, he had his first music class. The teacher walked in, wearing cool shades, and pulled out a guitar covered in stickers - and Alex immediately knew he wanted to play guitar. But a local music store recommended that he start with piano lessons. "Kids your age are more likely to get discouraged with the guitar," said the owner. "It can take weeks to learn a song, and you might have trouble with blisters on your fingers." So Alex spent the next few years taking piano lessons and forgot about the guitar...for a while.
      </p>
      <button id="read-more"><Link className="link-format" to="/bio">Read More</Link></button>
      <Influences />
    </div>
    );
  }
  
  export default About;
  