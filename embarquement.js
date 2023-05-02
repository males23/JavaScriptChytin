const passengers = [
    {
        name: "Will Alexander",
        ticketNumber: 209542
    },
    
    {
        name: "Sarah Kate",
        ticketNumber: 169336
    },
    
    {
        name: "Audrey Simon",
        ticketNumber: 779042
    },
    
    {
        name: "Tao Perkington",
        ticketNumber: 703911
    }
]

for (let passenger of passengers) {
   console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
}
