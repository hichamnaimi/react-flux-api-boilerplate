import {dispatch, register} from "../dispatchers/app-dispatcher"
import constants from "../constants/app-constants"
import {EventEmitter} from "events"

const CHANGE_EVENT = "change";

// Variables global to this

var _data = [];

//private methodes that work with variables
const _initServerData = (data) => {
    //He updates data
    _data = data;
    //He tells the view that he complished the update of data, he can call the new data via one of the public methods that returns
    //adequated data
    App.emitChange();
};


//exported methodes - event listen on change and emit change - register to the dispatcher
const App = Object.assign(EventEmitter.prototype, {
    emitChange(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListner(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListner(callback){
        this.on(CHANGE_EVENT, callback);
    },
    getData(){
        //after the update of data and notification from the store via emitChance(), the view calls this methode to get recent data
        return _data;
    },
    dispatcherIndex: register((action) => {
        switch(action.actionType){
            case constants.GET_SERVER_DATA:
                _initServerData(action.data);
        }
    })
});

export default App;