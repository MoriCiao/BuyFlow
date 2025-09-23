import "./style/tailwindcss.css";
import "./style/index.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "./features/ui/uiSlice";
import Loading from "./components/loading";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import CartIcon from "./components/CartIcon/CartIcon";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const isLoading = useSelector((state) => state.ui.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <CartIcon />
      {isLoading && <Loading />}
      <Header />
      <main className="main">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
