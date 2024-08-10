import { Drawer } from "antd"
import { FC, useState } from "react"
import { HiMenu } from "react-icons/hi"
import { IoClose } from "react-icons/io5"
import { Link, NavLink } from "react-router-dom"
import { useAccount } from "wagmi"

import { Button } from "@/libs/ui/button"
import { routePath, routes } from "@/routes/routes"
import { cn } from "@/utils/classnames"
import { Container } from "./container"

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { address: account } = useAccount()

  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const handleCloseDrawer = () => setIsOpenDrawer(false)

  return (
    <>
      <header className="bg-body relative left-0 right-0 top-0 z-50 shadow">
        <div className="min-h-[135px] w-full bg-[#531516] p-2">
          <Container className="grid grid-cols-5 justify-between">
            <div className="flex flex-col items-center justify-center gap-2">
              <Link to={routePath.home} className="">
                <img src="/logo/logo.png" alt="" className="h-auto max-w-28" />
              </Link>
              <h1>THẾ GIỚI ĐỒNG HỒ CHÍNH HÃNG</h1>
            </div>
            <div className="flex flex-col gap-6 p-6">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10" />
                <h1></h1>
              </div>
              <div className="flex items-center  gap-2">
                <img className="h-10 w-10" src="/images/icon1.svg" alt="" />
                <h1>100% Chính Hãng</h1>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-6">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10" />
                <h1></h1>
              </div>
              <div className="flex items-center  gap-2">
                <img className="h-10 w-10" src="/images/icon2.svg" alt="" />
                <h1>Trả góp 0% lãi xuất</h1>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-6">
              <div className="flex items-center gap-2">
                <img className="h-10 w-10" src="/images/icon3.svg" alt="" />
                <h1 className="text-bold text-2xl">0376595888</h1>
              </div>
              <div className="flex items-center  gap-2">
                <img className="h-10 w-10" src="/images/icon4.svg" alt="" />
                <h1>Miễn phí vận chuyển</h1>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-6">
              <div className="flex items-center  gap-2">
                <img className="h-10 w-10" src="/images/icon5.svg" alt="" />
                <h1>Giỏ hàng</h1>
              </div>
              <div className="flex items-center  gap-2">
                <img className="h-10 w-10" src="/images/icon6.svg" alt="" />
                <h1>Bảo hành 24 tháng</h1>
              </div>
            </div>
          </Container>
        </div>
        <div className="w-full bg-[#f7931e]">
          <Container className="flex h-14 items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-10 max-lg:hidden">
                <nav className="flex items-center justify-center gap-4">
                  {routes.map((route) => {
                    return (
                      <NavLink key={route.to} to={route.to}>
                        {({ isActive }) => {
                          return <div className={cn("", isActive && "font-extrabold text-black")}>{route.label}</div>
                        }}
                      </NavLink>
                    )
                  })}
                </nav>
                <div></div>
              </div>
              <Button
                icon={<HiMenu />}
                type="default"
                className="!hidden aspect-square p-0 max-xl:!flex"
                onClick={() => setIsOpenDrawer(true)}
              />
            </div>
          </Container>
        </div>
      </header>

      <Drawer
        open={isOpenDrawer}
        width={375}
        classNames={{
          header: cn("!hidden"),
          body: cn(""),
          content: cn(""),
          footer: cn(""),
          mask: cn(""),
        }}
        onClose={handleCloseDrawer}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h4 className=""></h4>
            <button className="hover:text-primary-500 text-xl" onClick={handleCloseDrawer}>
              <IoClose />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {routes.map((route, index) => {
              return (
                <NavLink key={`drawer-${route.to}`} to={route.to} onClick={handleCloseDrawer}>
                  {({ isActive }) => {
                    return <div className={cn("", isActive && "text-primary-500 underline")}>{route.label}</div>
                  }}
                </NavLink>
              )
            })}
          </div>
        </div>
      </Drawer>
    </>
  )
}
