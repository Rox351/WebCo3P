require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.26.1/min/vs' }});
require(['vs/editor/editor.main'], function() {
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        noLib: true,
        allowNonTsExtensions: true
    });

    var editor = monaco.editor.create(document.getElementById('editor'), {
        value: localStorage.getItem('savedCode') || '',
        language: 'javascript',
        theme: '',
        minimap: {
            enabled: false
        },
        quickSuggestions: false,
        wordBasedSuggestions: false,
        suggestOnTriggerCharacters: false,
        suggestOnEnter: false
    });

    editor.getModel().onDidChangeContent(function() {
        var code = editor.getValue();
        localStorage.setItem('savedCode', code);
    });

    // Adiciona a função de selecionar próximas ocorrências ao atalho CTRL+D
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D, function() {
        editor.trigger('editor', 'editor.action.selectHighlights', { sticky: true, occurrences: { kind: monaco.languages.DocumentHighlightKind.Text }});
    });

    // Adiciona a função de comentar a linha ao atalho CTRL+/
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.US_SLASH, function() {
        editor.trigger('editor', 'editor.action.commentLine', null);
    });

    // Atualiza o tema do editor
    function updateEditorTheme(theme) {
        editor.updateOptions({
            theme: theme
        });
    }

    // Adiciona a função de mudar tema
    var toggleButton = document.getElementById('toggle-theme');
    toggleButton.addEventListener('click', function() {
        var body = document.body;
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            toggleButton.textContent = 'Modo Light';
            updateEditorTheme('vs-dark');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            toggleButton.textContent = 'Modo Dark';
            updateEditorTheme('vs');
        }
    });
});
        var showAlertBtn = document.getElementById('show-alert');
        showAlertBtn.addEventListener('click', function() {
            var alertBox = document.getElementsByClassName('alert')[0];
            alertBox.style.display = 'block';
        });

