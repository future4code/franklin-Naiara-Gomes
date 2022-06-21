import './App.css';
import HomePage from './pages/HomePage';
import AdminHomePage from './pages/AdminHomePage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import LoginPage from './pages/LoginPage';
import ListTripsPage from './pages/ListTripsPage';
import CreateTripPage from './pages/CreateTripPage';
import TripDetailsPage from './pages/TripDetailsPage';
function App() {
  return (
    <div className="App">
      <HomePage />
      <AdminHomePage />
      <ApplicationFormPage />
      <LoginPage />
      <ListTripsPage />
      <CreateTripPage />
      <TripDetailsPage/>
    </div>
  );
}
export default App;












