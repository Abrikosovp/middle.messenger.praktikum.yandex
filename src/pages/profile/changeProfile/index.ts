import ChangeProfile from './ChangeProfile';
import {connect} from "../../../test/connect/connect";


export default connect(ChangeProfile, ({user})=> user ?? {user: null});
