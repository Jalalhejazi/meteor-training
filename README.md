meteor-training
===============


	> git checkout 06_ajax_with_HTTP


## remote service via HTTP

med denne branch ønsker vi at brug HTTP.get() i stedet for jQuery.ajax()

http://jalal.meteor.com/#http_call

Send an HTTP GET request. Equivalent to HTTP.call("GET", ...).

## setup ny komponent til din webapp

	> meteor add http


## /Server/fixtures.js 

Med Server-side HTTP.get() hentes data fra servicen ved opstart kun første gang. 

