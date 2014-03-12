[
  {
    "cmd": "delete-by-query",
    "query": {
      "query1": {
        "contexts": [
          "type"
        ],
        "query": {
          "op": "case",
          "phrase": "package",
          "type": "phrase"
        },
        "type": "context"
      },
      "query2": {
        "query1": {
          "contexts": [
            "name"
          ],
          "query": {
            "op": "case",
            "phrase": "hxt",
            "type": "phrase"
          },
          "type": "context"
        },
        "query2": {
          "contexts": [
            "name"
          ],
          "query": {
            "op": "case",
            "phrase": "hxt-cache",
            "type": "phrase"
          },
          "type": "context"
        },
        "type": "or"
      },
      "type": "and"
    }
  },
  [
    {
      "cmd": "update",
      "document": {
        "description": {
          "description": "The Haskell XML Toolbox bases on the ideas of HaXml and HXML, but introduces a more general approach for processing XML with Haskell. The Haskell XML Toolbox uses a generic data model for representing XML documents, including the DTD subset and the document subset, in Haskell. It contains a validating XML parser, a HTML parser, namespace support, an XPath expression evaluator, an XSLT library, a RelaxNG schema validator and funtions for serialization and deserialization of user defined data. The library makes extensive use of the arrow approach for processing XML. Since version 9 the toolbox is partitioned into various (sub-)packages. This package contains the core functionality, hxt-curl, hxt-tagsoup, hxt-relaxng, hxt-xpath, hxt-xslt, hxt-regex-xmlschema contain the extensions. hxt-unicode contains encoding and decoding functions, hxt-charproperties char properties for unicode and XML. Changes from 9.3.1.2: https as protocol added Changes from 9.3.1.1: new parser xreadDoc Changes from 9.3.1.0: in readString all input decoding switched off Changes from 9.3.0.1: lower bound for network set to be \u003e= 2.4 Changes from 9.3.0: upper bound for network set to be \u003c 2.4 (URI signatures changed in 2.4) Changes from 9.2.2: XMLSchema validation integrated Changes from 9.2.1: user defined mime type handlers added Changes from 9.2.0: New warnings from ghc-7.4 removed",
          "author": "Uwe Schmidt, Martin Schmidt, Torben Kuseler",
          "category": "XML",
          "dependencies": "HUnit base binary bytestring containers deepseq directory filepath hxt-charproperties hxt-regex-xmlschema hxt-unicode mtl network parsec",
          "homepage": "http://www.fh-wedel.de/~si/HXmlToolbox/index.html",
          "indexed": "Tue Mar 11 13:40:54 UTC 2014",
          "maintainer": "Uwe Schmidt \u003cuwe@fh-wedel.de\u003e",
          "name": "hxt",
          "synopsis": "A collection of tools for processing XML with Haskell.",
          "upload": "Tue Jan 7 10:20:42 UTC 2014",
          "version": "9.3.1.3"
        },
        "index": {
          "description": "The Haskell XML Toolbox bases on the ideas of HaXml and HXML but introduces more general approach for processing XML with Haskell The Haskell XML Toolbox uses generic data model for representing XML documents including the DTD subset and the document subset in Haskell It contains validating XML parser HTML parser namespace support an XPath expression evaluator an XSLT library RelaxNG schema validator and funtions for serialization and deserialization of user defined data The library makes extensive use of the arrow approach for processing XML Since version the toolbox is partitioned into various sub packages This package contains the core functionality hxt-curl hxt-tagsoup hxt-relaxng hxt-xpath hxt-xslt hxt-regex-xmlschema contain the extensions hxt-unicode contains encoding and decoding functions hxt-charproperties char properties for unicode and XML Changes from https as protocol added Changes from new parser xreadDoc Changes from in readString all input decoding switched off Changes from lower bound for network set to be Changes from upper bound for network set to be URI signatures changed in Changes from XMLSchema validation integrated Changes from user defined mime type handlers added Changes from New warnings from ghc-7.4 removed",
          "author": "Uwe Schmidt Martin Schmidt Torben Kuseler Uwe Schmidt uwe@fh-wedel.de",
          "category": "XML",
          "dependencies": "HUnit base binary bytestring containers deepseq directory filepath hxt-charproperties hxt-regex-xmlschema hxt-unicode mtl network parsec",
          "indexed": "2014-03-11T13:40:54",
          "name": "hxt",
          "synopsis": "collection of tools for processing XML with Haskell",
          "type": "package",
          "upload": "2014-01-07T10:20:42"
        },
        "uri": "http://hackage.haskell.org/package/hxt"
      }
    },
    {
      "cmd": "update",
      "document": {
        "description": {
          "description": "Extension for caching XML documents and other binary data in cache directory of the local filesystem Changes from 9.0.2: dependency of old-time changed to time, dependecy of directory changed to \u003e=1.2 to work with ghc-7.6",
          "author": "Uwe Schmidt",
          "category": "XML",
          "dependencies": "SHA base binary bytestring containers deepseq directory filepath hxt old-locale time unix",
          "homepage": "http://www.fh-wedel.de/~si/HXmlToolbox/index.html",
          "indexed": "Tue Mar 11 13:40:54 UTC 2014",
          "maintainer": "Uwe Schmidt \u003cuwe@fh-wedel.de\u003e",
          "name": "hxt-cache",
          "synopsis": "Cache for HXT XML Documents and other binary data",
          "upload": "Sun Feb 10 14:35:31 UTC 2013",
          "version": "9.1.0"
        },
        "index": {
          "description": "Extension for caching XML documents and other binary data in cache directory of the local filesystem Changes from dependency of old-time changed to time dependecy of directory changed to to work with ghc-7.6",
          "author": "Uwe Schmidt Uwe Schmidt uwe@fh-wedel.de",
          "category": "XML",
          "dependencies": "SHA base binary bytestring containers deepseq directory filepath hxt old-locale time unix",
          "indexed": "2014-03-11T13:40:54",
          "name": "hxt-cache cache",
          "synopsis": "Cache for HXT XML Documents and other binary data",
          "type": "package",
          "upload": "2013-02-10T14:35:31"
        },
        "uri": "http://hackage.haskell.org/package/hxt-cache"
      }
    }
  ]
]