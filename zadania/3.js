const ticket = {
    name: "Sasha Popov",
    age: 20,
    type: "doc",
    destination:"",
    doctor:"Vladimir Komarov",
    Date: "2024-06-20 12:20",
} 

const messagebuilder = (ticket) => {
    if (ticket.type === "doc") {
        return `Hello ${ticket.name}, your appointment with Dr. ${ticket.doctor} is scheduled for ${ticket.Date}.`;
    }
    if (ticket.type === "destination") {
        return `Hello ${ticket.name}, your ${ticket.destination} is scheduled for ${ticket.Date}. Your Doctor will be ${ticket.doctor}.`;
    }
}