export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="prose text-foreground/90 prose-headings:text-2xl prose-headings:text-foreground prose-hr:bg-gray-200">
      {children}
    </div>
  );
}
