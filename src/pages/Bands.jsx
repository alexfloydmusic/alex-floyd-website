import { Link } from "react-router-dom";

function Bands() {
  return (
    <div className="text-left">
      <h2 className="bottom-line">Alex Floyd</h2>
      <p>
        Long Island's one-man band playing hits from different genres from all decades. Click
        <Link style={{ textDecoration: "none" }} to="/about"> <strong>here</strong></Link> to learn more!
      </p>
      <p>
        <strong>Instagram: </strong>
        <a
          style={{ textDecoration: "none" }}
          href="https://www.instagram.com/alexfloyd_music/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @alexfloyd_music
        </a>
      </p>

      <h2 className="bottom-line">The Sun Seakers</h2>
      <p>
        Alex plays lead acoustic and electric guitar in the Sun Seakers, a Long Island, NY quartet that plays classic rock and modern pop hits.
      </p>
      <p>
        <strong>Instagram: </strong>
        <a
          style={{ textDecoration: "none" }}
          href="https://www.instagram.com/thesunseakers/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @thesunseakers
        </a>
        <br />
        <strong> Email: </strong>
        <a style={{ textDecoration: "none" }} href="mailto:sunseakersmusic@gmail.com">
          sunseakersmusic@gmail.com
        </a>
      </p>
      
      <h2 className="bottom-line">Carnival Dogs - A Window into The Doors</h2>
      <p>Alex is the guitarist of Carnival Dogs, Long Island's newest tribute to the legacy of The Doors.</p>
      <p>
        <strong>YouTube: </strong>
        <a
          style={{ textDecoration: "none" }}
          href="https://youtube.com/@CarnivalDogs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carnival Dogs
        </a>
      </p>
      
      <h2 className="bottom-line">Harrison Weather</h2>
      <p>Alex plays lead guitar and sings backing vocals in this Brooklyn-based band featuring the original music of Christian Botte.</p>
      <p>
        <strong>Spotify: </strong>
        <a
          style={{ textDecoration: "none" }}
          href="https://open.spotify.com/artist/7poC2M4mlZbFjhRJJ3GaUw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Christian Botte
        </a>
      </p>

      <h2 className="bottom-line">No Fun</h2>
      <p>
        Alex is the co-lead guitarist and co-lead vocalist of No Fun. This band is based in Long Island, NY and specializes in classic rock and hard rock hits.
      </p>
      <p>
        <strong>Instagram: </strong>
        <a
          style={{ textDecoration: "none" }}
          href="https://www.instagram.com/nofun_theband/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @nofun_theband
        </a>
      </p>

    </div>
  );
}

export default Bands;
