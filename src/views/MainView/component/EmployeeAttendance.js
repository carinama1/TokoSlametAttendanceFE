import { Button, makeStyles } from "@material-ui/core";
import { useState } from "react";
import Drawer from "../../../component/Drawer";
import colors from "../../../theme/colors";

const defaultImage =
  "https://i0.wp.com/itpoin.com/wp-content/uploads/2014/06/guest.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: `1px solid ${colors.bgSoft}`,
    borderRadius: 5,
    marginBottom: 20,
    background: "white",
  },
  content: {
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
  },
  etc: {
    width: "100%",
    background: colors.hover,
    padding: 10,
    display: "flex",
    color: "rgba(0,0,0,0.6)",
    "& > * ": {
      flex: 1,
      "& > *": {
        marginTop: 5,
      },
    },
  },
  buttonDanger: {
    background: theme.btn.danger,
    color: "white",
    fontWeight: "bold",
    width: 80,
    "&:hover": {
      opacity: 0.9,
      background: theme.btn.danger,
    },
  },
  buttonMain: {
    background: theme.btn.primary,
    color: "white",
    fontWeight: "bold",
    width: 80,
    "&:hover": {
      opacity: 0.9,
      background: theme.btn.primary,
    },
  },
}));

const EmployeeAttendance = ({ isAbsent = false }) => {
  const classes = useStyles();
  const [isWorking, setIsWorking] = useState(true);
  const [absent, setAbsent] = useState(isAbsent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleAbsent = (isGoToWork) => {
    setAbsent(true);
    setIsWorking(isGoToWork);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className="profile profile--medium">
          <img src={defaultImage} alt=" main "></img>
        </div>
        <div style={{ marginLeft: 20 }}>
          <div className="name">Anthony Simultan</div>
          <div style={{ color: colors.subText }}>Pegawai</div>
        </div>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          {!absent && (
            <>
              <Button
                onClick={() => handleAbsent(true)}
                variant="contained"
                className={classes.buttonMain}
              >
                Hadir
              </Button>
              <Button
                onClick={() => handleAbsent(false)}
                variant="contained"
                className={classes.buttonDanger}
              >
                Absen
              </Button>
            </>
          )}
          {openDrawer && (
            <Drawer
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                width: "90%",
                background: "white",
                zIndex: 100,
                transform: "translate(-50%,-50%)",
                padding: 20,
                borderRadius: 5,
              }}
            >
              <div>
                <h3>
                  Apakah anda yain ingin merubah absensi {"Anthony Simultan"}?
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 20,
                    marginTop: 20,
                  }}
                >
                  <Button
                    onClick={() => {
                      setAbsent(false);
                      setOpenDrawer(false);
                    }}
                    variant="contained"
                    className={classes.buttonMain}
                  >
                    YA
                  </Button>
                  <Button
                    onClick={() => setOpenDrawer(false)}
                    variant="contained"
                    className={classes.buttonDanger}
                  >
                    Tidak
                  </Button>
                </div>
              </div>
            </Drawer>
          )}
          {absent && (
            <div onClick={() => setOpenDrawer(true)}>
              {isWorking ? (
                <div style={{ color: colors.succes, fontWeight: "bold" }}>
                  Hadir
                </div>
              ) : (
                <div style={{ color: colors.danger, fontWeight: "bold" }}>
                  Tidak hadir
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={classes.etc}>
        <div style={{ fontWeight: "bold" }}>
          <span>Pay day :</span> <div>20</div>
        </div>
        <div style={{ fontWeight: "bold" }}>
          <span>Absen :</span> <div>2 Hari</div>
        </div>
        <div style={{ fontWeight: "bold" }}>
          <span>Phone :</span> <div>081233471239</div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendance;
