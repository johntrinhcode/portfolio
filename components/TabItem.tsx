export interface TabItemProps {
  title: string;
  content: React.ReactNode;
}

export const TabItem = ({ content }: TabItemProps) => {
  return <>{content}</>;
};

export default TabItem;
