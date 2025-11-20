import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ",
  description: "เข้าสู่ระบบ Silverland99",
};

export default function LoginPage() {
  return (
    <div className="bg-card rounded-lg border p-8 shadow-sm">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold">เข้าสู่ระบบ</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          เข้าสู่ระบบเพื่อจัดการอสังหาริมทรัพย์
        </p>
      </div>

      {/* Login form will be added here */}
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            อีเมล
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md bg-background"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            รหัสผ่าน
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md bg-background"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium hover:bg-primary/90"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
}
