import type { NextPage } from 'next'
import { useRouter } from 'next/router';


const DynamicPage: NextPage = () =>{

    const router = useRouter();
    const { name } = router.query;

    return (
        <h1>
           { name }
        </h1>
    )
}

export default DynamicPage;