import { withAuthProtected } from '../../hoc/withAuthProtected';
import { getUsers } from '../../services/users_api';

function Users(props) {
  return (
    <div>
      <h2>default text</h2>
      <div>
        <getUsers />
        <ul id="users"></ul>
      </div>
    </div>
  );
}

export default withAuthProtected(Users);
