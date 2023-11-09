import React from "react";

type FormContainerProps = {
  containerColor?: string,
  children: React.ReactNode

}

const FormContainer: React.FC<FormContainerProps> = ({ children, containerColor }) => {
  return (
    <div className={`card flex-1 h-fit max-w-fit shadow-2xl ${containerColor ? containerColor : "bg-base-100"}`}>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default FormContainer;