"use client";

import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchInput({ defaultValue }: { defaultValue?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const t = useTranslations("Blog.search");

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      type="text"
      name="search"
      placeholder={t("placeholder")}
      defaultValue={defaultValue}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
