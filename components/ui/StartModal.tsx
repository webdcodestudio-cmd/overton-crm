"use client";
import {
  User,
  Mail,
  Building2,
  Users,
  Phone,
  ShieldCheck,
  Zap,
  Headphones,
  Send,
  X,
} from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  companyName: string;
  userType: string;
}

interface StartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartModal({ isOpen, onClose }: StartModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    companyName: "",
    userType: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      setFormData({
        name: "",
        email: "",
        mobile: "",
        companyName: "",
        userType: "",
      });

      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border bg-white text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-[380px_1fr]">
          {/* LEFT PANEL */}
          <div
            className="hidden lg:flex flex-col justify-center pt-40  pl-12  bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/formBgImage.jpeg')",
            }}
          >
            <div className="">
              <h3 className="text-4xl font-bold leading-tight text-slate-900">
                Start Your
                <br />
                <span className="text-violet-600">30-Day Free Trial</span>
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <ShieldCheck className="text-violet-600" />
                <div>
                  <p className="font-semibold">30-Day Free Trial</p>
                  <p className="text-sm text-slate-500">
                    No credit card required
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="text-violet-600" />
                <div>
                  <p className="font-semibold">Quick Setup</p>
                  <p className="text-sm text-slate-500">
                    Get started in 30 minutes
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Headphones className="text-violet-600" />
                <div>
                  <p className="font-semibold">Dedicated Support</p>
                  <p className="text-sm text-slate-500">We are here to help</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="max-h-[90vh] overflow-y-auto p-6 lg:p-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Get Started
            </h2>

            <p className="mt-1 text-sm lg:text-base text-slate-500">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* NAME */}
              <div>
                <label className="mb-1.5 block text-sm font-medium">Name</label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                    required
                  />
                </div>
              </div>

              {/* MOBILE */}
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Mobile Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                    required
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                    required
                  />
                </div>
              </div>

              {/* COMPANY */}
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Company Name
                </label>

                <div className="relative">
                  <Building2
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                    required
                  />
                </div>
              </div>

              {/* SELECT */}
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Select Option
                </label>

                <div className="relative">
                  <Users
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                    required
                  >
                    <option value="">Select an option</option>

                    <option value="developer">For Developers</option>

                    <option value="broker">For Brokers</option>

                    <option value="broker-mandate">Broker Mandate</option>
                  </select>
                </div>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-70"
              >
                <Send size={16} />

                {loading ? "Submitting..." : "Submit Request"}
              </button>

              <p className="pb-2 text-center text-xs text-slate-500">
                Your information is safe with us.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
