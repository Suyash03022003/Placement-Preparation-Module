export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 210,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 210,
    },

    {
        field: "date",
        headerName: "Date",
        width: 160,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: "Shreya Raut",
        img: "https://e7.pngegg.com/pngimages/885/863/png-clipart-computer-icons-icon-design-user-female-woman-hat-people.png",
        status: "active",
        email: "shreyar@gmail.com",
        date: "12 - 12 - 23",
    },
    {
        id: 2,
        username: "Suyash Patalbansi",
        img: "https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head-thumbnail.png",
        email: "suyashp@gmail.com",
        status: "active",
        date: "23 - 10 - 23",
    },
    {
        id: 3,
        username: "Devansh Kaushik",
        img: "https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head-thumbnail.png",
        email: "devanshk@gmail.com",
        status: "inactive",
        date: "03 - 10  - 23",
    },
    {
        id: 4,
        username: "Susmita Kujur",
        img: "https://e7.pngegg.com/pngimages/885/863/png-clipart-computer-icons-icon-design-user-female-woman-hat-people.png",
        email: "susmitak@gmail.com",
        status: "active",
        date: "01 - 10 - 23",
    },
    {
        id: 5,
        username: "Arpit Sharma ",
        img: "https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head-thumbnail.png",
        email: "arpits@gmail.com",
        status: "inactive",
        date: "26 - 09 - 23",
    },
    {
        id: 6,
        username: "Shreya Chin",
        img: "https://e7.pngegg.com/pngimages/885/863/png-clipart-computer-icons-icon-design-user-female-woman-hat-people.png",
        email: "shreyac@gmail.com",
        status: "active",
        date: "11 - 11 - 23",
    },
    {
        id: 7,
        username: "Aastha Naik",
        img: "https://e7.pngegg.com/pngimages/885/863/png-clipart-computer-icons-icon-design-user-female-woman-hat-people.png",
        email: "aasthan@gmail.com",
        status: "active",
        date: "9 - 11 - 23",
    },
    {
        id: 8,
        username: "Akanksha Mandhare ",
        img: "https://e7.pngegg.com/pngimages/885/863/png-clipart-computer-icons-icon-design-user-female-woman-hat-people.png",
        email: "akansham@gmail.com",
        status: "active",
        date: "15 - 10 - 23",
    },
    {
        id: 9,
        username: "Ashwini Ukhalkar ",
        img: "https://e7.pngegg.com/pngimages/885/863/png-clipart-computer-icons-icon-design-user-female-woman-hat-people.png",
        email: "ashu@gmail.com",
        status: "inactive",
        date: "30 - 09 - 23",
    },

    {
        id: 10,
        username: "Amit Jibhkate ",
        img: "https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head-thumbnail.png",
        email: "amitj@gmail.com",
        status: "active",
        date: "12 - 09 - 23",
    },
    {
        id: 11,
        username: "Ankit Nagdeve  ",
        img: "https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head-thumbnail.png",
        email: "ankitn@gmail.com",
        status: "active",
        date: "05 - 10 - 23",
    },
    {
        id: 12,
        username: "Bhavesh Anandpara  ",
        img: "https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head-thumbnail.png",
        email: "bhavasha@gmail.com",
        status: "inactive",
        date: "10 - 09 - 23",
    },
    {
        id: 13,
        username: "Chanchal Nitin Hiwanj  ",
        img: "https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head-thumbnail.png",
        email: "chanchal@gmail.com",
        status: "inactive",
        date: "16 - 09 - 23",
    },
];