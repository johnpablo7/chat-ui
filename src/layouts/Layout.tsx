import { Header } from "../components/shared/Header";
import { Main } from "../components/shared/Main";

export const Layout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col font-dmsans">
      <Header />
      <Main />
    </div>
  );
};
