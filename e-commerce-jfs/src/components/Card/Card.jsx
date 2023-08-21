/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Tarjeta(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-pink-inter-miami-cf-2023-the-heart-beat-kit-authentic-jersey_ss5_p-200387113+u-ghnzrhjj2ienrjequp3b+v-ncsjlxvzp6psrjl5fqrd.jpg?_hv=2&w=340"} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
            {props.descripcion}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;