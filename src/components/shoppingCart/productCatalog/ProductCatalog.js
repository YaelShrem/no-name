import React from "react";
import Parser from "html-react-parser";
import { Container, Card } from "react-bootstrap";
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
  const icon = {
    clockFill: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#344968" class="bi bi-clock-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
      </svg>`,
    rightArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
    </svg>`,
    leftArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
   <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
 </svg>`,
  };
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
      <Container className="container-catalog d-flex-col justify-content-center">
        <div className="d-flex justify-content-between">
          <div className="tab-div d-flex justify-content-between">
            <Tabs>
              <Tab label="קטלוג מוצרים">
                {/* <div className="p1">
                </div> */}
              </Tab>
              <Tab label="סל הקניות שלי">
                {/* <div className="p1">כאן תוכלו להזמין את המוצרים שלכם</div> */}
              </Tab>
              <Tab label="לסיים הזמנה">
                {/* <div className="p1">כאן תוכלו לראות את ההמלצות עלינו</div> */}
              </Tab>
            </Tabs>
          </div>
          <div className="rout d-flex justify-content-between">
            {/* <p className="sortBy">מיין לפי</p> */}
            <Button className="show-all" variant="contained">
              תציג הכל
            </Button>
          </div>
        </div>

        <div className="d-flex  justify-content-center">
          <div className="d-flex-column">
            <Card className="d-flex pd-4" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ProductImg} alt={ProductImg} />
              <Button variant="primary" className="botton-style">
                <Card.Body>
                  <Card.Title /*className="main-title"*/>
                    מנת ירקות של בורגר
                  </Card.Title>
                  <div className="div-time d-flex">
                    {Parser(icon.clockFill)}
                    <Card.Text className="time">'זמן משלוח 30 דק </Card.Text>
                  </div>
                  <Card.Text className="p">ש"ח 25</Card.Text>
                </Card.Body>
              </Button>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ProductImg} alt={ProductImg} />
              <Button variant="primary" className="botton-style">
                <Card.Body>
                  <Card.Title>
                    מנת ירקות של בורגר
                  </Card.Title>
                  <div className="div-time d-flex">
                    {Parser(icon.clockFill)}
                    <Card.Text className="time">'זמן משלוח 30 דק </Card.Text>
                  </div>
                  <Card.Text className="p">ש"ח 25</Card.Text>
                </Card.Body>
              </Button>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ProductImg} alt={ProductImg} />
              <Button variant="primary" className="botton-style">
                <Card.Body>
                  <Card.Title>מנת ירקות של בורגר</Card.Title>
                  <div className="div-time d-flex">
                    {Parser(icon.clockFill)}
                    <Card.Text className="time">'זמן משלוח 30 דק </Card.Text>
                  </div>
                  <Card.Text className="p">ש"ח 25</Card.Text>
                </Card.Body>
              </Button>
            </Card>
          </div>

          <div className="d-flex-column">
            <Card className="d-flex pd-4" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ProductImg} alt={ProductImg} />
              <Button variant="primary" className="botton-style">
                <Card.Body>
                  <Card.Title>מנת ירקות של בורגר</Card.Title>
                  <div className="div-time d-flex">
                    {Parser(icon.clockFill)}
                    <Card.Text className="time">'זמן משלוח 30 דק </Card.Text>
                  </div>
                  <Card.Text className="p">ש"ח 25</Card.Text>
                </Card.Body>
              </Button>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ProductImg} alt={ProductImg} />
              <Button variant="primary" className="botton-style">
                <Card.Body>
                  <Card.Title>מנת ירקות של בורגר</Card.Title>
                  <div className="div-time d-flex">
                    {Parser(icon.clockFill)}
                    <Card.Text className="time">'זמן משלוח 30 דק </Card.Text>
                  </div>
                  <Card.Text className="p">ש"ח 25</Card.Text>
                </Card.Body>
              </Button>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ProductImg} alt={ProductImg} />
              <Button variant="primary" className="botton-style">
                <Card.Body>
                  <Card.Title>מנת ירקות של בורגר</Card.Title>
                  <div className="div-time d-flex">
                    {Parser(icon.clockFill)}
                    <Card.Text className="time">'זמן משלוח 30 דק </Card.Text>
                  </div>
                  <Card.Text className="p">ש"ח 25</Card.Text>
                </Card.Body>
              </Button>
            </Card>
          </div>

          <div className="d-flex-column">
            <Card className="d-flex pd-4" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ProductImg} alt={ProductImg} />
              <Button variant="primary" className="botton-style">
                <Card.Body>
                  <Card.Title>מנת ירקות של בורגר</Card.Title>
                  <div className="div-time d-flex">
                    {Parser(icon.clockFill)}
                    <Card.Text className="time">'זמן משלוח 30 דק </Card.Text>
                  </div>
                  <Card.Text className="p">ש"ח 25</Card.Text>
                </Card.Body>
              </Button>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ProductImg} alt={ProductImg} />
              <Button variant="primary" className="botton-style">
                <Card.Body>
                  <Card.Title>מנת ירקות של בורגר</Card.Title>
                  <div className="div-time d-flex">
                    {Parser(icon.clockFill)}
                    <Card.Text className="time">'זמן משלוח 30 דק </Card.Text>
                  </div>
                  <Card.Text className="p">ש"ח 25</Card.Text>
                </Card.Body>
              </Button>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ProductImg} alt={ProductImg} />
              <Button variant="primary" className="botton-style">
                <Card.Body>
                  <Card.Title>מנת ירקות של בורגר</Card.Title>
                  <div className="div-time d-flex">
                    {Parser(icon.clockFill)}
                    <Card.Text className="time">'זמן משלוח 30 דק </Card.Text>
                  </div>
                  <Card.Text className="p">ש"ח 25</Card.Text>
                </Card.Body>
              </Button>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
        })}

        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};
