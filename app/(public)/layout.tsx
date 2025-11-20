export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header will be added here */}
      <main className="flex-1">{children}</main>
      {/* Footer will be added here */}
    </div>
  );
}
