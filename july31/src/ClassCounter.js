import React from 'react'


class ClassCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    render(){
        return(
            <div className="class_counter">
                <button className='btn' onClick={() => this.setState({ count: this.state.count+1})}>Increment</button>
                <button className='btn' onClick={() => this.setState({ count: this.state.count-1 })}>Decrement</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}


export default ClassCounter;