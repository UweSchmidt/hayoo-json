[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "cqrs-test",
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
          "indexed": "Tue Mar 11 17:42:26 UTC 2014",
          "module": "Data.CQRS.Test.EventStore.BackendTest",
          "name": "BackendTest",
          "package": "cqrs-test",
          "source": "src/Data-CQRS-Test-EventStore-BackendTest.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CQRS Test EventStore BackendTest",
          "indexed": "2014-03-11T17:42:26",
          "module": "Data.CQRS.Test.EventStore.BackendTest",
          "name": "BackendTest",
          "package": "cqrs-test",
          "partial": "Backend Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-test/docs/Data-CQRS-Test-EventStore-BackendTest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 17:42:26 UTC 2014",
          "module": "Data.CQRS.Test.EventStore.BackendTest",
          "name": "testBackend",
          "package": "cqrs-test",
          "signature": "IO (Pool b) -\u003e IO () -\u003e Spec",
          "source": "src/Data-CQRS-Test-EventStore-BackendTest.html#testBackend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CQRS Test EventStore BackendTest",
          "indexed": "2014-03-11T17:42:26",
          "module": "Data.CQRS.Test.EventStore.BackendTest",
          "name": "testBackend",
          "normalized": "IO(Pool a)-\u003eIO()-\u003eSpec",
          "package": "cqrs-test",
          "partial": "Backend",
          "signature": "IO(Pool b)-\u003eIO()-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cqrs-test/docs/Data-CQRS-Test-EventStore-BackendTest.html#v:testBackend"
      }
    }
  ]
]