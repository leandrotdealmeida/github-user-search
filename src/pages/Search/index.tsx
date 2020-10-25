import React, { useState } from 'react';
import Button from 'core/components/Button';
import { makeRequest } from 'core/utils/request';
import InfoLoader from './components/Loaders/InfoLoader';
import './styles.scss';
import { User } from 'core/components/types/User';
import ImageLoader from './components/Loaders/ImageLoader';

type FormState = {
    user: string;
}

const Search = () => {
    const [formData, setFormData] = useState<FormState>({
        user: ''
    });

    const [userResponse, setUserResponse] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);
    const [isView, setIsView] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        event.preventDefault();
        const payload = {
            ...formData
        }

        console.log(payload);
        makeRequest({ url: `/users/${payload.user}` })
            .then((response) => {
                setUserResponse(response.data);
                console.log(response.data);
                setIsView(true);

            }
            )
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    }

    return (
        <div>
            <div className="search-area">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-title-search">
                        Encontre um perfil Github
            </h1>
                    <input
                        value={formData.user}
                        className="search-box"
                        name="user"
                        type="text"
                        onChange={handleOnChange}
                        placeholder="Usuário Github"
                    />

                    <div className="search-area-button">
                        <Button text="Encontrar" />
                    </div>
                </form>
            </div>

            <div
                className={`result-area ${isView ? 'active' : ''}`}>
                {isLoading ? (<ImageLoader />) : (
                    <>
                    </>
                )}
                {isView ? (<div className="image-container">
                    <img src={userResponse?.avatar_url} alt="" className="avatar-image" />
                    <div className="perfil-button">
                        <a href={userResponse?.html_url}>
                            <Button text="Ver perfil" />
                        </a>

                    </div>
                </div>) : (
                        <>
                        </>
                    )}

                {isLoading ? (<InfoLoader />) : (
                    <>
                    </>
                )}

                {isView ? (
                    <div className="user-details-container ">
                        <div className="repo-container">
                            <div className="git-repo">
                                <text className="repo-text">Repositórios públicos:{userResponse?.public_repos} </text>
                            </div>

                            <div className="git-seguidores">
                                <text className="repo-text">Seguidores:{userResponse?.followers} </text>
                            </div>

                            <div className="git-seguindo">
                                <text className="repo-text">Seguindo:{userResponse?.following}</text>
                            </div>

                        </div>
                        <text className="info">Informações</text>

                        <div className="field-empresa">
                            <text className="text-empresa">Empresa:{userResponse?.company} </text>
                        </div>

                        <div className="field-empresa">
                            <text className="text-empresa">Website/Blog:{userResponse?.blog} </text>
                        </div>

                        <div className="field-empresa">
                            <text className="text-empresa">Localidade:{userResponse?.location} </text>
                        </div>

                        <div className="field-empresa">
                            <text className="text-empresa">Membro desde:{userResponse?.created_at} </text>
                        </div>

                    </div>

                ) : (
                        <>
                        </>
                    )}

            </div>

        </div>


    );

}

export default Search;