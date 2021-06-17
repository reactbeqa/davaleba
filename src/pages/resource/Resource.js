import { withAuthProtected } from '../../hoc/withAuthProtected';

import {getResource} from '../../services/resource_api';

function Resource(props){
    return(
        <div>
            <h1>Resource from 'recres.in'</h1>
            <div className="list-group">
                <getResource />
                <ol id="list" ></ol>
            </div>

           

        </div>


    )
}
export default withAuthProtected(Resource);