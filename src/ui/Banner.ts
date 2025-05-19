import { ConsentConfig } from "../config";

export function createBanner(config: ConsentConfig): HTMLElement {
  const wrapper = document.createElement("div");
  wrapper.className = `
    fixed inset-x-0 bottom-0 z-50
    bg-white dark:bg-gray-900 shadow-xl border-t border-gray-200 dark:border-gray-800
    p-4 md:p-6
  `;

  wrapper.innerHTML = `
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div class="text-sm text-gray-700 dark:text-gray-300">
        ${config.texts.description}
      </div>
      <div class="flex gap-2 flex-shrink-0">
        <button id="consent-accept" class="px-4 py-2 text-white bg-${config.accentColor}-600 hover:bg-${config.accentColor}-700 rounded-md transition">
          ${config.texts.acceptAll}
        </button>
        <button id="consent-reject" class="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition">
          ${config.texts.rejectAll}
        </button>
      </div>
    </div>
  `;

  // Event Handling
  setTimeout(() => {
    document.getElementById("consent-accept")?.addEventListener("click", () => {
      localStorage.setItem("consent_status", "accepted");
      wrapper.remove();
    });
    document.getElementById("consent-reject")?.addEventListener("click", () => {
      localStorage.setItem("consent_status", "rejected");
      wrapper.remove();
    });
  }, 0);

  return wrapper;
}
