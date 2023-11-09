import { ReactNode } from "react";

interface CollapseProps {
  title: string;
  body?: () => React.ReactNode;
  children?: ReactNode
}

const Collapse: React.FC<CollapseProps> = ({ title, body, children }) => {
  return (
    <div className="collapse bg-base-200 w-fit">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content">
        {body ? (
          <body />
        ) : (children)}
      </div>
    </div>
  )
}

export default Collapse;