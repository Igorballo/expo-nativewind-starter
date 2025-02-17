import icons from "./icons"

const transactions = [
    {
        id: 1,
        type: "received",
        amount: "$ 850.00",
        logo: icons.upwork,
        company: "Upwork",
        date: "Today"
    },
    {
        id: 2,
        type: "sent",
        amount: "$ 85.00",
        logo: icons.girl1,
        company: "Transfer",
        date: "Yesterday"
    },
    {
        id: 3,
        type: "received",
        amount: "$ 1,406.00",
        logo: icons.paypal,
        company: "Paypal",
        date: "Jan 30, 2022"
    },
    {
        id: 4,
        type: "sent",
        amount: "$ 11.99",
        logo: icons.youtube,
        company: "Youtube",
        date: "Jan 16, 2022"
    },
    // {
    //     id: 5,
    //     type: "received",
    //     amount: "$ 850.00",
    //     
    //     logo: icons.upwork,
    //     company: "Upwork",
    // },
    // {
    //     id: 6,
    //     type: "sent",
    //     amount: "$ 85.00",
    //     
    //     logo: icons.girl1,
    //     company: "Transfer",
    // },
    // {
    //     id: 7,
    //     type: "received",
    //     amount: "$ 1,406.00",
    //     
    //     logo: icons.paypal,
    //     company: "Paypal",
    // },
    // {
    //     id: 8,
    //     type: "sent",
    //     amount: "$ 11.99",
    //     
    //     logo: icons.youtube,
    //     company: "Youtube",
    // },
]
const users = [
    {
        id: 1,
        name: "John Doe",
        image: icons.user1,
    },
    {
        id: 2,
        name: "John Doe",
        image: icons.user2,
    },
    {
        id: 3,
        name: "John Doe",
        image: icons.user3,
    },
    {
        id: 4,
        name: "John Doe",
        image: icons.user4,
    },
    {
        id: 5,
        name: "John Doe",
        image: icons.user1,
    },
    {
        id: 6,
        name: "John Doe",
        image: icons.user2,
    },
    {
        id: 7,
        name: "John Doe",
        image: icons.user3,
    },
    {
        id: 8,
        name: "John Doe",
        image: icons.user4,
    },
]

const upcomingbills = [
    {
        id: 1,
        type: "sent",
        amount: "$ 11.99",
        logo: icons.youtube,
        company: "Youtube",
        date: "Feb 28, 2022"
    },
    {
        id: 2,
        type: "received",
        amount: "$ 1,406.00",
        logo: icons.energy,
        company: "Electricity",
        date: "Mar 28, 2022"
    },
    {
        id: 3,
        type: "sent",
        amount: "$ 11.99",
        logo: icons.house,
        company: "House Rent",
        date: "Mar 31, 2022"
    },
    {
        id: 4,
        type: "received",
        amount: "$ 1,406.00",
        logo: icons.shopify,
        company: "Spotify",
        date: "Feb 28, 2022"
    },

]


export default { transactions, users, upcomingbills }