import React from "react";
import { Container ,Card} from "react-bootstrap";
// import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./productCatalog.css";
import ProductImg from "../../../style/images/productImg.png";
import CardColumns from "react-bootstrap-card";

export default function ProductCatalog() {
  return (
    <>
      {/* <Container>
        <div className="d-flex">
          <Card>
            <CardActionArea>
              <div className="img">
                <img
                  src={ProductImg}
                  alt={ProductImg}
                  className="productImg"
                />
              </div> */}
              {/* // style={{ height: "140px" }}
              // src="../../../style/images/productImg.png" //
              title="Contemplative Reptile" */}
              {/* <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                מנת ירקות של בורגר
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                'זמן משלוח 30 דק
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Container> */}
{/* 
<div className="container">
  <div className="row">
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img-top"  src={ProductImg} alt={ProductImg} />
        <div className="card-body">
          <h4 className="card-title">chani</h4>
          <h6 className="card-subtitle mb-2 text-muted">Emilia-Romagna Region, Italy</h6>
          <p className="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
          <a href="#" className="card-link">Read More</a>
          <a href="#" className="card-link">Book a Trip</a>
        </div>
      </div>
    </div>
  </div>
</div> */}
<Container>
   
<Card  style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={ProductImg} alt={ProductImg} />
  <Button variant="primary">
  <Card.Body>
    <Card.Title>מנת ירקות של בורגר</Card.Title>
    <Card.Text>
    'זמן משלוח 30 דק
    </Card.Text>
    <Card.Text className="p">
     ש"ח 25 
    </Card.Text>
  </Card.Body>
  </Button>
</Card>

</Container>
    </>
  );
}
