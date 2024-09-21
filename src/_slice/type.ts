import { CompaniesProps } from "@/services/servers/type";

export interface ReduxBodyType {
  allCompanies: CompaniesProps[];
  popularCompanies: CompaniesProps[];
}
