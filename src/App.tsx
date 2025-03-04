import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { PORTFOLIO_ROUTE } from "./consts";
import RootLayout from "./layouts/RootLayout";
import Transition from "./components/Transition";
import SplashScreen from "./components/splash/splashScreen";

const DURATION_IN = 0.6;
const DURATION_OUT = 0.4;

const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(PORTFOLIO_ROUTE);
    }
  }, [location.pathname, navigate]);

  return (
    <AnimatePresence mode="wait">
      {!isLoaded ? (
        <SplashScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <Suspense
          fallback={<SplashScreen onComplete={() => setIsLoaded(true)} />}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<RootLayout />}>
              <Route
                path="/about"
                element={
                  <Transition
                    direction="left"
                    durationIn={DURATION_IN}
                    durationOut={DURATION_OUT}
                  >
                    <About />
                  </Transition>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <Transition
                    direction="none"
                    durationIn={DURATION_IN}
                    durationOut={DURATION_OUT}
                  >
                    <Portfolio />
                  </Transition>
                }
              />
              <Route
                path="/contacts"
                element={
                  <Transition
                    direction="right"
                    durationIn={DURATION_IN}
                    durationOut={DURATION_OUT}
                  >
                    <Contact />
                  </Transition>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </AnimatePresence>
  );
}

export default App;
