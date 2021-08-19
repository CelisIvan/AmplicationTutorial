import { Section as TSection } from "../api/section/Section";

export const SECTION_TITLE_FIELD = "id";

export const SectionTitle = (record: TSection) => {
  return record.id;
};
