import { withAuthProtected } from '../../hoc/withAuthProtected';

import {getResource} from '../../services/resource_api';

function Resource(props){
    return(
        <div>
            <h1>Resource API</h1>
            <div>
                {/* <getResource /> */}
                <ul id="list2" ></ul>
            </div>

           

        </div>


    )
}
export default withAuthProtected(Resource);