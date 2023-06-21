function addAction(id, label, run, keybinds) {
    editor.addAction({
      id: id,
      label: label,
      precondition: null,
      keybindings: keybinds,
      keybindingContext: null,
      contextMenuGroupId: "navigation",
      contextMenuOrder: 1.5,
      run: function () {
        run();
        return null;
      },
    });
  }

addAction(
  "monaco-help",
  "~ Help",
  function () {
    document.location.href =
      "https://github.com/KanekiCow/ValiantRosploco";
  },
  [monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_H)]
);
addAction(
  "save",
  "Save",
  function () {
    saveTextAs(editor.getValue(), "script.lua");
  },
  [monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S)]
);
addAction(
  "refresh",
  "Refresh",
  function () {
    var replaceValue = editor.getValue();
    editor.setValue(replaceValue);
    replaceValue = null;
  },
  [monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_R)]
);
addAction(
  "clear",
  "Clear",
  editor.setValue("")
);

var getText = function () {
  return editor.getValue();
};
var setText = function (x) {
  editor.setValue(x);
};
var setTheme = function (themeName) {
  monaco.editor.setTheme(themeName);
};

var setImage = function (x) {
  document.getElementsByClassName(
    "lines-content monaco-editor-background"
  )[0].style.backgroundImage = "url=(" + x + ")";
  document.getElementsByClassName("margin")[0].style.backgroundImage =
    "url=(" + x + ")";
};

var switchMinimap = function (flag) {
  editor.updateOptions({ minimap: { enabled: flag } });
};
var switchReadonly = function (flag) {
  editor.updateOptions({ readOnly: flag });
};
var switchRenderWhitespace = function (op) {
  editor.updateOptions({ renderWhitespace: op });
};
var switchLinks = function (flag) {
  editor.updateOptions({ links: flag });
};
var switchLineHeight = function (num) {
  editor.updateOptions({ lineHeight: num });
};
var switchFontSize = function (num) {
  editor.updateOptions({ fontSize: num });
};
var switchFolding = function (flag) {
  editor.updateOptions({ folding: flag });
};
var switchAutoIndent = function (flag) {
  editor.updateOptions({ autoIndent: flag });
};
var switchFontFamily = function (name) {
  editor.updateOptions({ fontFamily: name });
};
var switchFontLigatures = function (flag) {
  editor.updateOptions({ fontLigatures: flag });
};

var addIntellisense = function (l, k, d, i) {
  var t;
  switch (k) {
    case "Class":
      t = monaco.languages.CompletionItemKind.Class;
      break;
    case "Color":
      t = monaco.languages.CompletionItemKind.Color;
      break;
    case "Constructor":
      t = monaco.languages.CompletionItemKind.Constructor;
      break;
    case "Enum":
      t = monaco.languages.CompletionItemKind.Enum;
      break;
    case "Field":
      t = monaco.languages.CompletionItemKind.Field;
      break;
    case "File":
      t = monaco.languages.CompletionItemKind.File;
      break;
    case "Folder":
      t = monaco.languages.CompletionItemKind.Folder;
      break;
    case "Function":
      t = monaco.languages.CompletionItemKind.Method;
      break;
    case "Interface":
      t = monaco.languages.CompletionItemKind.Interface;
      break;
    case "Keyword":
      t = monaco.languages.CompletionItemKind.Keyword;
      break;
    case "Method":
      t = monaco.languages.CompletionItemKind.Method;
      break;
    case "Module":
      t = monaco.languages.CompletionItemKind.Module;
      break;
    case "Property":
      t = monaco.languages.CompletionItemKind.Property;
      break;
    case "Reference":
      t = monaco.languages.CompletionItemKind.Reference;
      break;
    case "Snippet":
      t = monaco.languages.CompletionItemKind.Snippet;
      break;
    case "Text":
      t = monaco.languages.CompletionItemKind.Text;
      break;
    case "Unit":
      t = monaco.languages.CompletionItemKind.Unit;
      break;
    case "Value":
      t = monaco.languages.CompletionItemKind.Value;
      break;
    case "Variable":
      t = monaco.languages.CompletionItemKind.Variable;
      break;
  }

  monaco.languages.registerCompletionItemProvider("lua", {
    provideCompletionItems: function () {
      return {
        suggestions: [
          {
            label: l,
            kind: t,
            documentation: { value: d },

            insertText: i,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule
                .InsertAsSnippet,
          },
        ],
      };
    },
  });
};

var showErr = function (line, column, endline, endcolumn, errMessage) {
  editor.revealPositionInCenter({ lineNumber: line, column: column });
  editor.deltaDecorations(
    [],
    [
      {
        range: new monaco.Range(line, column, endline, endcolumn),
        options: {
          inlineClassName: "squiggly-error",
          hoverMessage: { value: errMessage },
        },
      },
    ]
  );
};

var setScroll = function (line) {
  editor.revealLineInCenter({ lineNumber: line });
};

var refresh = function () {
  let text = getText();
  setText("");
  editor.trigger("keyboard", "type", { text: text });
};
