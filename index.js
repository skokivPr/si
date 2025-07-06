const carrdLinks = [
    // === KOLUMNA 1: EDYTORY I KOD ===
    // Row 1
    {
        id: "gemiapi",
        title: "GEMIAPI",
        url: "https://gemiapi.carrd.co/",
        icon: "fas fa-gem",
        iconClass: "icon-gemiapi",
        category: "code",
        subcategory: "gemiapi",
    },
    {
        id: "live-code",
        title: "LIVE CODE",
        url: "https://livecode.carrd.co/",
        icon: "fas fa-code",
        iconClass: "icon-livecode",
        category: "editors",
        subcategory: "code",
    },
    {
        id: "md-code",
        title: "MD CODE",
        url: "https://mdcode.carrd.co/",
        icon: "fas fa-file-code",
        iconClass: "icon-md",
        category: "code",
        subcategory: "markdown",
    },

    // Row 2
    {
        id: "edytor",
        title: "EDYTOR",
        url: "https://edytortxt.carrd.co/",
        icon: "fas fa-edit",
        iconClass: "icon-editor",
        category: "editors",
        subcategory: "text",
    },
    {
        id: "edytor-alt",
        title: "EDYTOR",
        url: "https://edytor.carrd.co/",
        icon: "fas fa-edit",
        iconClass: "icon-editor",
        category: "editors",
        subcategory: "text",
    },
    {
        id: "linkosi",
        title: "LINKOSI",
        url: "https://linkosi.carrd.co/",
        icon: "fas fa-file-alt",
        iconClass: "icon-text",
        category: "editors",
        subcategory: "links",
    },

    // Row 3
    {
        id: "playliveos",
        title: "PLAYLIVEOS",
        url: "https://playliveos.carrd.co/",
        icon: "fas fa-file-alt",
        iconClass: "icon-text",
        category: "editors",
        subcategory: "utility",
    },
    {
        id: "text-pro",
        title: "TEXT PRO",
        url: "https://txtpro.carrd.co/",
        icon: "fas fa-font",
        iconClass: "icon-text",
        category: "editors",
        subcategory: "text",
    },
    {
        id: "codenote",
        title: "CODENOTE",
        url: "https://codenote.carrd.co/",
        icon: "fas fa-search",
        iconClass: "icon-codenote",
        category: "code",
        subcategory: "notes",
    },

    // === KOLUMNA 2: NARZĘDZIA I UTILITIES ===
    // Row 1
    {
        id: "bookmarkoi",
        title: "BOOKMARKOI",
        url: "https://bookmarkoi.carrd.co/",
        icon: "fas fa-bookmark",
        iconClass: "icon-bookmark",
        category: "tools",
        subcategory: "links",
    },
    {
        id: "tools-nue",
        title: "TOOLS NUE",
        url: "https://toolsnue.carrd.co/",
        icon: "fas fa-wrench",
        iconClass: "icon-tools",
        category: "tools",
        subcategory: "utility",
    },

    // Row 2
    {
        id: "modifier",
        title: "MODIFIER",
        url: "https://modifier.carrd.co/",
        icon: "fas fa-sliders-h",
        iconClass: "icon-modifier",
        category: "tools",
        subcategory: "utility",
    },
    {
        id: "uniwersal-play",
        title: "UNIWERSAL PLAY",
        url: "https://uniwersalplay.carrd.co/",
        icon: "fas fa-play",
        iconClass: "icon-play",
        category: "tools",
        subcategory: "utility",
    },
    {
        id: "os-tools",
        title: "OS TOOLS",
        url: "https://ostools.carrd.co/",
        icon: "fas fa-desktop",
        iconClass: "icon-os",
        category: "tools",
        subcategory: "utility",
    },

    // Row 3
    {
        id: "os-pro",
        title: "OS PRO",
        url: "https://ospro.carrd.co/",
        icon: "fas fa-laptop",
        iconClass: "icon-ospro",
        category: "tools",
        subcategory: "utility",
    },
    {
        id: "logowanie",
        title: "LOGOWANIE",
        url: "https://logowanie.carrd.co/",
        icon: "fas fa-sign-in-alt",
        iconClass: "icon-login",
        category: "tools",
        subcategory: "utility",
    },
    {
        id: "w5ui",
        title: "W5UI",
        url: "https://w5ui.carrd.co/",
        icon: "fas fa-palette",
        iconClass: "icon-w5ui",
        category: "tools",
        subcategory: "ui",
    },

    // === KOLUMNA 3: DANE, OBRAZY I WEB ===
    // Row 1
    {
        id: "arkusz",
        title: "ARKUSZ",
        url: "https://arkusz.carrd.co/",
        icon: "fas fa-table",
        iconClass: "icon-table",
        category: "data",
        subcategory: "spreadsheet",
    },

    // Row 2
    {
        id: "md-table",
        title: "MD TABLE",
        url: "https://mdtable.carrd.co/",
        icon: "fas fa-table",
        iconClass: "icon-md",
        category: "data",
        subcategory: "markdown",
    },
    {
        id: "image-tools",
        title: "IMAGE TOOLS",
        url: "https://imgpro.carrd.co/",
        icon: "fas fa-image",
        iconClass: "icon-image",
        category: "tools",
        subcategory: "image",
    },

    // Row 3
    {
        id: "web-tools",
        title: "COLORBETA",
        url: "https://colorbeta.com/",
        icon: "fas fa-globe",
        iconClass: "icon-web",
        category: "tools",
        subcategory: "web",
    },
    {
        id: "sites-w5",
        title: "SITES W5",
        url: "https://sitesw5.carrd.co/",
        icon: "fas fa-globe",
        iconClass: "icon-sites",
        category: "tools",
        subcategory: "web",
    },
    {
        id: "project-dev",
        title: "PROJECT DEV",
        url: "https://projectdev.carrd.co/",
        icon: "fas fa-project-diagram",
        iconClass: "icon-project",
        category: "tools",
        subcategory: "project",
    },

    // === DODATKOWE NARZĘDZIA ===
    // Row 4
    {
        id: "zoomframe",
        title: "ZOOMFRAME",
        url: "https://zoomframe.carrd.co/",
        icon: "fas fa-mobile-alt",
        iconClass: "icon-zoomframe",
        category: "tools",
        subcategory: "display",
    },
    {
        id: "task-day",
        title: "TASK DAY",
        url: "https://taskday.carrd.co/",
        icon: "fas fa-tasks",
        iconClass: "icon-task",
        category: "tools",
        subcategory: "tasks",
    },
    {
        id: "tools-link",
        title: "TOOLS LINK",
        url: "https://toolslinki.carrd.co/",
        icon: "fas fa-link",
        iconClass: "icon-link",
        category: "tools",
        subcategory: "links",
    },

    // Row 5
    {
        id: "tools-link-alt",
        title: "TOOLS LINK",
        url: "https://toolslink.carrd.co/",
        icon: "fas fa-link",
        iconClass: "icon-toolslink",
        category: "tools",
        subcategory: "links",
    },
];

const extraTools = [
    {
        id: "in-csv-dev",
        title: "IN CSV DEV",
        url: "https://incsvdev.carrd.co/",
        icon: "fas fa-file-csv",
        iconClass: "icon-csv",
        category: "data",
        subcategory: "csv",
    },
    {
        id: "web-tools-dev",
        title: "WEB TOOLS DEV",
        url: "https://webtoolsdev.carrd.co/",
        icon: "fas fa-globe",
        iconClass: "icon-web",
        category: "tools",
        subcategory: "web",
    },
    {
        id: "txt-pro",
        title: "TXT PRO",
        url: "https://txtpro.carrd.co",
        icon: "fas fa-font",
        iconClass: "icon-text",
        category: "editors",
        subcategory: "text",
    },
    {
        id: "text-img",
        title: "TABLE ORG",
        url: "https://tableorg.carrd.co/",
        icon: "fas fa-table",
        iconClass: "icon-table",
        category: "tools",
        subcategory: "table",
    },
];

const cardData = [...carrdLinks, ...extraTools];

// Global variables
let editor;
let chat;

// --- MAIN INITIALIZATION ---
// Wait for dynamic HTML to be generated before initializing functionality
document.addEventListener('dynamicHTMLReady', () => {
    console.log('Dynamic HTML ready, initializing functionality...');
    initApiKey();
    initClockAndDate();
    initNavigation();
    initThemeToggle();
    initModals();
    renderAllCards();
    initMonacoEditor();
    initNotepadModal();
    initApiModal();
    initQuickLinksModal();
    initAddonsModal();
    initUiOptimizationModal();
    initCardGeneratorModal();
    initChatModal();
    initCodeGeneratorModal();
    initTranslatorModal();
    initTextAnalyzerModal();
    initIframeViewerModal();
    initCardIframeLinks();
    console.log('All functionality initialized successfully!');
});

// Fallback initialization for direct loading (if dynamic HTML is not used)
document.addEventListener('DOMContentLoaded', () => {
    // Check if dynamic HTML elements exist, if not wait a bit and try again
    if (!document.querySelector('nav') || !document.querySelector('.content-container')) {
        console.log('Waiting for dynamic HTML generation...');
        return; // Let the dynamicHTMLReady event handle initialization
    }

    // If static HTML exists, initialize immediately
    console.log('Static HTML detected, initializing immediately...');
    initApiKey();
    initClockAndDate();
    initNavigation();
    initThemeToggle();
    initModals();
    renderAllCards();
    initMonacoEditor();
    initNotepadModal();
    initApiModal();
    initQuickLinksModal();
    initAddonsModal();
    initUiOptimizationModal();
    initCardGeneratorModal();
    initChatModal();
    initCodeGeneratorModal();
    initTranslatorModal();
    initTextAnalyzerModal();
    initIframeViewerModal();
    initCardIframeLinks();
});

// --- UI INITIALIZATION FUNCTIONS ---

// --- API KEY MANAGEMENT ---
let ai = null;

function initApiKey() {
    console.log("Initializing API key functionality...");

    // Load saved API key
    const savedKey = localStorage.getItem('genai-api-key');
    if (savedKey) {
        document.getElementById('api-key-input').value = savedKey;
        initializeAI(savedKey);
    }

    // Set up event listeners
    document.getElementById('toggle-api-key')?.addEventListener('click', toggleApiKeyVisibility);
    document.getElementById('save-api-key')?.addEventListener('click', saveApiKey);
    document.getElementById('clear-api-key')?.addEventListener('click', clearApiKey);
    document.getElementById('api-key-input')?.addEventListener('input', handleApiKeyInput);
    document.getElementById('api-key-input')?.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            saveApiKey();
        }
    });
}

function toggleApiKeyVisibility() {
    const input = document.getElementById('api-key-input');
    const icon = document.querySelector('#toggle-api-key i');

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function handleApiKeyInput() {
    const input = document.getElementById('api-key-input');
    const status = document.getElementById('api-key-status');

    if (input.value.trim().length > 0) {
        status.innerHTML = '<i class="fas fa-info-circle"></i> Naciśnij Enter lub Zapisz';
        status.className = 'api-input-status warning visible';
    } else {
        status.innerHTML = '';
        status.className = 'api-input-status';
    }
}

function saveApiKey() {
    const input = document.getElementById('api-key-input');
    const status = document.getElementById('api-key-status');
    const apiKey = input.value.trim();

    if (!apiKey) {
        status.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Wprowadź klucz API';
        status.className = 'api-input-status error visible';
        return;
    }

    // Save to localStorage
    localStorage.setItem('genai-api-key', apiKey);

    // Initialize AI
    initializeAI(apiKey);
}

function clearApiKey() {
    const input = document.getElementById('api-key-input');
    const status = document.getElementById('api-key-status');

    // Clear input
    input.value = '';

    // Clear localStorage
    localStorage.removeItem('genai-api-key');

    // Clear AI instance
    ai = null;

    // Update status
    status.innerHTML = '<i class="fas fa-info-circle"></i> Klucz API został wyczyszczony';
    status.className = 'api-input-status warning visible';

    // Clear status after 3 seconds
    setTimeout(() => {
        status.innerHTML = '';
        status.className = 'api-input-status';
    }, 3000);

    console.log('API key cleared');
}

async function initializeAI(apiKey) {
    const status = document.getElementById('api-key-status');

    try {
        status.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sprawdzanie klucza...';
        status.className = 'api-input-status warning visible';

        // Import and initialize Google GenAI
        const { GoogleGenerativeAI } = await import('@google/genai');
        ai = new GoogleGenerativeAI(apiKey);

        // Test the API key with a simple request
        const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });
        await model.generateContent('Test');

        status.innerHTML = '<i class="fas fa-check-circle"></i> Klucz API sprawny';
        status.className = 'api-input-status success visible';

        console.log('AI initialized successfully');
    } catch (error) {
        console.error('AI initialization failed:', error);
        status.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Nieprawidłowy klucz API';
        status.className = 'api-input-status error visible';
        ai = null;
    }
}

function initClockAndDate() {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const dateEl = document.getElementById('current-date');

    function updateTime() {
        const now = new Date();
        hoursEl.textContent = String(now.getHours()).padStart(2, '0');
        minutesEl.textContent = String(now.getMinutes()).padStart(2, '0');
        secondsEl.textContent = String(now.getSeconds()).padStart(2, '0');
    }

    function updateDate() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = now.toLocaleDateString('pl-PL', options).toUpperCase();
    }

    updateTime();
    updateDate();
    setInterval(updateTime, 1000);
}

function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });
}

// Theme toggle is now handled by index.html - this function is no longer needed

function initModals() {
    const modals = document.querySelectorAll('.modal');
    const apiModal = document.getElementById('myModal10');

    // Open modal
    for (let i = 1; i <= 10; i++) {
        const openButton = document.getElementById(`openModal${i}`);
        if (openButton) {
            openButton.addEventListener('click', () => {
                if (i === 10) {
                    // Special handling for API modal
                    apiModal?.classList.add('active');
                } else {
                    document.getElementById(`myModal${i}`)?.classList.add('active');
                }
            });
        }
    }

    // Close modal
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('close-button')) {
                modal.classList.remove('active');
                // If we are closing the iframe modal, reset its content
                if (modal.id === 'myModal9') {
                    const iframe = document.getElementById('content-iframe');
                    if (iframe) {
                        iframe.src = 'about:blank';
                    }
                }
            }
        });
    });

    // Special handling for API modal
    if (apiModal) {
        // Close on overlay click
        const overlay = apiModal.querySelector('.modal-api-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => {
                apiModal.classList.remove('active');
            });
        }

        // Close on close button click
        const closeBtn = document.getElementById('close-api-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                apiModal.classList.remove('active');
            });
        }
    }
}

function renderAllCards() {
    const allGrid = document.getElementById('all-grid');
    const editorsGrid = document.getElementById('editors-grid');
    const toolsGrid = document.getElementById('tools-grid');
    const dataGrid = document.getElementById('data-grid');
    const codeGrid = document.getElementById('code-grid');

    const grids = {
        editors: editorsGrid,
        tools: toolsGrid,
        data: dataGrid,
        code: codeGrid
    };

    const container = document.querySelector('#all-section .grid-container');
    container.innerHTML = '';

    Object.values(grids).forEach(grid => {
        if (grid) grid.innerHTML = '';
    });

    cardData.forEach(card => {
        const cardHtml = `
            <div class="card" data-category="${card.category}">
                <i class="${card.icon} card-icon"></i>
                <h3>${card.title}</h3>
                <p>${card.subcategory.charAt(0).toUpperCase() + card.subcategory.slice(1)}</p>
                <div class="card-buttons">
                    <a href="${card.url}" class="card-iframe-link" rel="noopener noreferrer"><i class="fas fa-eye"></i></a>
                    <a href="${card.url}" class="card-new-tab-link" target="_blank" rel="noopener noreferrer"><i class="fas fa-plus"></i></a>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
        if (grids[card.category]) {
            grids[card.category].innerHTML += cardHtml;
        }
    });
}

function initMonacoEditor() {
    // Dispose of existing editors if they exist
    if (window.editor) {
        console.log('Disposing existing Monaco editor...');
        window.editor.dispose();
        window.editor = null;
    }

    if (window.fullscreenEditor) {
        console.log('Disposing existing fullscreen Monaco editor...');
        window.fullscreenEditor.dispose();
        window.fullscreenEditor = null;
    }

    const container = document.getElementById('monaco-editor-container');
    const fullscreenContainer = document.getElementById('monaco-editor-fullscreen');

    if (!container) {
        console.error('Monaco editor container not found');
        return;
    }

    // Clear the container content
    container.innerHTML = '';
    if (fullscreenContainer) {
        fullscreenContainer.innerHTML = '';
    }

    window.require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.49.0/min/vs' } });
    window.require(['vs/editor/editor.main'], () => {
        try {
            console.log('Creating Monaco editor...');

            // Get initial settings
            const initialLanguage = document.getElementById('language-select')?.value || 'javascript';
            const initialTheme = document.getElementById('theme-select')?.value || 'vs-dark';
            const initialFontSize = parseInt(document.getElementById('font-size-select')?.value || '14');

            // Enhanced editor configuration
            const editorConfig = {
                value: `// Witaj w rozszerzonym edytorze Monaco AI!
// Wybierz język programowania z górnego menu
// Użyj Ctrl+Shift+P aby otworzyć paletę poleceń

console.log("Hello, World!");`,
                language: initialLanguage,
                theme: initialTheme,
                automaticLayout: true,
                fontSize: initialFontSize,
                fontFamily: 'Fira Code, Cascadia Code, Monaco, "Courier New", monospace',
                fontLigatures: true,
                lineNumbers: 'on',
                rulers: [80, 120],
                wordWrap: 'off',
                minimap: { enabled: true },
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                cursorBlinking: 'blink',
                cursorSmoothCaretAnimation: true,
                contextmenu: true,
                folding: true,
                foldingStrategy: 'indentation',
                showFoldingControls: 'always',
                bracketPairColorization: { enabled: true },
                guides: {
                    bracketPairs: true,
                    indentation: true
                },
                suggest: {
                    showKeywords: true,
                    showSnippets: true
                },
                quickSuggestions: {
                    other: true,
                    comments: true,
                    strings: true
                }
            };

            // Create main editor
            window.editor = monaco.editor.create(container, editorConfig);

            // Create fullscreen editor with same config
            if (fullscreenContainer) {
                window.fullscreenEditor = monaco.editor.create(fullscreenContainer, {
                    ...editorConfig,
                    value: ''
                });
            }

            console.log('Monaco editor created successfully');

            // Initialize editor controls and event listeners
            initEditorControls();
            initEditorEventListeners();
            updateEditorStatus();
            loadNotes();

        } catch (error) {
            console.error('Error creating Monaco editor:', error);
        }
    });
}

// Initialize editor controls and event handlers
function initEditorControls() {
    const languageSelect = document.getElementById('language-select');
    const encodingSelect = document.getElementById('encoding-select');
    const themeSelect = document.getElementById('theme-select');
    const fontSizeSelect = document.getElementById('font-size-select');

    const fullscreenToggle = document.getElementById('fullscreen-toggle');
    const wordWrapToggle = document.getElementById('word-wrap-toggle');
    const minimapToggle = document.getElementById('minimap-toggle');
    const formatCode = document.getElementById('format-code');
    const exitFullscreen = document.getElementById('exit-fullscreen');

    // Language change handler
    languageSelect?.addEventListener('change', (e) => {
        const language = e.target.value;
        if (window.editor) {
            const model = window.editor.getModel();
            monaco.editor.setModelLanguage(model, language);
        }
        if (window.fullscreenEditor) {
            const model = window.fullscreenEditor.getModel();
            monaco.editor.setModelLanguage(model, language);
        }
        updateEditorStatus();
    });

    // Encoding change handler (visual feedback)
    encodingSelect?.addEventListener('change', (e) => {
        const encoding = e.target.value;
        document.getElementById('editor-encoding').textContent = encoding.toUpperCase();
        showNotification(`Zmieniono kodowanie na: ${encoding.toUpperCase()}`);
    });

    // Theme change handler
    themeSelect?.addEventListener('change', (e) => {
        const theme = e.target.value;
        monaco.editor.setTheme(theme);
    });

    // Font size change handler
    fontSizeSelect?.addEventListener('change', (e) => {
        const fontSize = parseInt(e.target.value);
        if (window.editor) {
            window.editor.updateOptions({ fontSize: fontSize });
        }
        if (window.fullscreenEditor) {
            window.fullscreenEditor.updateOptions({ fontSize: fontSize });
        }
    });

    // Fullscreen toggle
    fullscreenToggle?.addEventListener('click', () => {
        toggleFullscreenEditor();
    });

    // Word wrap toggle
    wordWrapToggle?.addEventListener('click', (e) => {
        const currentWrap = window.editor.getOption(monaco.editor.EditorOption.wordWrap);
        const newWrap = currentWrap === 'off' ? 'on' : 'off';

        if (window.editor) {
            window.editor.updateOptions({ wordWrap: newWrap });
        }
        if (window.fullscreenEditor) {
            window.fullscreenEditor.updateOptions({ wordWrap: newWrap });
        }

        e.target.classList.toggle('active', newWrap === 'on');
        showNotification(`Zawijanie wierszy: ${newWrap === 'on' ? 'włączone' : 'wyłączone'}`);
    });

    // Minimap toggle
    minimapToggle?.addEventListener('click', (e) => {
        const currentMinimap = window.editor.getOption(monaco.editor.EditorOption.minimap);
        const newMinimapEnabled = !currentMinimap.enabled;

        if (window.editor) {
            window.editor.updateOptions({ minimap: { enabled: newMinimapEnabled } });
        }
        if (window.fullscreenEditor) {
            window.fullscreenEditor.updateOptions({ minimap: { enabled: newMinimapEnabled } });
        }

        e.target.classList.toggle('active', newMinimapEnabled);
        showNotification(`Minimapa: ${newMinimapEnabled ? 'włączona' : 'wyłączona'}`);
    });

    // Format code
    formatCode?.addEventListener('click', () => {
        if (window.editor) {
            window.editor.getAction('editor.action.formatDocument').run();
        }
        showNotification('Kod został sformatowany');
    });

    // Exit fullscreen
    exitFullscreen?.addEventListener('click', () => {
        console.log('Exit fullscreen button clicked');
        toggleFullscreenEditor();
    });

    // Close fullscreen modal when clicking outside
    const fullscreenModal = document.getElementById('editor-fullscreen-modal');
    fullscreenModal?.addEventListener('click', (e) => {
        if (e.target === fullscreenModal) {
            console.log('Clicked outside fullscreen modal');
            toggleFullscreenEditor();
        }
    });
}

// Initialize editor event listeners for status updates
function initEditorEventListeners() {
    if (!window.editor) return;

    // Cursor position change
    window.editor.onDidChangeCursorPosition((e) => {
        updateEditorStatus();
    });

    // Content change
    window.editor.onDidChangeModelContent((e) => {
        updateEditorStatus();
        // Sync with fullscreen editor when not in fullscreen mode
        if (window.fullscreenEditor && !isFullscreenMode()) {
            window.fullscreenEditor.setValue(window.editor.getValue());
        }
    });

    // Focus/blur events for better UX
    window.editor.onDidFocusEditorText(() => {
        const container = document.getElementById('monaco-editor-container');
        if (container) container.style.borderColor = 'var(--accent-color)';
    });

    window.editor.onDidBlurEditorText(() => {
        const container = document.getElementById('monaco-editor-container');
        if (container) container.style.borderColor = 'var(--border-color)';
    });

    // Add keyboard shortcuts
    window.addEventListener('keydown', handleEditorKeyboard);
}

// Handle keyboard shortcuts for editor
function handleEditorKeyboard(e) {
    // Only handle if we have focus on editor or modal
    const modal = document.getElementById('myModal1');
    if (!modal?.classList.contains('active')) return;

    // F11 - Toggle fullscreen
    if (e.key === 'F11') {
        e.preventDefault();
        toggleFullscreenEditor();
        return;
    }

    // Escape - Exit fullscreen if in fullscreen mode
    if (e.key === 'Escape' && isFullscreenMode()) {
        e.preventDefault();
        toggleFullscreenEditor();
        return;
    }

    // Ctrl+S - Save note
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        saveNote();
        return;
    }

    // Ctrl+Shift+F - Format code
    if (e.ctrlKey && e.shiftKey && e.key === 'F') {
        e.preventDefault();
        if (window.editor) {
            window.editor.getAction('editor.action.formatDocument').run();
            showNotification('Kod został sformatowany');
        }
        return;
    }

    // Alt+W - Toggle word wrap
    if (e.altKey && e.key === 'w') {
        e.preventDefault();
        const wordWrapToggle = document.getElementById('word-wrap-toggle');
        if (wordWrapToggle) {
            wordWrapToggle.click();
        }
        return;
    }

    // Alt+M - Toggle minimap
    if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const minimapToggle = document.getElementById('minimap-toggle');
        if (minimapToggle) {
            minimapToggle.click();
        }
        return;
    }
}

// Update editor status bar
function updateEditorStatus() {
    if (!window.editor) return;

    const position = window.editor.getPosition();
    const model = window.editor.getModel();
    const language = model.getLanguageId();
    const lineCount = model.getLineCount();
    const encoding = document.getElementById('encoding-select')?.value || 'utf-8';

    document.getElementById('cursor-position').textContent = `Ln ${position.lineNumber}, Col ${position.column} (${lineCount} lines)`;
    document.getElementById('editor-language').textContent = language.toUpperCase();
    document.getElementById('editor-encoding').textContent = encoding.toUpperCase();
}

// Toggle fullscreen editor mode
function toggleFullscreenEditor() {
    const fullscreenModal = document.getElementById('editor-fullscreen-modal');
    const exitButton = document.getElementById('exit-fullscreen');
    const fullscreenContainer = document.getElementById('monaco-editor-fullscreen');

    console.log('🔄 toggleFullscreenEditor called');
    console.log('📦 fullscreenModal:', fullscreenModal);
    console.log('🚪 exitButton:', exitButton);
    console.log('💻 fullscreenContainer:', fullscreenContainer);
    console.log('🎯 window.fullscreenEditor:', window.fullscreenEditor);
    console.log('📝 window.editor:', window.editor);

    if (!fullscreenModal) {
        console.error('Fullscreen modal not found');
        return;
    }

    if (isFullscreenMode()) {
        console.log('Exiting fullscreen mode');
        // Exit fullscreen
        fullscreenModal.classList.remove('active');



        // Sync back to main editor
        if (window.editor && window.fullscreenEditor) {
            window.editor.setValue(window.fullscreenEditor.getValue());
            window.editor.focus();
        }
        showNotification('Wyszedłeś z trybu pełnoekranowego');
    } else {
        console.log('Entering fullscreen mode');
        // Enter fullscreen
        if (window.fullscreenEditor && window.editor) {
            window.fullscreenEditor.setValue(window.editor.getValue());
            fullscreenModal.classList.add('active');

            // Ensure exit button is visible and properly styled
            if (exitButton) {
                exitButton.style.display = 'flex';
                exitButton.style.visibility = 'visible';
                exitButton.style.opacity = '1';
                exitButton.style.zIndex = '10001';
                console.log('Exit button made visible');
            }



            // Focus fullscreen editor after animation
            setTimeout(() => {
                window.fullscreenEditor.focus();
                window.fullscreenEditor.layout();
            }, 300);

            showNotification('Tryb pełnoekranowy aktywny - naciśnij Escape lub przycisk Zamknij aby wyjść');
        } else {
            console.error('Fullscreen editor not initialized properly');
        }
    }
}

// Check if in fullscreen mode
function isFullscreenMode() {
    const fullscreenModal = document.getElementById('editor-fullscreen-modal');
    return fullscreenModal?.classList.contains('active') || false;
}



// Show notification helper
function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.className = 'editor-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-color);
        color: var(--bg-primary);
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 10001;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// --- GEMINI API HELPERS ---

async function runAi(prompt, modelElementId, loadingElementId, outputElementId, systemInstruction, maxRetries = 3) {
    const modelSelect = document.getElementById(modelElementId);
    const loadingIndicator = document.getElementById(loadingElementId);
    const outputElement = document.getElementById(outputElementId);

    if (!modelSelect || !loadingIndicator || !outputElement) return;

    // Check if AI is initialized
    if (!ai) {
        showErrorModal('Błąd AI', 'Klucz API nie został skonfigurowany. Wprowadź prawidłowy klucz API Google GenAI.', 'Przejdź do pola klucza API w górnej części strony.');
        return;
    }

    // Enhanced loading indicator
    loadingIndicator.style.display = 'block';
    loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generowanie odpowiedzi AI...';
    outputElement.innerHTML = '';

    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            attempt++;

            // Update loading message for retries
            if (attempt > 1) {
                loadingIndicator.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Próba ${attempt}/${maxRetries}...`;
            }

            // Timeout promise
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject(new Error('Timeout - zapytanie trwało zbyt długo')), 30000);
            });

            // Get the model
            const model = ai.getGenerativeModel({ model: modelSelect.value });

            // AI request promise
            const aiPromise = model.generateContent({
                contents: [{
                    role: 'user',
                    parts: [{ text: systemInstruction ? `${systemInstruction}\n\n${prompt}` : prompt }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 8192,
                },
            });

            // Race between timeout and AI response
            const response = await Promise.race([aiPromise, timeoutPromise]);

            // Success - format and display response
            const responseText = response.response.text();
            const formattedText = responseText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
                .replace(/\n/g, '<br>');

            outputElement.innerHTML = formattedText;

            // Apply syntax highlighting if code blocks exist
            const codeBlocks = outputElement.querySelectorAll('pre code');
            codeBlocks.forEach(block => {
                // Simple syntax highlighting for common languages
                highlightCode(block);
            });

            break; // Success, break out of retry loop

        } catch (error) {
            console.error(`AI Error (attempt ${attempt}):`, error);

            if (attempt >= maxRetries) {
                // All retries exhausted
                let errorMessage = 'Wystąpił błąd podczas generowania odpowiedzi AI.';

                if (error.message.includes('Timeout')) {
                    errorMessage = 'Zapytanie przekroczyło limit czasu. Spróbuj ponownie z krótszym promptem.';
                } else if (error.message.includes('quota')) {
                    errorMessage = 'Osiągnięto limit API. Spróbuj ponownie później.';
                } else if (error.message.includes('safety')) {
                    errorMessage = 'Treść została zablokowana ze względów bezpieczeństwa. Spróbuj przeformułować zapytanie.';
                }

                // Show error modal instead of inline error
                showErrorModal('Błąd AI', errorMessage, `Szczegóły: ${error.message}`);
            } else {
                // Wait before retry
                await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
            }
        }
    }

    loadingIndicator.style.display = 'none';
}

// Simple syntax highlighting function
function highlightCode(codeElement) {
    const code = codeElement.textContent;
    const language = codeElement.className.replace('language-', '') || 'javascript';

    let highlightedCode = code;

    // Basic syntax highlighting patterns
    const patterns = {
        javascript: [
            { regex: /\b(function|const|let|var|if|else|for|while|return|import|export|class|extends)\b/g, class: 'keyword' },
            { regex: /"([^"\\]|\\.)*"/g, class: 'string' },
            { regex: /'([^'\\]|\\.)*'/g, class: 'string' },
            { regex: /\/\/.*$/gm, class: 'comment' },
            { regex: /\/\*[\s\S]*?\*\//g, class: 'comment' }
        ],
        python: [
            { regex: /\b(def|class|if|elif|else|for|while|import|from|return|try|except|with|as)\b/g, class: 'keyword' },
            { regex: /"([^"\\]|\\.)*"/g, class: 'string' },
            { regex: /'([^'\\]|\\.)*'/g, class: 'string' },
            { regex: /#.*$/gm, class: 'comment' }
        ],
        html: [
            { regex: /<\/?[\w\s="/.':;#-\/\?]+>/g, class: 'tag' },
            { regex: /<!--[\s\S]*?-->/g, class: 'comment' }
        ]
    };

    if (patterns[language]) {
        patterns[language].forEach(pattern => {
            highlightedCode = highlightedCode.replace(pattern.regex, `<span class="highlight-${pattern.class}">$&</span>`);
        });
        codeElement.innerHTML = highlightedCode;
    }
}

function parseJsonFromMarkdown(text) {
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = text.match(fenceRegex);
    let jsonStr = text.trim();
    if (match && match[2]) {
        jsonStr = match[2].trim();
    }
    try {
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error("Failed to parse JSON response:", e);
        throw new Error("Nie udało się przetworzyć odpowiedzi AI. Odpowiedź nie była w formacie JSON.");
    }
}

// --- MODAL-SPECIFIC FUNCTIONALITY ---

function initNotepadModal() {
    document.getElementById('save-note-button')?.addEventListener('click', saveNote);
    document.getElementById('summarize-note-button')?.addEventListener('click', () => {
        const content = getCurrentEditorContent();
        if (!content.trim()) {
            showErrorModal('Błąd', 'Edytor jest pusty. Napisz coś, aby to podsumować.');
            return;
        }
        runAi(content, 'ai-model-select-1', 'loading-indicator-1', 'translation-output', 'Podsumuj ten tekst w kilku kluczowych punktach.');
    });
    document.getElementById('expand-note-button')?.addEventListener('click', () => {
        const content = getCurrentEditorContent();
        if (!content.trim()) {
            showErrorModal('Błąd', 'Edytor jest pusty. Napisz coś, aby to rozwinąć.');
            return;
        }
        runAi(content, 'ai-model-select-1', 'loading-indicator-1', 'translation-output', 'Rozwiń ten temat, dodając więcej szczegółów i kontekstu.');
    });
    document.getElementById('translate-note-button')?.addEventListener('click', () => {
        const content = getCurrentEditorContent();
        if (!content.trim()) {
            showErrorModal('Błąd', 'Edytor jest pusty. Napisz coś, aby to przetłumaczyć.');
            return;
        }
        const lang = document.getElementById('translation-language-select').value;
        runAi(content, 'ai-model-select-1', 'loading-indicator-1', 'translation-output', `Przetłumacz ten tekst na język ${lang}.`);
    });
}

function initApiModal() {
    console.log('Initializing API modal...');
    // API modal initialization is handled by initApiKey() function
    // This function is here for consistency with other modal initializations
}

// Helper function to get content from current active editor
function getCurrentEditorContent() {
    if (isFullscreenMode() && window.fullscreenEditor) {
        return window.fullscreenEditor.getValue();
    } else if (window.editor) {
        return window.editor.getValue();
    }
    return '';
}

// Helper function to set content in current active editor
function setCurrentEditorContent(content) {
    if (isFullscreenMode() && window.fullscreenEditor) {
        window.fullscreenEditor.setValue(content);
    } else if (window.editor) {
        window.editor.setValue(content);
    }
}

function saveNote() {
    const content = getCurrentEditorContent();
    if (!content.trim()) {
        showErrorModal('Błąd', 'Nie można zapisać pustej notatki.');
        return;
    }
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const noteTitle = content.split('\n')[0].substring(0, 40) || 'Nowa notatka';
    const timestamp = new Date().toLocaleString('pl-PL');
    notes.push({
        title: noteTitle,
        content: content,
        id: Date.now(),
        timestamp: timestamp,
        language: document.getElementById('language-select')?.value || 'javascript'
    });
    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();
    showNotification(`Notatka "${noteTitle}" została zapisana`);
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const listEl = document.getElementById('saved-notes-list');

    if (!listEl) return;

    listEl.innerHTML = '';

    if (notes.length === 0) {
        listEl.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: var(--spacing-md); font-size: 12px;">🗒️<br>Brak zapisanych notatek</div>';
        return;
    }

    // Sort notes by timestamp (newest first)
    notes.sort((a, b) => b.id - a.id);

    notes.forEach((note) => {
        const item = document.createElement('div');
        item.className = 'saved-note-item';

        const noteHeader = document.createElement('div');
        noteHeader.className = 'note-header';
        noteHeader.innerHTML = `
            <div class="note-title">${note.title}</div>
            <div class="note-meta">
                <span class="note-language">${(note.language || 'javascript').toUpperCase()}</span>
                ${note.timestamp ? `<span class="note-timestamp">${note.timestamp}</span>` : ''}
            </div>
        `;

        const actions = document.createElement('div');
        actions.className = 'note-actions';

        const loadBtn = document.createElement('button');
        loadBtn.innerHTML = '<i class="fas fa-file-import"></i>';
        loadBtn.className = 'load-note-btn';
        loadBtn.title = 'Załaduj notatkę';
        loadBtn.onclick = (e) => {
            e.stopPropagation();
            loadNoteContent(note);
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.className = 'delete-note-btn';
        deleteBtn.title = 'Usuń notatkę';
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            deleteNote(note.id);
        };

        actions.appendChild(loadBtn);
        actions.appendChild(deleteBtn);

        item.appendChild(noteHeader);
        item.appendChild(actions);

        // Click on item to load note
        item.onclick = () => loadNoteContent(note);

        listEl.appendChild(item);
    });
}

// Load note content and set language
function loadNoteContent(note) {
    setCurrentEditorContent(note.content);

    // Set language if available
    if (note.language) {
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.value = note.language;
            // Trigger change event to update editor
            languageSelect.dispatchEvent(new Event('change'));
        }
    }

    showNotification(`Załadowano notatkę: ${note.title}`);
}

function deleteNote(id) {
    let notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes = notes.filter((note) => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();
}

async function initQuickLinksModal() {
    document.getElementById('suggest-links-button')?.addEventListener('click', async () => {
        const input = document.getElementById('link-suggestion-input').value;
        const loadingIndicator = document.getElementById('loading-indicator-2');
        const outputElement = document.getElementById('suggested-links-output');

        const prompt = `Zasugeruj 5 przydatnych linków na temat "${input}". Zwróć jako tablicę obiektów JSON z kluczami "title" i "url".`;

        loadingIndicator.style.display = 'block';
        outputElement.innerHTML = '';

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-preview-04-17',
                contents: prompt,
                config: { responseMimeType: "application/json" }
            });

            const links = parseJsonFromMarkdown(response.text);
            if (Array.isArray(links)) {
                outputElement.innerHTML = links.map(link =>
                    `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.title}</a>`
                ).join('');
            } else {
                outputElement.innerText = "Otrzymano nieprawidłowy format danych.";
            }
        } catch (error) {
            console.error("AI Error:", error);
            outputElement.innerText = `Wystąpił błąd: ${error}`;
        } finally {
            loadingIndicator.style.display = 'none';
        }
    });
}

function initAddonsModal() {
    document.getElementById('suggest-extension-button')?.addEventListener('click', () => {
        const idea = document.getElementById('extension-idea-input').value;
        const prompt = `Rozwiń ten pomysł na rozszerzenie przeglądarki: "${idea}". Opisz jego główne funkcje, grupę docelową i zaproponuj chwytliwą nazwę. Sformatuj odpowiedź używając nagłówków markdown.`;
        runAi(prompt, 'ai-model-select-3', 'loading-indicator-3', 'extension-suggestion-output');
    });
}

function initUiOptimizationModal() {
    document.getElementById('suggest-ui-optimization-button')?.addEventListener('click', () => {
        const idea = document.getElementById('ui-optimization-input').value;
        const prompt = `Zaproponuj konkretne sugestie optymalizacji UI/UX dla następującego problemu: "${idea}". Skup się na praktycznych, możliwych do wdrożenia zmianach.`;
        runAi(prompt, 'ai-model-select-4', 'loading-indicator-4', 'ui-optimization-output');
    });
}

async function initCardGeneratorModal() {
    document.getElementById('generate-card-content-button')?.addEventListener('click', async () => {
        const topic = document.getElementById('card-topic-input').value;
        const loadingIndicator = document.getElementById('loading-indicator-5');
        const outputElement = document.getElementById('card-generator-output');

        const prompt = `Wygeneruj treść dla karty informacyjnej na temat "${topic}". Podaj krótki, chwytliwy tytuł (max 5 słów) i jednozdaniowy opis (max 20 słów). Zwróć jako obiekt JSON z kluczami "title" i "description".`;

        loadingIndicator.style.display = 'block';
        outputElement.innerHTML = '';

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-preview-04-17',
                contents: prompt,
                config: { responseMimeType: "application/json" }
            });
            const card = parseJsonFromMarkdown(response.text);
            outputElement.innerHTML = `<h3>${card.title}</h3><p>${card.description}</p>`;
        } catch (error) {
            console.error("AI Error:", error);
            outputElement.innerText = `Wystąpił błąd: ${error}`;
        } finally {
            loadingIndicator.style.display = 'none';
        }
    });
}

function initChatModal() {
    const sendButton = document.getElementById('send-chat-button');
    const chatInput = document.getElementById('chat-input');

    sendButton?.addEventListener('click', handleChatMessage);
    chatInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleChatMessage();
        }
    });
}

async function handleChatMessage() {
    const chatInput = document.getElementById('chat-input');
    const messagesContainer = document.getElementById('chat-messages');
    const loadingIndicator = document.getElementById('loading-indicator-6');
    const modelSelect = document.getElementById('ai-model-select-6');

    const message = chatInput.value.trim();
    if (!message) return;

    // Display user message with improved formatting
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.innerHTML = escapeHtml(message).replace(/\n/g, '<br>');
    messagesContainer.appendChild(userMessageDiv);

    chatInput.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Enhanced loading indicator
    loadingIndicator.style.display = 'block';
    loadingIndicator.innerHTML = '<i class="fas fa-robot fa-spin"></i> AI myśli...';

    try {
        // Use the enhanced runAi function for better error handling
        const tempOutputId = 'temp-chat-output-' + Date.now();
        const tempDiv = document.createElement('div');
        tempDiv.id = tempOutputId;
        tempDiv.style.display = 'none';
        document.body.appendChild(tempDiv);

        // Enhanced system instruction for chat
        const systemInstruction = `Jesteś pomocnym asystentem AI. Odpowiadaj w języku polskim, chyba że użytkownik prosi o inny język. 
        Bądź przyjazny, konkretny i pomocny. Jeśli nie znasz odpowiedzi, szczerze to przyznaj.
        Formatuj swoje odpowiedzi używając markdown gdy to może pomóc w czytelności.`;

        await runAi(message, 'ai-model-select-6', 'loading-indicator-6', tempOutputId, systemInstruction);

        // Transfer the response to chat
        const aiMessageDiv = document.createElement('div');
        aiMessageDiv.className = 'message ai-message';
        aiMessageDiv.innerHTML = tempDiv.innerHTML || 'Nie udało się wygenerować odpowiedzi.';
        messagesContainer.appendChild(aiMessageDiv);

        // Clean up temp element
        tempDiv.remove();

        // Add message to chat history for context
        if (!window.chatHistory) window.chatHistory = [];
        window.chatHistory.push({
            role: 'user',
            content: message
        });
        window.chatHistory.push({
            role: 'assistant',
            content: aiMessageDiv.textContent || aiMessageDiv.innerText
        });

        // Keep only last 10 exchanges to manage context length
        if (window.chatHistory.length > 20) {
            window.chatHistory = window.chatHistory.slice(-20);
        }

    } catch (error) {
        console.error("Chat Error:", error);
        // Show error modal for chat errors
        showErrorModal('Błąd czatu', 'Wystąpił problem z połączeniem AI.', `Szczegóły: ${error.message}`);
    } finally {
        loadingIndicator.style.display = 'none';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Helper function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}

async function initCodeGeneratorModal() {
    document.getElementById('generate-code-button')?.addEventListener('click', async () => {
        const description = document.getElementById('code-description-input').value;
        if (!description.trim()) {
            showErrorModal('Błąd walidacji', 'Proszę podaj opis kodu do wygenerowania.');
            return;
        }

        const systemInstruction = `Jesteś ekspertem programistą. Generuj czysty, dobrze skomentowany kod zgodnie z najlepszymi praktykami.
        
        Zasady:
        1. Zawsze umieszczaj kod w bloku markdown z określonym językiem
        2. Dodaj komentarze wyjaśniające kluczowe części
        3. Użyj opisowych nazw zmiennych
        4. Podaj przykład użycia jeśli to możliwe
        5. Zasugeruj dodatkowe ulepszenia jeśli to pomocne`;

        const enhancedPrompt = `Wygeneruj fragment kodu dla: "${description}".

        Struktura odpowiedzi:
        - Krótkie wyjaśnienie co robi kod
        - Główny kod w odpowiednim bloku markdown
        - Przykład użycia (jeśli dotyczy)
        - Opcjonalne sugestie rozszerzeń`;

        runAi(enhancedPrompt, 'ai-model-select-7', 'loading-indicator-7', 'code-generator-output', systemInstruction);
    });

    // Dodaj obsługę Enter w polu input
    document.getElementById('code-description-input')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            document.getElementById('generate-code-button')?.click();
        }
    });

    // Dodaj predefiniowane przykłady
    addCodeExamples();
}

function addCodeExamples() {
    const examplesContainer = document.getElementById('code-examples-container');
    if (!examplesContainer) return;

    const examples = [
        {
            title: "📋 Formularz kontaktowy",
            description: "formularz kontaktowy HTML z walidacją JavaScript"
        },
        {
            title: "🎮 Gra w kółko i krzyżyk",
            description: "prosta gra w kółko i krzyżyk w JavaScript"
        },
        {
            title: "📊 Wykres danych",
            description: "wykres słupkowy z danymi sprzedaży w Python matplotlib"
        },
        {
            title: "🔒 System logowania",
            description: "bezpieczny system logowania w PHP z haszowaniem"
        },
        {
            title: "🎨 Responsywne menu",
            description: "responsywne menu nawigacyjne CSS z animacjami"
        }
    ];

    examples.forEach(example => {
        const button = document.createElement('button');
        button.className = 'example-button';
        button.innerHTML = `<span>${example.title}</span>`;
        button.onclick = () => {
            document.getElementById('code-description-input').value = example.description;
        };
        examplesContainer.appendChild(button);
    });
}

function initTranslatorModal() {
    document.getElementById('translate-text-button')?.addEventListener('click', () => {
        const text = document.getElementById('translation-input').value;
        const lang = document.getElementById('target-language-select').value;
        const prompt = `Przetłumacz poniższy tekst na język ${lang}. Zwróć tylko przetłumaczony tekst, bez żadnych dodatkowych wyjaśnień.\n\nTekst: "${text}"`;
        runAi(prompt, 'ai-model-select-8', 'loading-indicator-8', 'translation-output-display');
    });
}

function initTextAnalyzerModal() {
    document.getElementById('analyze-text-button')?.addEventListener('click', () => {
        const text = document.getElementById('text-analysis-input').value;
        if (!text.trim()) {
            showErrorModal('Błąd walidacji', 'Proszę wklej tekst do analizy.');
            return;
        }

        // Collect selected analysis options
        const options = [];
        if (document.getElementById('sentiment-analysis').checked) options.push('sentiment');
        if (document.getElementById('tone-analysis').checked) options.push('tone');
        if (document.getElementById('readability-analysis').checked) options.push('readability');
        if (document.getElementById('keyword-analysis').checked) options.push('keywords');
        if (document.getElementById('summary-analysis').checked) options.push('summary');
        if (document.getElementById('improvement-suggestions').checked) options.push('improvements');

        if (options.length === 0) {
            showErrorModal('Błąd walidacji', 'Proszę wybierz przynajmniej jedną opcję analizy.');
            return;
        }

        const systemInstruction = `Jesteś ekspertem w analizie tekstu i językoznawstwie. Przeprowadź dokładną analizę podanego tekstu.
        
        Formatuj odpowiedź w HTML używając:
        - <div class="analysis-section"> dla każdej sekcji analizy
        - <h4> dla nagłówków sekcji z odpowiednimi ikonami
        - <div class="analysis-result"> dla wyników
        - Klasy CSS: sentiment-positive, sentiment-negative, sentiment-neutral dla sentymentu
        - Klasy CSS: readability-easy, readability-medium, readability-hard dla trudności czytania
        
        Bądź konkretny i podaj praktyczne uwagi.`;

        let analysisTypes = {
            'sentiment': 'Analiza sentymentu (pozytywny/negatywny/neutralny)',
            'tone': 'Analiza tonu (formalny/nieformalny, profesjonalny/casual, etc.)',
            'readability': 'Analiza trudności czytania (łatwy/średni/trudny)',
            'keywords': 'Identyfikacja słów kluczowych i tematów',
            'summary': 'Krótkie streszczenie tekstu',
            'improvements': 'Sugestie poprawek stylistycznych i językowych'
        };

        const selectedAnalyses = options.map(opt => analysisTypes[opt]).join(', ');

        const prompt = `Przeanalizuj poniższy tekst pod kątem: ${selectedAnalyses}

TEKST DO ANALIZY:
"${text}"

Przeprowadź szczegółową analizę i przedstaw wyniki w przejrzysty sposób z użyciem HTML i odpowiednich klas CSS.`;

        runAi(prompt, 'ai-model-select-10', 'loading-indicator-10', 'text-analysis-output', systemInstruction);
    });

    // Add Enter key support for text area
    document.getElementById('text-analysis-input')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            document.getElementById('analyze-text-button')?.click();
        }
    });

    // Add quick text examples
    addTextAnalysisExamples();
}

function addTextAnalysisExamples() {
    const textInput = document.getElementById('text-analysis-input');
    if (!textInput) return;

    const examples = [
        {
            title: "📰 Tekst formalny",
            text: "Zgodnie z przedstawionymi danymi, wzrost gospodarczy w ostatnim kwartale wyniósł 3.2%, co stanowi znaczący postęp w porównaniu do analogicznego okresu roku poprzedniego. Eksperci przewidują dalszy wzrost w nadchodzących miesiącach."
        },
        {
            title: "💬 Tekst nieformalny",
            text: "Hej! Sprawdziłem wczoraj ten nowy film i muszę przyznać, że totalnie mnie rozczarował. Spodziewałem się czegoś lepszego, ale w końcu nie da się wszystkim dogodziać, prawda? 😅"
        },
        {
            title: "🏢 Email biznesowy",
            text: "Szanowni Państwo, w nawiązaniu do naszej wczorajszej rozmowy telefonicznej, przesyłam w załączeniu dokumenty niezbędne do finalizacji umowy. Prosimy o sprawdzenie i przesłanie podpisanych egzemplarzy do końca tygodnia."
        }
    ];

    // Add example buttons after the textarea
    const examplesDiv = document.createElement('div');
    examplesDiv.className = 'text-examples';
    examplesDiv.innerHTML = '<p><strong>Przykłady tekstów:</strong></p>';

    examples.forEach(example => {
        const button = document.createElement('button');
        button.className = 'example-button';
        button.textContent = example.title;
        button.style.margin = '4px';
        button.onclick = () => {
            textInput.value = example.text;
        };
        examplesDiv.appendChild(button);
    });

    textInput.parentNode.insertBefore(examplesDiv, textInput.nextSibling);
}

function initCardIframeLinks() {
    const contentContainer = document.querySelector('.content-container');
    const modal = document.getElementById('myModal9');
    const urlInput = document.getElementById('iframe-url-input');
    const loadButton = document.getElementById('load-iframe-button');
    const newTabButton = document.getElementById('open-in-new-tab-button');

    if (!contentContainer || !modal || !urlInput || !loadButton || !newTabButton) return;

    contentContainer.addEventListener('click', (e) => {
        const target = e.target;
        const link = target.closest('.card-iframe-link');

        if (link && link.matches('a')) {
            e.preventDefault();
            const url = link.getAttribute('href');
            if (url) {
                urlInput.value = url;
                newTabButton.href = url;
                modal.classList.add('active');
                loadButton.click();
            }
        }
    });
}

function initIframeViewerModal() {
    const modal = document.getElementById('myModal9');
    const loadButton = document.getElementById('load-iframe-button');
    const urlInput = document.getElementById('iframe-url-input');
    const iframe = document.getElementById('content-iframe');
    const loadingIndicator = document.getElementById('iframe-loading-indicator');
    const newTabButton = document.getElementById('open-in-new-tab-button');
    const refreshButton = document.getElementById('refresh-iframe-button');
    const closeButton = document.getElementById('close-iframe-button');

    if (!modal || !loadButton || !urlInput || !iframe || !loadingIndicator || !newTabButton || !refreshButton || !closeButton) return;

    const loadUrl = () => {
        const url = urlInput.value.trim();
        if (url) {
            let fullUrl = url;
            if (!/^https?:\/\//i.test(url)) {
                fullUrl = 'https://' + url;
                urlInput.value = fullUrl;
            }
            loadingIndicator.style.display = 'block';
            iframe.style.visibility = 'hidden';
            iframe.src = fullUrl;
            newTabButton.href = fullUrl;
        } else {
            showErrorModal('Błąd walidacji', 'Proszę wprowadzić URL.');
        }
    };

    loadButton.addEventListener('click', loadUrl);
    urlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            loadUrl();
        }
    });

    iframe.addEventListener('load', () => {
        loadingIndicator.style.display = 'none';
        iframe.style.visibility = 'visible';
    });

    iframe.addEventListener('error', () => {
        loadingIndicator.style.display = 'none';
        iframe.style.visibility = 'visible';
        showErrorModal('Błąd ładowania', 'Nie udało się załadować podanego adresu URL.', 'Strona może blokować osadzanie (X-Frame-Options) lub wystąpił inny błąd.');
    });

    refreshButton.addEventListener('click', () => {
        if (iframe.src && iframe.src !== 'about:blank') {
            iframe.contentWindow?.location.reload();
        }
    });

    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
        iframe.src = 'about:blank';
        urlInput.value = '';
        newTabButton.href = '#';
    });
}

// Function to show error modal with auto-close functionality
function showErrorModal(title, message, details = '') {
    // Remove existing error modal if present
    const existingModal = document.getElementById('error-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create error modal
    const errorModal = document.createElement('div');
    errorModal.id = 'error-modal';
    errorModal.className = 'error-modal';

    errorModal.innerHTML = `
        <div class="error-message">
            <button class="error-close-btn" onclick="closeErrorModal()">&times;</button>
            <i class="fas fa-exclamation-triangle"></i>
            <strong>${title}</strong>
            ${message}
            ${details ? `<small>${details}</small>` : ''}
            <div class="error-progress"></div>
        </div>
    `;

    document.body.appendChild(errorModal);

    // Show modal with animation
    setTimeout(() => {
        errorModal.classList.add('show');
    }, 10);

    // Auto close after 5 seconds
    setTimeout(() => {
        closeErrorModal();
    }, 5000);

    // Close on click outside
    errorModal.addEventListener('click', (e) => {
        if (e.target === errorModal) {
            closeErrorModal();
        }
    });

    // Close on Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeErrorModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Function to close error modal
function closeErrorModal() {
    const errorModal = document.getElementById('error-modal');
    if (errorModal) {
        errorModal.classList.remove('show');
        setTimeout(() => {
            errorModal.remove();
        }, 300);
    }
}
