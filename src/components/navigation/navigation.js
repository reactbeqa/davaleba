import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <header className="row">
<<<<<<< HEAD
      <nav className="navbar navbar-dark bg-dark">
=======
      <nav className="mt-3">
>>>>>>> 317a362565690b92dfcf8248750589c93c78340d
        <ul className="nav nav-pills flex-column flex-sm-row">
          <li className="nav-item">
            <NavLink to="/auth" className="nav-item nav-link">
              Auth
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/users" className="nav-link">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resource" className="nav-link">
              Resource
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func,
  pages: PropTypes.object,
};

export default Navigation;
