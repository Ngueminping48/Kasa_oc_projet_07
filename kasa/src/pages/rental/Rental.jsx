import { useParams } from "react-router-dom";
import data from "../../assets/data.json";
import Carousel from "../../components/carousel/Carousel";
import Collapse from "../../components/collapse/Collapse";
import Host from "../../components/host/Host";
import "./rental.css";
import Error from "../error/Error";
import Notation from "../../components/notation/Notation";

/**
 * Composant Rental
 */

const Rental = () => {
  const { id } = useParams();
  const card = data.accommodations.find((card) => card.id === id);

  if (!card) return <Error />;
  return (
    <main id="Rental">
      <Carousel pictures={card.pictures} alt={card.title} />
      <section>
        <header>
          <h1>{card.title}</h1>
          <p>{card.location}</p>
          <ul>
            {card.tags.map((tag) => (
              <li key={tag}>
                <label>{tag}</label>
              </li>
            ))}
          </ul>
        </header>

        <figure>
          {/* <notation notation={card.notation} /> */}
          <Host name={card.host.name} picture={card.host.picture} />
          <Notation notation={card.rating} />
        </figure>
      </section>
      <footer>
        <Collapse title={data.text} content={card.description} />

        <Collapse title={data.list} content={card.equipments} />
      </footer>
    </main>
  );
};

export default Rental;
