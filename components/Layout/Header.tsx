import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { type FC } from 'react'
import { use } from 'react'
import { Button } from '../ui/button'
import { fetchCategories } from '@/actions/articles/fetchCategories'

export const Header: FC = () => {
  const { contents } = use(fetchCategories())

  return (
    <>
      <div
        style={{
          width: '100%',
          position: 'fixed',
          top: 0,
          zIndex: 1,
        }}
        className="mt-10 flex justify-between px-10 md:px-40"
      >
        <div className="text-2xl font-bold md:text-4xl cursor-pointer">
          {/* <img
            src="/logo1.svg"
            alt="logo"
            className="size-20"
          /> */}
          <Link href="/">AnyDigi</Link>
        </div>
        <div className="hidden md:flex">
          <Button asChild variant="link" className="text-xl text-white">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="link" className="text-xl text-white">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="link" className="text-xl text-white">
            <Link href="/services">Services</Link>
          </Button>
          <Button asChild variant="link" className="text-xl text-white">
            <Link href="/articles/page/1">Articles</Link>
          </Button>
          <Button asChild variant="link" className="text-xl text-white">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button size="icon">
                <Menu className="size-10" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="left-auto right-0 top-0 mt-0 h-screen w-10/12 rounded-none bg-gray-500 overflow-y-auto">
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader className="flex justify-end">
                  <DrawerClose asChild>
                    <Button size="icon">
                      <X className="size-10 bg-gray-500" />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>

                <div className="flex flex-col items-center">
                  <div className="py-1">
                    <DrawerClose asChild>
                      <Button
                        asChild
                        variant="link"
                        className="text-2xl text-white"
                      >
                        <Link href="/">Home</Link>
                      </Button>
                    </DrawerClose>
                  </div>

                  <div className="py-1">
                    <DrawerClose asChild>
                      <Button
                        asChild
                        variant="link"
                        className="text-2xl text-white"
                      >
                        <Link href="/about">About</Link>
                      </Button>
                    </DrawerClose>
                  </div>

                  <div className="py-1">
                    <DrawerClose asChild>
                      <Button
                        asChild
                        variant="link"
                        className="text-2xl text-white"
                      >
                        <Link href="/services">Services</Link>
                      </Button>
                    </DrawerClose>
                  </div>

                  <div className="py-1">
                    <DrawerClose asChild>
                      <Button
                        asChild
                        variant="link"
                        className="text-2xl text-white"
                      >
                        <Link href="/articles/page/1">Articles</Link>
                      </Button>
                    </DrawerClose>
                  </div>

                  <div className="py-1">
                    <DrawerClose asChild>
                      <Button
                        asChild
                        variant="link"
                        className="text-2xl text-white"
                      >
                        <Link href="/contact">Contact</Link>
                      </Button>
                    </DrawerClose>
                  </div>
                </div>
              </div>
              <div className="border-t border-white my-4 mx-8"></div>

              <div className="text-sm text-center">記事カテゴリ</div>
              {contents.map(({ id, name }) => (
                <div className="flex flex-col items-center mt-2" key={id}>
                  <div className="py-1">
                    <DrawerClose asChild>
                      <Button
                        asChild
                        variant="link"
                        className="text-xl text-white"
                      >
                        <Link href={`/articles/category/${id}/1`}>{name}</Link>
                      </Button>
                    </DrawerClose>
                  </div>
                </div>
              ))}
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </>
  )
}
