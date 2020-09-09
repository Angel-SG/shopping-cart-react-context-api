import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const Product = ({ price, img, title, id }) => {
  return (
    <Col md={3} key={id} className="mb-4">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={img}
          style={{
            width: "100%",
            heigth: "auto",
            maxHeigth: "300px",
            margin: "0 auto",
            padding: "20px",
            borderBottom: "2px solid lightgrey"
          }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-dark">
            {title.lenght < 250 ? `${title}` : `${title.substring(0, 25)} ...`}
          </Card.Title>
          <Card.Text>
            <p>
              Price:
              <span>
                <b>£{price}</b>
              </span>
            </p>
          </Card.Text>
          <Card.Link className="mt-auto" href="#">
            View More
          </Card.Link>
          <Button variant="primary" className="mb-2">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
