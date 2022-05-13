
import {ChangePassword} from './ChangePassword';
import {connect} from "../../../modules/connect/connect";



export default connect(ChangePassword, ({user})=> user ?? {user: null});
