[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "popenhs",
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
          "indexed": "Tue Mar 11 19:41:43 UTC 2014",
          "module": "System.Posix.POpen",
          "name": "POpen",
          "package": "popenhs",
          "source": "src/System-Posix-POpen.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Posix POpen",
          "indexed": "2014-03-11T19:41:43",
          "module": "System.Posix.POpen",
          "name": "POpen",
          "package": "popenhs",
          "partial": "POpen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/popenhs/docs/System-Posix-POpen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 19:41:43 UTC 2014",
          "module": "System.Posix.POpen",
          "name": "popen",
          "package": "popenhs",
          "signature": "FilePath -\u003e [String] -\u003e Maybe String -\u003e IO (String, String, ProcessID)",
          "source": "src/System-Posix-POpen.html#popen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix POpen",
          "indexed": "2014-03-11T19:41:43",
          "module": "System.Posix.POpen",
          "name": "popen",
          "normalized": "FilePath-\u003e[String]-\u003eMaybe String-\u003eIO(String,String,ProcessID)",
          "package": "popenhs",
          "signature": "FilePath-\u003e[String]-\u003eMaybe String-\u003eIO(String,String,ProcessID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/popenhs/docs/System-Posix-POpen.html#v:popen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 19:41:43 UTC 2014",
          "module": "System.Posix.POpen",
          "name": "popenEnvDir",
          "package": "popenhs",
          "signature": "FilePath -\u003e [String] -\u003e Maybe String -\u003e Maybe [(String, String)] -\u003e Maybe FilePath -\u003e IO (String, String, ProcessID)",
          "source": "src/System-Posix-POpen.html#popenEnvDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix POpen",
          "indexed": "2014-03-11T19:41:43",
          "module": "System.Posix.POpen",
          "name": "popenEnvDir",
          "normalized": "FilePath-\u003e[String]-\u003eMaybe String-\u003eMaybe[(String,String)]-\u003eMaybe FilePath-\u003eIO(String,String,ProcessID)",
          "package": "popenhs",
          "partial": "Env Dir",
          "signature": "FilePath-\u003e[String]-\u003eMaybe String-\u003eMaybe[(String,String)]-\u003eMaybe FilePath-\u003eIO(String,String,ProcessID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/popenhs/docs/System-Posix-POpen.html#v:popenEnvDir"
      }
    }
  ]
]