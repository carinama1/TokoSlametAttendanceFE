import { makeStyles, Button } from "@material-ui/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "../../component/Input";
import { AddEmployeeAPI } from "../../api/employees";
import colors from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  header: {
    padding: 10,
    textAlign: "center",
    background: "white",
    fontWeight: "bold",
  },
  buttonDanger: {
    background: theme.btn.danger,
    color: "white",
    fontWeight: "bold",
    width: 120,
    "&:hover": {
      opacity: 0.9,
      background: theme.btn.danger,
    },
  },
  buttonMain: {
    background: theme.btn.primary,
    color: "white",
    fontWeight: "bold",
    width: 120,
    "&:hover": {
      opacity: 0.9,
      background: theme.btn.primary,
    },
  },
}));

const forms = [
  { label: "Name", key: "name" },
  { label: "Phone", key: "phone", type: "number" },
  { label: "Tanggal Gajian", key: "payday", type: "number" },
];

const AddEmployee = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    payday: "",
  });
  const [errors, setErrors] = useState({ name: "", phone: "", payday: "" });
  const [withMessage, setWithMessage] = useState("");

  const handleSubmit = () => {
    const tempErrors = {};
    tempErrors.name = validate("name", 3, 32);
    tempErrors.phone = validate("phone", 10, 14);
    tempErrors.payday = validate("payday", 2, 2);
    const { name, phone, payday } = tempErrors;

    if (name || phone || payday) {
      setErrors(tempErrors);
      return;
    } else {
      AddEmployeeAPI(formValue)
        .then(({ data }) => {
          setFormValue({
            name: "",
            phone: "",
            payday: "",
          });
          setWithMessage({ succes: true, message: data });
        })
        .catch((err) => {
          setWithMessage({ succes: false, message: err.response.data });
        });
    }
  };

  const validate = (key, min, max) => {
    if (!formValue[key]) {
      return `${key} wajib diisi`;
    }
    if (formValue[key].length < min || formValue[key].length > max) {
      return `${key} harus berisi ${min} sampai ${max} character`;
    }
    return "";
  };

  const handleChange = (value, key) => {
    setErrors({ ...errors, [key]: "" });
    setFormValue({ ...formValue, [key]: value });
  };

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}> TAMBAH PEGAWAI </div>
      {withMessage && (
        <div
          style={
            withMessage.succes
              ? {
                  textAlign: "center",
                  marginTop: 10,
                  fontSize: 20,
                  color: colors.succes,
                }
              : {
                  textAlign: "center",
                  marginTop: 10,
                  fontSize: 20,
                  color: colors.danger,
                }
          }
        >
          {withMessage.message}
        </div>
      )}
      <div style={{ padding: 10 }}>
        {forms.map((form, index) => {
          return (
            <Input
              key={index}
              label={form.label}
              keymap={form.key}
              value={formValue[form.key]}
              type={form.type}
              handleChange={handleChange}
              error={errors[form.key]}
            />
          );
        })}
      </div>
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          gap: 20,
          margin: "0 auto",
        }}
      >
        <Button
          onClick={handleSubmit}
          variant="contained"
          className={classes.buttonMain}
        >
          Submit
        </Button>
        <NavLink to="/">
          <Button variant="contained" className={classes.buttonDanger}>
            Batal
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default AddEmployee;
