import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
};

import { redirect } from "next/navigation";

export default function PrivacyPolicy() {
  redirect("/");
}
