import TickerSelection from "./components/TickerSelection";
import IntervalSelection from "./components/IntervalSelection";
import "./styles.scss";

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <TickerSelection />
      <IntervalSelection />
    </div>
  );
};

export default SettingsPage;
