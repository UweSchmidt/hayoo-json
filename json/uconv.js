[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "uconv",
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
          "indexed": "Tue Mar 11 20:28:31 UTC 2014",
          "module": "Codec.Text.UConv",
          "name": "EncodingName",
          "package": "uconv",
          "source": "http://hackage.haskell.org/package/uconv/docs/src/Codec-Text-UConv.html#EncodingName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Text UConv",
          "indexed": "2014-03-11T20:28:31",
          "module": "Codec.Text.UConv",
          "name": "EncodingName",
          "package": "uconv",
          "partial": "Encoding Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uconv/docs/Codec-Text-UConv.html#t:EncodingName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The encoding to convert from\nThe encoding to convert to\nThe input to convert\nThe output converted\n",
          "indexed": "Tue Mar 11 20:28:31 UTC 2014",
          "module": "Codec.Text.UConv",
          "name": "convert",
          "package": "uconv",
          "signature": "EncodingName-\u003e EncodingName-\u003e a-\u003e m b",
          "source": "http://hackage.haskell.org/package/uconv/docs/src/Codec-Text-UConv.html#convert",
          "type": "function"
        },
        "index": {
          "description": "The encoding to convert from The encoding to convert to The input to convert The output converted",
          "hierarchy": "Codec Text UConv",
          "indexed": "2014-03-11T20:28:31",
          "module": "Codec.Text.UConv",
          "name": "convert",
          "normalized": "EncodingName-\u003eEncodingName-\u003ea-\u003eb c",
          "package": "uconv",
          "signature": "EncodingName-\u003eEncodingName-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uconv/docs/Codec-Text-UConv.html#v:convert"
      }
    }
  ]
]