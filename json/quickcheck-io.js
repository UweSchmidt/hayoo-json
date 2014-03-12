[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "quickcheck-io",
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
          "indexed": "Tue Mar 11 19:47:21 UTC 2014",
          "module": "Test.QuickCheck.IO",
          "name": "IO",
          "package": "quickcheck-io",
          "source": "src/Test-QuickCheck-IO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test QuickCheck IO",
          "indexed": "2014-03-11T19:47:21",
          "module": "Test.QuickCheck.IO",
          "name": "IO",
          "package": "quickcheck-io",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-io/docs/Test-QuickCheck-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 19:47:21 UTC 2014",
          "module": "Test.QuickCheck.IO",
          "name": "propertyIO",
          "package": "quickcheck-io",
          "signature": "Assertion -\u003e Property",
          "source": "src/Test-QuickCheck-IO.html#propertyIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck IO",
          "indexed": "2014-03-11T19:47:21",
          "module": "Test.QuickCheck.IO",
          "name": "propertyIO",
          "normalized": "Assertion-\u003eProperty",
          "package": "quickcheck-io",
          "partial": "IO",
          "signature": "Assertion-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quickcheck-io/docs/Test-QuickCheck-IO.html#v:propertyIO"
      }
    }
  ]
]