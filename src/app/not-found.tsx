import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 subtle-grid">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xl">
        <Badge variant="warning">404 ERROR</Badge>

        <h1 className="text-5xl font-extrabold font-mono text-[var(--text-primary)]">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            Page Not Located
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            The requested technical resource or endpoint does not exist or has been restructured.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/"
            variant="primary"
            size="sm"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Return Home
          </Button>
          <Button
            href="/services"
            variant="secondary"
            size="sm"
            leftIcon={<Search className="w-4 h-4" />}
          >
            Browse Services
          </Button>
        </div>
      </div>
    </div>
  );
}
