import React, { Component } from 'react';
// using function components
// function ListItem(props) {
//     return (
//         <li>{props.doThis}</li>
        
//     )
// }

//using class component
class ListItem extends Component {
    render() {
        return(
            <div>
                <li>{this.props.doThis}</li>
            </div>
        )
    }
}
export default ListItem;