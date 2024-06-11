import NavBar from "@/components/NavBar/NavBar";

export default function Layout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en" | "pl-PL" };
}>) {
  return (
    <>
      <NavBar lang={params.lang} />
      {children}
    </>
  );
}