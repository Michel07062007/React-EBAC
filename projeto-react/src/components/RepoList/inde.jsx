import { useEffect, useState } from "react"

const ReposList = () => {
    const {repos ,setRepos} = useState([]);

    useEffect(()=>(
        fetch('https://api.github.com/users/Michel07062007/repos')
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    ),[]);

    return (
        <ul>
            {/* {repos.map(repositorio => */}
            {repos.map(({id, name, language, html_url}) => (
                <li key={id}>
                    <b>Nome:</b> {name}
                    <b>linguagem:</b> {language}
                    <a target="_blank" href={html_url}>Visitar no GitHub</a>
                </li>
            ))}
        </ul>
    )
}

export default ReposList