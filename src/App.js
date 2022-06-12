import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes,
} from "react-router-dom";

import Navbar from "./pages/navbar";
import HomePage from "./pages/homePage";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import CNNConceptPage from "./pages/cnn-concept-page";
import DatasetPage from "./pages/dataset-page";
import PlantainPage from "./pages/plantain-page";
import ReferencePage from "./pages/references-page";
import { DetectPage } from "./pages/detect-page";
import TreatmentWeevilsPage from "./pages/treatments/treatment-weevils-page";
import TreatmentLarvaPage from "./pages/treatments/treatment-larva-page";
import TreatmentEarwigsPage from "./pages/treatments/treatment-earwigs-page";
import TreatmentPestalotiopsisPage from "./pages/treatments/treatment-pestalotiopsis-page";
import TreatmentFusariumWiltPage from "./pages/treatments/treatment-fusarium-wilt-page";
import TreatmentBacterialWiltPage from "./pages/treatments/treatment-bacterial-wilt";
import TreatmentCordanaPage from "./pages/treatments/treatment-cordana";
import TreatmentSigatokaPage from "./pages/treatments/treatment-sigatoka";

const RouterList = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/cnn", element: <CNNConceptPage /> },
    { path: "/dataset", element: <DatasetPage /> },
    { path: "/plantain", element: <PlantainPage /> },
    { path: "/references", element: <ReferencePage /> },
    { path: "/detect/:type", element: <DetectPage /> },
    { path: "/treatment/Weevils", element: <TreatmentWeevilsPage /> },
    { path: "/treatment/Larva", element: <TreatmentLarvaPage /> },
    { path: "/treatment/Earwigs", element: <TreatmentEarwigsPage /> },
    { path: "/treatment/pestalotiopsis", element: <TreatmentPestalotiopsisPage />,   },
    { path: "/treatment/fusarium-wilt", element: <TreatmentFusariumWiltPage />,   },
    { path: "/treatment/bacterial-wilt", element: <TreatmentBacterialWiltPage />,   },
    { path: "/treatment/cordana", element: <TreatmentCordanaPage />,   },
    { path: "/treatment/sigatoka", element: <TreatmentSigatokaPage />,   },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="content-page-container">
        <Router>
          <RouterList />
        </Router>
        {/* <FooterComponent /> */}
      </div>
    </div>
  );
}

export default App;
