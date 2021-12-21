import {useRouter} from "next/router";
import s from '../../styles/User.module.scss'
import MainContainer from "../../components/MainContainer";
export default function ({user}) {
    const {query} = useRouter()
    return(
        <MainContainer keywords={user.name}>
            <div className={s.user}>
                <h1>Пользователь c id {query.id}</h1>
                Имя пользователя {user.name}
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json()
    return {
        props: {user}
    }
}



