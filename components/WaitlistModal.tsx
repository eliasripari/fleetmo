"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ShinyText from "@/components/ShinyText";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import axios from "axios";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const t = useTranslations("WaitlistModal");
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

      // Auto close modal after 3 seconds on success
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setMessage("");
      }, 3000);
    } catch (error) {
      setStatus("error");
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data.error || "An error occurred.");
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form state when closing
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
      setEmail("");
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-foreground border-gray-800 text-white">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-full bg-[#41CF8F]/20">
              <Mail className="w-5 h-5 text-[#41CF8F]" />
            </div>
            <DialogTitle className="text-xl font-semibold text-white">
              {t("title")}
            </DialogTitle>
          </div>
          <DialogDescription className="text-gray-300 mt-2">
            {t("description")}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2">
          {status === "success" ? (
            <div className="text-center py-6">
              <CheckCircle className="w-12 h-12 text-[#41CF8F] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#41CF8F] mb-2">
                {t("success.title")}
              </h3>
              <p className="text-sm text-gray-300">{message}</p>
              <p className="text-xs text-gray-400 mt-2">
                {t("success.autoClose")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-white"
                >
                  {t("form.emailLabel")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("form.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#41CF8F] focus:ring-[#41CF8F]"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 bg-red-900/20 border border-red-700 rounded-md">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-300">{message}</p>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  disabled={status === "loading"}
                >
                  {t("form.cancel")}
                </Button>
                <Button
                  type="submit"
                  variant="green"
                  disabled={status === "loading" || !email}
                  className="flex-1"
                >
                  {status === "loading" ? (
                    <ShinyText
                      text={t("form.subscribing")}
                      disabled={false}
                      speed={3}
                      className="custom-class"
                    />
                  ) : (
                    <ShinyText
                      text={t("form.joinWaitlist")}
                      disabled={false}
                      speed={3}
                      className="custom-class"
                    />
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
