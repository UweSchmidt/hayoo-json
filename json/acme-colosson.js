[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "acme-colosson",
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
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDetermines whether it is numberwang.\n\u003c/p\u003e\u003c/div\u003e",
          "indexed": "Tue Mar 11 17:07:00 UTC 2014",
          "module": "Acme.Colosson",
          "name": "Colosson",
          "package": "acme-colosson",
          "source": "src/Acme-Colosson.html",
          "type": "module"
        },
        "index": {
          "description": "Determines whether it is numberwang",
          "hierarchy": "Acme Colosson",
          "indexed": "2014-03-11T17:07:00",
          "module": "Acme.Colosson",
          "name": "Colosson",
          "package": "acme-colosson",
          "partial": "Colosson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-colosson/docs/Acme-Colosson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs it numberwang?\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:07:00 UTC 2014",
          "module": "Acme.Colosson",
          "name": "numberwang",
          "package": "acme-colosson",
          "signature": "Integer -\u003e Bool",
          "source": "src/Acme-Colosson.html#numberwang",
          "type": "function"
        },
        "index": {
          "description": "Is it numberwang",
          "hierarchy": "Acme Colosson",
          "indexed": "2014-03-11T17:07:00",
          "module": "Acme.Colosson",
          "name": "numberwang",
          "normalized": "Integer-\u003eBool",
          "package": "acme-colosson",
          "signature": "Integer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-colosson/docs/Acme-Colosson.html#v:numberwang"
      }
    }
  ]
]