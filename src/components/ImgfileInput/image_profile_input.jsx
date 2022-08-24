import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

const Input = styled.input`
    display:none;
`;

function image_file_input({ ImageUploader, name, onFileChange }) {
    const inputRef = useRef();
    const onBtnClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };
    const onChange = async event => {
        console.log(event.target.files[0]);
        const uploaded = await ImageUploader.upload(event.target.files[0]);
        console.log(uploaded);
        onFileChange({
            name : uploaded.original_filename,
            url: uploaded.url,
        })
    };
   return <div>
       <Input
            ref={inputRef}
            type="file" 
            accept="image/*" 
            name="file"
            onChange={onChange}
            >
        </Input>
        <div className="my-blog-user-profile-img" onClick={onBtnClick}>
            <strong>{name || ''}</strong>                                    
            <span className="camera-cta"><h1 className="ic-camera" aria-label="upload_profile_img"></h1></span>
        </div>
    </div>
}

export default image_file_input;