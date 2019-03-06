import React, {Component} from 'react';
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import PricesComponent from "./PricesComponent";

class App extends Component {
    render() {
        return (
            <div>
                <PricesComponent text='My Text'/>
                <ReduxToastr
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    preventDuplicates={true}
                    timeOut={99999}
                />
            </div>
        );
    }
}

export default App;
