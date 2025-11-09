// ProfileMenu.jsx

// Step 1: Define your menu groups outside the component
const profileMenuGroups = [
    {
        title: "Main",
        items: [
            { label: "Drive", img: "menu/drive.png" },
            { label: "My Account", img: "menu/myaccount.png" },
            { label: "Nominee", img: "menu/nomine.png" },
            { label: "Settings", img: "menu/settings.png" },
        ],
    },
    {
        title: "Activity",
        items: [
            { label: "Scan QR", img: "menu/scanqr.png" },
            { label: "My Activity", img: "menu/myactivity.png" },
        ],
    },
    {
        title: "Info",
        items: [
            { label: "Help", img: "menu/help.png" },
            { label: "About", img: "menu/about.png" },
        ],
    },
    {
        title: "Account",
        items: [
            { label: "Switch Account", img: "menu/switchaccount.png" },
            { label: "Logout", img: "menu/logout.png" },
        ],
    },
];

export default function ProfileMenu() {
    return (
        <div className="p-5 text-black">
            {/* Profile Header */}
            <div className=" rounded-xl gap-2  p-4  flex items-center border-violet-300 border-2 ">
                <img src='menu/profile-placeholder.png' alt="profile" className="h-18 w-16 rounded-full" />

                <div>
                    <div className="font-semibold text-lg">Anandhan</div>
                    <div className="text-xs">Verified ✔</div>
                </div>
            </div>

            {/* Menu List */}
            <div >
                {profileMenuGroups.map((group, i) => (
                    <div key={i} className="border-violet-300 border-2 mt-4 rounded-2xl">
                        {group.items.map((item, index) => (
                            <div
                                key={item.label}
                                className={`flex items-center mx-5 py-5 border-b-gray-300 ${index !== group.items.length - 1 ? 'border-b-2' : ''
                                    }`}
                            >
                                <img src={item.img} alt={item.label} className="w-10 h-10" />
                                <span className={`${item.label === 'Logout' ? 'text-red-600' : ''}`}>{item.label}</span>
                            </div>
                        ))}

                    </div>
                ))}
            </div>
        </div>
    );
}
