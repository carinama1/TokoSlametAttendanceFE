import { makeStyles, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import EmployeeAttendance from "./component/EmployeeAttendance";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  content: {
    padding: 20,
  },
  btn: {
    width: 240,
    color: "white",
    fontWeight: "bold",
    background: theme.btn.primary,
    "&:hover": {
      opacity: 0.9,
      background: theme.btn.primary,
    },
  },
}));

const MainView = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <EmployeeAttendance />
        <EmployeeAttendance />
        <EmployeeAttendance />
        <NavLink to="employee/add">
          <div style={{ margin: "20px auto", width: 240 }}>
            <Button className={classes.btn}>(+) Tambah Pegawai</Button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default MainView;
