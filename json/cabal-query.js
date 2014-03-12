[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "cabal-query",
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
          "indexed": "Tue Mar 11 17:28:19 UTC 2014",
          "module": "Distribution.Query",
          "name": "Query",
          "package": "cabal-query",
          "source": "http://hackage.haskell.org/package/cabal-query/docs/src/Distribution-Query-Types.html#Query",
          "type": "data"
        },
        "index": {
          "hierarchy": "Distribution Query",
          "indexed": "2014-03-11T17:28:19",
          "module": "Distribution.Query",
          "name": "Query",
          "package": "cabal-query",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-query/docs/Distribution-Query.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "All files must be read as lazy ByteStrings\nReturns a list of package descriptions which satisfy the query\n",
          "indexed": "Tue Mar 11 17:28:19 UTC 2014",
          "module": "Distribution.Query",
          "name": "queryFiles",
          "package": "cabal-query",
          "signature": "Query-\u003e [ByteString]-\u003e [PackageDescription]",
          "source": "http://hackage.haskell.org/package/cabal-query/docs/src/Distribution-Query.html#queryFiles",
          "type": "function"
        },
        "index": {
          "description": "All files must be read as lazy ByteStrings Returns list of package descriptions which satisfy the query",
          "hierarchy": "Distribution Query",
          "indexed": "2014-03-11T17:28:19",
          "module": "Distribution.Query",
          "name": "queryFiles",
          "normalized": "Query-\u003e[ByteString]-\u003e[PackageDescription]",
          "package": "cabal-query",
          "partial": "Files",
          "signature": "Query-\u003e[ByteString]-\u003e[PackageDescription]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-query/docs/Distribution-Query.html#v:queryFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The index file must be read as lazy ByteString\nReturns a list of package descriptions which satisfy the query\n",
          "indexed": "Tue Mar 11 17:28:19 UTC 2014",
          "module": "Distribution.Query",
          "name": "queryIndex",
          "package": "cabal-query",
          "signature": "Query-\u003e ByteString-\u003e [PackageDescription]",
          "source": "http://hackage.haskell.org/package/cabal-query/docs/src/Distribution-Query.html#queryIndex",
          "type": "function"
        },
        "index": {
          "description": "The index file must be read as lazy ByteString Returns list of package descriptions which satisfy the query",
          "hierarchy": "Distribution Query",
          "indexed": "2014-03-11T17:28:19",
          "module": "Distribution.Query",
          "name": "queryIndex",
          "normalized": "Query-\u003eByteString-\u003e[PackageDescription]",
          "package": "cabal-query",
          "partial": "Index",
          "signature": "Query-\u003eByteString-\u003e[PackageDescription]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-query/docs/Distribution-Query.html#v:queryIndex"
      }
    }
  ]
]