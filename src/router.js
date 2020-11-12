import MainLayout from "./layouts/MainLayout";
import AddEmployee from "./views/AddEmployeeVIew";
import MainView from "./views/MainView";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <MainView></MainView> },
      { path: "employee/add", element: <AddEmployee /> },
    ],
  },
];

export default routes;
