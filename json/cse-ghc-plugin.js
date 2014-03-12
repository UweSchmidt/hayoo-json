[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "cse-ghc-plugin",
        "type": "phrase"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 17:44:21 UTC 2014",
          "module": "CSE.Plugin",
          "name": "Plugin",
          "package": "cse-ghc-plugin",
          "source": "src/CSE-Plugin.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CSE Plugin",
          "indexed": "2014-03-11T17:44:21",
          "module": "CSE.Plugin",
          "name": "Plugin",
          "package": "cse-ghc-plugin",
          "partial": "Plugin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cse-ghc-plugin/docs/CSE-Plugin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 17:44:21 UTC 2014",
          "module": "CSE.Plugin",
          "name": "plugin",
          "package": "cse-ghc-plugin",
          "signature": "Plugin",
          "source": "src/CSE-Plugin.html#plugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSE Plugin",
          "indexed": "2014-03-11T17:44:21",
          "module": "CSE.Plugin",
          "name": "plugin",
          "package": "cse-ghc-plugin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cse-ghc-plugin/docs/CSE-Plugin.html#v:plugin"
      }
    }
  ]
]