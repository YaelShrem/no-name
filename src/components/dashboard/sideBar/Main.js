import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './sideBar.scss'
import Icon from '../../Icon'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Bar from '../bar/Bar'
import LineChart from '../lineChart/LineChart'
import './sideBar.scss'
import './cardDashboard.css'

const Main = ({
  handleToggleSidebar,
}) => {
  let cardsDetails = [{ backColor: '#22C5BB', subject: 'Lead', score: 40689, icon: 'chatSquareColor' },
  { backColor: '#37CAA7', subject: 'Review', score: 40689, icon: 'flag' },
  { backColor: '#4DDC9E', subject: 'Order', score: 40689, icon: 'headset' },
  { backColor: '#45D87A', subject: 'View', score: 40689, icon: 'headset' }]
  return (
    <main className='m-auto'>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <Icon name='hamburger'></Icon>
      </div>
      <div className="block">
        <Container>
          <Row>
            {
              cardsDetails.map((item, index) => {
                return (
                  <Col xs={12} sm={6} lg={3} >
                    <div key={`card${index}`} className="text-left p-5 d-inline">
                      <Card className="cardStyle pl-3" style={{ backgroundColor: item.backColor }}>
                        <blockquote className="blockquote mb-0 card-body">
                          <header className="blockquote-footer textBlack headerSetStyle">
                            <small>
                              total {item.subject}
                            </small>
                              {/* <span className='iconStyle ml-5 position-fixed'>
                                <Icon name={item.icon}></Icon>
                              </span> */}
                          </header>
                          <b><p className='m-0'>{item.score}
                          </p></b>
                          <footer className="blockquote-footer textBlack text-left">
                            <small className=''>8.5% Up to yesterday</small>
                          </footer>
                        </blockquote>
                      </Card>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
          <Row className='marginUp'>
            <Col xs={12} md={12} lg={6}>
              <LineChart />
            </Col>
            <Col xs={12} md={12} lg={6}>
              <Bar />
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Main;
