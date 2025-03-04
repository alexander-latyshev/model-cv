import { Outlet } from "react-router";
import Header from "../components/header/header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
