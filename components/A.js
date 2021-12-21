import Link from "next/link";
import s from '../styles/A.module.css'
export default function ({text, href}) {
    return (
        <Link href={href}>
            <a className={s.text}>{text}</a>
        </Link>
    )
}

