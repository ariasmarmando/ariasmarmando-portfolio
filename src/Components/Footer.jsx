import "../CSS/screenL-Footer-Main.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="Footer-Container">
      <p>Designed and programmed by Armando Arias © {currentYear}</p>
    </div>
  );
};
export default Footer;
