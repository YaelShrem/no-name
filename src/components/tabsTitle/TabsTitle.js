import React from "react";
import "./tabsTitle.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button, Form, Col, Row } from "react-bootstrap";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: 'var(--green-blue)',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: 'var(--gray)',
      opacity: 1,
    },
    '&$selected': {
      color: 'var(--gray)',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: 'var(--gray)',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '70%',
      backgroundColor: 'transparent',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function TabsTitle() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1} >
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Overview">
          <div className="content-overview">
            Aenean in felis egestas, fringilla magna eget, lobortis tortor. Phasellus finibus sed enim sit amet luctus. Cras et ultrices mi, id venenatis massa. Suspendisse mattis justo a venenatis mattis. Pellentesque venenatis vehicula ullamcorper. Suspendisse placerat ligula velit, non varius dolor consectetur faucibus. Cras maximus nulla libero, ut tincidunt sapien finibus sit amet. Etiam tristique nulla elit, at dapibus neque dictum id.
            </div> </AntTab>
          <AntTab label="Location" />
          <AntTab label="Add Reviews" />
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
