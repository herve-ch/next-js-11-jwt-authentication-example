import NextLink from 'next/link';

export { Link };

const Link = ({ href, children, ...props}) =>{
//function Link({ href, children, ...props }) {

    return (
        <NextLink href={href}>
            <a {...props}>
                {children}
            </a>
        </NextLink>
    );
}
