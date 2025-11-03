

function Announcement({index, author, date, title, message}) {
    const backgroundColor = [
        {foreground: '#0088FE', background: '#4273AA'},
        {foreground: '#3DDC84', background: '#014B51'},
        {foreground: '#F4F4F4', background: '#B3B3B3'},
    ];

    const color = backgroundColor[index % 3];

    return(
        <div className="w-1/2 mx-auto">
            <p className="font-['Roboto_Mono'] font-light">{date}</p>
            <h6 className={`relative ${index % 3 == 1 ? 'text-right right-10' : 'text-left left-10'}`}>{author}</h6>
            <div style={{ backgroundColor: color.foreground, padding: 20}} className="rounded-4xl">
                <h2 className="text-black text-3xl text-left">{title}</h2>
                <p className="text-black font-['Roboto_Mono'] font-light text-left" style={{color: "black"}}>{message}</p>
            </div>
        </div>
    )
}

export default Announcement;