[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "gitlib-cross",
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
          "indexed": "Tue Mar 11 18:17:34 UTC 2014",
          "module": "Foo",
          "name": "Foo",
          "package": "gitlib-cross",
          "source": "src/Foo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foo",
          "indexed": "2014-03-11T18:17:34",
          "module": "Foo",
          "name": "Foo",
          "package": "gitlib-cross",
          "partial": "Foo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cross/docs/Foo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 18:17:34 UTC 2014",
          "module": "Foo",
          "name": "foo",
          "package": "gitlib-cross",
          "signature": "a",
          "source": "src/Foo.html#foo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foo",
          "indexed": "2014-03-11T18:17:34",
          "module": "Foo",
          "name": "foo",
          "package": "gitlib-cross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gitlib-cross/docs/Foo.html#v:foo"
      }
    }
  ]
]