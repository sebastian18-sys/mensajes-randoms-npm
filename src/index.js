const messages = [
    "Sebastian",
    "Alex",
    "Marco",
    "Ana",
    "Daniel",
    "Luz",
    "julio"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };