import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Greenland, gl',
  'Bogota,col',
  'Washington dc,us',
  'Ciudad de Mexico,mx',
  'Madrid,es',
  'Santiago,cl'
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  render(){
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}
          onSelectedLocation={this.handleSelectedLocation}>
          </LocationList>
        </div>
      </MuiThemeProvider>  
    );
  }
}  

export default App;
