import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/Footer";
import useLocalizeDocumentAttributes from "./hooks/common/useLocalizeDocumentAttributes";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/common/loader/Loader";
import FixedBtn from "./components/common/buttons/FixedBtn";
import fav from "../public/icons/favicon.ico";
import Head from "./components/common/meta/Head";
import { useTranslation } from "react-i18next";
const Home = lazy(() => import("./app/home/page"));
const Services = lazy(() => import("./app/services/Services"));
const NotFound = lazy(() => import("./app/not-found/page"));
const App = () => {
  useLocalizeDocumentAttributes();
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
      <Head favicon={fav} title={t("megz")} />
      <Suspense
        fallback={
          <div className="w-screen h-screen flex justify-center items-center">
            <Loader />
          </div>
        }
      >
        <FixedBtn />
        <Navbar />
        <div className="flex-grow mt-32 md:mt-36 lg:mt-40">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
