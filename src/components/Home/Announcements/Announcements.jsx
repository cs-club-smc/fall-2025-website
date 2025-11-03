import Announcement from "../Announcements/Announcement.jsx";

function Announcements() {
    const announcementsData = [
        {author: "Evan Ly", date: "December 18th, 2024 8:44 P.M", title: 'Just some test title', message: "Hi I’m just a text box here, you can add any text long or short here. Text here are just announcements for the SMC CS Club."}, 
        {author: "Evan Ly", date: "December 18th, 2024 8:44 P.M", title: 'Just some test title', message: "Hi I’m just a text box here, you can add any text long or short here. Text here are just announcements for the SMC CS Club."}, 
        {author: "Evan Ly", date: "December 18th, 2024 8:44 P.M", title: 'Just some test title', message: "Hi I’m just a text box here, you can add any text long or short here. Text here are just announcements for the SMC CS Club."}
    ];

    return(
        <>
            <h1 className="text-8xl">ANNOUNCMENTS</h1>
            {announcementsData.map((value, index) => {
                return(
                    <div className="flex justify-center items-center">
                        <Announcement key={index} index={index} {...value} />
                    </div>
                ); 
            })}
        </>
    )
}

export default Announcements;