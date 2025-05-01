const fields ={
    username: {
        
        type: "text",
        name: "name",
        placeholder: "Name",
        rules: [{
            required: true,
            message: "Username is required"
        }]
    },
    description: {
        
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