import React from 'react';

import './TodoListItem.css'


export default class TodoListItem extends React.Component {


state = {
        done:false,
        important:false,
};

onLabelClick = () => {

    this.setState ({
        done: true,
    });
    
}
onImportantClick = () => {
    this.setState({
        important: true,
    })
}
deleteLabel = () => {
 console.log(this.props.classNames);
 
}
render(){

    const{ done, important } = this.state;
    const{ text } = this.props;

    let classNames = `TodoListItem`;
    

    if(done){
        classNames+=' done';
    } 
console.log(classNames);


    if(important){
        classNames+=' important';
        
    }
    
return ( 
    <div className={classNames}>
        <span onClick={this.onLabelClick}>
            {text}
        </span>
        <div>
            <button onClick={this.deleteLabel} className="btn btn-outline-danger remove-btn">
                <i className="fa fa-trash"></i>
            </button>
            <button onClick={this.onImportantClick} className="btn btn-outline-primary important">
                <i className="fa fa-exclamation"></i>
            </button>
        </div>
    </div>
    );
}


}
