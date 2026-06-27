
export type ElementItem = {
  id: number;
  label: string;
};

export const getElementsList = (count: number) : ElementItem[] => {
  const elements = [];

  for (let i = 1; i <= count; i++) {
    elements.push({
      id: i,
      label: `Element ${i}`,
    });
  }

  return elements;
};