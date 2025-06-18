import { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import { topics } from "./data/topics";

const componentMap = {
  1.1: lazy(() => import("./components/VariablesAndDataTypes")),
  1.2: lazy(() => import("./components/OperatorsGuide")),
  1.3: lazy(() => import("./components/ControlFlowGuide")),
  1.4: lazy(() => import("./components/FunctionsGuide")),
  1.5: lazy(() => import("./components/ArraysGuide")),
  1.6: lazy(() => import("./components/ObjectsGuide")),
  1.7: lazy(() => import("./components/LoopsGuide")),
  1.8: lazy(() => import("./components/ScopeGuide")),
  1.9: lazy(() => import("./components/HoistingGuide")),
  "1.10": lazy(() => import("./components/ClosuresGuide")),
  1.11: lazy(() => import("./components/ThisKeywordGuide")),
  1.12: lazy(() => import("./components/ErrorHandlingGuide")),
  1.13: lazy(() => import("./components/StrictModeGuide")),
  1.14: lazy(() => import("./components/JSONGuide")),
  1.15: lazy(() => import("./components/TypeCoercionConversionGuide")),
  1.16: lazy(() => import("./components/TruthyFalsyGuide")),
  2.1: lazy(() => import("./components/DOMManipulationGuide")),
  2.2: lazy(() => import("./components/EventHandlingGuide")),
  2.3: lazy(() => import("./components/PrototypeInheritanceGuide")),
  2.4: lazy(() => import("./components/AjaxFetchGuide")),
  2.5: lazy(() => import("./components/StorageGuide")),
  2.6: lazy(() => import("./components/TimersGuide")),
  3.1: lazy(() => import("./components/LetConstGuide")),
  3.2: lazy(() => import("./components/ArrowFunctionsGuide")),
  3.3: lazy(() => import("./components/DestructuringGuide")),
  3.4: lazy(() => import("./components/TemplateLiteralsGuide")),
  3.5: lazy(() => import("./components/DefaultParametersGuide")),
  3.6: lazy(() => import("./components/SpreadRestGuide")),
  3.7: lazy(() => import("./components/ClassesInheritanceGuide")),
  3.8: lazy(() => import("./components/ModulesGuide")),
  3.9: lazy(() => import("./components/PromisesGuide")),
  "3.10": lazy(() => import("./components/AsyncAwaitGuide")),
  3.11: lazy(() => import("./components/MapSetGuide")),
  3.12: lazy(() => import("./components/SymbolsGuide")),
  4.1: lazy(() => import("./components/FunctionalProgrammingGuide")),
  4.2: lazy(() => import("./components/CallbacksHOFGuide")),
  4.3: lazy(() => import("./components/DebounceThrottleGuide")),
  4.4: lazy(() => import("./components/EventDelegationGuide")),
  4.5: lazy(() => import("./components/DeepVsShallowCopyGuide")),
  4.6: lazy(() => import("./components/MemoryManagementGuide")),
  5.1: lazy(() => import("./components/DebuggingGuide")),
  5.2: lazy(() => import("./components/ESLintGuide")),
  5.3: lazy(() => import("./components/BundlersGuide")),
  5.4: lazy(() => import("./components/PackageManagementGuide")),
  6.1: lazy(() => import("./components/UnitTestingGuide")),
  7.1: lazy(() => import("./components/FetchThirdPartyAPIGuide")),
  7.2: lazy(() => import("./components/AccessibilityJSGuide")),
  7.3: lazy(() => import("./components/TypeScriptIntroGuide")),
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [selectedMethod, setSelectedMethod] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTopicId, setExpandedTopicId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTopic = (topicId) => {
    setExpandedTopicId((prev) => (prev === topicId ? null : topicId));
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowSearchDialog(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = [];

    topics.forEach((topic) => {
      // Search in topic title
      if (topic.title.toLowerCase().includes(query)) {
        results.push({
          type: "topic",
          id: topic.id,
          title: topic.title,
          fullTitle: `${topic.id}. ${topic.title}`,
        });
      }

      // Search in subtopics
      topic.subtopics.forEach((subtopic) => {
        if (subtopic.title.toLowerCase().includes(query)) {
          results.push({
            type: "subtopic",
            id: subtopic.id,
            title: subtopic.title,
            fullTitle: `${subtopic.id} ${subtopic.title}`,
            parentTopic: topic,
          });
        }
      });
    });

    setSearchResults(results);
    setShowSearchDialog(results.length > 0);
  }, [searchQuery]);

  const handleSearchResultClick = (result) => {
    if (result.type === "topic") {
      toggleTopic(result.id);
    } else {
      setSelectedMethod(result);
      setExpandedTopicId(result.parentTopic.id);
    }
    setSearchQuery("");
    setShowSearchDialog(false);
  };

  const renderContent = () => {
    if (!selectedMethod) {
      return (
        <div className="text-center text-gray-500 dark:text-gray-400 pt-[20%]">
          Select a method from the sidebar to view its details
        </div>
      );
    }

    // Render specific components based on the selected method
    const CurrentComponent = componentMap[selectedMethod.id];

    if (CurrentComponent) {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <CurrentComponent />
        </Suspense>
      );
    }

    return (
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-2xl font-bold mb-4">
          {selectedMethod.id} {selectedMethod.title}
        </h1>
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p>Description will go here...</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Example</h2>
          </section>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-white"}`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 shadow-md z-10">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Learn JS & More
          </h1>
          <div className="flex items-center gap-4">
            {/* Hamburger for mobile/tablet */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
              aria-label="Open sidebar"
              onClick={() => setSidebarOpen(true)}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search methods..."
                className="px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {showSearchDialog && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 max-h-96 overflow-y-auto">
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleSearchResultClick(result)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-200"
                    >
                      <div className="font-medium">{result.fullTitle}</div>
                      {result.type === "subtopic" && (
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {result.parentTopic.title}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay for mobile/tablet */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Sidebar overlay"
        />
      )}
      {/* Sidebar */}
      <nav
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 shadow-lg z-40 overflow-y-auto
          ${sidebarOpen ? "block" : "hidden"} md:block`}
        aria-label="Sidebar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button for mobile/tablet */}
        <button
          className="md:hidden absolute top-2 right-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="p-4 flex flex-col h-full">
          <div className="space-y-2">
            {topics.map((topic) => (
              <div key={topic.id} className="space-y-1">
                <button
                  onClick={() => toggleTopic(topic.id)}
                  className="topic-item w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium flex items-center justify-between"
                >
                  <span>
                    {topic.id}. {topic.title}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {expandedTopicId === topic.id ? "▼" : "▶"}
                  </span>
                </button>
                {expandedTopicId === topic.id && (
                  <div className="ml-4 space-y-1">
                    {topic.subtopics.map((subtopic) => (
                      <button
                        key={subtopic.id}
                        onClick={() => setSelectedMethod(subtopic)}
                        className="subtopic-item w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm"
                      >
                        {subtopic.id} {subtopic.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Copyright Info */}
          <div className="p-4 text-xs text-gray-500 dark:text-gray-400 mt-auto flex-shrink-0" style={{ marginTop: 'auto' }}>
            <p>&copy; {new Date().getFullYear()} Made with &hearts; by S M Saiful Alom</p>
            <p>
              <a
                href="https://www.linkedin.com/in/smsaifulalom/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-16 p-4 md:pl-64 transition-all duration-200">
        <div className="max-w-full overflow-x-hidden">{renderContent()}</div>
      </main>
    </div>
  );
}

export default App;
