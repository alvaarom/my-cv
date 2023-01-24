import Card from "react-bootstrap/Card";
import { map } from "lodash";
import "./ProfileCard.css";

function ProfileCard(props) {
  const { title, description } = props;
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <ul>
          {map(description, (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
