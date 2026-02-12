import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const isMenuOpen = useSignal(false);
  const theme = useSignal<"light" | "dark">("light");

  useVisibleTask$(() => {
    try {
      const stored = localStorage.getItem("theme") as "light" | "dark" | null;
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      theme.value = stored || (prefersDark ? "dark" : "light");
    } catch (e) {
      console.error(e);
    }
  });

  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  const toggleTheme = $(() => {
    const next = theme.value === "dark" ? "light" : "dark";
    theme.value = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      console.error(e);
    }
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  });

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.url.pathname === "/";
    }
    return location.url.pathname.startsWith(href);
  };

  return (
    <header class="sticky top-0 z-50 bg-white/90 shadow-md backdrop-blur dark:bg-[#041f1a]/90 dark:shadow-black/30">
      <div class="container mx-auto px-4">
        <div class="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" class="flex items-center space-x-2">
            <div class="text-2xl font-bold text-[#008060]">
              White Flower Guest
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav class="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                class={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "border-b-2 border-[#008060] text-[#008060]"
                    : "text-gray-700 hover:text-[#008060] dark:text-gray-200 dark:hover:text-[#36CFC9]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme toggle (desktop) */}
          <button
            type="button"
            class="hidden items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 md:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10"
            onClick$={toggleTheme}
            aria-label="Toggle dark mode"
          >
            <span class="text-base">
              {theme.value === "dark" ? "🌙" : "☀️"}
            </span>
            <span>{theme.value === "dark" ? "Dark" : "Light"}</span>
          </button>

          {/* Mobile Menu Button */}
          <div class="flex items-center gap-2 md:hidden">
            {/* Theme toggle (mobile) */}
            <button
              type="button"
              class="rounded-md p-2 text-gray-700 hover:text-[#008060] focus:outline-none dark:text-gray-200 dark:hover:text-[#36CFC9]"
              onClick$={toggleTheme}
              aria-label="Toggle dark mode"
            >
              <span class="text-lg">
                {theme.value === "dark" ? "🌙" : "☀️"}
              </span>
            </button>

            <button
              type="button"
              class="rounded-md p-2 text-gray-700 hover:text-[#008060] focus:outline-none dark:text-gray-200 dark:hover:text-[#36CFC9]"
              onClick$={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen.value ? (
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen.value && (
          <nav class="pb-4 md:hidden">
            <div class="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  class={`rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-[#008060]/10 text-[#008060]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#008060] dark:text-gray-200 dark:hover:bg-white/5 dark:hover:text-[#36CFC9]"
                  }`}
                  onClick$={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
});
