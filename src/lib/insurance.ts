export interface InsurancePlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  discount: number;
  coverage: string[];
  benefits: string[];
  description: string;
  maxClaimAmount: number;
  deductible: number;
  reimbursementRate: number;
  waitingPeriod: string;
  ageLimit: string;
  vetNetwork: string;
  emergencySupport: boolean;
  onlineConsultation: boolean;
  vaccinesCovered: boolean;
  geneticConditions: boolean;
  preExistingConditions: boolean;
  popularPlan?: boolean;
  bestValue?: boolean;
}

export const insurancePlans: InsurancePlan[] = [
  {
    id: "basic",
    name: "Basic Care",
    monthlyPrice: 99,
    yearlyPrice: 999,
    discount: 15,
    coverage: [
      "Emergency Vet Visits",
      "Basic Medical Treatment",
      "Prescription Medications",
      "Digital Health Records",
    ],
    benefits: [
      "24/7 Emergency Helpline",
      "Cashless Treatment at Partner Clinics",
      "Digital Pet Health Card",
      "Basic Vaccination Coverage",
    ],
    description:
      "Essential health protection for your pet with basic medical coverage and emergency support.",
    maxClaimAmount: 50000,
    deductible: 2000,
    reimbursementRate: 70,
    waitingPeriod: "15 days",
    ageLimit: "8 years",
    vetNetwork: "500+ Partner Clinics",
    emergencySupport: true,
    onlineConsultation: true,
    vaccinesCovered: true,
    geneticConditions: false,
    preExistingConditions: false,
  },
  {
    id: "standard",
    name: "Standard Plus",
    monthlyPrice: 199,
    yearlyPrice: 1999,
    discount: 16,
    coverage: [
      "All Basic Care Features",
      "Routine Check-ups",
      "Dental Care",
      "Advanced Diagnostics",
      "Surgery Coverage",
    ],
    benefits: [
      "Everything in Basic Care",
      "Free Annual Health Check-up",
      "Dental Cleaning Coverage",
      "X-ray and Lab Tests",
      "Minor Surgery Coverage",
      "Pet Grooming Discounts",
    ],
    description:
      "Comprehensive health coverage including routine care and advanced medical treatments.",
    maxClaimAmount: 100000,
    deductible: 1500,
    reimbursementRate: 80,
    waitingPeriod: "7 days",
    ageLimit: "10 years",
    vetNetwork: "800+ Partner Clinics",
    emergencySupport: true,
    onlineConsultation: true,
    vaccinesCovered: true,
    geneticConditions: true,
    preExistingConditions: false,
    popularPlan: true,
  },
  {
    id: "premium",
    name: "Premium Complete",
    monthlyPrice: 349,
    yearlyPrice: 3499,
    discount: 17,
    coverage: [
      "All Standard Plus Features",
      "Specialist Consultations",
      "Advanced Surgery",
      "Cancer Treatment",
      "Physiotherapy",
      "Alternative Therapies",
    ],
    benefits: [
      "Everything in Standard Plus",
      "Specialist Vet Consultations",
      "Cancer and Chronic Disease Treatment",
      "Physiotherapy and Rehabilitation",
      "Alternative Medicine Coverage",
      "Priority Appointment Booking",
      "Home Vet Visit Coverage",
      "Pet Insurance Premium Waiver (in case of owner's hospitalization)",
    ],
    description:
      "Ultimate health protection with complete medical coverage including specialist treatments and alternative therapies.",
    maxClaimAmount: 200000,
    deductible: 1000,
    reimbursementRate: 90,
    waitingPeriod: "3 days",
    ageLimit: "12 years",
    vetNetwork: "1200+ Partner Clinics & Specialists",
    emergencySupport: true,
    onlineConsultation: true,
    vaccinesCovered: true,
    geneticConditions: true,
    preExistingConditions: true,
    bestValue: true,
  },
];

export const getInsurancePlanById = (id: string): InsurancePlan | undefined => {
  return insurancePlans.find((plan) => plan.id === id);
};

export const getPopularPlans = (): InsurancePlan[] => {
  return insurancePlans.filter((plan) => plan.popularPlan || plan.bestValue);
};

export const calculateYearlySavings = (plan: InsurancePlan): number => {
  const monthlyTotal = plan.monthlyPrice * 12;
  return monthlyTotal - plan.yearlyPrice;
};

export const getInsuranceFeatures = () => {
  return [
    {
      title: "Cashless Treatment",
      description: "No upfront payments at partner clinics",
      icon: "💳",
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock helpline for emergencies",
      icon: "🚨",
    },
    {
      title: "Online Consultation",
      description: "Video calls with certified veterinarians",
      icon: "💻",
    },
    {
      title: "Wide Network",
      description: "Access to 1200+ clinics across India",
      icon: "🏥",
    },
    {
      title: "Digital Records",
      description: "Complete digital health history",
      icon: "📱",
    },
    {
      title: "Quick Claims",
      description: "Fast claim processing within 48 hours",
      icon: "⚡",
    },
  ];
};
