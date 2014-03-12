[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "archiver",
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
          "indexed": "Tue Mar 11 17:12:10 UTC 2014",
          "module": "Network.URL.Archiver",
          "name": "Archiver",
          "package": "archiver",
          "source": "src/Network-URL-Archiver.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network URL Archiver",
          "indexed": "2014-03-11T17:12:10",
          "module": "Network.URL.Archiver",
          "name": "Archiver",
          "package": "archiver",
          "partial": "Archiver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/archiver/docs/Network-URL-Archiver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError check the URL and then archive it using \u003ccode\u003ewebciteArchive\u003c/code\u003e, \u003ccode\u003ewikiwixArchive\u003c/code\u003e, \u003ccode\u003einternetArchiveLive\u003c/code\u003e, and \u003ccode\u003ealexaToolbar\u003c/code\u003e\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:12:10 UTC 2014",
          "module": "Network.URL.Archiver",
          "name": "checkArchive",
          "package": "archiver",
          "signature": "String-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Error check the URL and then archive it using webciteArchive wikiwixArchive internetArchiveLive and alexaToolbar",
          "hierarchy": "Network URL Archiver",
          "indexed": "2014-03-11T17:12:10",
          "module": "Network.URL.Archiver",
          "name": "checkArchive",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "archiver",
          "partial": "Archive",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archiver/docs/Network-URL-Archiver.html#v:checkArchive"
      }
    }
  ]
]