export interface ILangData {
  languages: ILanguages;
  content: { [key: string]: { [key: string]: string } };
}
export interface ILanguages {
  [key: string]: { [key: string]: string };
}
