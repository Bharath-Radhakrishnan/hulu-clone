function HeaderItem({title,Icon}) {
    return (
        <div>
            <Icon className="h-8" />
            <p className="h-12">{title}</p>
        </div>
    )
}

export default HeaderItem
