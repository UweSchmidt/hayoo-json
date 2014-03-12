[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "DecisionTree",
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
          "indexed": "Tue Mar 11 16:38:36 UTC 2014",
          "module": "Data.DecisionTree",
          "name": "Attribute",
          "package": "DecisionTree",
          "source": "http://hackage.haskell.org/package/DecisionTree/docs/src/Data-DecisionTree.html#Attribute",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DecisionTree",
          "indexed": "2014-03-11T16:38:36",
          "module": "Data.DecisionTree",
          "name": "Attribute",
          "package": "DecisionTree",
          "partial": "Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DecisionTree/docs/Data-DecisionTree.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 16:38:36 UTC 2014",
          "module": "Data.DecisionTree",
          "name": "Datum",
          "package": "DecisionTree",
          "source": "http://hackage.haskell.org/package/DecisionTree/docs/src/Data-DecisionTree.html#Datum",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DecisionTree",
          "indexed": "2014-03-11T16:38:36",
          "module": "Data.DecisionTree",
          "name": "Datum",
          "package": "DecisionTree",
          "partial": "Datum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DecisionTree/docs/Data-DecisionTree.html#t:Datum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 16:38:36 UTC 2014",
          "module": "Data.DecisionTree",
          "name": "DecisionTree",
          "package": "DecisionTree",
          "source": "http://hackage.haskell.org/package/DecisionTree/docs/src/Data-DecisionTree.html#DecisionTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DecisionTree",
          "indexed": "2014-03-11T16:38:36",
          "module": "Data.DecisionTree",
          "name": "DecisionTree",
          "package": "DecisionTree",
          "partial": "Decision Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DecisionTree/docs/Data-DecisionTree.html#t:DecisionTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 16:38:36 UTC 2014",
          "module": "Data.DecisionTree",
          "name": "PreLabeled",
          "package": "DecisionTree",
          "source": "http://hackage.haskell.org/package/DecisionTree/docs/src/Data-DecisionTree.html#PreLabeled",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data DecisionTree",
          "indexed": "2014-03-11T16:38:36",
          "module": "Data.DecisionTree",
          "name": "PreLabeled",
          "package": "DecisionTree",
          "partial": "Pre Labeled",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DecisionTree/docs/Data-DecisionTree.html#t:PreLabeled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Build a DecisionTree from the given Trainingset\n",
          "indexed": "Tue Mar 11 16:38:36 UTC 2014",
          "module": "Data.DecisionTree",
          "name": "build",
          "package": "DecisionTree",
          "signature": "[Attribute a] -\u003e [PreLabeled a b] -\u003e DecisionTree a b",
          "source": "http://hackage.haskell.org/package/DecisionTree/docs/src/Data-DecisionTree.html#build",
          "type": "function"
        },
        "index": {
          "description": "Build DecisionTree from the given Trainingset",
          "hierarchy": "Data DecisionTree",
          "indexed": "2014-03-11T16:38:36",
          "module": "Data.DecisionTree",
          "name": "build",
          "normalized": "[Attribute a]-\u003e[PreLabeled a b]-\u003eDecisionTree a b",
          "package": "DecisionTree",
          "signature": "[Attribute a]-\u003e[PreLabeled a b]-\u003eDecisionTree a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DecisionTree/docs/Data-DecisionTree.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Decide which label belongs to this Datum\n",
          "indexed": "Tue Mar 11 16:38:36 UTC 2014",
          "module": "Data.DecisionTree",
          "name": "decide",
          "package": "DecisionTree",
          "signature": "DecisionTree a b -\u003e Datum a -\u003e b",
          "source": "http://hackage.haskell.org/package/DecisionTree/docs/src/Data-DecisionTree.html#decide",
          "type": "function"
        },
        "index": {
          "description": "Decide which label belongs to this Datum",
          "hierarchy": "Data DecisionTree",
          "indexed": "2014-03-11T16:38:36",
          "module": "Data.DecisionTree",
          "name": "decide",
          "normalized": "DecisionTree a b-\u003eDatum a-\u003eb",
          "package": "DecisionTree",
          "signature": "DecisionTree a b-\u003eDatum a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DecisionTree/docs/Data-DecisionTree.html#v:decide"
      }
    }
  ]
]