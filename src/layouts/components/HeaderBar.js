import { makeStyles } from "@material-ui/core";
import colors from "../../theme/colors";
import MenuIcon from "../../assets/menu-bar.svg";
import Drawer from "../../component/Drawer";
import { useState } from "react";
import { getCurrentDate } from "../../utils/date";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: 64,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    background: colors.primary,
    color: "white",
    display: "flex",
  },
  content: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  drawerContent: {},
  menu: {
    padding: 20,
    fontWeight: "bold",
    "&:hover": {
      background: colors.hover,
    },
  },
  today: {
    marginLeft: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
}));

const DrawerStyle = {
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  width: 200,
  background: "white",
  zIndex: 100,
  color: "black",
};

const HeaderBar = () => {
  const classes = useStyles();

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div style={{ marginLeft: 20 }} className="icon icon--medium">
          <img
            src={MenuIcon}
            onClick={() => setDrawerOpen(true)}
            alt="main"
          ></img>
        </div>
        <div className={classes.today}>{getCurrentDate()}</div>
        {isDrawerOpen && (
          <Drawer style={DrawerStyle} handleClose={() => setDrawerOpen(false)}>
            <div className={classes.drawerContent}>
              <NavLink to="/" onClick={() => setDrawerOpen(false)}>
                <div className={classes.menu}>Menu</div>
              </NavLink>
            </div>
          </Drawer>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
