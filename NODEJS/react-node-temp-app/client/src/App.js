// client/src/App.js

import React from "react";

import "./App.css";
import {FaServer} from 'react-icons/fa';
import {LiaTemperatureLowSolid} from 'react-icons/lia';
import {WiHumidity} from 'react-icons/wi';
import {GiDew} from 'react-icons/gi';
import {MdCo2} from 'react-icons/md';


function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const interval = setInterval(() => {
    fetch("/sensors")
      .then((res) => res.json())
      .then((data) => setData(data));

    }, 1000);
    return () => clearInterval(interval);
  }, []);


  if (data === undefined || data === null || data.message === undefined || data.message === null) {
    return (
      <div className="App">
      <h1>Sensors</h1>
    <header className="App-header">
    <table className="table1">
          <tr>
          <th colspan="3"><h1>Server room <FaServer /></h1></th>          
          </tr>

          <tr>
            <th>Data</th>
            <th>Value</th>            
          </tr>
          </table>     
      
      <table className="table1">
      <tr>
      <th colSpan="3"><h1>Server room 2 <FaServer /></h1></th>      
      </tr>

      <tr>
        <th>Data</th>
        <th>Value</th>        
      </tr>    

       </table>
       <br></br>
       
 </header>  
    
     </div>
    )
  }
  else {
 
  return (


    <div className="App">
      <h1>Sensors</h1>
    <header className="App-header">
    
    
    <table className="table1">
          <tr>
          <th colSpan="3"><h1>Server room <FaServer /></h1></th>          
          </tr>

          <tr>
            <th>Data</th>
            <th>Value</th>            
          </tr>

          <tr>
            <td><LiaTemperatureLowSolid/></td>        
            <td>{!data ? "Loading..." : data.message[0]/10} °C</td>
          </tr>

          <tr>
            <td><WiHumidity/></td>
            <td> {!data ? "Loading..." : data.message[1]/10} %RH</td>            
          </tr>

          <tr>
            <td><GiDew/></td>
            <td> {!data ? "Loading..." : data.message[2]/10} °C</td>            
          </tr>

          <tr>
            <td><MdCo2/></td>
            <td> {!data ? "Loading..." : data.message[3]} ppm</td>            
          </tr>      
        
        </table>
         
        <table className="table1">
        <tr>
        <th colSpan="3"><h1>Server room autofom3 <FaServer /></h1></th>
        
        </tr>
        <tr>
          <th>Data</th>
          <th>Value</th>     
        </tr>

        <tr>
          <td><LiaTemperatureLowSolid/></td>
          <td>{!data ? "Loading..." : data.autofom[0]/10} °C</td>  
        </tr>

        <tr>
          <td><WiHumidity/></td>
          <td> {!data ? "Loading..." : data.autofom[1]/10} %RH</td>
        </tr>

        <tr>
          <td><GiDew/></td>
          <td> {!data ? "Loading..." : data.autofom[2]/10} °C</td>      
        </tr>

        <tr>
          <td><MdCo2/></td>
          <td> {!data ? "Loading..." : data.autofom[3]} ppm</td>         
        </tr>      

      </table>
      <br></br>
</header>  
    </div>
  );}
}

export default App;