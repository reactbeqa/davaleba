import { withAuthProtected } from '../../hoc/withAuthProtected';
import {getUser} from '../../services/users_api'

function Users(props){
    return(
        <div>
            <h1>User API</h1>
            <div>
                {/* <getUser /> */}
                <ul id="list1" ></ul>
            </div>

           

        </div>


    )
}


export default withAuthProtected(Users);