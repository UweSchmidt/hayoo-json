[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "ar-timestamp-wiper",
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
          "indexed": "Tue Mar 11 17:11:59 UTC 2014",
          "module": "ArTimestampWiper",
          "name": "ArTimestampWiper",
          "package": "ar-timestamp-wiper",
          "source": "src/ArTimestampWiper.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ArTimestampWiper",
          "indexed": "2014-03-11T17:11:59",
          "module": "ArTimestampWiper",
          "name": "ArTimestampWiper",
          "package": "ar-timestamp-wiper",
          "partial": "Ar Timestamp Wiper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ar-timestamp-wiper/docs/ArTimestampWiper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the time stamps of all files in the .a file.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:11:59 UTC 2014",
          "module": "ArTimestampWiper",
          "name": "arFileWipeTimeStamps",
          "package": "ar-timestamp-wiper",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/ArTimestampWiper.html#arFileWipeTimeStamps",
          "type": "function"
        },
        "index": {
          "description": "Removes the time stamps of all files in the file",
          "hierarchy": "ArTimestampWiper",
          "indexed": "2014-03-11T17:11:59",
          "module": "ArTimestampWiper",
          "name": "arFileWipeTimeStamps",
          "normalized": "FilePath-\u003eIO()",
          "package": "ar-timestamp-wiper",
          "partial": "File Wipe Time Stamps",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ar-timestamp-wiper/docs/ArTimestampWiper.html#v:arFileWipeTimeStamps"
      }
    }
  ]
]