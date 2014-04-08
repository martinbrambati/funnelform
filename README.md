Funnel Form
=========

A JavaScript helper to track form events via Google Analytic Events.

This little js file will help you to track wich fields are not completted or passed out by users in your web forms. It tracks 2 Google Analytic Events, one that indicates that the field has been completted and the other if it was ignored:

  - skipped | email |	3 times	
  - completed |    comment	| 2	times
   
Version
----

1.0

Tech
-----------

Dillinger uses a number of open source projects to work properly:

* [javascript] - The king
* [QUnit] - The test framework
* [jQuery] - duh 

Installation
--------------

```sh
git clone [git-repo-url] dillinger
cd dillinger
npm i -d
mkdir -p public/files/{md,html,pdf}
```

##### Configure Plugins. Instructions in following README.md files

* plugins/dropbox/README.md
* plugins/github/README.md
* plugins/googledrive/README.md

```sh
node app
```


License
----

MIT


**Free Software, Hell Yeah!**

[javascript]:http://en.wikipedia.org/wiki/JavaScript
[qunit]:https://qunitjs.com/
[jQuery]:http://jquery.com