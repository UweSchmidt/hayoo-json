[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "shoap",
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
          "indexed": "Tue Mar 11 20:01:45 UTC 2014",
          "module": "Network.Soap",
          "name": "Soap",
          "package": "shoap",
          "source": "src/Network-Soap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Soap",
          "indexed": "2014-03-11T20:01:45",
          "module": "Network.Soap",
          "name": "Soap",
          "package": "shoap",
          "partial": "Soap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shoap/docs/Network-Soap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 20:01:45 UTC 2014",
          "module": "Network.Soap",
          "name": "soapPost",
          "package": "shoap",
          "signature": "URLString -\u003e [String] -\u003e IO (CurlCode, String)",
          "source": "src/Network-Soap.html#soapPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Soap",
          "indexed": "2014-03-11T20:01:45",
          "module": "Network.Soap",
          "name": "soapPost",
          "normalized": "URLString-\u003e[String]-\u003eIO(CurlCode,String)",
          "package": "shoap",
          "partial": "Post",
          "signature": "URLString-\u003e[String]-\u003eIO(CurlCode,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shoap/docs/Network-Soap.html#v:soapPost"
      }
    }
  ]
]