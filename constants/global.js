import icons from "./icons"

const transactions = [
    {
        id: 1,
        type: "received",
        amount: "$ 850.00",
        logo: icons.upwork,
        company: "Upwork",
        date: "Today",
        from: 'Upwork Escrow',
        time: '07:00 PM',
        earning: '$ 850.00',
        fee: '- $ 40.00',
        total: '$ 810.00'
    },
    {
        id: 2,
        type: "sent",
        amount: "$ 85.00",
        logo: icons.girl1,
        company: "Transfer",
        date: "Yesterday",
        from: 'Transfer Eni',
        time: '07:00 PM',
        earning: '$ 85.00',
        fee: '- $ 2.00',
        total: '$ 83.00'
    },
    {
        id: 3,
        type: "received",
        amount: "$ 1,406.00",
        logo: icons.paypal,
        company: "Paypal",
        date: "Jan 30, 2022",
        from: 'Paypal',
        time: '10:00 AM',
        earning: '$ 1,406.00',
        fee: '- $ 4.00',
        total: '$ 1,402.00'
    },
    {
        id: 4,
        type: "sent",
        amount: "$ 11.99",
        logo: icons.youtube,
        company: "Youtube",
        date: "Jan 16, 2022",
        from: 'Youtube Entertainment',
        time: '08:45 AM',
        earning: '$ 11.99',
        fee: '- $ 0.99',
        total: '$ 11.00'
    },
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
        date: "Feb 28, 2022",
        from: 'Youtube Entertainment',
        time: '08:45 AM',
        earning: '$ 320.00',
        fee: '- $ 30.00',
        total: '$ 290.00'
    },
    {
        id: 2,
        type: "received",
        amount: "$ 1,406.00",
        logo: icons.energy,
        company: "Electricity",
        date: "Mar 28, 2022",
        from: 'Electricity CITY',
        time: '07:00 PM',
        earning: '$ 2,660.00',
        fee: '- $ 40.00',
        total: '$ 2,620.00'
    },
    {
        id: 3,
        type: "sent",
        amount: "$ 11.99",
        logo: icons.house,
        company: "House Rent",
        date: "Mar 31, 2022",
        from: 'House Rent',
        time: '10:00 AM',
        earning: '$ 870.00',
        fee: '- $ 20.00',
        total: '$ 850.00'
    },
    {
        id: 4,
        type: "received",
        amount: "$ 1,406.00",
        logo: icons.shopify,
        company: "Spotify",
        date: "Feb 28, 2022",
        from: 'Spotify Inc.',
        time: '06:30 AM',
        earning: '$ 1,370.00',
        fee: '- $ 15.00',
        total: '$ 1,255.00'
    },

]


export default { transactions, users, upcomingbills }