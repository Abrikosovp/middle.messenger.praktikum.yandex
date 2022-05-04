import Profile from './profile';
import {connect} from "../../test/connect/connect";


export default connect(Profile, ({user})=> user ?? {user: null});
