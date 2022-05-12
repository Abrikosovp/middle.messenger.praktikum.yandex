import {Profile} from './profile';
import {connect} from "../../modules/connect/connect";



export default connect(Profile, ({user})=> user ?? {user: null});
