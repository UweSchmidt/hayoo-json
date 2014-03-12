[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "test-sandbox-quickcheck",
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
          "indexed": "Tue Mar 11 20:19:43 UTC 2014",
          "module": "Test.Sandbox.QuickCheck",
          "name": "QuickCheck",
          "package": "test-sandbox-quickcheck",
          "source": "src/Test-Sandbox-QuickCheck.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Sandbox QuickCheck",
          "indexed": "2014-03-11T20:19:43",
          "module": "Test.Sandbox.QuickCheck",
          "name": "QuickCheck",
          "package": "test-sandbox-quickcheck",
          "partial": "Quick Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-sandbox-quickcheck/docs/Test-Sandbox-QuickCheck.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a property and prints the results to stdout.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:19:43 UTC 2014",
          "module": "Test.Sandbox.QuickCheck",
          "name": "quickCheck",
          "package": "test-sandbox-quickcheck",
          "signature": "PropertyM Sandbox () -\u003e Sandbox ()",
          "source": "src/Test-Sandbox-QuickCheck.html#quickCheck",
          "type": "function"
        },
        "index": {
          "description": "Tests property and prints the results to stdout",
          "hierarchy": "Test Sandbox QuickCheck",
          "indexed": "2014-03-11T20:19:43",
          "module": "Test.Sandbox.QuickCheck",
          "name": "quickCheck",
          "normalized": "PropertyM Sandbox()-\u003eSandbox()",
          "package": "test-sandbox-quickcheck",
          "partial": "Check",
          "signature": "PropertyM Sandbox()-\u003eSandbox()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-sandbox-quickcheck/docs/Test-Sandbox-QuickCheck.html#v:quickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a property, using test arguments, and prints the results to stdout.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:19:43 UTC 2014",
          "module": "Test.Sandbox.QuickCheck",
          "name": "quickCheckWith",
          "package": "test-sandbox-quickcheck",
          "signature": "Args -\u003e PropertyM Sandbox () -\u003e Sandbox ()",
          "source": "src/Test-Sandbox-QuickCheck.html#quickCheckWith",
          "type": "function"
        },
        "index": {
          "description": "Tests property using test arguments and prints the results to stdout",
          "hierarchy": "Test Sandbox QuickCheck",
          "indexed": "2014-03-11T20:19:43",
          "module": "Test.Sandbox.QuickCheck",
          "name": "quickCheckWith",
          "normalized": "Args-\u003ePropertyM Sandbox()-\u003eSandbox()",
          "package": "test-sandbox-quickcheck",
          "partial": "Check With",
          "signature": "Args-\u003ePropertyM Sandbox()-\u003eSandbox()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-sandbox-quickcheck/docs/Test-Sandbox-QuickCheck.html#v:quickCheckWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a property and prints the results and all test cases generated to stdout.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:19:43 UTC 2014",
          "module": "Test.Sandbox.QuickCheck",
          "name": "verboseCheck",
          "package": "test-sandbox-quickcheck",
          "signature": "PropertyM Sandbox () -\u003e Sandbox ()",
          "source": "src/Test-Sandbox-QuickCheck.html#verboseCheck",
          "type": "function"
        },
        "index": {
          "description": "Tests property and prints the results and all test cases generated to stdout",
          "hierarchy": "Test Sandbox QuickCheck",
          "indexed": "2014-03-11T20:19:43",
          "module": "Test.Sandbox.QuickCheck",
          "name": "verboseCheck",
          "normalized": "PropertyM Sandbox()-\u003eSandbox()",
          "package": "test-sandbox-quickcheck",
          "partial": "Check",
          "signature": "PropertyM Sandbox()-\u003eSandbox()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-sandbox-quickcheck/docs/Test-Sandbox-QuickCheck.html#v:verboseCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a property, using test arguments, and prints the results and all test cases generated to stdout.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:19:43 UTC 2014",
          "module": "Test.Sandbox.QuickCheck",
          "name": "verboseCheckWith",
          "package": "test-sandbox-quickcheck",
          "signature": "Args -\u003e PropertyM Sandbox () -\u003e Sandbox ()",
          "source": "src/Test-Sandbox-QuickCheck.html#verboseCheckWith",
          "type": "function"
        },
        "index": {
          "description": "Tests property using test arguments and prints the results and all test cases generated to stdout",
          "hierarchy": "Test Sandbox QuickCheck",
          "indexed": "2014-03-11T20:19:43",
          "module": "Test.Sandbox.QuickCheck",
          "name": "verboseCheckWith",
          "normalized": "Args-\u003ePropertyM Sandbox()-\u003eSandbox()",
          "package": "test-sandbox-quickcheck",
          "partial": "Check With",
          "signature": "Args-\u003ePropertyM Sandbox()-\u003eSandbox()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-sandbox-quickcheck/docs/Test-Sandbox-QuickCheck.html#v:verboseCheckWith"
      }
    }
  ]
]