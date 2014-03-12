[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "pastis",
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
          "indexed": "Tue Mar 11 19:35:44 UTC 2014",
          "module": "Network.Pastis",
          "name": "Pastis",
          "package": "pastis",
          "source": "src/Network-Pastis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Pastis",
          "indexed": "2014-03-11T19:35:44",
          "module": "Network.Pastis",
          "name": "Pastis",
          "package": "pastis",
          "partial": "Pastis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pastis/docs/Network-Pastis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse pastisURL to shorten a URL. If an error occurs, the function returns \u003ccode\u003eurl\u003c/code\u003e.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 19:35:44 UTC 2014",
          "module": "Network.Pastis",
          "name": "pastisURL",
          "package": "pastis",
          "signature": "String -\u003e IO String",
          "source": "src/Network-Pastis.html#pastisURL",
          "type": "function"
        },
        "index": {
          "description": "Use pastisURL to shorten URL If an error occurs the function returns url",
          "hierarchy": "Network Pastis",
          "indexed": "2014-03-11T19:35:44",
          "module": "Network.Pastis",
          "name": "pastisURL",
          "normalized": "String-\u003eIO String",
          "package": "pastis",
          "partial": "URL",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pastis/docs/Network-Pastis.html#v:pastisURL"
      }
    }
  ]
]