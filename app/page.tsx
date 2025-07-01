// ✅ FILE: app/page.tsx

import dynamic from "next/dynamic"

// 🟡 Dynamically import Portfolio with SSR disabled
const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  ssr: false,
})

export default function Page() {
  return <Portfolio />
}
