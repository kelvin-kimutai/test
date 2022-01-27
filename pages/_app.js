import { Provider } from "react-redux";
import MainLayout from "../components/layouts/mainLayout";
import store from "../store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
