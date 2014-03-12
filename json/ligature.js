[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "ligature",
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
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for expanding ligatures in unicode text.\n\u003c/p\u003e\u003cp\u003eCurrently this module expands the following ligatures:&#64256;,&#64257;,&#64258;,&#64259;,&#64260;,&#64261;,&#64262;\n\u003c/p\u003e\u003c/div\u003e",
          "indexed": "Tue Mar 11 19:09:31 UTC 2014",
          "module": "Data.Char.Ligature",
          "name": "Ligature",
          "package": "ligature",
          "source": "src/Data-Char-Ligature.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for expanding ligatures in unicode text Currently this module expands the following ligatures",
          "hierarchy": "Data Char Ligature",
          "indexed": "2014-03-11T19:09:31",
          "module": "Data.Char.Ligature",
          "name": "Ligature",
          "package": "ligature",
          "partial": "Ligature",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ligature/docs/Data-Char-Ligature.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpand all ligatures in the text\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 19:09:31 UTC 2014",
          "module": "Data.Char.Ligature",
          "name": "expand",
          "package": "ligature",
          "signature": "Text -\u003e Text",
          "source": "src/Data-Char-Ligature.html#expand",
          "type": "function"
        },
        "index": {
          "description": "Expand all ligatures in the text",
          "hierarchy": "Data Char Ligature",
          "indexed": "2014-03-11T19:09:31",
          "module": "Data.Char.Ligature",
          "name": "expand",
          "normalized": "Text-\u003eText",
          "package": "ligature",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ligature/docs/Data-Char-Ligature.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a character is a ligature, expand it to several characters\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 19:09:31 UTC 2014",
          "module": "Data.Char.Ligature",
          "name": "expandLigature",
          "package": "ligature",
          "signature": "Char -\u003e Text",
          "source": "src/Data-Char-Ligature.html#expandLigature",
          "type": "function"
        },
        "index": {
          "description": "If character is ligature expand it to several characters",
          "hierarchy": "Data Char Ligature",
          "indexed": "2014-03-11T19:09:31",
          "module": "Data.Char.Ligature",
          "name": "expandLigature",
          "normalized": "Char-\u003eText",
          "package": "ligature",
          "partial": "Ligature",
          "signature": "Char-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ligature/docs/Data-Char-Ligature.html#v:expandLigature"
      }
    }
  ]
]