// Dynamic HTML Generator Functions
// This file contains functions to dynamically create HTML elements

// Navigation Configuration
const navigationConfig = [
    {
        id: 'all-section',
        title: 'All',
        icon: 'fas fa-th-large',
        label: 'Show All',
        active: true
    },
    {
        id: 'editors-section',
        title: 'Editors',
        icon: 'fas fa-edit',
        label: 'Show Editors'
    },
    {
        id: 'tools-section',
        title: 'Tools',
        icon: 'fas fa-tools',
        label: 'Show Tools'
    },
    {
        id: 'data-section',
        title: 'Data',
        icon: 'fas fa-database',
        label: 'Show Data'
    },
    {
        id: 'code-section',
        title: 'Code',
        icon: 'fas fa-code',
        label: 'Show Code'
    }
];

// Header Icons Configuration
const headerIconsConfig = [
    { id: 'openModal1', icon: 'fas fa-cog', label: 'Open Notepad' },
    { id: 'openModal9', icon: 'fas fa-globe', label: 'Open Iframe Viewer' }
];

// Sections Configuration
const sectionsConfig = [
    { id: 'all-section', title: 'CARRD.CO LINKS', active: true },
    { id: 'editors-section', title: 'EDYTORY' },
    { id: 'tools-section', title: 'NARZĘDZIA' },
    { id: 'data-section', title: 'DANE' },
    { id: 'code-section', title: 'KOD' }
];

// Modals Configuration
const modalsConfig = [
    {
        id: 'myModal1',
        title: 'Mój Notatnik',
        description: 'Tutaj możesz zapisywać swoje szybkie notatki.',
        type: 'notepad'
    },
    {
        id: 'myModal9',
        title: '',
        type: 'iframe'
    }
];

// Function to create navigation HTML
function createNavigation() {
    return `
    <nav class="nav" id="nav">
        <button class="nav-button active" data-target="all-section" data-title="All" aria-label="Show All">
            <i class="fas fa-th-large"></i>
        </button>
        <button class="nav-button" data-target="editors-section" data-title="Editors" aria-label="Show Editors">
            <i class="fas fa-edit"></i>
        </button>
        <button class="nav-button" data-target="tools-section" data-title="Tools" aria-label="Show Tools">
            <i class="fas fa-tools"></i>
        </button>
        <button class="nav-button" data-target="data-section" data-title="Data" aria-label="Show Data">
            <i class="fas fa-database"></i>
        </button>
        <button class="nav-button" data-target="code-section" data-title="Code" aria-label="Show Code">
            <i class="fas fa-code"></i>
        </button>
        <div class="header-icon nav-theme" id="theme-toggle" data-target="theme-section" data-title="Theme"
            role="button" aria-label="Toggle Theme">
            <i class="fas fa-sun"></i>
        </div>
    </nav>`;
}

// Function to create header HTML
function createHeader() {
    const header = document.createElement('div');
    header.className = 'header';

    // Date section
    const dateDiv = document.createElement('div');
    dateDiv.className = 'date';
    const calendarIcon = document.createElement('i');
    calendarIcon.className = 'far fa-calendar-alt';
    const dateSpan = document.createElement('span');
    dateSpan.id = 'current-date';
    dateDiv.appendChild(calendarIcon);
    dateDiv.appendChild(dateSpan);

    // Timer section
    const timerDiv = document.createElement('div');
    timerDiv.className = 'timer';

    const hoursSpan = document.createElement('span');
    hoursSpan.id = 'hours';
    hoursSpan.textContent = '00';

    const divider1 = document.createElement('span');
    divider1.className = 'timer-divider';
    divider1.textContent = ':';

    const minutesSpan = document.createElement('span');
    minutesSpan.id = 'minutes';
    minutesSpan.textContent = '00';

    const divider2 = document.createElement('span');
    divider2.className = 'timer-divider';
    divider2.textContent = ':';

    const secondsSpan = document.createElement('span');
    secondsSpan.id = 'seconds';
    secondsSpan.textContent = '00';

    timerDiv.appendChild(hoursSpan);
    timerDiv.appendChild(divider1);
    timerDiv.appendChild(minutesSpan);
    timerDiv.appendChild(divider2);
    timerDiv.appendChild(secondsSpan);

    // Header icons section
    const headerIconsDiv = document.createElement('div');
    headerIconsDiv.className = 'header-icons';

    headerIconsConfig.forEach(iconConfig => {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'header-icon';
        iconDiv.id = iconConfig.id;
        iconDiv.setAttribute('role', 'button');
        iconDiv.setAttribute('aria-label', iconConfig.label);

        const icon = document.createElement('i');
        icon.className = iconConfig.icon;
        iconDiv.appendChild(icon);

        headerIconsDiv.appendChild(iconDiv);
    });

    header.appendChild(dateDiv);
    header.appendChild(timerDiv);
    header.appendChild(headerIconsDiv);

    return header;
}

// Function to create corner decorations
function createCornerDecorations() {
    const corners = ['corner-tl', 'corner-tr', 'corner-bl', 'corner-br'];
    return corners.map(cornerClass => {
        const corner = document.createElement('div');
        corner.className = cornerClass;
        return corner;
    });
}

// Function to create content sections
function createContentSections() {
    return `
    <div class="content-container">
        <!-- All Links Section -->
        <section id="all-section" class="content-section active">
            <div class="corner-tl"></div>
            <div class="corner-tr"></div>
            <div class="corner-bl"></div>
            <div class="corner-br"></div>
            <!-- Header with Date and Timer -->
            <div class="header">
                <div class="date">
                    <i class="far fa-calendar-alt"></i>
                    <span id="current-date"></span>
                </div>
                <div class="timer">
                    <span id="hours">00</span>
                    <span class="timer-divider">:</span>
                    <span id="minutes">00</span>
                    <span class="timer-divider">:</span>
                    <span id="seconds">00</span>
                </div>

                <div class="header-icons">
                    <div class="header-icon" id="openModal10" role="button" aria-label="Open API Settings">
                        <i class="fas fa-key"></i>
                    </div>
                    <div class="header-icon" id="openModal1" role="button" aria-label="Open Notepad">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <div class="header-icon" id="openModal9" role="button" aria-label="Open Iframe Viewer">
                        <i class="fas fa-globe"></i>
                    </div>
                </div>
            </div>

            <!-- Main Title -->
            <h1 class="title">CARRD.CO LINKS</h1>

            <!-- Grid Layout for Cards - Empty container to be filled by JavaScript -->
            <div class="grid-container" id="all-grid">
                <!-- Cards will be dynamically generated here -->
            </div>
        </section>

        <!-- Editors Section -->
        <section id="editors-section" class="content-section">
            <div class="corner-tl"></div>
            <div class="corner-tr"></div>
            <div class="corner-bl"></div>
            <div class="corner-br"></div>
            <h1 class="title">EDYTORY</h1>
            <div class="grid-container" id="editors-grid">
                <!-- Will be filled dynamically -->
            </div>
        </section>

        <!-- Tools Section -->
        <section id="tools-section" class="content-section">
            <div class="corner-tl"></div>
            <div class="corner-tr"></div>
            <div class="corner-bl"></div>
            <div class="corner-br"></div>
            <h1 class="title">NARZĘDZIA</h1>
            <div class="grid-container" id="tools-grid">
                <!-- Will be filled dynamically -->
            </div>
        </section>

        <!-- Data Section -->
        <section id="data-section" class="content-section">
            <div class="corner-tl"></div>
            <div class="corner-tr"></div>
            <div class="corner-bl"></div>
            <div class="corner-br"></div>
            <h1 class="title">DANE</h1>
            <div class="grid-container" id="data-grid">
                <!-- Will be filled dynamically -->
            </div>
        </section>

        <!-- Code Section -->
        <section id="code-section" class="content-section">
            <div class="corner-tl"></div>
            <div class="corner-tr"></div>
            <div class="corner-bl"></div>
            <div class="corner-br"></div>
            <h1 class="title">KOD</h1>
            <div class="grid-container" id="code-grid">
                <!-- Will be filled dynamically -->
            </div>
        </section>
    </div>`;
}

// Function to create notepad modal content
function createNotepadModalContent() {
    const content = document.createElement('div');
    content.innerHTML = `
        <span class="close-button" role="button" aria-label="Close">&times;</span>
        <h2>Notatnik</h2>
        
        <div class="notepad-layout">
            <div class="notepad-left">
                <div class="editor-controls">
                    <div class="editor-settings">
                        <div class="setting-group">
                            <label for="language-select">Język:</label>
                            <select id="language-select">
                                <option value="javascript">JavaScript</option>
                                <option value="typescript">TypeScript</option>
                                <option value="python">Python</option>
                                <option value="html">HTML</option>
                                <option value="css">CSS</option>
                                <option value="json">JSON</option>
                                <option value="markdown">Markdown</option>
                                <option value="sql">SQL</option>
                                <option value="php">PHP</option>
                                <option value="java">Java</option>
                                <option value="csharp">C#</option>
                                <option value="cpp">C++</option>
                                <option value="xml">XML</option>
                                <option value="yaml">YAML</option>
                                <option value="plaintext">Plain Text</option>
                            </select>
                        </div>
                        
                        <div class="setting-group">
                            <label for="encoding-select">Kodowanie:</label>
                            <select id="encoding-select">
                                <option value="utf-8">UTF-8</option>
                                <option value="utf-16">UTF-16</option>
                                <option value="iso-8859-1">ISO-8859-1</option>
                                <option value="windows-1250">Windows-1250</option>
                                <option value="cp852">CP852</option>
                            </select>
                        </div>
                        
                        <div class="setting-group">
                            <label for="theme-select">Motyw:</label>
                            <select id="theme-select">
                                <option value="vs-dark">Ciemny</option>
                                <option value="vs">Jasny</option>
                                <option value="hc-black">Wysoki kontrast</option>
                            </select>
                        </div>
                        
                        <div class="setting-group">
                            <label for="font-size-select">Rozmiar czcionki:</label>
                            <select id="font-size-select">
                                <option value="12">12px</option>
                                <option value="14" selected>14px</option>
                                <option value="16">16px</option>
                                <option value="18">18px</option>
                                <option value="20">20px</option>
                            </select>
                        </div>
                        
                        <div class="editor-toolbar">
                            <button id="fullscreen-toggle" class="editor-btn" title="Pełny ekran">
                                <i class="fas fa-expand"></i>
                            </button>
                            <button id="word-wrap-toggle" class="editor-btn" title="Zawijanie wierszy">
                                <i class="fas fa-align-left"></i>
                            </button>
                            <button id="minimap-toggle" class="editor-btn" title="Minimapa">
                                <i class="fas fa-map"></i>
                            </button>
                            <button id="format-code" class="editor-btn" title="Formatuj kod">
                                <i class="fas fa-code"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div id="monaco-editor-container" style="height: 710px; "></div>
                
                <div class="editor-status">
                    <span id="cursor-position">Ln 1, Col 1</span>
                    <span id="editor-encoding">UTF-8</span>
                    <span id="editor-language">JavaScript</span>
                </div>
            </div>
            
            <div class="notepad-right">
                <div class="ai-model-selection">
                    <label for="ai-model-select-1">Wybierz model AI:</label>
                    <select id="ai-model-select-1">
                        <option value="gemini-2.5-flash-preview-04-17">gemini-2.5-flash-preview-04-17</option>
                    </select>
                </div>
                
                <div class="notepad-buttons">
                    <button id="save-note-button" class="action-button"><i class="fas fa-save"></i> Zapisz Notatkę</button>
                    <button id="summarize-note-button" class="llm-button"><i class="fas fa-compress"></i> Podsumuj</button>
                    <button id="expand-note-button" class="llm-button"><i class="fas fa-expand"></i> Rozwiń</button>
                    <button id="translate-note-button" class="llm-button"><i class="fas fa-language"></i> Tłumacz</button>
                </div>
                
                <div class="ai-model-selection">
                    <label for="translation-language-select">Tłumacz na:</label>
                    <select id="translation-language-select">
                        <option value="English">Angielski</option>
                        <option value="Polish">Polski</option>
                        <option value="German">Niemiecki</option>
                        <option value="Spanish">Hiszpański</option>
                        <option value="French">Francuski</option>
                    </select>
                </div>
                
                <div id="loading-indicator-1" class="loading-indicator" style="display: none;">Ładowanie...</div>
                <div id="translation-output" class="extension-output"></div>
                
                <h3>Zapisane Notatki:</h3>
                <div id="saved-notes-list"></div>
            </div>
        </div>
    `;
    return content;
}

// Function to create iframe modal content
function createIframeModalContent() {
    const content = document.createElement('div');
    content.className = 'modal-content modal-fullscreen';
    content.innerHTML = `
        <div class="iframe-controls">
            <div class="iframe-input-group">
                <input type="url" id="iframe-url-input" class="textarea" placeholder="https://example.com">
                <button id="load-iframe-button" class="action-button search"><i class="fas fa-search" style="font-size: 1.2em;"></i></button>
            </div>
            <div class="iframe-action-buttons">
                <a id="open-in-new-tab-button" href="#" target="_blank" rel="noopener noreferrer" class="action-button" aria-label="Open in new tab"><i class="fas fa-external-link-alt"></i></a>
                <button id="refresh-iframe-button" class="action-button" aria-label="Refresh"><i class="fas fa-sync-alt"></i></button>
                <button id="close-iframe-button" class="action-button close" aria-label="Close"><i class="fas fa-times"></i></button>
            </div>
        </div>
        <div id="iframe-loading-indicator" class="loading-indicator" style="display: none;">Ładowanie strony...</div>
        <div id="iframe-container">
            <iframe id="content-iframe" src="about:blank" title="Content Viewer" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe>
        </div>
    `;
    return content;
}

// Function to create modal content based on type
function createModalContent(type) {
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    switch (type) {
        case 'notepad':
            return createNotepadModalContent();
        case 'quicklinks':
            return createQuickLinksModalContent();
        case 'ideas':
            return createIdeasModalContent();
        case 'ui-optimization':
            return createUIOptimizationModalContent();
        case 'card-generator':
            return createCardGeneratorModalContent();
        case 'chat':
            return createChatModalContent();
        case 'code-generator':
            return createCodeGeneratorModalContent();
        case 'translator':
            return createTranslatorModalContent();
        case 'text-analyzer':
            return createTextAnalyzerModalContent();
        case 'iframe':
            return createIframeModalContent();
        default:
            modalContent.innerHTML = `
                <span class="close-button" role="button" aria-label="Close">&times;</span>
                <h2>Modal</h2>
                <p>Content will be added here.</p>
            `;
            return modalContent;
    }
}

// Function to create all modals
function createModals() {
    const modalsContainer = document.createElement('div');

    modalsConfig.forEach(modalConfig => {
        const modal = document.createElement('div');
        modal.id = modalConfig.id;
        modal.className = 'modal';

        const modalContent = createModalContent(modalConfig.type);
        modal.appendChild(modalContent);

        modalsContainer.appendChild(modal);
    });

    // Add confirmation modal
    const confirmationModal = document.createElement('div');
    confirmationModal.id = 'confirmationModal';
    confirmationModal.className = 'modal';
    confirmationModal.innerHTML = `
        <div class="modal-content">
            <span class="close-button" id="confirm-close-button">&times;</span>
            <h2 id="confirmation-title">Potwierdź Akcję</h2>
            <p id="confirmation-message">Czy na pewno chcesz wykonać tę operację?</p>
            <div class="confirmation-buttons">
                <button class="action-button confirm" id="confirm-action-button">Potwierdź</button>
                <button class="action-button cancel" id="cancel-action-button">Anuluj</button>
            </div>
        </div>
    `;

    modalsContainer.appendChild(confirmationModal);

    return modalsContainer;
}

function createModals() {
    return `
    <!-- MODALS -->
    <div id="myModal1" class="modal">
        <div class="modal-content">
            <span class="close-button" role="button" aria-label="Close">&times;</span>
            <h2>Notatnik</h2>
            
            <div class="notepad-layout">
                <div class="notepad-left">
                    <div class="editor-controls">
                        <div class="editor-settings">
                            <div class="setting-group">
                                <label for="language-select">Język:</label>
                                <select id="language-select">
                                    <option value="javascript">JavaScript</option>
                                    <option value="typescript">TypeScript</option>
                                    <option value="python">Python</option>
                                    <option value="html">HTML</option>
                                    <option value="css">CSS</option>
                                    <option value="json">JSON</option>
                                    <option value="markdown">Markdown</option>
                                    <option value="sql">SQL</option>
                                    <option value="php">PHP</option>
                                    <option value="java">Java</option>
                                    <option value="csharp">C#</option>
                                    <option value="cpp">C++</option>
                                    <option value="xml">XML</option>
                                    <option value="yaml">YAML</option>
                                    <option value="plaintext">Plain Text</option>
                                </select>
                            </div>
                            
                            <div class="setting-group">
                                <label for="encoding-select">Kodowanie:</label>
                                <select id="encoding-select">
                                    <option value="utf-8">UTF-8</option>
                                    <option value="utf-16">UTF-16</option>
                                    <option value="iso-8859-1">ISO-8859-1</option>
                                    <option value="windows-1250">Windows-1250</option>
                                    <option value="cp852">CP852</option>
                                </select>
                            </div>
                            
                            <div class="setting-group">
                                <label for="theme-select">Motyw:</label>
                                <select id="theme-select">
                                    <option value="vs-dark">Ciemny</option>
                                    <option value="vs">Jasny</option>
                                    <option value="hc-black">Wysoki kontrast</option>
                                </select>
                            </div>
                            
                            <div class="setting-group">
                                <label for="font-size-select">Rozmiar czcionki:</label>
                                <select id="font-size-select">
                                    <option value="12">12px</option>
                                    <option value="14" selected>14px</option>
                                    <option value="16">16px</option>
                                    <option value="18">18px</option>
                                    <option value="20">20px</option>
                                </select>
                            </div>
                            
                            <div class="editor-toolbar">
                                <button id="fullscreen-toggle" class="editor-btn" title="Pełny ekran">
                                    <i class="fas fa-expand"></i>
                                </button>
                                <button id="word-wrap-toggle" class="editor-btn" title="Zawijanie wierszy">
                                    <i class="fas fa-align-left"></i>
                                </button>
                                <button id="minimap-toggle" class="editor-btn" title="Minimapa">
                                    <i class="fas fa-map"></i>
                                </button>
                                <button id="format-code" class="editor-btn" title="Formatuj kod">
                                    <i class="fas fa-code"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div id="monaco-editor-container" class="monaco-editor-container" style="height: 792px; "></div>
                    
                    <div class="editor-status">
                        <span id="cursor-position">Ln 1, Col 1</span>
                        <span id="editor-encoding">UTF-8</span>
                        <span id="editor-language">JavaScript</span>
                    </div>
                </div>
                
                <div class="notepad-right">
                    <div class="ai-model-selection">
                        <label for="ai-model-select-1">Wybierz model AI:</label>
                        <select id="ai-model-select-1">
                            <option value="gemini-2.5-flash-preview-04-17">gemini-2.5-flash-preview-04-17</option>
                        </select>
                    </div>
                    
                    <div class="notepad-buttons">
                        <button id="save-note-button" class="action-button"><i class="fas fa-save"></i> Zapisz Notatkę</button>
                        <button id="summarize-note-button" class="llm-button"><i class="fas fa-compress"></i> Podsumuj</button>
                        <button id="expand-note-button" class="llm-button"><i class="fas fa-expand"></i> Rozwiń</button>
                        <button id="translate-note-button" class="llm-button"><i class="fas fa-language"></i> Tłumacz</button>
                    </div>
                    
                    <div class="ai-model-selection">
                        <label for="translation-language-select">Tłumacz na:</label>
                        <select id="translation-language-select">
                            <option value="English">Angielski</option>
                            <option value="Polish">Polski</option>
                            <option value="German">Niemiecki</option>
                            <option value="Spanish">Hiszpański</option>
                            <option value="French">Francuski</option>
                        </select>
                    </div>
                    
                    <div id="loading-indicator-1" class="loading-indicator" style="display: none;">Ładowanie...</div>
                    <div id="translation-output" class="extension-output"></div>
                    
                    <h3>Zapisane Notatki:</h3>
                    <div id="saved-notes-list"></div>
                </div>
            </div>
            
        </div>
    </div>

    <!-- FULLSCREEN EDITOR MODAL - Separate from main modal -->
    <div id="editor-fullscreen-modal" class="fullscreen-modal">
        <div class="fullscreen-header">
            <div class="fullscreen-controls">
                <span class="fullscreen-title">Monaco Editor - Pełny ekran</span>
                <button id="exit-fullscreen" class="editor-btn x">
                    <i class="fas fa-close"></i>
                </button>
            </div>
        </div>
        <div id="monaco-editor-fullscreen"></div>
    </div>


    <div id="myModal9" class="modal">
        <div class="modal-content modal-fullscreen">
            <div class="iframe-controls">
                <div class="iframe-input-group">
                    <input type="url" id="iframe-url-input" class="textarea" placeholder="https://example.com">
                    <button id="load-iframe-button" class="action-button search"><i class="fas fa-search"
                            style="font-size: 1.2em;"></i></button>
                </div>
                <div class="iframe-action-buttons">
                    <a id="open-in-new-tab-button" href="#" target="_blank" rel="noopener noreferrer"
                        class="action-button" aria-label="Open in new tab"><i class="fas fa-external-link-alt"></i></a>
                    <button id="refresh-iframe-button" class="action-button" aria-label="Refresh"><i
                            class="fas fa-sync-alt"></i></button>
                    <button id="close-iframe-button" class="action-button close" aria-label="Close"><i
                            class="fas fa-times"></i></button>
                </div>
            </div>
            <div id="iframe-loading-indicator" class="loading-indicator" style="display: none;">Ładowanie strony...
            </div>
            <div id="iframe-container">
                <iframe id="content-iframe" src="about:blank" title="Content Viewer"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe>
            </div>
        </div>
    </div>

    <div id="confirmationModal" class="modal">
        <div class="modal-content">
            <span class="close-button" id="confirm-close-button">&times;</span>
            <h2 id="confirmation-title">Potwierdź Akcję</h2>
            <p id="confirmation-message">Czy na pewno chcesz wykonać tę operację?</p>
            <div class="confirmation-buttons">
                <button class="action-button confirm" id="confirm-action-button">Potwierdź</button>
                <button class="action-button cancel" id="cancel-action-button">Anuluj</button>
            </div>
        </div>
    </div>

    <!-- API KEY SETTINGS MODAL -->
    <div id="myModal10" class="modal-api">
        <div class="modal-api-overlay"></div>
        <div class="modal-api-container">
            <div class="modal-api-header">
                <div class="modal-api-title">
                    <i class="fas fa-key"></i>
                    <span>Konfiguracja API</span>
                </div>
                <button class="modal-api-close" id="close-api-modal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="modal-api-body">
                <div class="api-input-section">
                    <div class="api-input-header">
                        <label for="api-key-input">Google GenAI API Key</label>
                        <div class="api-input-status" id="api-key-status"></div>
                    </div>
                    
                    <div class="api-input-wrapper">
                        <input type="password" id="api-key-input" placeholder="Wprowadź swój klucz API..." class="api-input-field">
                        <button id="toggle-api-key" class="api-input-toggle" title="Pokaż/Ukryj klucz">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                
                <div class="api-buttons-section">
                    <button id="save-api-key" class="api-btn api-btn-primary">
                        <i class="fas fa-save"></i>
                        <span>Zapisz i Testuj</span>
                    </button>
                    <button id="clear-api-key" class="api-btn api-btn-danger">
                        <i class="fas fa-trash-alt"></i>
                        <span>Usuń Klucz</span>
                    </button>
                </div>
                
                <div class="api-help-section">
                    <div class="api-help-header">
                        <i class="fas fa-lightbulb"></i>
                        <span>Pomoc i Informacje</span>
                    </div>
                    <div class="api-help-content">
                        <div class="api-help-item">
                            <i class="fas fa-shield-alt"></i>
                            <span>Klucz przechowywany lokalnie i bezpiecznie</span>
                        </div>
                        <div class="api-help-item">
                            <i class="fas fa-robot"></i>
                            <span>Umożliwia korzystanie z funkcji AI</span>
                        </div>
                        <div class="api-help-item">
                            <i class="fas fa-sync-alt"></i>
                            <span>Automatyczne testowanie prawidłowości</span>
                        </div>
                        <div class="api-help-link">
                            <a href="https://ai.google.dev/gemini-api/docs/api-key" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-external-link-alt"></i>
                                <span>Pobierz klucz API Google</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

// Main function to generate all HTML dynamically
function generateDynamicHTML() {
    const body = document.body;

    // Create navigation
    const navHTML = createNavigation();
    body.insertAdjacentHTML('beforeend', navHTML);

    // Create content sections
    const sectionsHTML = createContentSections();
    body.insertAdjacentHTML('beforeend', sectionsHTML);

    // Create modals
    const modalsHTML = createModals();
    body.insertAdjacentHTML('beforeend', modalsHTML);
}

// Function to initialize dynamic HTML generation
function initDynamicHTML() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', generateDynamicHTML);
    } else {
        generateDynamicHTML();
    }
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateDynamicHTML,
        initDynamicHTML,
        createNavigation,
        createContentSections,
        createModals,
        navigationConfig,
        headerIconsConfig,
        sectionsConfig,
        modalsConfig
    };
}

// Alternative function to replace existing HTML structure
function replaceDynamicHTML() {
    const body = document.body;

    // Cleanup Monaco Editor if it exists
    if (typeof window.editor !== 'undefined' && window.editor) {
        console.log('Disposing Monaco editor before HTML replacement...');
        window.editor.dispose();
        window.editor = null;
    }

    // Clear existing navigation, content sections, and modals
    const existingNav = body.querySelector('nav');
    const existingContent = body.querySelector('.content-container');
    const existingModals = body.querySelectorAll('.modal');

    if (existingNav) existingNav.remove();
    if (existingContent) existingContent.remove();
    existingModals.forEach(modal => modal.remove());

    // Generate new structure
    generateDynamicHTML();
}

// Auto-initialize if script is loaded directly
if (typeof window !== 'undefined') {
    window.DynamicHTML = {
        generateDynamicHTML,
        replaceDynamicHTML,
        initDynamicHTML,
        createNavigation,
        createContentSections,
        createModals,
        navigationConfig,
        headerIconsConfig,
        sectionsConfig,
        modalsConfig
    };
}

// Usage examples:
// To generate HTML when DOM is ready: initDynamicHTML();
// To generate HTML immediately: generateDynamicHTML();
// To replace existing HTML: replaceDynamicHTML();

// Uncomment the line below to auto-initialize when DOM is ready
// document.addEventListener('DOMContentLoaded', generateDynamicHTML); 