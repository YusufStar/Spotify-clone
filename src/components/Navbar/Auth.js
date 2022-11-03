import { Menu } from "@headlessui/react"
import { Icon } from "Icons"

function auth() {
    const user = {
        name: 'Yusuf Yıldız',
        Avatar: "https://pps.whatsapp.net/v/t61.24694-24/236361426_565537061506106_5594200111650621032_n.jpg?ccb=11-4&oh=01_AdTIPdSzSKmHXG_1xyIEHw0b6rvj1VnJOQSJjFwkXE7V_Q&oe=636C1C32"
    }

    return (
    <Menu as="nav" className={"relative"}>
        {({ open }) => (
            <>
            <Menu.Button className={`flex items-center h-8 pr-2 rounded-3xl ${open ? "bg-active":"bg-black"} hover:bg-active`}>
              <img src={user.Avatar} className="h-8 w-8 rounded-full p-0.5 mr-2"/>
              <span className="text-sm font-semibold mr-2">{user.name}</span>
              <span className={`${open === true && 'rotate-180'} transition-all duration-300`}>
                <Icon size={16} name="downDir"/>
              </span>
            </Menu.Button>
            <Menu.Items className={"absolute p-1 top-full right-0 z-50 w-48 bg-active rounded translate-y-2"}>
                <Menu.Item>
                    {({ active }) => (
                        <a 
                            className={`h-10 flex items-center justify-between text-sm rounded px-2 ${active && "bg-white bg-opacity-10"}`}
                            href="#"
                        >
                            Account
                            <Icon size={16} name="external"/>
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a 
                            className={`h-10 flex items-center text-sm rounded px-2 ${active && "bg-white bg-opacity-10"}`}
                            href="#"
                        >
                            Profile
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a 
                            className={`h-10 flex items-center text-sm rounded px-2 ${active && "bg-white bg-opacity-10"}`}
                            href="#"
                        >
                            Log Out
                        </a>
                    )}
                </Menu.Item>
            </Menu.Items>
            </>
        )}
    </Menu>
    )
}

export default auth