import {Form} from './form';
import {connect} from "../../modules/connect/connect";


export default connect(Form, ({errorTextForm}) => ({errorTextForm}))
