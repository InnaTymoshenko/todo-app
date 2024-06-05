import React from 'react'

interface IHeader extends React.HTMLAttributes<HTMLDivElement> {
	as?: React.ElementType
}

const Header = ({ className, as: Comp = 'div', ...props }: IHeader) => {
	return <div className={className} {...props} />
}

export default Header
