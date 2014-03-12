[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "value-supply",
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
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe technique for generating new values is based on the paper\n ''On Generating Unique Names''\n by Lennart Augustsson, Mikael Rittri, and Dan Synek.\n\u003c/p\u003e\u003c/div\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "Supply",
          "package": "value-supply",
          "source": "src/Data-Supply.html",
          "type": "module"
        },
        "index": {
          "description": "The technique for generating new values is based on the paper On Generating Unique Names by Lennart Augustsson Mikael Rittri and Dan Synek",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "Supply",
          "package": "value-supply",
          "partial": "Supply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be used to generate values on demand.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "Supply",
          "package": "value-supply",
          "source": "src/Data-Supply.html#Supply",
          "type": "data"
        },
        "index": {
          "description": "type that can be used to generate values on demand",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "Supply",
          "package": "value-supply",
          "partial": "Supply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#t:Supply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new supply by systematically applying a function\n to an existing supply.  This function, together with \u003ccode\u003e\u003ca\u003esupplyValue\u003c/a\u003e\u003c/code\u003e\n form a comonad on \u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "modifySupply",
          "package": "value-supply",
          "signature": "Supply a -\u003e (Supply a -\u003e b) -\u003e Supply b",
          "source": "src/Data-Supply.html#modifySupply",
          "type": "function"
        },
        "index": {
          "description": "Generate new supply by systematically applying function to an existing supply This function together with supplyValue form comonad on Supply",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "modifySupply",
          "normalized": "Supply a-\u003e(Supply a-\u003eb)-\u003eSupply b",
          "package": "value-supply",
          "partial": "Supply",
          "signature": "Supply a-\u003e(Supply a-\u003eb)-\u003eSupply b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:modifySupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA supply of values that are in the \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class.\n The initial value is \u003ccode\u003etoEnum 0\u003c/code\u003e, new values are generates with \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e.\n WARNING: See comment on \u003ccode\u003e\u003ca\u003enewDupableSupply\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "newDupableEnumSupply",
          "package": "value-supply",
          "signature": "IO (Supply a)",
          "source": "src/Data-Supply.html#newDupableEnumSupply",
          "type": "function"
        },
        "index": {
          "description": "supply of values that are in the Enum class The initial value is toEnum new values are generates with succ WARNING See comment on newDupableSupply",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "newDupableEnumSupply",
          "package": "value-supply",
          "partial": "Dupable Enum Supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:newDupableEnumSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA supply of values that are in the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e class.\n The initial value is 0, new values are generated by adding 1.\n WARNING: See comment on \u003ccode\u003e\u003ca\u003enewDupableSupply\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "newDupableNumSupply",
          "package": "value-supply",
          "signature": "IO (Supply a)",
          "source": "src/Data-Supply.html#newDupableNumSupply",
          "type": "function"
        },
        "index": {
          "description": "supply of values that are in the Num class The initial value is new values are generated by adding WARNING See comment on newDupableSupply",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "newDupableNumSupply",
          "package": "value-supply",
          "partial": "Dupable Num Supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:newDupableNumSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new supply of values.\n WARNING: This version is faster then \u003ccode\u003e\u003ca\u003enewSupply\u003c/a\u003e\u003c/code\u003e but it is not completely\n thread safe, so use only if performance is an issue!\n\u003c/p\u003e\u003cp\u003eRules for using the generated supplies:\n   * Supply splitting should be evaluated in a single thread.\n     For example, use \u003ca\u003ecase\u003c/a\u003e with \u003ccode\u003e\u003ca\u003esplit2\u003c/a\u003e\u003c/code\u003e to force the splitting\n     of a supply.\n   * Different threads should work with different supplies.\n     For example, one could (strictly) split a supply, and then\n     fork new threads with the resulting supplies.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "newDupableSupply",
          "package": "value-supply",
          "signature": "a -\u003e (a -\u003e a) -\u003e IO (Supply a)",
          "source": "src/Data-Supply.html#newDupableSupply",
          "type": "function"
        },
        "index": {
          "description": "Create new supply of values WARNING This version is faster then newSupply but it is not completely thread safe so use only if performance is an issue Rules for using the generated supplies Supply splitting should be evaluated in single thread For example use case with split2 to force the splitting of supply Different threads should work with different supplies For example one could strictly split supply and then fork new threads with the resulting supplies",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "newDupableSupply",
          "normalized": "a-\u003e(a-\u003ea)-\u003eIO(Supply a)",
          "package": "value-supply",
          "partial": "Dupable Supply",
          "signature": "a-\u003e(a-\u003ea)-\u003eIO(Supply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:newDupableSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA supply of values that are in the \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class.\n The initial value is \u003ccode\u003etoEnum 0\u003c/code\u003e, new values are generates with \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "newEnumSupply",
          "package": "value-supply",
          "signature": "IO (Supply a)",
          "source": "src/Data-Supply.html#newEnumSupply",
          "type": "function"
        },
        "index": {
          "description": "supply of values that are in the Enum class The initial value is toEnum new values are generates with succ",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "newEnumSupply",
          "package": "value-supply",
          "partial": "Enum Supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:newEnumSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA supply of values that are in the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e class.\n The initial value is 0, new values are generated by adding 1.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "newNumSupply",
          "package": "value-supply",
          "signature": "IO (Supply a)",
          "source": "src/Data-Supply.html#newNumSupply",
          "type": "function"
        },
        "index": {
          "description": "supply of values that are in the Num class The initial value is new values are generated by adding",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "newNumSupply",
          "package": "value-supply",
          "partial": "Num Supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:newNumSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new supply of values.\n The arguments specify how to generate values:\n the first argument is an initial value, the\n second specifies how to generate a new value from an existing one.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "newSupply",
          "package": "value-supply",
          "signature": "a -\u003e (a -\u003e a) -\u003e IO (Supply a)",
          "source": "src/Data-Supply.html#newSupply",
          "type": "function"
        },
        "index": {
          "description": "Creates new supply of values The arguments specify how to generate values the first argument is an initial value the second specifies how to generate new value from an existing one",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "newSupply",
          "normalized": "a-\u003e(a-\u003ea)-\u003eIO(Supply a)",
          "package": "value-supply",
          "partial": "Supply",
          "signature": "a-\u003e(a-\u003ea)-\u003eIO(Supply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:newSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an infinite list of supplies.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "split",
          "package": "value-supply",
          "signature": "Supply a -\u003e [Supply a]",
          "source": "src/Data-Supply.html#split",
          "type": "function"
        },
        "index": {
          "description": "Generate an infinite list of supplies",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "split",
          "normalized": "Supply a-\u003e[Supply a]",
          "package": "value-supply",
          "signature": "Supply a-\u003e[Supply a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a supply into two different supplies.\n The resulting supplies are different from the input supply.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "split2",
          "package": "value-supply",
          "signature": "Supply a -\u003e (Supply a, Supply a)",
          "source": "src/Data-Supply.html#split2",
          "type": "function"
        },
        "index": {
          "description": "Split supply into two different supplies The resulting supplies are different from the input supply",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "split2",
          "normalized": "Supply a-\u003e(Supply a,Supply a)",
          "package": "value-supply",
          "signature": "Supply a-\u003e(Supply a,Supply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:split2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a supply into three different supplies.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "split3",
          "package": "value-supply",
          "signature": "Supply a -\u003e (Supply a, Supply a, Supply a)",
          "source": "src/Data-Supply.html#split3",
          "type": "function"
        },
        "index": {
          "description": "Split supply into three different supplies",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "split3",
          "normalized": "Supply a-\u003e(Supply a,Supply a,Supply a)",
          "package": "value-supply",
          "signature": "Supply a-\u003e(Supply a,Supply a,Supply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:split3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a supply into four different supplies.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "split4",
          "package": "value-supply",
          "signature": "Supply a -\u003e (Supply a, Supply a, Supply a, Supply a)",
          "source": "src/Data-Supply.html#split4",
          "type": "function"
        },
        "index": {
          "description": "Split supply into four different supplies",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "split4",
          "normalized": "Supply a-\u003e(Supply a,Supply a,Supply a,Supply a)",
          "package": "value-supply",
          "signature": "Supply a-\u003e(Supply a,Supply a,Supply a,Supply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:split4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of a supply.  This function, together with\n \u003ccode\u003e\u003ca\u003emodifySupply\u003c/a\u003e\u003c/code\u003e forms a comonad on \u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:33:19 UTC 2014",
          "module": "Data.Supply",
          "name": "supplyValue",
          "package": "value-supply",
          "signature": "Supply a -\u003e a",
          "source": "src/Data-Supply.html#supplyValue",
          "type": "function"
        },
        "index": {
          "description": "Get the value of supply This function together with modifySupply forms comonad on Supply",
          "hierarchy": "Data Supply",
          "indexed": "2014-03-11T20:33:19",
          "module": "Data.Supply",
          "name": "supplyValue",
          "normalized": "Supply a-\u003ea",
          "package": "value-supply",
          "partial": "Value",
          "signature": "Supply a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:supplyValue"
      }
    }
  ]
]