import { CompaniesProps, LatestNewsProps } from "@/services/servers/type";

export interface ReduxBodyType {
  allCompanies: CompaniesProps[];
  popularCompanies: CompaniesProps[];
  jobOpportunity: CompaniesProps[];
  latestNews: LatestNewsProps[];
}
