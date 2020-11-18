import MainLayout from "./layouts/MainLayout";
import AddEmployee from "./views/AddEmployeeVIew";
import MainView from "./views/MainView";
import OverView from "./views/OverView";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <MainView></MainView> },
      { path: "employee/add", element: <AddEmployee /> },
      { path: "overview/:id", element: <OverView /> },
    ],
  },
];

export default routes;
