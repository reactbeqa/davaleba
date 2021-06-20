import { withAuthProtected } from '../../hoc/withAuthProtected';
import { getResource } from '../../services/resource_api';

function Resource(props) {
  return (
    <div>
      <h1>default text</h1>
      <div>
        <getResource />
        <ul id="resource"></ul>
      </div>
    </div>
  );
}
export default withAuthProtected(Resource);
