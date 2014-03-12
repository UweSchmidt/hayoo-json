[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "fclabels-monadlib",
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
          "indexed": "Tue Mar 11 18:07:09 UTC 2014",
          "module": "Data.Label.MonadLib",
          "name": "MonadLib",
          "package": "fclabels-monadlib",
          "source": "src/Data-Label-MonadLib.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Label MonadLib",
          "indexed": "2014-03-11T18:07:09",
          "module": "Data.Label.MonadLib",
          "name": "MonadLib",
          "package": "fclabels-monadlib",
          "partial": "Monad Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fclabels-monadlib/docs/Data-Label-MonadLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 18:07:09 UTC 2014",
          "module": "Data.Label.MonadLib",
          "name": "getM",
          "package": "fclabels-monadlib",
          "signature": "(f :-\u003e a) -\u003e m a",
          "source": "src/Data-Label-MonadLib.html#getM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Label MonadLib",
          "indexed": "2014-03-11T18:07:09",
          "module": "Data.Label.MonadLib",
          "name": "getM",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "fclabels-monadlib",
          "signature": "(f-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels-monadlib/docs/Data-Label-MonadLib.html#v:getM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 18:07:09 UTC 2014",
          "module": "Data.Label.MonadLib",
          "name": "modM",
          "package": "fclabels-monadlib",
          "signature": "(f :-\u003e a) -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Label-MonadLib.html#modM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Label MonadLib",
          "indexed": "2014-03-11T18:07:09",
          "module": "Data.Label.MonadLib",
          "name": "modM",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb)-\u003ec()",
          "package": "fclabels-monadlib",
          "signature": "(f-\u003ea)-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels-monadlib/docs/Data-Label-MonadLib.html#v:modM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 18:07:09 UTC 2014",
          "module": "Data.Label.MonadLib",
          "name": "setM",
          "package": "fclabels-monadlib",
          "signature": "(f :-\u003e a) -\u003e a -\u003e m ()",
          "source": "src/Data-Label-MonadLib.html#setM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Label MonadLib",
          "indexed": "2014-03-11T18:07:09",
          "module": "Data.Label.MonadLib",
          "name": "setM",
          "normalized": "(a-\u003eb)-\u003eb-\u003ec()",
          "package": "fclabels-monadlib",
          "signature": "(f-\u003ea)-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels-monadlib/docs/Data-Label-MonadLib.html#v:setM"
      }
    }
  ]
]