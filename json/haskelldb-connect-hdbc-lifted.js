[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "haskelldb-connect-hdbc-lifted",
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
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBracketed HaskellDB session with \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "indexed": "Tue Mar 11 18:32:24 UTC 2014",
          "module": "Database.HaskellDB.Connect.HDBC.Lifted",
          "name": "Lifted",
          "package": "haskelldb-connect-hdbc-lifted",
          "source": "src/Database-HaskellDB-Connect-HDBC-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "Bracketed HaskellDB session with MonadBaseControl IO",
          "hierarchy": "Database HaskellDB Connect HDBC Lifted",
          "indexed": "2014-03-11T18:32:24",
          "module": "Database.HaskellDB.Connect.HDBC.Lifted",
          "name": "Lifted",
          "package": "haskelldb-connect-hdbc-lifted",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-connect-hdbc-lifted/docs/Database-HaskellDB-Connect-HDBC-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action on a HDBC IConnection and close the connection.\n   \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e version.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 18:32:24 UTC 2014",
          "module": "Database.HaskellDB.Connect.HDBC.Lifted",
          "name": "hdbcSession",
          "package": "haskelldb-connect-hdbc-lifted",
          "signature": "SqlGenerator-\u003e IO conn-\u003e (conn -\u003e Database -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Run an action on HDBC IConnection and close the connection MonadBaseControl IO version",
          "hierarchy": "Database HaskellDB Connect HDBC Lifted",
          "indexed": "2014-03-11T18:32:24",
          "module": "Database.HaskellDB.Connect.HDBC.Lifted",
          "name": "hdbcSession",
          "normalized": "SqlGenerator-\u003eIO a-\u003e(a-\u003eDatabase-\u003eb c)-\u003eb c",
          "package": "haskelldb-connect-hdbc-lifted",
          "partial": "Session",
          "signature": "SqlGenerator-\u003eIO conn-\u003e(conn-\u003eDatabase-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb-connect-hdbc-lifted/docs/Database-HaskellDB-Connect-HDBC-Lifted.html#v:hdbcSession"
      }
    }
  ]
]