const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
export const getCurrentDate = () => {
  const jakarta = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });
  const today = new Date(jakarta);

  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const day = today.getDay();

  return `${days[day]}, ${date} ${months[month]} ${year}`;
};

export const convertDate = (dateVal) => {
  const thisDate = new Date(dateVal);
  const date = thisDate.getDate();
  const month = thisDate.getMonth();
  const year = thisDate.getFullYear();
  const day = thisDate.getDay();

  return `${days[day]}, ${date} ${months[month]} ${year}`;
};
