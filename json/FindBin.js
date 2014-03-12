[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "FindBin",
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
          "indexed": "Tue Mar 11 16:41:20 UTC 2014",
          "module": "System.Environment.FindBin",
          "name": "FindBin",
          "package": "FindBin",
          "source": "src/System-Environment-FindBin.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Environment FindBin",
          "indexed": "2014-03-11T16:41:20",
          "module": "System.Environment.FindBin",
          "name": "FindBin",
          "package": "FindBin",
          "partial": "Find Bin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FindBin/docs/System-Environment-FindBin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe (\u003cem\u003econstant\u003c/em\u003e) version of \u003ccode\u003e\u003ca\u003egetProgPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 16:41:20 UTC 2014",
          "module": "System.Environment.FindBin",
          "name": "__Bin__",
          "package": "FindBin",
          "signature": "String",
          "source": "src/System-Environment-FindBin.html#__Bin__",
          "type": "function"
        },
        "index": {
          "description": "Unsafe constant version of getProgPath",
          "hierarchy": "System Environment FindBin",
          "indexed": "2014-03-11T16:41:20",
          "module": "System.Environment.FindBin",
          "name": "__Bin__",
          "package": "FindBin",
          "partial": "Bin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FindBin/docs/System-Environment-FindBin.html#v:__Bin__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the full directory to the running program.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 16:41:20 UTC 2014",
          "module": "System.Environment.FindBin",
          "name": "getProgPath",
          "package": "FindBin",
          "signature": "IO String",
          "source": "src/System-Environment-FindBin.html#getProgPath",
          "type": "function"
        },
        "index": {
          "description": "Get the full directory to the running program",
          "hierarchy": "System Environment FindBin",
          "indexed": "2014-03-11T16:41:20",
          "module": "System.Environment.FindBin",
          "name": "getProgPath",
          "package": "FindBin",
          "partial": "Prog Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FindBin/docs/System-Environment-FindBin.html#v:getProgPath"
      }
    }
  ]
]