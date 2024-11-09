import {
  CompaniesProps,
  ImportantNewsProps,
  LatestNewsProps,
} from "@/services/servers/type";

export interface ReduxBodyType {
  allCompanies: CompaniesProps[];
  popularCompanies: CompaniesProps[];
  jobOpportunity: CompaniesProps[];
  latestNews: LatestNewsProps[];
}
export interface NewsEventBodyType {
  ImportantNews: ImportantNewsProps[];
  News: ImportantNewsProps[];
}
