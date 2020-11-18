import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAttendanceByEmployeeIDAPI } from "../../api/employees";
import Calendar from "../../component/Calendar";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
}));

const OverView = () => {
  const params = useParams();
  const classes = useStyles();
  const [employee, setEmployee] = useState();
  const [attendances, setAttendances] = useState();

  useEffect(() => {
    getAttendanceByEmployeeIDAPI(params.id)
      .then(({ data }) => {
        setAttendances(data.data);
        setEmployee(data.employeeData.emp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.wrapper}>
      {employee && attendances && (
        <Calendar employee={employee} attendances={attendances} />
      )}
    </div>
  );
};

export default OverView;
