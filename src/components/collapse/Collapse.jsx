import { useState } from "react";
import data from "../../assets/data.json";
import "./collapse.css";
/**
 * composant COLLAPSE
 */
const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);
  // toggle le state isOpen et appelle toggleCollapse() à chaque click sur le header
  return (
    <section className="collapse">
      <header onClick={toggleCollapse}>
        <h2>{title}</h2>
        <i
          className={`fa-solid ${
            isOpen ? "fa-chevron-down rotate" : "fa-chevron-up"
          } fa-lg`}
        ></i>
      </header>
      {isOpen &&
        (title === data.list ? (
          <ul>
            {content.map((item, index) => (
              <li key={index} className={`${isOpen ? "translate" : ""}`}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            <li className={`${isOpen ? "translate" : ""}`}>{content}</li>
          </ul>
        ))}
    </section>
  );
};

export default Collapse;
