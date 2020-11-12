import { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import colors from "../theme/colors";

const useStyles = makeStyles((theme) => ({
  wrapper: { zIndex: 100 },
  bg: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: colors.bgSoft,
  },
}));

const Drawer: React.FunctionComponent<MyProps> = (props) => {
  const classes = useStyles();
  const { handleClose } = props;

  const node = useRef();

  const handleClick = (e) => {
    if (node.current && node.current.contains(e.target)) {
      return;
    }
    if (handleClose) {
      handleClose();
      return;
    }
    console.log("please provide handle Close");
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <div id="drawer-wrap" className={classes.wrapper}>
      <div style={props.style} ref={node}>
        {props.children}
      </div>
      <div className={classes.bg}></div>
    </div>
  );
};

export default Drawer;
