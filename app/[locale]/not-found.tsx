import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="mb-8">
            Sorry, the page you are looking for does not exist.
          </p>
          <Button asChild className="not-prose mt-6">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
