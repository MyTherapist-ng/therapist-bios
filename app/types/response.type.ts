

export interface ITherapistResponseData {
  id: number;
  firstname: string;
  lastname: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  email: string;
  languages: string;
  phone: string;
  price: Price;
  specialized_in: string;
  years_of_experience: number;
  qualifications: string;
  facebook_url: null;
  twitter_url: null;
  instagram_url: string;
  linked_url: null;
  youtube_video_url: string;
  interview_url: string;
  response_time: number;
  rating: number;
  reviews: Review[];
}

interface Review {
  rating: number;
  title: string;
  comment: string;
}

interface Price {
  amount: string;
  display: string;
  symbol: string;
  currency: string;
}