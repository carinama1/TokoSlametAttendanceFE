import { makeStyles } from "@material-ui/core";
import colors from "../theme/colors";

const useStyles = makeStyles((theme) => ({
  wrapper: { padding: 5, marginBottom: 5 },
  input: {
    width: "100%",
    height: 36,
    padding: 10,
    marginTop: 5,
    border: `1px solid ${colors.bgSoft}`,
    "&:focus": {
      outline: "none",
      border: `1px solid ${colors.primary}`,
      //   fontWeight: "bold",
    },
  },
  error: {
    color: colors.danger,
    opacity: 0.8,
  },
}));

const Input = ({
  error = "",
  type = "text",
  label,
  keymap,
  value,
  handleChange,
}) => {
  const classes = useStyles();

  const handleChanges = (e) => {
    const { value } = e.target;
    if (handleChange) {
      handleChange(value, keymap);
      return;
    }
    console.log("please input handleChange");
  };

  return (
    <div className={classes.wrapper}>
      <div style={{ fontWeight: "bold" }}>{label}</div>
      {error && <div className={classes.error}>{error}</div>}
      <input
        style={
          error
            ? {
                border: `2px solid ${colors.danger}`,
                background: `${colors.bgDanger}`,
              }
            : {}
        }
        className={classes.input}
        onChange={(e) => handleChanges(e)}
        type={type}
      ></input>
    </div>
  );
};

export default Input;
