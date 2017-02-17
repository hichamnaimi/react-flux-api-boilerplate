import React from "react";
import AppActions from "../actions/app-action"
import AppStore from "../stores/app-store"

class Boutique extends React.Component{
    constructor(props){
        super(props);
        this.handleServerData = this.handleServerData.bind(this);
    }
    handleServerData(){
        //On click event we send an action, this action dispatch to the store the data + type of action (here getServerData)
        //The store is registred so he recieves the dispatch, he analyse which action is checked in his list, then execute appropriate method
        //He notify the changes to the view
        AppActions.getServerData();
    }
    componentWillMount(){
        // We plug into the store, to listen him if there was a change
        AppStore.addChangeListner(this._onChange.bind(this));
    }
    _onChange(){
        // If the change is it we get the data from the store
        console.log(AppStore.getData())
    }
    render(){
        return (
            <div>
                <h1>I'am the store</h1>
                <button onClick={this.handleServerData}>Click me to get data from server</button>
            </div>
        )
    }
}

export default Boutique;