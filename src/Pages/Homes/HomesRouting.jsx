import { useNavigate } from "react-router-dom";
import Button from "../Blog/Button";

const ObjectCard = ({ object }) => {
  const { id, image, address, price, rooms, bathrooms, area, text } = object;

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/Homes/${id}`);
  };

  return (
    <div className="card h-100 mx-auto">
      <img src={image} alt="house" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title mb-2">{address}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: {price} kr</li>
        <li className="list-group-item">Room: {rooms}</li>
        <li className="list-group-item">Bathrooms: {bathrooms}</li>
        <li className="list-group-item">Living area: {area} kvm</li>
      </ul>
      <div className="card-body">
        <p className="card-text">{text[0]}</p>
        <Button className={"btn btn-primary"} type={"button"} onClick={onClick}>
          Read more
        </Button>
      </div>
    </div>
  );
};

export default ObjectCard;
