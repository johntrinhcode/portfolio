import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { TabItemProps } from './TabItem';

interface TabsProps {
  defaultSelected?: string;
  children: React.ReactElement[];
}

const Tabs = ({ defaultSelected = '', children }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(defaultSelected);
  const [childProps, setChildProps] = useState<TabItemProps[]>([]);

  useEffect(() => {
    const childProps = React.Children.map(children, (child) => ({
      title: child.props.title,
      content: child.props.content,
    }));

    setChildProps(childProps);
    setSelectedTab(defaultSelected ?? childProps[0].title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-4">
        {childProps.map((child, index) => {
          return (
            <button
              onClick={() => {
                if (selectedTab !== child.title) {
                  setSelectedTab(child.title);
                }
              }}
              className="p-2 rounded-lg"
              key={index}
            >
              <span
                className={clsx(
                  selectedTab === child.title ? 'font-semibold' : 'font-normal'
                )}
              >
                {child.title}
              </span>
            </button>
          );
        })}
      </div>
      <div className="px-2 rounded-md py-2">
        {childProps.map((child, index) => {
          return (
            <div key={index}>
              {selectedTab === child.title && child.content}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tabs;
