export type MenuType = {
    url: string,
    name: string
}

export interface NavbarProps {
    img: string,
    header: React.ReactNode,
    menu?: Array<MenuType>
}