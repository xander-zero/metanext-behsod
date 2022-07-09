import { ThemeProvider } from "styled-components";
import Footer from "../common/Footer/Footer";
import HeaderNav from "../common/Navbar/HeaderNav/HeaderNav";
import Navbar from "../common/Navbar/Navbar";
import { GlobalStyle } from "../styles/GlobalStyle";
import { lightTheme } from "../styles/theme";

const MainLayout = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <HeaderNav />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
