import {connect} from "../../modules/connect/connect";
import {Avatar} from "./avatar";

export default connect(Avatar, ({user})=>{
    console.log("user")
    console.log(user)
    if (!user || !user.avatar) {
        return {
            url: '',
        };
    }
    return {
        url: `https://ya-praktikum.tech/api/v2/resources${user.avatar}`,
    };
});
