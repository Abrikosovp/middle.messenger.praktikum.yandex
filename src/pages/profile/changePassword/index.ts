import ChangePassword from './ChangePassword';
import {connect} from "../../../test/connect/connect";


export default connect(ChangePassword, ({user})=> user ?? {user: null});
