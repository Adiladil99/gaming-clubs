import { ThemeProvider } from 'styled-components'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import CreateRoutes from './router/routes';
import Global from './assets/styles/global';
import { baseVar } from './assets/styles/theme';
import { Content } from "./assets/styles/base";
import 'antd/dist/antd.css';

function App() {
  return (
    <ThemeProvider theme={baseVar}>
          <Header />
          <Content>
            <CreateRoutes />
          </Content>
          <Footer />
          <Global />
    </ThemeProvider>
  );
}

export default App;
