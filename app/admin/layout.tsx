import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard",
    template: "%s | Admin - Silverland99",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        {/* Sidebar will be added here */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-card min-h-screen p-4">
          <div className="font-bold text-lg mb-6">Silverland99</div>
          <nav className="space-y-2">
            <a href="/admin/dashboard" className="block px-3 py-2 rounded-md hover:bg-muted">
              Dashboard
            </a>
            <a href="/admin/properties" className="block px-3 py-2 rounded-md hover:bg-muted">
              อสังหาริมทรัพย์
            </a>
            <a href="/admin/customers" className="block px-3 py-2 rounded-md hover:bg-muted">
              ลูกค้า
            </a>
            <a href="/admin/blog" className="block px-3 py-2 rounded-md hover:bg-muted">
              บทความ
            </a>
            <a href="/admin/settings" className="block px-3 py-2 rounded-md hover:bg-muted">
              ตั้งค่า
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
