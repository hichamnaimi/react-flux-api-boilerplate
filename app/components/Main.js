import React from "react"
import actions from "../actions/app-action"

class Main extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {catalogProducts: []};
        this.handleGetCatalog = this.handleGetCatalog.bind(this);
    }
    handleGetCatalog(){
        //we luch the action, action call the dispatcher and give him the type of action + view data, dispatcher calls the registered store, the registered store
        //do the logic according to which action type was lunched and render a result and notify the view by changes

    }
    render(){
        return(
            <div>
                <p>Je suis header</p>
                <div>
                    {this.props.children}
                </div>
                <div>
                    Je suis footer
                </div>
            </div>
        )
    }
}

export default Main