export const Footer = () => {
    return (
        <footer className="relative overflow-x-clip z-10">
        <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="text-white/40">&copy; 2025. All rights reserved.</div>
    <nav className="flex flex-col items-center gap-8 md:flex-row">
        {footerLinks.map(item => (
                <a
                    href={item.link}
            key={item.title}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-red-500"
            >
            <span className="font-semibold">{item.title}</span>
                </a>
))}
    </nav>
    </div>
    </div>
    </footer>
);
};
