[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "TinyURL",
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
          "indexed": "Tue Mar 11 17:02:32 UTC 2014",
          "module": "Network.TinyURL",
          "name": "TinyURL",
          "package": "TinyURL",
          "source": "src/Network-TinyURL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TinyURL",
          "indexed": "2014-03-11T17:02:32",
          "module": "Network.TinyURL",
          "name": "TinyURL",
          "package": "TinyURL",
          "partial": "Tiny URL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TinyURL/docs/Network-TinyURL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse TinyURL to compress a URL.  In the event of a failure, return\n the original URL.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:02:32 UTC 2014",
          "module": "Network.TinyURL",
          "name": "tinyURL",
          "package": "TinyURL",
          "signature": "String -\u003e IO String",
          "source": "src/Network-TinyURL.html#tinyURL",
          "type": "function"
        },
        "index": {
          "description": "Use TinyURL to compress URL In the event of failure return the original URL",
          "hierarchy": "Network TinyURL",
          "indexed": "2014-03-11T17:02:32",
          "module": "Network.TinyURL",
          "name": "tinyURL",
          "normalized": "String-\u003eIO String",
          "package": "TinyURL",
          "partial": "URL",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TinyURL/docs/Network-TinyURL.html#v:tinyURL"
      }
    }
  ]
]