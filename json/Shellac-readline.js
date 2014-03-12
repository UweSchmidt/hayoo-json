[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "Shellac-readline",
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
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a Shellac backend based on the GNU readline\n     and GNU history modules.  For readline, we use the bindings\n     from the standard library.  For history, we import directily using\n     FFI.  This Shellac backend supports command completion, history buffer\n     and all the line editing and character binding features of GNU readline.\n\u003c/p\u003e\u003cp\u003eBeware that while the code for this Shellac binding is licensed under a BSD3\n     license, GNU readline itself is licensed under the GPL.  This means that your\n     project needs to be GPL compatible for this Shellac backend to be useful to you.\n\u003c/p\u003e\u003c/div\u003e",
          "indexed": "Tue Mar 11 17:00:33 UTC 2014",
          "module": "System.Console.Shell.Backend.Readline",
          "name": "Readline",
          "package": "Shellac-readline",
          "source": "src/System-Console-Shell-Backend-Readline.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements Shellac backend based on the GNU readline and GNU history modules For readline we use the bindings from the standard library For history we import directily using FFI This Shellac backend supports command completion history buffer and all the line editing and character binding features of GNU readline Beware that while the code for this Shellac binding is licensed under BSD3 license GNU readline itself is licensed under the GPL This means that your project needs to be GPL compatible for this Shellac backend to be useful to you",
          "hierarchy": "System Console Shell Backend Readline",
          "indexed": "2014-03-11T17:00:33",
          "module": "System.Console.Shell.Backend.Readline",
          "name": "Readline",
          "package": "Shellac-readline",
          "partial": "Readline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Shellac-readline/docs/System-Console-Shell-Backend-Readline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "indexed": "Tue Mar 11 17:00:33 UTC 2014",
          "module": "System.Console.Shell.Backend.Readline",
          "name": "readlineBackend",
          "package": "Shellac-readline",
          "signature": "ShellBackend ()",
          "source": "src/System-Console-Shell-Backend-Readline.html#readlineBackend",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Shell Backend Readline",
          "indexed": "2014-03-11T17:00:33",
          "module": "System.Console.Shell.Backend.Readline",
          "name": "readlineBackend",
          "normalized": "ShellBackend()",
          "package": "Shellac-readline",
          "partial": "Backend",
          "signature": "ShellBackend()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Shellac-readline/docs/System-Console-Shell-Backend-Readline.html#v:readlineBackend"
      }
    }
  ]
]