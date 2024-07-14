import { Button } from "@/components/ui/button";
import {
  ChevronRight,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


export default function Profile(){

    return <div className="flex flex-row items-center justify-center w-full gap-5 h-32">
    <div className="font-bold">Hello, user@gmail.com</div>

    <Sheet>
      <SheetTrigger>
        <Button className="bg-gray-700">
          Profile
          <ChevronRight />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="bg-gray-100 py-4">
          <SheetTitle>Profile</SheetTitle>
          <SheetDescription>Basic info</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col mt-4">
          <div className="flex flex-row justify-between">
            <p className="font-semibold text-black">Account</p>
            <p>user@gmail.com</p>
          </div>
          {/* <hr /> */}
          <div className="flex flex-row justify-between">
            <p className="font-semibold">Email</p>
            <p>user@gmail.com</p>
          </div>
          {/* <hr /> */}

          {/* phone number setting */}
          <div>
            {/* <p className="font-semibold">Phone number</p>
            <ChevronRight className="text-gray-400" /> */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-row justify-between">
                  <p className="font-semibold">Phone number</p>
                  <ChevronRight className="text-gray-400" />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Bind by cellphone</DialogTitle>
                  <DialogDescription>
                    Please input cellphone number and bind the account and
                    then can use cellphone nu ber to change password
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="phoneNumber" className="text-right">
                      Phone number
                    </Label>
                    <Input id="phoneNumber" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Verfication code
                    </Label>
                    <Input id="verificationCode" className="col-span-3" />
                  </div>
                  <Link href={""}>Get verification code</Link>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-gray-600">
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <hr />

          {/* we chat setting */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="flex flex-row justify-between">
                <p className="font-semibold">Wechat</p>
                <ChevronRight className="text-gray-400" />
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Unbind WeChat</AlertDialogTitle>
                <AlertDialogDescription>
                  After unbinding, you will need to re-bind to log in with
                  WeChat
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-gray-500">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="bg-gray-500">
                  unbundle
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <hr />
        </div>
        <SheetDescription className="bg-gray-100 py-3">
          Account security
        </SheetDescription>
        <div className="flex flex-col mt-4">
          {/* change password */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-row justify-between">
                <p className="font-semibold">Change password</p>
                <ChevronRight className="text-gray-400" />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Change password</DialogTitle>
                <DialogDescription>
                  Please input your original password and new password
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Original password
                  </Label>
                  <Input
                    id="name"
                    placeholder="Original password"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    New password
                  </Label>
                  <Input
                    id="username"
                    placeholder="New password"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Confirm password" className="text-right">
                    Confirm password
                  </Label>
                  <Input
                    id="username"
                    placeholder="New password again"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-gray-500">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <hr />

          {/* login log */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="flex flex-row justify-between">
                <p className="font-semibold">Login log</p>
                <ChevronRight className="text-gray-400" />
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Login log
                </AlertDialogTitle>
                <AlertDialogDescription>
                  The network is not strong, the acquisition failed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-gray-500">Reload</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <hr />
        </div>
        <SheetDescription className="bg-gray-100 py-3">
          Binding/Authorization
        </SheetDescription>
        <div className="flex flex-col mt-4">
          <div className="flex flex-row justify-between">
            <p className="font-semibold">Line push</p>
            <ChevronRight className="text-gray-400" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </div>
}