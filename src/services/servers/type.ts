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
}
