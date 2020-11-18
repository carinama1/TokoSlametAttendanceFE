import { makeStyles, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import EmployeeAttendance from "./component/EmployeeAttendance";
import { GetAttendanceAPI } from "../../api/attendance";
import { useEffect, useState } from "react";

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

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    GetAttendanceAPI().then(({ data }) => {
      setEmployees(data.data);
    });
  }, []);
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        {employees.length > 0 &&
          employees.map((employee, index) => (
            <EmployeeAttendance key={index} Attendance={employee} />
          ))}
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
