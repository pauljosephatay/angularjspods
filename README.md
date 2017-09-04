# angularjspods

-	This is an angularJS project in ES6. Like in react, from a given UI design, the core process starts with breaking down the project into components applying single responsibility concept as much as possible. 
-	This app monitors processes displayed on windows. Each specification of the process window such as cpu usage, status, etc. can easily be change in format or reused. Elegant animation is applied on adding/removing a process. The project layout had to be in position absolute so that animating movement is possible.
-	Careful consideration is also considered so that resource reference will not break after bundling with webpack. Inject Markers were also added to ensure proper injection of dependencies.
-	Real time data update is simulated using angular interval. 
-	To help ensure clean coding and best standards, eslint loader is used in development.

This application was generated with [Yeoman](http://yeoman.io).

Published at https://pauljosephatay.github.io/angularjspods/
