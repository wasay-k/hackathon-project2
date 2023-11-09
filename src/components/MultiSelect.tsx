import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import Collapse from "./Collapse";

interface Props {
    //setState?: Dispatch<SetStateAction<string[]>>,
    title: string,
    onChange: (...params: any) => void;
    options: string[]
    classContext?: string //hacky workaround to make something work
}


const MultiSelect: FC<Props> = ({ title, options, onChange, classContext }) => {

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    useEffect(() => {
        if (classContext) {
            console.log(`calling onChange with ${classContext} and ${selectedOptions}`)
            onChange(classContext, selectedOptions);
        } else {
            onChange(selectedOptions);
        }
    }, [selectedOptions])

    return (
        <Collapse title={title}>
            <div className="flex flex-col h-20 space-y-4 m-4 w-fit overflow-y-auto">
                {options.map((option) => (
                    <div className="flex flex-row space-x-4">
                        <div className="font-light">{option}</div>
                        <Checkbox checked={selectedOptions.includes(option)} onClick={
                            () => {
                                setSelectedOptions((prevOptions) => {
                                    if (selectedOptions.includes(option)) {
                                        return prevOptions.filter((value) => value !== option);

                                    } else {
                                        return [...prevOptions, option];
                                    }
                                })
                            }

                        }
                        />
                    </div>
                ))}
            </div>
        </Collapse>
    )
}

export default MultiSelect;