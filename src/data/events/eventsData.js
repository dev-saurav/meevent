const events = [
    {
        id: "1",
        name: "React Meetup 2020",
        desc: "The react meetup of 2020 by facebook india",
        on: new Date("2020-06-07T17:00:00"),
        email: "surgang81993@gmail.com",
        venue: "Bangalore",
        createdDate: new Date(),
        tickets: 100,
        coverImg: "",
        type: "",
        organizers: ["facebook", "github", "netflix"],
        resgistrations: [
            {
                id: "1",
                name: "Saurav Ganguly",
                email: "munu@gmail.com",
                idCard: "",
                type: "self",
                tickets: 1
            },
            {
                id: "2",
                name: "Boney Ganguly",
                email: "boney@gmail.com",
                idCard: "",
                type: "self",
                tickets: 2
            }
        ]
    },
    {
        id: "2",
        name: "Angular Meetup 2020",
        desc: "The annul angular meetup of 2020 by google india",
        on: new Date("2020-06-21T17:00:00"),
        email: "google@gmail.com",
        venue: "Seattle",
        createdDate: new Date(),
        tickets: 5000,
        coverImg: "",
        type: "",
        organizers: ["google", "xyz", "abc"],
        resgistrations: [
            {
                id: "1",
                name: "Saurav Ganguly",
                email: "munu@gmail.com",
                idCard: "",
                type: "self",
                tickets: 1
            },
            {
                id: "2",
                name: "Boney Ganguly",
                email: "boney@gmail.com",
                idCard: "",
                type: "self",
                tickets: 2
            }
        ]
    },
    {
        id: "3",
        name: "Flutter Meetup 2020",
        desc: "The flutter meetup of 2020 by google",
        on: new Date("2020-06-14T17:00:00"),
        email: "surgang81993@gmail.com",
        venue: "Banglore",
        createdDate: new Date(),
        tickets: 500,
        coverImg: "",
        type: "",
        organizers: ["google"],
        resgistrations: [
            {
                id: "1",
                name: "Saurav Ganguly",
                email: "munu@gmail.com",
                idCard: "",
                type: "self",
                tickets: 1
            },
            {
                id: "2",
                name: "Boney Ganguly",
                email: "boney@gmail.com",
                idCard: "",
                type: "self",
                tickets: 2
            }
        ]
    }
]

export default events;