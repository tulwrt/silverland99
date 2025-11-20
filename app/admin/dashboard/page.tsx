import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">ภาพรวมของระบบ</p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-card rounded-lg border p-6">
          <div className="text-sm text-muted-foreground">อสังหาริมทรัพย์ทั้งหมด</div>
          <div className="text-2xl font-bold mt-2">0</div>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <div className="text-sm text-muted-foreground">รายการเผยแพร่</div>
          <div className="text-2xl font-bold mt-2">0</div>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <div className="text-sm text-muted-foreground">Inquiries ใหม่</div>
          <div className="text-2xl font-bold mt-2">0</div>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <div className="text-sm text-muted-foreground">ยอดเข้าชมเดือนนี้</div>
          <div className="text-2xl font-bold mt-2">0</div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="bg-card rounded-lg border p-6">
        <h2 className="font-semibold mb-4">กิจกรรมล่าสุด</h2>
        <p className="text-muted-foreground text-sm">ยังไม่มีกิจกรรม</p>
      </div>
    </div>
  );
}
