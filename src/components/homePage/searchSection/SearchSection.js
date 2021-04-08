import React from 'react'
//import backgroundShape from '../../../style/images/backgroundShape.png';
//import mainImg from '../../../style/images/mainImg.png';
import './searchSection.css';
import { Button, Carousel, CarouselItem,CarouselIndicators,} from "reactstrap";

export default function SearchSection() {
//   const history = useHistory();


//     function openMediaGallery(index) {
//         props.setChangeImgInCurrentLocation(index)
//         history.push("/" + props.objectFields.urlRoute + "/mediaGallery/uploudImage");
//       }
//     const [activeIndex, setActiveIndex] = React.useState(0);
//     const [animating, setAnimating] = React.useState(false);

//     const next = () => {
//         if (animating) return;
//         const nextIndex = activeIndex === props.ImagesArr.length - 1 ? 0 : activeIndex + 1;
//         setActiveIndex(nextIndex);
//       };
//       const previous = () => {
//         if (animating) return;
//         const nextIndex = activeIndex === 0 ? props.ImagesArr.length - 1 : activeIndex - 1;
//         setActiveIndex(nextIndex);
//       };
//       const goToIndex = (newIndex) => {
//         if (animating) return;
//         setActiveIndex(newIndex);
//       };
    return (
        <>
                    {/* <Row> */}
                    <section style={{
                       height: '90vh',
                       position: 'relative',
                       backgroundColor: 'lightgrey'
                      //  backgroundSize: 'cover',
                    //    paddingTop: '8rem',
                    //    paddingBottom: '8rem'
                    }}>
                                     {/* <img src={backgroundShape}
                //  alt={backgroundShape}
                //  className="background-shape"/>
                {/* <img src={mainImg}
                 alt={mainImg}
                 className="main-img"/>  */}
                 {/* <Carousel activeIndex={activeIndex} next={next} previous={previous}
      >
        <CarouselIndicators
          items={props.ImagesArr}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          className="EH-carouselIndicators"
        />
        {props.ImagesArr.map((item, index) => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.src}

            >
              <div

                onClick={() => openMediaGallery(index)}
                className="page-header header-filter carouelImgHover"
              >
                <div
                  className="page-header-image"
                  style={{
                    backgroundImage: item.src
                  }}
                ></div>

              </div>
            </CarouselItem>
          );
        })} */}

        {/* מכאן זה האיקונים של החיצים לשמאל ולימין */}
        {/* <a
          className="left carousel-control carousel-control-prev"
          data-slide="prev"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            previous();
          }}
          role="button"
        >
          <Button
            className="btn-icon btn-round"
            name="button"
            size="sm"
            type="button"
            style={{ backgroundColor: "transparent" }}
          >
            <FontAwesomeIcon icon={['fas', 'chevron-left']}>
            </FontAwesomeIcon>
          </Button>
        </a>
        <a
          className="right carousel-control carousel-control-next"
          data-slide="next"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            next();
          }}
          role="button"
        >
          <Button
            className="btn-icon btn-round"
            name="button"
            size="sm"
            type="button"
            style={{ backgroundColor: "transparent" }}

          >
            <FontAwesomeIcon icon={['fas', 'chevron-right']}>
            </FontAwesomeIcon>                                                                                </Button>
        </a>
      </Carousel> */}

                    </section>
            {/* </Row> */}
            </>
    )
}
