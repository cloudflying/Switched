jQuery Switched Plug-In
==============

Installation
---------

Include jquery.switched.js, switched.css, and the latest jquery build.    

    <link rel="stylesheet" href="css/switched.css"/>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.switched.js"></script>


Call the switched plug-in

    $('div').switched({
    network: 'network json'
    });

Configuration
-------------

**Network Json Layout**

    {
  	"network": "NetworkName",
  	"portCount": 20, 
  	"portAdd": 4,
 	"startOdd": 1,
  	"ports": [
    	{
      		"port": 1,
      		"portFail": 1,
      		"mac": "00-00-00-00-00-00",
      		"computerName": "name"
    	},
    	{
      		repeat port listing ....
    	}
  	]}

**portCount** : Number of ports on switch    
**portAdd** : Number of ports with one row to the right bottom of switch    
**startOdd** : 1 = True | 0 = False (Determine if port number starts on 1 or 2)   
**ports** : Listing of all your switch ports   

**Ports Configuration**  

**port** : port number   
**portFail** : 1 = True | 0 = False (If the port has failed)   
**mac** : MAC address of device     
**computerName** : Computer or Device name    

