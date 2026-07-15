import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    category: "Program",
    question: "How long is each treatment program?",
    answer:
      "We offer three programs: 7-day intensive (introduction), 14-day therapeutic (most popular), and 21-day deep healing. The duration depends on your condition severity and health goals.",
  },
  {
    id: "2",
    category: "Program",
    question: "Can I customize the program duration?",
    answer:
      "Yes, absolutely. We assess your condition and create a personalized program. Some patients benefit from 28-day or 30-day programs for chronic conditions.",
  },
  {
    id: "3",
    category: "Conditions",
    question: "What conditions do you treat?",
    answer:
      "We treat chronic diseases (arthritis, diabetes, hypertension), digestive issues (IBS, GERD), respiratory conditions, skin problems, mental health (anxiety, depression), and fertility issues.",
  },
  {
    id: "4",
    category: "Conditions",
    question: "Can Ayurveda help with fertility?",
    answer:
      "Yes, our fertility program has a 65-70% success rate. We address hormonal imbalances, improve egg quality, and enhance reproductive health through Panchakarma and specialized herbs.",
  },
  {
    id: "5",
    category: "Results",
    question: "What are your success rates?",
    answer:
      "Our success rates vary by condition: 70-80% for musculoskeletal issues, 65-75% for metabolic disorders, 60-70% for skin conditions, and 65-70% for fertility. Results depend on patient compliance and condition severity.",
  },
  {
    id: "6",
    category: "Results",
    question: "How long before I see results?",
    answer:
      "Most patients notice improvements within 7-14 days. Significant transformation typically occurs within 21-28 days. Chronic conditions may require follow-up programs for lasting results.",
  },
  {
    id: "7",
    category: "Cost",
    question: "How much does treatment cost?",
    answer:
      "7-day program: ₹35,000 | 14-day program: ₹65,000 | 21-day program: ₹95,000. Includes accommodation, meals, treatments, and personalized care. Flexible payment options available.",
  },
  {
    id: "8",
    category: "First Visit",
    question: "What happens on my first visit?",
    answer:
      "We conduct a comprehensive consultation including pulse diagnosis, health history review, and lifestyle assessment. This helps us create your personalized treatment plan.",
  },
];

const categories = ["All", "Program", "Conditions", "Results", "Cost", "First Visit"];

export function SearchableFAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="w-full space-y-6">
      {/* Search and Filter Controls */}
      <div className="space-y-4">
        {/* Search Box */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              className="text-xs"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Clear All Button */}
        {(searchQuery || selectedCategory !== "All") && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearSearch}
            className="text-xs"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground">
        Showing {filteredFAQs.length} of {faqData.length} questions
      </p>

      {/* FAQ Accordion */}
      {filteredFAQs.length > 0 ? (
        <Accordion type="single" collapsible className="w-full">
          {filteredFAQs.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-start gap-3 text-left">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded mt-0.5">
                    {item.category}
                  </span>
                  <span className="text-sm font-medium">{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pl-12">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-3">No FAQs found matching your search.</p>
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearSearch}
            className="text-xs"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
