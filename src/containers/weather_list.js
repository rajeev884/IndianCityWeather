import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chart from '../components/Chart';
import GoogleMap from '../components/google_map';
class WeatherList extends Component {

    renderWeather(cityData){
        const cityname =cityData.city.name;
        const temp=cityData.list.map(item=>(item.main.temp-273.15));
        const pressure=cityData.list.map(item=>item.main.pressure);
        const humidity=cityData.list.map(item=>item.main.humidity);
        const {lon,lat}=cityData.city.coord;

        return(
                <TableRow key={cityname}>
                    <TableRowColumn><GoogleMap lon={lon} lat={lat}/></TableRowColumn>
                    <TableRowColumn><Chart data={temp} color="#00bcd4" unit="C"/></TableRowColumn>
                    <TableRowColumn><Chart data={pressure} color="#367548" unit="hPa"/></TableRowColumn>
                    <TableRowColumn><Chart data={humidity} color="#670a33" unit="%"/></TableRowColumn>
                </TableRow> 
        );
    }
    render(){
        return(
        <MuiThemeProvider>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHeaderColumn>City</TableHeaderColumn>
                    <TableHeaderColumn>Temperature</TableHeaderColumn>
                    <TableHeaderColumn>Pressure</TableHeaderColumn>
                    <TableHeaderColumn>Humidity</TableHeaderColumn>
                </TableRow>
                </TableHeader>
                <TableBody>
                    {this.props.ReducerWeather.map(this.renderWeather)}
                </TableBody>
            </Table>
        </MuiThemeProvider>
        );
    }
}
function mapStateToProps(state){
    return {ReducerWeather:state.ReducerWeather}
}
export default connect(mapStateToProps)(WeatherList);