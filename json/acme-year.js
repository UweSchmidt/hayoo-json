[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "acme-year",
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
          "indexed": "Tue Mar 11 17:07:41 UTC 2014",
          "module": "Acme.Year",
          "name": "Year",
          "package": "acme-year",
          "source": "src/Acme-Year.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Acme Year",
          "indexed": "2014-03-11T17:07:41",
          "module": "Acme.Year",
          "name": "Year",
          "package": "acme-year",
          "partial": "Year",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-year/docs/Acme-Year.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current year (e.g. \u003ccode\u003e2014\u003c/code\u003e)\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:07:41 UTC 2014",
          "module": "Acme.Year",
          "name": "currentYear",
          "package": "acme-year",
          "signature": "Int",
          "source": "src/Acme-Year.html#currentYear",
          "type": "function"
        },
        "index": {
          "description": "The current year e.g",
          "hierarchy": "Acme Year",
          "indexed": "2014-03-11T17:07:41",
          "module": "Acme.Year",
          "name": "currentYear",
          "package": "acme-year",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-year/docs/Acme-Year.html#v:currentYear"
      }
    }
  ]
]