import { Suspense } from "react";
import ThanksPageClient from "@/src/app/thank-you/thankspageclient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThanksPageClient />
    </Suspense>
  );
}
