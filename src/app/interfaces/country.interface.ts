export interface Country {
  statusCode:    number;
  successful:    boolean;
  errorMessages: null;
  result:        CountryResult[];
}

export interface CountryResult {
  idCountry:   string;
  countryName: string;
}
