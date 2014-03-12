[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "openexchangerates",
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
          "indexed": "Tue Mar 11 19:31:59 UTC 2014",
          "module": "Currency.OpenExchangeRates",
          "name": "OpenExchangeRates",
          "package": "openexchangerates",
          "source": "src/Currency-OpenExchangeRates.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Currency OpenExchangeRates",
          "indexed": "2014-03-11T19:31:59",
          "module": "Currency.OpenExchangeRates",
          "name": "OpenExchangeRates",
          "package": "openexchangerates",
          "partial": "Open Exchange Rates",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/openexchangerates/docs/Currency-OpenExchangeRates.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch exchange rates from OpenExchangeRates.org\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 19:31:59 UTC 2014",
          "module": "Currency.OpenExchangeRates",
          "name": "fetchRates",
          "package": "openexchangerates",
          "signature": "String-\u003e EitherT ConnError IO (Rates Currency Double)",
          "type": "function"
        },
        "index": {
          "description": "Fetch exchange rates from OpenExchangeRates.org",
          "hierarchy": "Currency OpenExchangeRates",
          "indexed": "2014-03-11T19:31:59",
          "module": "Currency.OpenExchangeRates",
          "name": "fetchRates",
          "normalized": "String-\u003eEitherT ConnError IO(Rates Currency Double)",
          "package": "openexchangerates",
          "partial": "Rates",
          "signature": "String-\u003eEitherT ConnError IO(Rates Currency Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/openexchangerates/docs/Currency-OpenExchangeRates.html#v:fetchRates"
      }
    }
  ]
]