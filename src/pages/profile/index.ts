import {Profile} from './Profile';
import {connect} from "../../modules/connect/connect";

export default connect(Profile, ({user})=> user ?? {user: null});
