const fields ={
    username: {
        label: "Username",
        type: "text",
        name: "username",
        placeholder: "Name",
        rules: [{
            required: true,
            message: "Username is required"
        }]
    },
    description: {
        label: "Description",
        type: "text",
        name: "description",
        placeholder: "Description",
        rules: [{
            required: true,
            message: "Description is required"
        }]
    },
}
export default fields;