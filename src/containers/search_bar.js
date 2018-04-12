import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Actionsearch from 'material-ui/svg-icons/action/search';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={term:''};
    }
    onInputChange(event){
        this.setState({term:event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }
    render(){
        return(
            <MuiThemeProvider>
            <form onSubmit={(event)=>this.onFormSubmit(event)} >
                <TextField
                value={this.state.term}
                onChange={(event)=>this.onInputChange(event)}
                floatingLabelText="City Name"
                inputStyle={{marginTop:"10px"}} />

                <RaisedButton 
                type="submit"
                icon={<Actionsearch color="#fff" />}
                primary={true}  />
            </form>
            </MuiThemeProvider>
        );
    }
}
function mapStateToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null,mapStateToProps)(SearchBar);