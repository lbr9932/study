import "../styles/components/empty.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Empty({ children }) {
  return (
    <div className="empty">
      <FontAwesomeIcon
        className={`fa-regular empty__icon`}
        icon={faMagnifyingGlass}
      />
      <p className="empty__text">{children}</p>
    </div>
  );
}
