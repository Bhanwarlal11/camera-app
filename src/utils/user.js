

export const userRegistrationFormControls = [
    {
        name: "userName",
        type: "text",
        placeholder: "Enter your name",
        label: "Name",
        required: true,
        type: "text",
        ComponentType: "input"
    },
    {
        name: "email",
        type: "Email",
        placeholder: "Enter your email",
        label: "Email",
        required: true,
        type: "email",
        ComponentType: "input"
    },
    {
        name: "password",
        type: "password",
        placeholder: "Enter your password",
        label: "Password",
        required: true,
        type: "password",
        ComponentType: "input"
    }
   
]


export const userLoginFormControls = [
    {
        name: "email",
        type: "Email",
        placeholder: "Enter your email",
        label: "Email",
        required: true,
        type: "email",
        ComponentType: "input"
    },
    {
        name: "password",
        type: "password",
        placeholder: "Enter your password",
        label: "Password",
        required: true,
        type: "password",
        ComponentType: "input"
    }

]


export const initialRegistrationFormData = {
    userName: "",
    email: "",
    password: ""
}

export const initialLoginFormData = {
    email: "",
    password: ""
}



