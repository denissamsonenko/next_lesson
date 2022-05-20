import Link from "next/link";
import s from '../styles/error.module.css'

export default function Error404() {
    return (
        <>
            <h1 className={s.error}>
                Error 404
            </h1>
            <p>
                <Link href={'/'}>Main page</Link>
            </p>

        </>
    )
}
