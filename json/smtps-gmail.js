[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "smtps-gmail",
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
          "indexed": "Tue Mar 11 20:04:46 UTC 2014",
          "module": "Network.SMTPS.Gmail",
          "name": "Gmail",
          "package": "smtps-gmail",
          "source": "src/Network-SMTPS-Gmail.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network SMTPS Gmail",
          "indexed": "2014-03-11T20:04:46",
          "module": "Network.SMTPS.Gmail",
          "name": "Gmail",
          "package": "smtps-gmail",
          "partial": "Gmail",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/smtps-gmail/docs/Network-SMTPS-Gmail.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend an email from your Gmail account using the simple \n   message transfer protocol with transport layer security.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:04:46 UTC 2014",
          "module": "Network.SMTPS.Gmail",
          "name": "sendGmail",
          "package": "smtps-gmail",
          "signature": "Handle-\u003e String-\u003e String-\u003e [String]-\u003e [String]-\u003e [String]-\u003e String-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Send an email from your Gmail account using the simple message transfer protocol with transport layer security",
          "hierarchy": "Network SMTPS Gmail",
          "indexed": "2014-03-11T20:04:46",
          "module": "Network.SMTPS.Gmail",
          "name": "sendGmail",
          "normalized": "Handle-\u003eString-\u003eString-\u003e[String]-\u003e[String]-\u003e[String]-\u003eString-\u003eString-\u003eIO()",
          "package": "smtps-gmail",
          "partial": "Gmail",
          "signature": "Handle-\u003eString-\u003eString-\u003e[String]-\u003e[String]-\u003e[String]-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smtps-gmail/docs/Network-SMTPS-Gmail.html#v:sendGmail"
      }
    }
  ]
]