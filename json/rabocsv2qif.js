[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "rabocsv2qif",
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
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module Rabobank has utilities to take a Rabobank CSV export file of\n transactions, and transforming this into a QIF file ready for import into\n your accounting software. If your accounting software can't import Rabobank\n CSV files, most will be able to deal with QIF files. \n\u003c/p\u003e\u003cp\u003eThe QIF file generated by this module will have the bare minimum amount of\n information, namely a description, amount of money to be credited or\n debited, account number, and the transaction date.\n\u003c/p\u003e\u003cp\u003eThis module exports two functions namely \u003ccode\u003e\u003ca\u003etoQif\u003c/a\u003e\u003c/code\u003e, which is the main function\n that will take a String of Rabobank CSV data and returns a String with QIF\n data, and \u003ccode\u003e\u003ca\u003ebaseName\u003c/a\u003e\u003c/code\u003e, which will generate a filename for the export file\n based on current date and time.\n\u003c/p\u003e\u003c/div\u003e",
          "indexed": "Tue Mar 11 19:47:46 UTC 2014",
          "module": "Rabobank",
          "name": "Rabobank",
          "package": "rabocsv2qif",
          "source": "src/Rabobank.html",
          "type": "module"
        },
        "index": {
          "description": "The module Rabobank has utilities to take Rabobank CSV export file of transactions and transforming this into QIF file ready for import into your accounting software If your accounting software can import Rabobank CSV files most will be able to deal with QIF files The QIF file generated by this module will have the bare minimum amount of information namely description amount of money to be credited or debited account number and the transaction date This module exports two functions namely toQif which is the main function that will take String of Rabobank CSV data and returns String with QIF data and baseName which will generate filename for the export file based on current date and time",
          "hierarchy": "Rabobank",
          "indexed": "2014-03-11T19:47:46",
          "module": "Rabobank",
          "name": "Rabobank",
          "package": "rabocsv2qif",
          "partial": "Rabobank",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rabocsv2qif/docs/Rabobank.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebaseName\u003c/a\u003e\u003c/code\u003e gets the current date and time and returns an 'IO String' with the\n timestamp and \u003ccode\u003eRabobank_\u003c/code\u003e as the prefix. This will be used as the filename\n (minus extension) for the exported QIF file.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 19:47:46 UTC 2014",
          "module": "Rabobank",
          "name": "baseName",
          "package": "rabocsv2qif",
          "signature": "IO String",
          "source": "src/Rabobank.html#baseName",
          "type": "function"
        },
        "index": {
          "description": "baseName gets the current date and time and returns an IO String with the timestamp and Rabobank as the prefix This will be used as the filename minus extension for the exported QIF file",
          "hierarchy": "Rabobank",
          "indexed": "2014-03-11T19:47:46",
          "module": "Rabobank",
          "name": "baseName",
          "package": "rabocsv2qif",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rabocsv2qif/docs/Rabobank.html#v:baseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function turns a string containing Rabobank CSV data to a string\n containing QIF data, ready for writing to stdout or to a file.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 19:47:46 UTC 2014",
          "module": "Rabobank",
          "name": "toQif",
          "package": "rabocsv2qif",
          "signature": "String -\u003e String",
          "source": "src/Rabobank.html#toQif",
          "type": "function"
        },
        "index": {
          "description": "This function turns string containing Rabobank CSV data to string containing QIF data ready for writing to stdout or to file",
          "hierarchy": "Rabobank",
          "indexed": "2014-03-11T19:47:46",
          "module": "Rabobank",
          "name": "toQif",
          "normalized": "String-\u003eString",
          "package": "rabocsv2qif",
          "partial": "Qif",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rabocsv2qif/docs/Rabobank.html#v:toQif"
      }
    }
  ]
]