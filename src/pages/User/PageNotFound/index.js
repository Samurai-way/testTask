import { Link } from "react-router-dom";
import ActionButton from "../../../components/buttons/ActionButton";
import "./styles.scss";

const PageNotFound = () => {
  return (
    <div className="fallback-page page-not-found">
      <h1 className="page-not-found__heading">
        Oops! Looks like such page does not exist...
      </h1>

      <Link to="/" className="page-not-found__button" data-testid="pnf-btn">
        <ActionButton>Home Page</ActionButton>
      </Link>
    </div>
  );
};

export default PageNotFound;
