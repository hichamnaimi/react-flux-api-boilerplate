import {dispatch, register} from "../dispatchers/app-dispatcher"
import constants from "../constants/app-constants"
import axios from "axios"

export default {
    getServerData(){
        //we communicate with API
        axios.get("http://localhost:3000/api/v1/produits").then((serverData) => {
            dispatch({
                actionType: constants.GET_SERVER_DATA,
                data: serverData
            })
        } );

    }
}