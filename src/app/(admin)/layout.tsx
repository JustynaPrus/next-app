import Footer from "@/components/Footer/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        Admin layout:
      {children}
    </div>
  );
}