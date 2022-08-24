function App() {
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    deferredPrompt = e;
  });

  const clickHandler = async () => {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        deferredPrompt = null;
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-4 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-white font-bold text-2xl">This is Test React App PWA</h1>
      <button
        className="px-6 py-1.5 bg-white text-gray-800 rounded-lg font-bold shadow"
        onClick={clickHandler}
      >
        install
      </button>
    </div>
  );
}

export default App;
