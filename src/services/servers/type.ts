import { GridSize } from "@mui/material";

export interface navbarLinksProps {
  id: string;
  name: string;
  url: string;
}
export interface FooterLinksProps {
  id: number;
  title: string;
  links: {
    id: number;
    name: string;
    path: string;
  }[];
}
export interface CategoriesProps {
  id: number;
  image: string;
  name: string;
}
export interface CompaniesProps {
  id: number;
  logo: string;
  company_name: string;
  business_type: string;
  capital_investors: number;
  new_investors: number;
  location: string;
  rating: number;
  description: string;
  job_opportunity?: number;
}
export interface LatestNewsProps {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
}
export interface RecentEventsProps {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
}
export interface AboutUsServicesProps {
  title: string;
  description: string;
}
export interface OurTeamProps {
  name: string;
  position: string;
  description: string;
  image: string;
}
export interface ImportantNewsProps {
  id: number;
  title?: string;
  description?: string;
  image?: string;
  size?: { xs?: number; tablet?: number; md?: number } | number | undefined;  
  timestamp?: string;
}
