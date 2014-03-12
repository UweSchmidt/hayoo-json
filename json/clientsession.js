[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "clientsession",
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
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStores session data in a client cookie.  In order to do so,\n we:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Encrypt the cookie data using AES in CTR mode.  This allows\n you to store sensitive information on the client side without\n worrying about eavesdropping.\n\u003c/li\u003e\u003cli\u003e Authenticate the encrypted cookie data using\n Skein-MAC-512-256.  Besides detecting potential errors in\n storage or transmission of the cookies (integrity), the MAC\n also avoids malicious modifications of the cookie data by\n assuring you that the cookie data really was generated by this\n server (authenticity).\n\u003c/li\u003e\u003cli\u003e Encode everything using Base64.  Thus we avoid problems with\n non-printable characters by giving the browser a simple\n string.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSimple usage of the library involves just calling\n \u003ccode\u003e\u003ca\u003egetDefaultKey\u003c/a\u003e\u003c/code\u003e on the startup of your server, \u003ccode\u003e\u003ca\u003eencryptIO\u003c/a\u003e\u003c/code\u003e\n when serializing cookies and \u003ccode\u003e\u003ca\u003edecrypt\u003c/a\u003e\u003c/code\u003e when parsing then back.\n\u003c/p\u003e\u003c/div\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "ClientSession",
          "package": "clientsession",
          "source": "src/Web-ClientSession.html",
          "type": "module"
        },
        "index": {
          "description": "Stores session data in client cookie In order to do so we Encrypt the cookie data using AES in CTR mode This allows you to store sensitive information on the client side without worrying about eavesdropping Authenticate the encrypted cookie data using Skein-MAC-512-256 Besides detecting potential errors in storage or transmission of the cookies integrity the MAC also avoids malicious modifications of the cookie data by assuring you that the cookie data really was generated by this server authenticity Encode everything using Base64 Thus we avoid problems with non-printable characters by giving the browser simple string Simple usage of the library involves just calling getDefaultKey on the startup of your server encryptIO when serializing cookies and decrypt when parsing then back",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "ClientSession",
          "package": "clientsession",
          "partial": "Client Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initialization vector used by AES.  Should be exactly 16\n bytes long.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "IV",
          "package": "clientsession",
          "source": "src/Web-ClientSession.html#IV",
          "type": "data"
        },
        "index": {
          "description": "The initialization vector used by AES Should be exactly bytes long",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "IV",
          "package": "clientsession",
          "partial": "IV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#t:IV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe keys used to store the cookies.  We have an AES key used\n to encrypt the cookie and a Skein-MAC-512-256 key used verify\n the authencity and integrity of the cookie.  The AES key needs\n to have exactly 32 bytes (256 bits) while Skein-MAC-512-256\n should have 64 bytes (512 bits).\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003egetDefaultKey\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einitKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "Key",
          "package": "clientsession",
          "source": "src/Web-ClientSession.html#Key",
          "type": "data"
        },
        "index": {
          "description": "The keys used to store the cookies We have an AES key used to encrypt the cookie and Skein-MAC-512-256 key used verify the authencity and integrity of the cookie The AES key needs to have exactly bytes bits while Skein-MAC-512-256 should have bytes bits See also getDefaultKey and initKey",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "Key",
          "package": "clientsession",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode (Base64), verify the integrity and authenticity\n (Skein-MAC-512-256) and decrypt (AES-CTR) the given encoded\n cookie data.  Returns the original serialized cookie data.\n Fails if the data is corrupted.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "decrypt",
          "package": "clientsession",
          "signature": "Key-\u003e ByteString-\u003e Maybe ByteString",
          "type": "function"
        },
        "index": {
          "description": "Decode Base64 verify the integrity and authenticity Skein-MAC-512-256 and decrypt AES-CTR the given encoded cookie data Returns the original serialized cookie data Fails if the data is corrupted",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "decrypt",
          "normalized": "Key-\u003eByteString-\u003eMaybe ByteString",
          "package": "clientsession",
          "signature": "Key-\u003eByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default key file.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "defaultKeyFile",
          "package": "clientsession",
          "signature": "FilePath",
          "source": "src/Web-ClientSession.html#defaultKeyFile",
          "type": "function"
        },
        "index": {
          "description": "The default key file",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "defaultKeyFile",
          "package": "clientsession",
          "partial": "Key File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#v:defaultKeyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt (AES-CTR), authenticate (Skein-MAC-512-256) and\n encode (Base64) the given cookie data.  The returned byte\n string is ready to be used in a response header.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "encrypt",
          "package": "clientsession",
          "signature": "Key-\u003e IV-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Encrypt AES-CTR authenticate Skein-MAC-512-256 and encode Base64 the given cookie data The returned byte string is ready to be used in response header",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "encrypt",
          "normalized": "Key-\u003eIV-\u003eByteString-\u003eByteString",
          "package": "clientsession",
          "signature": "Key-\u003eIV-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eencrypt\u003c/a\u003e\u003c/code\u003e, however randomly generates the\n initialization vector for you.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "encryptIO",
          "package": "clientsession",
          "signature": "Key -\u003e ByteString -\u003e IO ByteString",
          "source": "src/Web-ClientSession.html#encryptIO",
          "type": "function"
        },
        "index": {
          "description": "Same as encrypt however randomly generates the initialization vector for you",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "encryptIO",
          "normalized": "Key-\u003eByteString-\u003eIO ByteString",
          "package": "clientsession",
          "partial": "IO",
          "signature": "Key-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#v:encryptIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimply calls \u003ccode\u003e\u003ca\u003egetKey\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultKeyFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "getDefaultKey",
          "package": "clientsession",
          "signature": "IO Key",
          "source": "src/Web-ClientSession.html#getDefaultKey",
          "type": "function"
        },
        "index": {
          "description": "Simply calls getKey defaultKeyFile",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "getDefaultKey",
          "package": "clientsession",
          "partial": "Default Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#v:getDefaultKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a key from the given text file.\n\u003c/p\u003e\u003cp\u003eIf the file does not exist or is corrupted a random key will\n be generated and stored in that file.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "getKey",
          "package": "clientsession",
          "signature": "FilePath-\u003e IO Key",
          "type": "function"
        },
        "index": {
          "description": "Get key from the given text file If the file does not exist or is corrupted random key will be generated and stored in that file",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "getKey",
          "normalized": "FilePath-\u003eIO Key",
          "package": "clientsession",
          "partial": "Key",
          "signature": "FilePath-\u003eIO Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#v:getKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializes a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e from a random \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  Fails if\n there isn't exactly 96 bytes (256 bits for AES and 512 bits\n for Skein-MAC-512-512).\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "initKey",
          "package": "clientsession",
          "signature": "ByteString -\u003e Either String Key",
          "source": "src/Web-ClientSession.html#initKey",
          "type": "function"
        },
        "index": {
          "description": "Initializes Key from random ByteString Fails if there isn exactly bytes bits for AES and bits for Skein-MAC-512-512",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "initKey",
          "normalized": "ByteString-\u003eEither String Key",
          "package": "clientsession",
          "partial": "Key",
          "signature": "ByteString-\u003eEither String Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#v:initKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an initialization vector from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n Fails if there isn't exactly 16 bytes.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "mkIV",
          "package": "clientsession",
          "signature": "ByteString -\u003e Maybe IV",
          "source": "src/Web-ClientSession.html#mkIV",
          "type": "function"
        },
        "index": {
          "description": "Construct an initialization vector from ByteString Fails if there isn exactly bytes",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "mkIV",
          "normalized": "ByteString-\u003eMaybe IV",
          "package": "clientsession",
          "partial": "IV",
          "signature": "ByteString-\u003eMaybe IV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#v:mkIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly construct a fresh initialization vector.  You\n \u003cem\u003eshould not\u003c/em\u003e reuse initialization vectors.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "randomIV",
          "package": "clientsession",
          "signature": "IO IV",
          "source": "src/Web-ClientSession.html#randomIV",
          "type": "function"
        },
        "index": {
          "description": "Randomly construct fresh initialization vector You should not reuse initialization vectors",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "randomIV",
          "package": "clientsession",
          "partial": "IV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#v:randomIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.  Besides the \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e, the\n \u003ccode\u003eByteString\u003c/code\u003e passed to \u003ccode\u003e\u003ca\u003einitKey\u003c/a\u003e\u003c/code\u003e is returned so that it can be\n saved for later use.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:34:21 UTC 2014",
          "module": "Web.ClientSession",
          "name": "randomKey",
          "package": "clientsession",
          "signature": "IO (ByteString, Key)",
          "source": "src/Web-ClientSession.html#randomKey",
          "type": "function"
        },
        "index": {
          "description": "Generate random Key Besides the Key the ByteString passed to initKey is returned so that it can be saved for later use",
          "hierarchy": "Web ClientSession",
          "indexed": "2014-03-11T17:34:21",
          "module": "Web.ClientSession",
          "name": "randomKey",
          "normalized": "IO(ByteString,Key)",
          "package": "clientsession",
          "partial": "Key",
          "signature": "IO(ByteString,Key)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clientsession/docs/Web-ClientSession.html#v:randomKey"
      }
    }
  ]
]