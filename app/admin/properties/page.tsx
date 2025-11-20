import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "จัดการอสังหาริมทรัพย์",
};

export default function AdminPropertiesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">อสังหาริมทรัพย์</h1>
          <p className="mt-2 text-muted-foreground">จัดการรายการอสังหาริมทรัพย์ทั้งหมด</p>
        </div>
        <a
          href="/admin/properties/new"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90"
        >
          เพิ่มรายการใหม่
        </a>
      </div>

      {/* Properties table will be added here */}
      <div className="bg-card rounded-lg border">
        <div className="p-6 text-center text-muted-foreground">
          ยังไม่มีรายการอสังหาริมทรัพย์
        </div>
      </div>
    </div>
  );
}
