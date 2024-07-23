export type Therapist = {
  id: number;
  firstname: string;
  lastname: string;
  name: string;
  avatar: string;
  bio: string;
  email: string;
  phone: string;
  role: string;
  specialized_in: string;
  is_approved: boolean;
  years_of_experience: number;
  qualifications: string;
  facebook_url: string | null;
  twitter_url: string | null;
  instagram_url: string | null;
  linked_url: string;
  rating: number;
  sessions: number;
  response_time: number;
  session: {
    availability_for_days: string[];
    price: Price;
    couples_price: Price;
    same_day_booking: boolean;
    accepts_couples: boolean;
    accepts_group: boolean;
    allow_individual: boolean;
    student_plan: boolean;
    student_price: Price;
    days: string[];
    exceptions: string[];
    time: {
      to: string;
      from: string;
    };
  };
  discount: {
    status: boolean;
    limit: number;
    condition: string;
    type: string;
    value: number;
  };
  isPersonalTherapist?: boolean;
  is_prime: boolean;
};
export type Price = {
  amount: string;
  display: string;
  symbol: string;
  currency: string;
};
