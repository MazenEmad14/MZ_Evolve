"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Button } from "../ui/Button";
import {
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Send,
  Lock,
  Clock,
  Sparkles,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  timeline: string;
  budgetRange: string;
  projectDescription: string;
  privacyConsent: boolean;
  honeypot: string; // Anti-bot trap
}

interface FormErrors {
  name?: string;
  email?: string;
  serviceInterest?: string;
  projectDescription?: string;
  privacyConsent?: string;
}

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    serviceInterest: "",
    timeline: "",
    budgetRange: "",
    projectDescription: "",
    privacyConsent: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string>("");
  const [serverError, setServerError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState(false);
  const [formLoadTime, setFormLoadTime] = useState<number>(0);

  React.useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid business email address.";
    }

    if (!form.serviceInterest) {
      newErrors.serviceInterest = "Please select the primary discipline or service of interest.";
    }

    if (!form.projectDescription.trim() || form.projectDescription.trim().length < 20) {
      newErrors.projectDescription =
        "Please provide at least 20 characters describing your goals or challenges.";
    }

    if (!form.privacyConsent) {
      newErrors.privacyConsent = "You must agree to the privacy policy to submit an inquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          timestamp: formLoadTime,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionSuccess(true);
        setSubmittedInquiryId(data.inquiryId);
      } else {
        setServerError(data.message || "Failed to submit inquiry. Please try again.");
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch (err) {
      setServerError("Network error. Please check your connection or email contact@mzevolve.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    if (submittedInquiryId) {
      navigator.clipboard.writeText(submittedInquiryId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  if (submissionSuccess) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-surface)] border border-[#19D879]/40 shadow-2xl space-y-6 text-center max-w-2xl mx-auto animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#19D879]/15 border border-[#19D879]/30 flex items-center justify-center text-[#19D879] mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
            Inquiry Successfully Delivered
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Thank you for reaching out to MZEVOLVE. Your project brief has been recorded in our engineering queue.
          </p>
        </div>

        {/* Reference ID Pill */}
        <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-between gap-4 max-w-md mx-auto">
          <div className="text-left">
            <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
              Inquiry Reference ID
            </span>
            <span className="font-mono text-sm font-bold text-[#19D879]">
              {submittedInquiryId}
            </span>
          </div>
          <button
            onClick={copyToClipboard}
            className="p-2 rounded-lg bg-[var(--bg-surface)] hover:bg-[#19D879]/20 text-[var(--text-secondary)] hover:text-[#19D879] border border-[var(--border-subtle)] transition-colors cursor-pointer"
            title="Copy reference ID"
          >
            {copiedId ? <Check className="w-4 h-4 text-[#19D879]" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        <div className="pt-2 text-xs text-[var(--text-muted)] space-y-1">
          <p>
            An MZEVOLVE engineer will review your specifications and reply via email within 1–2 business days.
          </p>
          <p className="font-mono">Direct follow-ups: contact@mzevolve.com</p>
        </div>

        <div className="pt-4">
          <Button
            onClick={() => {
              setSubmissionSuccess(false);
              setForm({
                name: "",
                email: "",
                company: "",
                serviceInterest: "",
                timeline: "",
                budgetRange: "",
                projectDescription: "",
                privacyConsent: false,
                honeypot: "",
              });
            }}
            variant="secondary"
            size="sm"
          >
            Submit Another Project Brief
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xl space-y-6"
    >
      {/* Honeypot field for bot trap - invisible to real humans */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="_company_nickname">Do not fill this</label>
        <input
          type="text"
          id="_company_nickname"
          name="_company_nickname"
          value={form.honeypot}
          onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-xs sm:text-sm text-red-400">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold"
          >
            Full Name <span className="text-[#19D879]">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Alex Vance"
            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-elevated)] border text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm transition-colors ${
              errors.name ? "border-red-500" : "border-[var(--border-subtle)]"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-400 mt-1">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold"
          >
            Business Email <span className="text-[#19D879]">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="alex@enterprise.com"
            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-elevated)] border text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm transition-colors ${
              errors.email ? "border-red-500" : "border-[var(--border-subtle)]"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Row 2: Company & Primary Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="company"
            className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold"
          >
            Company / Organization <span className="text-xs text-[var(--text-muted)] lowercase font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Acme Technologies Ltd"
            className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="serviceInterest"
            className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold"
          >
            Primary Discipline <span className="text-[#19D879]">*</span>
          </label>
          <select
            id="serviceInterest"
            required
            value={form.serviceInterest}
            onChange={(e) => setForm({ ...form, serviceInterest: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-elevated)] border text-[var(--text-primary)] text-sm transition-colors ${
              errors.serviceInterest ? "border-red-500" : "border-[var(--border-subtle)]"
            }`}
          >
            <option value="">Select a discipline...</option>
            {servicesData.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Cross-Disciplinary AI Transformation">
              Cross-Disciplinary AI Transformation
            </option>
            <option value="General Architecture Advisory">
              General Architecture Advisory
            </option>
          </select>
          {errors.serviceInterest && (
            <p className="text-xs text-red-400 mt-1">{errors.serviceInterest}</p>
          )}
        </div>
      </div>

      {/* Row 3: Timeline & Budget Scope */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="timeline"
            className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold"
          >
            Target Timeline
          </label>
          <select
            id="timeline"
            value={form.timeline}
            onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm transition-colors"
          >
            <option value="">Select estimated timeframe...</option>
            <option value="Immediate (1–4 weeks)">Immediate (1–4 weeks)</option>
            <option value="1–3 months">1–3 months</option>
            <option value="3–6 months">3–6 months</option>
            <option value="Exploratory / Discovery Phase">Exploratory / Discovery Phase</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="budgetRange"
            className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold"
          >
            Estimated Budget Scope
          </label>
          <select
            id="budgetRange"
            value={form.budgetRange}
            onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm transition-colors"
          >
            <option value="">Select budget range...</option>
            <option value="$10,000 – $25,000">$10,000 – $25,000 (Initial Prototype)</option>
            <option value="$25,000 – $50,000">$25,000 – $50,000 (Production System)</option>
            <option value="$50,000 – $100,000+">$50,000 – $100,000+ (Enterprise Architecture)</option>
            <option value="To be determined after architectural scoping">
              To be determined after architectural scoping
            </option>
          </select>
        </div>
      </div>

      {/* Row 4: Project Description */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="projectDescription"
            className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold"
          >
            Project Goals & Technical Requirements <span className="text-[#19D879]">*</span>
          </label>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            {form.projectDescription.length} chars (min 20)
          </span>
        </div>
        <textarea
          id="projectDescription"
          rows={5}
          required
          value={form.projectDescription}
          onChange={(e) => setForm({ ...form, projectDescription: e.target.value })}
          placeholder="Please describe your current systems, specific operational bottlenecks, desired outcomes, or technical constraints..."
          className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-elevated)] border text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm transition-colors resize-y ${
            errors.projectDescription ? "border-red-500" : "border-[var(--border-subtle)]"
          }`}
        />
        {errors.projectDescription && (
          <p className="text-xs text-red-400 mt-1">{errors.projectDescription}</p>
        )}
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={form.privacyConsent}
            onChange={(e) => setForm({ ...form, privacyConsent: e.target.checked })}
            className="mt-1 w-4 h-4 rounded border-[var(--border-subtle)] text-[#19D879] focus:ring-[#19D879] bg-[var(--bg-surface-elevated)] cursor-pointer"
          />
          <span className="text-xs text-[var(--text-secondary)] leading-relaxed">
            I consent to MZEVOLVE storing and processing the provided project information solely for the purpose of evaluating and responding to this technical inquiry, as detailed in the{" "}
            <Link href="/privacy" className="text-[#19D879] underline hover:text-[#15b867]">
              Privacy Policy
            </Link>
            . Your data is never sold or used for public AI model training.
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="text-xs text-red-400 mt-1.5">{errors.privacyConsent}</p>
        )}
      </div>

      {/* Submit Button & Security Note */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border-subtle)]">
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
          <Lock className="w-3.5 h-3.5 text-[#19D879]" />
          <span>Encrypted Submission & Zero Spam</span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          rightIcon={<Send className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          Submit Project Inquiry
        </Button>
      </div>
    </form>
  );
};
