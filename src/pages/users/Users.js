import { withAuthProtected } from '../../hoc/withAuthProtected';
import {getUser} from '../../services/users_api'

function Users(props){
    return(
        <div>
            <h1>User List from 'recres.in'</h1>
            <div className="list-group">
                <getUser />
                <ol id="list" ></ol>
            </div>

           

        </div>


    )
}


export default withAuthProtected(Users);