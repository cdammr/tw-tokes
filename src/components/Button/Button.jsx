// Button.jsx — Reusable button component.
// Props: label (text), variant ("secondary" | "primary" | "inactive"), disabled (bool)

function Button({ label, variant = "secondary", disabled = false }) {
    // Shared styles for all buttons
    const base = "mt-auto w-fit rounded-full px-6 py-3.5 text-base font-medium border-none transition-colors duration-200";

    // Variant-specific colours — each class maps to a component token in index.css
    const variants = {
        secondary: "bg-btn-secondary text-text-primary hover:bg-btn-secondary-hover cursor-pointer",
        primary:   "bg-btn-primary text-white hover:bg-btn-primary-hover cursor-pointer",
        inactive:  "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50",
    };

    return (
        <button className={`${base} ${variants[variant]}`} disabled={disabled}>
            {label}
        </button>
    );
}

export default Button;
