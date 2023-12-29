/**
 * Данные о владельце сертификата
 * @remarks названия полей должны совпадать с @attributeOids в oids-dictionary.ts
 */
export type CertificateSubject = {
  commonName: string | null;
  surname: string | null;
  name: string | null;
  country: string | null;
  region: string | null;
  locality: string | null;
  street: string | null;
  organization: string | null;
  department: string | null;
  post: string | null;
  ogrnip: string | null;
  ogrn: string | null;
  snils: string | null;
  innLe: string | null;
  inn: string | null;
  email: string | null;
};
