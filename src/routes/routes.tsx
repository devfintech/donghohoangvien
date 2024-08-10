import { BaseRoute } from "@/types/core.type"

export const routePath = {
  home: "/",
  translation: "/translation",
  comingSoon: "/coming-soon",
  notFound: "*",
} as const

export const routes: BaseRoute[] = [
  { label: "ĐỒNG HỒ NAM", to: routePath.home },
  { label: "ĐỒNG HỒ NỮ", to: routePath.translation },
  { label: "GIỚI THIỆU", to: routePath.translation },
  { label: "PHỤ KIỆN ĐỒNG HỒ", to: routePath.translation },
  { label: "KIẾN THỨC ĐỒNG HỒ", to: routePath.translation },
  { label: "TIN TỨC", to: routePath.translation },
]
