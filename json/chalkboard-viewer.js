[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "chalkboard-viewer",
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
          "indexed": "Tue Mar 11 17:31:29 UTC 2014",
          "module": "Graphics.Chalkboard.Viewer",
          "name": "BoardViewerInit",
          "package": "chalkboard-viewer",
          "source": "http://hackage.haskell.org/package/chalkboard-viewer/docs/src/Graphics-Chalkboard-Viewer.html#BoardViewerInit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Chalkboard Viewer",
          "indexed": "2014-03-11T17:31:29",
          "module": "Graphics.Chalkboard.Viewer",
          "name": "BoardViewerInit",
          "package": "chalkboard-viewer",
          "partial": "Board Viewer Init",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chalkboard-viewer/docs/Graphics-Chalkboard-Viewer.html#t:BoardViewerInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003ctt\u003e\u003ca\u003einitBoardViewer\u003c/a\u003e\u003c/tt\u003e never returns, and must be run from the main thread.\n Two arguments should be provided; the inital window setup, and the MVar that\n will contain the Board to be displayed.\n",
          "indexed": "Tue Mar 11 17:31:29 UTC 2014",
          "module": "Graphics.Chalkboard.Viewer",
          "name": "initBoardViewer",
          "package": "chalkboard-viewer",
          "signature": "[BoardViewerInit] -\u003e MVar (Board RGB) -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/chalkboard-viewer/docs/src/Graphics-Chalkboard-Viewer.html#initBoardViewer",
          "type": "function"
        },
        "index": {
          "description": "initBoardViewer never returns and must be run from the main thread Two arguments should be provided the inital window setup and the MVar that will contain the Board to be displayed",
          "hierarchy": "Graphics Chalkboard Viewer",
          "indexed": "2014-03-11T17:31:29",
          "module": "Graphics.Chalkboard.Viewer",
          "name": "initBoardViewer",
          "normalized": "[BoardViewerInit]-\u003eMVar(Board RGB)-\u003eIO()",
          "package": "chalkboard-viewer",
          "partial": "Board Viewer",
          "signature": "[BoardViewerInit]-\u003eMVar(Board RGB)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chalkboard-viewer/docs/Graphics-Chalkboard-Viewer.html#v:initBoardViewer"
      }
    }
  ]
]