[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "vty-ui-extras",
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
          "indexed": "Tue Mar 11 20:35:42 UTC 2014",
          "module": "Graphics.Vty.Widgets.Extras.Text",
          "name": "Text",
          "package": "vty-ui-extras",
          "source": "src/Graphics-Vty-Widgets-Extras-Text.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Vty Widgets Extras Text",
          "indexed": "2014-03-11T20:35:42",
          "module": "Graphics.Vty.Widgets.Extras.Text",
          "name": "Text",
          "package": "vty-ui-extras",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vty-ui-extras/docs/Graphics-Vty-Widgets-Extras-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA highlight formatter takes a regular expression used to scan the\n text and an attribute to assign to matches.  The regular expression\n is only applied to individual string tokens (individual words,\n whitespace strings, etc.); it is NOT applied to whole lines,\n paragraphs, or text spanning multiple lines.  If you have need of\n that kind of functionality, apply your own attributes with your own\n regular expression prior to calling \u003ccode\u003esetTextWithAttrs\u003c/code\u003e.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 20:35:42 UTC 2014",
          "module": "Graphics.Vty.Widgets.Extras.Text",
          "name": "highlight",
          "package": "vty-ui-extras",
          "signature": "r -\u003e Attr -\u003e Formatter",
          "source": "src/Graphics-Vty-Widgets-Extras-Text.html#highlight",
          "type": "function"
        },
        "index": {
          "description": "highlight formatter takes regular expression used to scan the text and an attribute to assign to matches The regular expression is only applied to individual string tokens individual words whitespace strings etc it is NOT applied to whole lines paragraphs or text spanning multiple lines If you have need of that kind of functionality apply your own attributes with your own regular expression prior to calling setTextWithAttrs",
          "hierarchy": "Graphics Vty Widgets Extras Text",
          "indexed": "2014-03-11T20:35:42",
          "module": "Graphics.Vty.Widgets.Extras.Text",
          "name": "highlight",
          "normalized": "a-\u003eAttr-\u003eFormatter",
          "package": "vty-ui-extras",
          "signature": "r-\u003eAttr-\u003eFormatter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty-ui-extras/docs/Graphics-Vty-Widgets-Extras-Text.html#v:highlight"
      }
    }
  ]
]