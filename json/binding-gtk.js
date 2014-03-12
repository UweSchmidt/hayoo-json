[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "phrase": "binding-gtk",
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
          "indexed": "Tue Mar 11 17:19:22 UTC 2014",
          "module": "Graphics.UI.Gtk.Binding",
          "name": "Binding",
          "package": "binding-gtk",
          "source": "src/Graphics-UI-Gtk-Binding.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Binding",
          "indexed": "2014-03-11T17:19:22",
          "module": "Graphics.UI.Gtk.Binding",
          "name": "Binding",
          "package": "binding-gtk",
          "partial": "Binding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binding-gtk/docs/Graphics-UI-Gtk-Binding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a two-way data binding.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:19:22 UTC 2014",
          "module": "Graphics.UI.Gtk.Binding",
          "name": "bindControl",
          "package": "binding-gtk",
          "signature": "b a-\u003e (a -\u003e d)-\u003e c-\u003e Attr c d-\u003e (a -\u003e d -\u003e a)-\u003e IO (ConnectId c)",
          "type": "function"
        },
        "index": {
          "description": "Create two-way data binding",
          "hierarchy": "Graphics UI Gtk Binding",
          "indexed": "2014-03-11T17:19:22",
          "module": "Graphics.UI.Gtk.Binding",
          "name": "bindControl",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ed-\u003eAttr d c-\u003e(b-\u003ec-\u003eb)-\u003eIO(ConnectId d)",
          "package": "binding-gtk",
          "partial": "Control",
          "signature": "b a-\u003e(a-\u003ed)-\u003ec-\u003eAttr c d-\u003e(a-\u003ed-\u003ea)-\u003eIO(ConnectId c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-gtk/docs/Graphics-UI-Gtk-Binding.html#v:bindControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind from a control to a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e.\n The source is updated when the control loses focus.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:19:22 UTC 2014",
          "module": "Graphics.UI.Gtk.Binding",
          "name": "bindFromControl",
          "package": "binding-gtk",
          "signature": "c-\u003e Attr c d-\u003e (a -\u003e d -\u003e a)-\u003e b a-\u003e IO (ConnectId c)",
          "type": "function"
        },
        "index": {
          "description": "Bind from control to Source The source is updated when the control loses focus",
          "hierarchy": "Graphics UI Gtk Binding",
          "indexed": "2014-03-11T17:19:22",
          "module": "Graphics.UI.Gtk.Binding",
          "name": "bindFromControl",
          "normalized": "a-\u003eAttr a b-\u003e(c-\u003eb-\u003ec)-\u003ed c-\u003eIO(ConnectId a)",
          "package": "binding-gtk",
          "partial": "From Control",
          "signature": "c-\u003eAttr c d-\u003e(a-\u003ed-\u003ea)-\u003eb a-\u003eIO(ConnectId c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-gtk/docs/Graphics-UI-Gtk-Binding.html#v:bindFromControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a simple two-way data binding for a \u003ccode\u003eTextual\u003c/code\u003e control.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:19:22 UTC 2014",
          "module": "Graphics.UI.Gtk.Binding",
          "name": "bindTextEntry",
          "package": "binding-gtk",
          "signature": "b a-\u003e c-\u003e IO (ConnectId c)",
          "type": "function"
        },
        "index": {
          "description": "Create simple two-way data binding for Textual control",
          "hierarchy": "Graphics UI Gtk Binding",
          "indexed": "2014-03-11T17:19:22",
          "module": "Graphics.UI.Gtk.Binding",
          "name": "bindTextEntry",
          "normalized": "a b-\u003ec-\u003eIO(ConnectId c)",
          "package": "binding-gtk",
          "partial": "Text Entry",
          "signature": "b a-\u003ec-\u003eIO(ConnectId c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-gtk/docs/Graphics-UI-Gtk-Binding.html#v:bindTextEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e to a control.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:19:22 UTC 2014",
          "module": "Graphics.UI.Gtk.Binding",
          "name": "bindToControl",
          "package": "binding-gtk",
          "signature": "b a-\u003e (a -\u003e d)-\u003e c-\u003e Attr c d-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Bind Source to control",
          "hierarchy": "Graphics UI Gtk Binding",
          "indexed": "2014-03-11T17:19:22",
          "module": "Graphics.UI.Gtk.Binding",
          "name": "bindToControl",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ed-\u003eAttr d c-\u003eIO()",
          "package": "binding-gtk",
          "partial": "To Control",
          "signature": "b a-\u003e(a-\u003ed)-\u003ec-\u003eAttr c d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-gtk/docs/Graphics-UI-Gtk-Binding.html#v:bindToControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a set of navigation buttons for a binding list.\n\u003c/p\u003e",
          "indexed": "Tue Mar 11 17:19:22 UTC 2014",
          "module": "Graphics.UI.Gtk.Binding",
          "name": "navigation",
          "package": "binding-gtk",
          "signature": "BindingList v a-\u003e a-\u003e IO HButtonBox",
          "type": "function"
        },
        "index": {
          "description": "Create set of navigation buttons for binding list",
          "hierarchy": "Graphics UI Gtk Binding",
          "indexed": "2014-03-11T17:19:22",
          "module": "Graphics.UI.Gtk.Binding",
          "name": "navigation",
          "normalized": "BindingList a b-\u003eb-\u003eIO HButtonBox",
          "package": "binding-gtk",
          "signature": "BindingList v a-\u003ea-\u003eIO HButtonBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-gtk/docs/Graphics-UI-Gtk-Binding.html#v:navigation"
      }
    }
  ]
]