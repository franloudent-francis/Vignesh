import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EllipsisVertical, DeleteIcon, Edit, Trash, Plus } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton"
import { SearchForm } from '@/components/search-form';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



function ProfileDetailHomeLayout() {
  return (
    <div className="col-span-3 col-start-3 mx-2 border-3 rounded-lg p-5 max-h-screen overflow-scroll ">
      <div className="flex flex-row justify-between items-center mb-3">
        <h4 className="text-xl font-semibold">Profile 02</h4>
        <div className="flex flex-row gap-2">
          <Button className="bg-yellow-600 hover:bg-yellow-500">
            {" "}
            <Edit /> Edit
          </Button>
          <Button variant={"destructive"}>
            {" "}
            <Trash /> Delete
          </Button>
        </div>
      </div>

      <div className="mt-2 flex flex-row">
        <div>
          <img
            style={{ width: "200px", height: "200px" }}
            className="rounded-lg"
            src="https://colesclassroom.com/wp-content/uploads/2018/10/pexels-photo-567451-2.jpeg"
            alt=""
          />
        </div>

        <div className="flex flex-col space-y-3 ml-4">
          <Skeleton className="h-[55px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>

      <div className="mt-9 ">
        <Tabs defaultValue="loans" className="w-[400px] m-auto">
          <TabsList className="w-auto">
            <TabsTrigger value="loans">Loans</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          <TabsContent value="loans" className="mb-8 flex flex-col gap-3">
            <div className='flex flex-row items-center justify-between my-2'>
              <SearchForm/>
              <Button size={"sm"}><Plus/>Add Loan</Button>
            </div>
            <Dialog  >
      <DialogTrigger asChild>
                            <Card className='cursor-pointer'>
                              <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                  <p>Loan Number : 200</p>{" "}
                                  <div className='flex flex-row items-center gap-2'>
                                  <Badge className="ml-4 bg-green-600">Active</Badge>
                                  <Button variant={"outline"} size={"icon"}><EllipsisVertical /></Button>
                                  </div>
                                  
                                </CardTitle>
                                <CardDescription>
                                  Pending Priciple : ₹ 20,000 <br />
                                  Pending Interset : ₹ 6,000 <br />
                                  Pending EMI : ₹ 2,600 <br />
                                </CardDescription>
                              </CardHeader>
                    
                            </Card>
      </DialogTrigger>
      <DialogContent  >
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <p>helllo</p>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
           
            <Card className='cursor-pointer'>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <p>Loan Number : 201</p>{" "}
                  
                  <div className='flex flex-row items-center gap-2'>
                  <Badge className="ml-4 ">Closed</Badge>
                  <Button variant={"outline"} size={"icon"}><EllipsisVertical /></Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  Pending Priciple : ₹ 20,000 <br />
                  Pending Interset : ₹ 6,000 <br />
                  Pending EMI : ₹ 2,600 <br />
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="documents">
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default ProfileDetailHomeLayout