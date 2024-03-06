import styles from "./Content.module.css";

interface contentProps {
  content: string;
  hasSubline?: boolean;
}

export function Content({ content, hasSubline }: contentProps) {
  return (
    <p className={hasSubline ? styles.contentWithSubline : styles.content}>
      {content}
    </p>
  );
}
