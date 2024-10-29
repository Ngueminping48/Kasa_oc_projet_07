import data from '../../assets/data.json';
import logo from '../../assets/footer.webp';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <figure>
      <img src={logo} alt={data.logo} />
        <figcaption><p>
    © {data.year} {data.brand}. <br className="responsive" />
    {data.copyright}</p></figcaption>
      </figure>

     
    </footer>
  )
}

export default Footer
