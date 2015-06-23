Pager 2
=======
Pager 2 is a simple SPA library. It allows pagination without a server round-trip.

Example
=======
There is an example in the folder aptly named `example`. It is hosted [here](https://ethan2-0.github.io/pager2_example/example.html).

Documentation
=============
Pager revolves around a single function, `Pager`. It has some properties, and can be called.

`Pager(pageName, [option])`: Load the page named `pageName` using the option `option`. Currently, the only option is `hashTrumpsName`,
which means that, if the url ends in `#something`, it will attempt to load the page `"something"`; otherwise, it'll load the page `pageName`.  
`Pager.cfg`: The object containing all of Pager's configuration.  
`Pager.cfg.ignorePopState`: Ignore `popstate` events. When you click your back button and Pager handles it, instead of making a server round-trip,
it's because it's got a `popstate` handler. For more info, just look at the MDN docs. It's when a pushState state gets popped off of the stack. Setting
this to false will disable Pager functionality associated with pushState.  
`Pager.initialized`: The complement of the dirty bit on Pager's page cache. In other words, if `Pager.initialized` is `false` when `Pager` gets called,
Pager will regenerate the page cache, and then flip `Pager.initialized`.  
`Pager.regenerateCache()`: Set `Pager.initialized` to false.

Functionality with `pushState` works exactly as you'd exepct:
* When you navigate to a new page, it pushes a state.
* When you pop a state, it goes back to the page that is represented by the state that's bubbled up to the top.
* On your first call to Pager, you can pass `hashTrumpsName` as your option, so that, if you already have `#something` at the end of the URL, Pager will
load that instead of the page you provide. This is useful for, for example, reloads, and making your pages bookmarkable.

Tests
=====
Clone the repo, load `tests/index.html`.