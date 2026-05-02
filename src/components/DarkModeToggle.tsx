type DarkModeToggleProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function DarkModeToggle({ darkMode, setDarkMode }: DarkModeToggleProps) {
  return (
    <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
