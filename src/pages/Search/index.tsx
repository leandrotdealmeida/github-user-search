import Button from 'core/components/Button';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import './styles.scss';

type User = {
    empresa: string;
    site: string;
    localidade: string;
    data: string;
    repositorios: number;
    seguidores: number;
    seguindo: number;
    imgUrl: string;
}

type FormState = {
    user: string;
}

const Search = () => {
    const [formData, setFormData] = useState<FormState>({
        user: ''
    });

    const [userResponse, setUserResponse] = useState<User>();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData
        }

        console.log(payload);
        makeRequest({ url: `/users/${payload.user}` })
            .then((response) => console.log(response.data))
            .catch(error => console.log(error));

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

            <div className="result-area">
                <div className="image-container">
                {/* <img src={product.imgUrl} alt={product.name}/> */}
                </div>

                <div className="user-details-container ">
                    <div className="repo-container">
                        <div className="git-repo">
                            <text className="repo-text">Repositórios públicos: </text>
                        </div>

                        <div className="git-seguidores">
                            <text className="repo-text">Seguidores: </text>
                        </div>

                        <div className="git-seguindo">
                            <text className="repo-text">Seguindo: </text>
                        </div>

                    </div>
                    <text className="info">Informações</text>

                    <div className="field-empresa">
                        <text className="text-empresa">Empresa: </text>
                    </div>

                    <div className="field-empresa">
                        <text className="text-empresa">Website/Blog: </text>
                    </div>

                    <div className="field-empresa">
                        <text className="text-empresa">Localidade: </text>
                    </div>

                    <div className="field-empresa">
                        <text className="text-empresa">Membro desde: </text>
                    </div>

                </div>

            </div>

        </div>


    );

}

export default Search;