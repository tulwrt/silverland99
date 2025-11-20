import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "จัดการลูกค้า",
};

export default function AdminCustomersPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">ลูกค้า</h1>
        <p className="mt-2 text-muted-foreground">จัดการ inquiries และข้อมูลลูกค้า</p>
      </div>

      {/* Customers/Inquiries table will be added here */}
      <div className="bg-card rounded-lg border">
        <div className="p-6 text-center text-muted-foreground">
          ยังไม่มีข้อมูลลูกค้า
        </div>
      </div>
    </div>
  );
}
