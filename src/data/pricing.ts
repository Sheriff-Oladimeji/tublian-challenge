interface Pricing {
  id: number;
  type: string;
  price: number | string;
  features: string[];
}

const monthlyPricing: Pricing[] = [
  {
    id: 1,
    type: "Pro",
    price: 19.99,
    features: [
      "Advanced search for developer profiles with filters.",
      "Increased monthly messages to developers.",
      "Priority support.",
    ],
  },
  {
    id: 2,
    type: "Business Plan",
    price: 49.99,
    features: [
      "Premium access to developer profiles and advanced search filters.",
      "Increased monthly messages to developers.",
      "Dedicated account manager for personalized support.",
      "Early access to new features and updates.",
    ],
  },
  {
    id: 3,
    type: "Enterprise Plan",
    price: "Enterprise Plan",
    features: [
      "Tailored solutions for large enterprises or agencies.",
      "Full access to all platform features, including custom integrations.",
      "Unlimited monthly messages to developers.",
      "Priority support with 24/7 availability.",
    ],
  },
];

const yearlyPricing: Pricing[] = [
  {
    id: 1,
    type: "Pro",
    price: 95.99,
    features: [
      "Advanced search for developer profiles with filters.",
      "Increased monthly messages to developers.",
      "Priority support.",
    ],
  },
  {
    id: 2,
    type: "Business Plan",
    price: 479.99,
    features: [
      "Premium access to developer profiles and advanced search filters.",
      "Increased monthly messages to developers.",
      "Dedicated account manager for personalized support.",
      "Early access to new features and updates.",
    ],
  },
  {
    id: 3,
    type: "Enterprise Plan",
    price: "Enterprise Plan",
    features: [
      "Tailored solutions for large enterprises or agencies.",
      "Full access to all platform features, including custom integrations.",
      "Unlimited monthly messages to developers.",
      "Priority support with 24/7 availability.",
    ],
  },
];

export {monthlyPricing, yearlyPricing}