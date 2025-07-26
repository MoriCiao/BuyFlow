import {} from "module";
import "./style/tailwindcss.css";
import "./style/index.css";
import Loading from "./components/loading";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import CartIcon from "./components/CartIcon";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "./features/ui/uiSlice";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import BgImg from "./components/BgImg";

function App() {
  const isLoading = useSelector((state) => state.ui.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(setLoading(true));
    // setTimeout(() => {
    //   dispatch(setLoading(false));
    // }, 2000);
  }, []);

  return (
    <div className="App w-full relative">
      <ScrollToTop />
      <CartIcon />
      {isLoading && <Loading />}
      <Header />
      <main className="main w-full min-h-[60vh] flex justify-center relative">
        <BgImg />
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
