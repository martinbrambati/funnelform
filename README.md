Funnel Form
=========

A JavaScript helper to track form events via Google Analytic Events.

This little js file will help you to track wich fields are not completted or passed out by users in your web forms. It tracks 2 Google Analytic Events, one that indicates that the field has been completted and the other if it was ignored:

  - skipped | email |    3 times    
  - completed |    comment	| 2	times
   
Version
----

1.0

Tech
-----------

FunnelForm uses a number of open source projects to work properly:

* [javascript] - The king
* [QUnit] - The test framework
* [jQuery] - duh 
* [Grunt] - Run forest! 

Installation
--------------

Contributors (please, please)
```sh
git clone [https://github.com/martinbrambati/funnelform] funnelform
cd funnelform
npm install
grunt
```

End user
```sh

download minified version /build/trackform.min.js
download src version /src/trackform.js

```


License
----

MIT


**Free Software, Hell Yeah!**

[javascript]:http://en.wikipedia.org/wiki/JavaScript
[qunit]:https://qunitjs.com/
[jQuery]:http://jquery.com
[Grunt]:http://gruntjs.com/getting-started#working-with-an-existing-grunt-project