import {ChangeProfile} from './ChangeProfile';
import {connect} from "../../../modules/connect/connect";


export default connect(ChangeProfile, ({user})=> user ?? {user: null});
