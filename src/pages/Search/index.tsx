import Button from 'core/components/Button';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import './styles.scss';

type UserResponse = {
    empresa: string;
    site: string;
    localidade: string;
    data: string;
    repositorios: number;
    seguidores: number;
    seguindo: number;
}

type FormState = {
    user: string;
}

const Search = () => {
    const [formData, setFormData] = useState<FormState>({
        user: ''
    });

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
        makeRequest({ url: `/users/${payload.user}`})
        .then((response) => console.log(response.data));
        
    }

    return (
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
    );

}

export default Search;