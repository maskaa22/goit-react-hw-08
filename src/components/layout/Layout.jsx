import { AppBar } from "../appBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};
