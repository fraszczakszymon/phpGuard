# phpGuard

A simple tool that executes tests for php files, which has changed. Searching files is based on @covers tag.

## Instalation

```
npm install [-g] phpguard
```

## Dependencies
```
watchr
commander
```

## Configuration

phpguard.config.json
``` json
{
  "baseNamespacePath": "src",
  "testTypes": {
    "fast": "phpunit --colors"
  },
  "defaultType": "fast",
  "delayBetweenTests": 500
}
```

Legend:

* __baseNamespace__ - Path where php files are stored, it should be defined to root of defined namespaces.
* __testTypes__ - Array with command that will be executed after running phpguard with --test (-t) flag, feel free to add your own commands (at the end of command are added paths to tests, that should be run).
* __defaultType__ - Default test type, that should be executed, when you are running phpguard without --test (-t) flag.
* __delayBetweenTests__ - Deley between running tests if files are changing frequently. Bugfix for issue when you are working on remote server (sometimes files saves twice, etc.), feel free to set it to 0 value.

## License 

(The MIT License)

Copyright (c) 2013 Szymon Frąszczak &lt;fraszczak.szymon@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
