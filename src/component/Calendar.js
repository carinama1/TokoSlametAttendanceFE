import { makeStyles, Button } from "@material-ui/core";
import { useState } from "react";
import colors from "../theme/colors";
import { convertDate } from "../utils/date";

const number = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  calendarWrapper: {
    width: 400,
    height: 300,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  content: {
    width: "calc(100%/7)",
    textAlign: "center",
  },
  header: {
    padding: 10,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  buttonMain: {
    background: theme.btn.primary,
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      opacity: 0.9,
      background: theme.btn.primary,
    },
  },
  buttonWrapper: {
    width: 64,
    height: 36,
  },
}));

const defineAttendance = (num, isWorking) => {
  if (isWorking === true) {
    return <span>{num}</span>;
  } else if (isWorking === false) {
    return <span style={{ color: "red" }}>{num}</span>;
  } else {
    return <span style={{ opacity: 0.2 }}>{num}</span>;
  }
};

const Calendar = ({ employee, attendances }) => {
  const classes = useStyles();
  const [activeAtt, setActiveAtt] = useState(attendances[0].months + 1);
  const [attendanceHis] = useState(attendances);

  const countAbsent = () => {
    const x = attendanceHis[activeAtt - 1].attendanceHistory.filter(
      (data) => data === false
    ).length;
    return x;
  };

  return (
    <div className={classes.wrapper}>
      <div style={{ padding: 20, paddingBottom: 0 }}>
        <div className="name">{employee.name}</div>
        <div style={{ marginTop: 5 }}>
          Mulai Kerja : {convertDate(employee.created)}
        </div>
        <div style={{ marginTop: 5, color: colors.danger }}>
          Total Absen Bulan ini : {countAbsent()} Hari
        </div>
      </div>
      <div className={classes.header}>
        <div className={classes.buttonWrapper}>
          {activeAtt !== 1 && (
            <Button
              onClick={() => setActiveAtt(activeAtt - 1)}
              className={classes.buttonMain}
              variant="contained"
            >
              {"<"}
            </Button>
          )}
        </div>
        <div style={{ fontWeight: "bold" }}>Bulan ke-{activeAtt}</div>
        <div className={classes.buttonWrapper}>
          {activeAtt !== attendances.length ||
            (activeAtt > attendances.length && (
              <Button
                onClick={() => setActiveAtt(activeAtt + 1)}
                className={classes.buttonMain}
                variant="contained"
              >
                {">"}
              </Button>
            ))}
        </div>
      </div>
      <div className={classes.calendarWrapper}>
        {number.map((doc, index) => (
          <div className={classes.content} key={index}>
            {defineAttendance(
              doc,
              attendanceHis[activeAtt - 1].attendanceHistory[index]
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
