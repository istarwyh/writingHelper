export enum DocumentTypeEnum {
  plaintext = "plaintext",
  markdown = "markdown",
  latex = "latex",
  tex = "tex",
}
export function includedByDocumentTypeEnum(languageId: string): boolean {
  return (
    languageId === DocumentTypeEnum.plaintext ||
    languageId === DocumentTypeEnum.markdown ||
    languageId === DocumentTypeEnum.tex ||
    languageId === DocumentTypeEnum.latex
  );
}
