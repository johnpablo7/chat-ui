import { Header } from "../components/shared/Header";
import { Main } from "../components/shared/Main";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main />
    </div>
  );
};
