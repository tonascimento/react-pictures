import React from 'react';

class SearchBar extends React.Component {

    onInputChange(event){
        console.log(event.target.value);
    }


    onInputFucus(){
        console.log('input was Focus!!');
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="ui field">
                        <label>Image Search</label>
                        <input type='text' 
                               onFocus={this.onInputFucus} 
                               onClick={(event) => console.log('Cliked!! ' + event.target.value)} 
                               onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;