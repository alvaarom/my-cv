import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CertificatesCard.css";

function CertificatesCard(props) {
  const { data } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.school} - {data.year}
        </Card.Text>
        <Button variant="primary" href={data.link} target="_blank">
          Ver certificado
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificatesCard;
