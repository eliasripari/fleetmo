"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import ShinyText from "@/components/ShinyText";
import axios from "axios";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await axios.post("/api/brevo/subscribe", { email });
      setStatus("success");
      setMessage(response.data.message);
      setEmail("");
    } catch (error) {
      setStatus("error");
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data.error || "An error occurred.");
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2 flex flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          className="w-[300px] px-4 py-1 bg-foreground border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2"
        />
        <Button
          type="submit"
          variant="green"
          disabled={status === "loading"}
          className="w-full !mt-0"
        >
          {status === "loading" ? (
            <ShinyText
              text="Subscribing..."
              disabled={false}
              speed={3}
              className="custom-class"
            />
          ) : (
            <ShinyText
              text="Join Waitlist"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          )}
        </Button>
      </div>
      {status === "success" && (
        <p className="text-green-500 text-sm">{message}</p>
      )}
      {status === "error" && <p className="text-red-600 text-sm">{message}</p>}
    </form>
  );
};

export default function JoinWaitlist() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <WaitlistForm />
    </>
  );
}
