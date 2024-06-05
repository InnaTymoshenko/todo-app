import React from 'react'

interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
	as?: React.ElementType
}

const Container = ({ className, as: Comp = 'div', ...props }: IContainer) => {
	return <div className={className} {...props} />
}

export default Container
