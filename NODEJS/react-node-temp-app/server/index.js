// server/index.js

const express = require("express");
var reload = require('auto-reload');

const net = require('net');
const Modbus = require('jsmodbus');

//const socket = new net.Socket();
//const client = new Modbus.client.TCP(socket);

var resp;
var resp2;
function myData(address) {
  const socket = new net.Socket();
  const client = new Modbus.client.TCP(socket);
  socket.connect(502,address, function (){

   client.readHoldingRegisters(0x0030, 5).then(function(d){

 
      
      if(address=="192.168.2.250")
      {
        resp =d.response._body._valuesAsArray;
       
      }
      if(address=="192.168.2.251")
      {
        resp2 =d.response._body._valuesAsArray;
            
      }
      socket.end();

      
  }).catch(function(e){
      console.log(e);
  });

  });
  if(address=="192.168.2.250")
      {
  console.log(resp + " on address " + address)
      }
  if(address=="192.168.2.251")
      {
 
  console.log(resp2 + " on address " + address)

      } 
 
};
 

resp = null;

const PORT = process.env.PORT || 3001;

const app = express();


// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Test mess from server!" });
  });

app.get("/sensors", (req, res) => {
    res.json({ message: myData('192.168.2.250'),
    autofom: myData('192.168.2.251'),  

     });
    
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

 