
import { ReactNode } from "react";


type TableProps = {
  headings: string[];
  body: any[];
  properties: string[];
  extraCol?: {
    heading: string,
    content: ReactNode;
  }
}

const getValueByNestedProperty = (object: any, property: string): any => {
  const properties = property.split(".");
  let value = object;
  for (const prop of properties) {
    value = value[prop];
    if (value === undefined) {
      break;
    }
    if (Object.hasOwn(value, "_seconds")) {
      value = new Date(value).toLocaleDateString();
    }
    /* if (typeof value === "object") {
      value = Object.keys(value);
    } */

  }
  return value;
};

const Table: React.FC<TableProps> = ({ headings, body, properties, extraCol }) => {
  return (
    <div className="flex h-30 w-fit overflow-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
            {extraCol && <th>{extraCol.heading}</th>}
          </tr>
        </thead>
        <tbody>
          {body.map((object, index) => (
            <tr key={index}>
              {properties.map((property, propIndex) => (
                <td key={propIndex}>
                  {Array.isArray(getValueByNestedProperty(object, property)) ? (
                    getValueByNestedProperty(object, property).map(
                      (element: any, elemIndex: number) => (
                        <span key={elemIndex}>
                          {element}
                          {elemIndex !==
                            getValueByNestedProperty(object, property)
                              .length -
                            1 && ", "}
                        </span>
                      )
                    )
                  ) : (
                    getValueByNestedProperty(object, property)
                  )}
                </td>
              ))}
              {extraCol && <td>{extraCol.content}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;