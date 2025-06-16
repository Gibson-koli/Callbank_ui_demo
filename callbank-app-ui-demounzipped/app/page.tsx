"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Phone, CalendarClock, Mic, MessageSquareText, DollarSign } from "lucide-react";

export default function CallBankAppDemo() {
  return (
    <div className="p-6 space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">📞 CallBank App</h1>
      <Tabs defaultValue="calls">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="calls">Calls</TabsTrigger>
          <TabsTrigger value="wallet">Wallet</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="calls">
          <Card>
            <CardContent className="space-y-4 p-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-500" />
                <span>Missed Call from James</span>
                <Button size="sm">Callback</Button>
              </div>
              <div className="flex items-center space-x-3">
                <CalendarClock className="text-green-600" />
                <span>Call with Client at 4:00PM</span>
                <Button size="sm" variant="outline">Reschedule</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wallet">
          <Card>
            <CardContent className="space-y-4 p-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Airtime Balance</span>
                <span className="text-xl font-bold text-green-600">Ksh 150.00</span>
              </div>
              <div className="flex space-x-2">
                <Button className="w-full">Buy Airtime</Button>
                <Button variant="outline" className="w-full">Borrow</Button>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="text-yellow-600" />
                <span>Last Transaction: Ksh 50 - M-PESA</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes">
          <Card>
            <CardContent className="space-y-4 p-4">
              <div className="flex items-center space-x-2">
                <MessageSquareText className="text-purple-500" />
                <span>Note: James agreed to send payment on Friday</span>
              </div>
              <Input placeholder="Add new call note..." />
              <Button className="w-full">Save Note</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
